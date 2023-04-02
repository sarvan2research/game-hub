import { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import appClient from "../service/app-client";
import { Platform } from "./useGames";

export interface Genres {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface FetchedGenreList {
  count: number;
  results: Genres[];
}

const useGeneres = () => {
  const [genres, SetGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    appClient
      .get<FetchedGenreList>("/genres", { signal: controller.signal })
      .then((res) => {
        SetGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGeneres;
