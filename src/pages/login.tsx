import React from "react";
import { useRouter } from "next/router";
import { Wrapper } from "../components/Wrapper";
import { Form, Formik } from "formik";
import { InputField } from "../components/InputField";
import { Box, Button, Heading } from "@chakra-ui/react";
interface loginProps {}
// apollo/gql mutations 
// submit form
// logo
export const login: React.FC<loginProps> = ({}) => {
  // const router = useRouter();
  return (
    <Wrapper variant="small">
      <Heading>Welcome Budgeteer!</Heading>
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          await console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="usernameOrEmail"
              placeholder="Username or Email"
              label="Username or Email"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              colorScheme="teal"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default login;
