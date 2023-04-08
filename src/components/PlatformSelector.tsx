import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlaform from "../hooks/usePlatform";

interface Props {
  onSelectedPlaftform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlaftform, selectedPlatform }: Props) => {
  const { data, error } = usePlaform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlaftform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
