import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { ReactNode } from "react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkelton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkelton;
