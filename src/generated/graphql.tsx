import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  allIncomes: Array<Income>;
  findIncome?: Maybe<Income>;
  allExpenses: Array<Expense>;
  findExpense?: Maybe<Expense>;
};


export type QueryFindIncomeArgs = {
  id: Scalars['Float'];
};


export type QueryFindExpenseArgs = {
  id: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type Income = {
  __typename?: 'Income';
  id: Scalars['Float'];
  amount: Scalars['Float'];
  category: Scalars['String'];
  occurance: Scalars['String'];
  userId: Scalars['Float'];
};

export type Expense = {
  __typename?: 'Expense';
  id: Scalars['Float'];
  amount: Scalars['Float'];
  occurance: Scalars['String'];
  category: Scalars['String'];
  userId: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createIncome: Income;
  updateIncome?: Maybe<Income>;
  deleteIncome: Scalars['Boolean'];
  createExpense: Expense;
  updateExpense?: Maybe<Expense>;
  deleteExpense: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationCreateIncomeArgs = {
  options: IncomeOptions;
};


export type MutationUpdateIncomeArgs = {
  options: IncomeOptions;
  id: Scalars['Int'];
};


export type MutationDeleteIncomeArgs = {
  id: Scalars['Int'];
};


export type MutationCreateExpenseArgs = {
  options: ExpenseOptions;
};


export type MutationUpdateExpenseArgs = {
  options: ExpenseOptions;
  id: Scalars['Int'];
};


export type MutationDeleteExpenseArgs = {
  id: Scalars['Int'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type IncomeOptions = {
  amount: Scalars['Float'];
  category: Scalars['String'];
  occurance: Scalars['String'];
};

export type ExpenseOptions = {
  amount: Scalars['Float'];
  category: Scalars['String'];
  occurance: Scalars['String'];
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type CreateExpenseMutationVariables = Exact<{
  options: ExpenseOptions;
}>;


export type CreateExpenseMutation = (
  { __typename?: 'Mutation' }
  & { createExpense: (
    { __typename?: 'Expense' }
    & Pick<Expense, 'id' | 'amount' | 'category' | 'occurance'>
  ) }
);

export type CreateIncomeMutationVariables = Exact<{
  options: IncomeOptions;
}>;


export type CreateIncomeMutation = (
  { __typename?: 'Mutation' }
  & { createIncome: (
    { __typename?: 'Income' }
    & Pick<Income, 'id' | 'amount' | 'category' | 'occurance'>
  ) }
);

export type DeleteExpenseMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteExpenseMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteExpense'>
);

export type DeleteIncomeMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteIncomeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteIncome'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type UpdateExpenseMutationVariables = Exact<{
  id: Scalars['Int'];
  options: ExpenseOptions;
}>;


export type UpdateExpenseMutation = (
  { __typename?: 'Mutation' }
  & { updateExpense?: Maybe<(
    { __typename?: 'Expense' }
    & Pick<Expense, 'id' | 'amount' | 'category' | 'occurance'>
  )> }
);

export type UpdateIncomeMutationVariables = Exact<{
  id: Scalars['Int'];
  options: IncomeOptions;
}>;


export type UpdateIncomeMutation = (
  { __typename?: 'Mutation' }
  & { updateIncome?: Maybe<(
    { __typename?: 'Income' }
    & Pick<Income, 'id' | 'amount' | 'category' | 'occurance'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const CreateExpenseDocument = gql`
    mutation CreateExpense($options: ExpenseOptions!) {
  createExpense(options: $options) {
    id
    amount
    category
    occurance
  }
}
    `;
export type CreateExpenseMutationFn = Apollo.MutationFunction<CreateExpenseMutation, CreateExpenseMutationVariables>;

/**
 * __useCreateExpenseMutation__
 *
 * To run a mutation, you first call `useCreateExpenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExpenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExpenseMutation, { data, loading, error }] = useCreateExpenseMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateExpenseMutation(baseOptions?: Apollo.MutationHookOptions<CreateExpenseMutation, CreateExpenseMutationVariables>) {
        return Apollo.useMutation<CreateExpenseMutation, CreateExpenseMutationVariables>(CreateExpenseDocument, baseOptions);
      }
export type CreateExpenseMutationHookResult = ReturnType<typeof useCreateExpenseMutation>;
export type CreateExpenseMutationResult = Apollo.MutationResult<CreateExpenseMutation>;
export type CreateExpenseMutationOptions = Apollo.BaseMutationOptions<CreateExpenseMutation, CreateExpenseMutationVariables>;
export const CreateIncomeDocument = gql`
    mutation CreateIncome($options: IncomeOptions!) {
  createIncome(options: $options) {
    id
    amount
    category
    occurance
  }
}
    `;
export type CreateIncomeMutationFn = Apollo.MutationFunction<CreateIncomeMutation, CreateIncomeMutationVariables>;

/**
 * __useCreateIncomeMutation__
 *
 * To run a mutation, you first call `useCreateIncomeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIncomeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIncomeMutation, { data, loading, error }] = useCreateIncomeMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateIncomeMutation(baseOptions?: Apollo.MutationHookOptions<CreateIncomeMutation, CreateIncomeMutationVariables>) {
        return Apollo.useMutation<CreateIncomeMutation, CreateIncomeMutationVariables>(CreateIncomeDocument, baseOptions);
      }
export type CreateIncomeMutationHookResult = ReturnType<typeof useCreateIncomeMutation>;
export type CreateIncomeMutationResult = Apollo.MutationResult<CreateIncomeMutation>;
export type CreateIncomeMutationOptions = Apollo.BaseMutationOptions<CreateIncomeMutation, CreateIncomeMutationVariables>;
export const DeleteExpenseDocument = gql`
    mutation DeleteExpense($id: Int!) {
  deleteExpense(id: $id)
}
    `;
export type DeleteExpenseMutationFn = Apollo.MutationFunction<DeleteExpenseMutation, DeleteExpenseMutationVariables>;

/**
 * __useDeleteExpenseMutation__
 *
 * To run a mutation, you first call `useDeleteExpenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExpenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExpenseMutation, { data, loading, error }] = useDeleteExpenseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteExpenseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteExpenseMutation, DeleteExpenseMutationVariables>) {
        return Apollo.useMutation<DeleteExpenseMutation, DeleteExpenseMutationVariables>(DeleteExpenseDocument, baseOptions);
      }
export type DeleteExpenseMutationHookResult = ReturnType<typeof useDeleteExpenseMutation>;
export type DeleteExpenseMutationResult = Apollo.MutationResult<DeleteExpenseMutation>;
export type DeleteExpenseMutationOptions = Apollo.BaseMutationOptions<DeleteExpenseMutation, DeleteExpenseMutationVariables>;
export const DeleteIncomeDocument = gql`
    mutation DeleteIncome($id: Int!) {
  deleteIncome(id: $id)
}
    `;
export type DeleteIncomeMutationFn = Apollo.MutationFunction<DeleteIncomeMutation, DeleteIncomeMutationVariables>;

/**
 * __useDeleteIncomeMutation__
 *
 * To run a mutation, you first call `useDeleteIncomeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIncomeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIncomeMutation, { data, loading, error }] = useDeleteIncomeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteIncomeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteIncomeMutation, DeleteIncomeMutationVariables>) {
        return Apollo.useMutation<DeleteIncomeMutation, DeleteIncomeMutationVariables>(DeleteIncomeDocument, baseOptions);
      }
export type DeleteIncomeMutationHookResult = ReturnType<typeof useDeleteIncomeMutation>;
export type DeleteIncomeMutationResult = Apollo.MutationResult<DeleteIncomeMutation>;
export type DeleteIncomeMutationOptions = Apollo.BaseMutationOptions<DeleteIncomeMutation, DeleteIncomeMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const UpdateExpenseDocument = gql`
    mutation updateExpense($id: Int!, $options: ExpenseOptions!) {
  updateExpense(id: $id, options: $options) {
    id
    amount
    category
    occurance
  }
}
    `;
export type UpdateExpenseMutationFn = Apollo.MutationFunction<UpdateExpenseMutation, UpdateExpenseMutationVariables>;

/**
 * __useUpdateExpenseMutation__
 *
 * To run a mutation, you first call `useUpdateExpenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExpenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExpenseMutation, { data, loading, error }] = useUpdateExpenseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useUpdateExpenseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExpenseMutation, UpdateExpenseMutationVariables>) {
        return Apollo.useMutation<UpdateExpenseMutation, UpdateExpenseMutationVariables>(UpdateExpenseDocument, baseOptions);
      }
export type UpdateExpenseMutationHookResult = ReturnType<typeof useUpdateExpenseMutation>;
export type UpdateExpenseMutationResult = Apollo.MutationResult<UpdateExpenseMutation>;
export type UpdateExpenseMutationOptions = Apollo.BaseMutationOptions<UpdateExpenseMutation, UpdateExpenseMutationVariables>;
export const UpdateIncomeDocument = gql`
    mutation updateIncome($id: Int!, $options: IncomeOptions!) {
  updateIncome(id: $id, options: $options) {
    id
    amount
    category
    occurance
  }
}
    `;
export type UpdateIncomeMutationFn = Apollo.MutationFunction<UpdateIncomeMutation, UpdateIncomeMutationVariables>;

/**
 * __useUpdateIncomeMutation__
 *
 * To run a mutation, you first call `useUpdateIncomeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIncomeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIncomeMutation, { data, loading, error }] = useUpdateIncomeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useUpdateIncomeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIncomeMutation, UpdateIncomeMutationVariables>) {
        return Apollo.useMutation<UpdateIncomeMutation, UpdateIncomeMutationVariables>(UpdateIncomeDocument, baseOptions);
      }
export type UpdateIncomeMutationHookResult = ReturnType<typeof useUpdateIncomeMutation>;
export type UpdateIncomeMutationResult = Apollo.MutationResult<UpdateIncomeMutation>;
export type UpdateIncomeMutationOptions = Apollo.BaseMutationOptions<UpdateIncomeMutation, UpdateIncomeMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;