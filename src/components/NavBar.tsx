import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwtich from "./ColorModeSwtich";
import SearchInput from "./SearchInput";
interface Props {
  onSearchGame: (searchText: string) => void;
}
const NavBar = ({ onSearchGame }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearchGame={onSearchGame} />
      <ColorModeSwtich />
    </HStack>
  );
};

export default NavBar;
