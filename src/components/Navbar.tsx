import { HStack, Image } from "@chakra-ui/react";
import Logo from "./../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searching: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    // <HStack justifyContent={"space-between"} padding="10px">
    <HStack padding="10px">
      <Image src={Logo} boxSize={50} padding={2} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
