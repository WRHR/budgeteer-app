import { useState } from 'react'
import { Box, Flex, Heading } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import NextLink from "next/link";

export default function Home() {
  const [user, setUser] = useState(null)
  // check for user
  // display user budget info (income/expenses)
  //add income
  //add expense
  //clickable charts (pie break down by category)
  // sidebar nav?
  // alerts? (over budget, spending increase from previous months, suggestions ->savings, invest)
  // overview

  return (
    <>
      <NavBar />
      {/* hero/info or user page */}
      <Box>
        <Heading>Manage your money</Heading>
        {/* pic */}
        {/* call to act */}
        {/* about graphics */}
        {/* about */}
        {/* benefits */}
        <Flex>
          <NextLink href="/income">Income</NextLink>
          <NextLink href="/expense">Expense</NextLink>
        </Flex>
      </Box>
    </>
  );
}
