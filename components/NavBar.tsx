import React from "react";
import NextLink from "next/link";
import { Box, Flex, Link, Button } from "@chakra-ui/react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const me = "data";
  let body = null;
  if (!me) {
    body = (
      <>
        <NextLink href="/login">
          <Link>login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box mr={2}>{me}</Box>
        <Button variant="link">logout</Button>
      </Flex>
    );
  }
  return (
    <Flex>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
