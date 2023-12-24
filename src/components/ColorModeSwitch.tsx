import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      {/* <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button> */}

      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {/* <Text> */}
      <Text whiteSpace="nowrap">
        {colorMode === "light" ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  );
};
export default ColorModeSwitch;
