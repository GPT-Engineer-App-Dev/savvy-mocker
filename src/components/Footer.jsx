import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" width="full" p={4} borderTop="1px" borderColor="gray.200">
    <Text textAlign="center">&copy; {new Date().getFullYear()} Todos, Inc.</Text>
  </Box>
);

export default Footer;
