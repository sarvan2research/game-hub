import { Game } from "../hooks/useGames";
import { Box, Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import { icons } from "react-icons";
import CriticsScore from "./CriticsScore";
import getCroppedImageUrl from "../service/image-url";
import GameCardContainer from "./GameCardContainer";
import Emojis from "./Emojis";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <CriticsScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"} key={game.id}>
            {game.name}
            <Emojis rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
