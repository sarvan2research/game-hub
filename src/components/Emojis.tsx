import { Image, ImageProps } from "@chakra-ui/react";
import bullseye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumpsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}
const Emojis = ({ rating }: Props) => {
  if (rating < 3) {
    return null;
  }
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumpsUp, alt: "Recomended", boxSize: "25px" },
    5: { src: bullseye, alt: "Exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emojis;
