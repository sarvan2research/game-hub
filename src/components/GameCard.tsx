import { Game } from "../hooks/useGames";
import { Box, Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import { icons } from "react-icons";
import CriticsScore from "./CriticsScore";
import getCroppedImageUrl from "../service/image-url";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <Heading fontSize={"2xl"} key={game.id}>
            {game.name}
          </Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <CriticsScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
