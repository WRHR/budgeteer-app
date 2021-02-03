import React from "react";
import { useRouter } from "next/router";
import { Wrapper } from "../components/Wrapper";
import { Form, Formik } from "formik";
import { InputField } from "../components/InputField";
import { Box, Button } from "@chakra-ui/react";

export const login: React.FC<{}> = ({}) => {
  const router = useRouter();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await console.log(values);
        }}
      >
        {({ isSubmitting }) => {
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
                type='password'
              />
            </Box>
            <Button
            mt={4}
            type='submit'
            isLoading={isSubmitting}
            variantColor='teal'
            >login</Button>
          </Form>;
        }}
      </Formik>
    </Wrapper>
  );
};
