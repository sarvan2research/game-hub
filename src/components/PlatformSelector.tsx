import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlaform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const { data, error } = usePlaform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Paltforms
      </MenuButton>
      <MenuList>
        {data.map((data) => (
          <MenuItem key={data.id}>{data.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
