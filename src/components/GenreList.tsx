import useGeneres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGeneres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
