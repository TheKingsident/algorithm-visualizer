import { Grid, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Grid
      templateColumns="1fr"  // 1 column layout
      alignItems="center"     // Center items vertically
      justifyItems="center"   // Center items horizontally
      background="teal.500"   // Header background color
      height="100px"          // Set header height
      color="white"           // Text color
    >
      <Text fontSize="2xl" fontWeight="bold">
        Algorithm Visualizer
      </Text>
    </Grid>
  );
};

export default Header;