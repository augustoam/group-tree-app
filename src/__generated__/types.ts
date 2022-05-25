import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript Date as string. Type represents date and time as the ISO Date string. */
  DateTimeScalar: any;
};

export type Group = {
  __typename?: 'Group';
  children?: Maybe<Array<Maybe<GroupBase>>>;
  countChildren: Scalars['Int'];
  countChildrenDeep: Scalars['Int'];
  createdAt: Scalars['DateTimeScalar'];
  id: Scalars['ID'];
  name: Scalars['String'];
  parents?: Maybe<Array<Maybe<GroupBase>>>;
  path: Scalars['String'];
  updatedAt: Scalars['DateTimeScalar'];
};


export type GroupParentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export type GroupBase = {
  __typename?: 'GroupBase';
  countChildren: Scalars['Int'];
  countChildrenDeep: Scalars['Int'];
  createdAt: Scalars['DateTimeScalar'];
  id: Scalars['ID'];
  name: Scalars['String'];
  path: Scalars['String'];
  updatedAt: Scalars['DateTimeScalar'];
};

export type GroupPaginatedResponse = {
  __typename?: 'GroupPaginatedResponse';
  page?: Maybe<PageGroupResponse>;
  status?: Maybe<ResponseStatus>;
  total?: Maybe<Scalars['Int']>;
};

export type GroupResponse = {
  __typename?: 'GroupResponse';
  item?: Maybe<Group>;
  status?: Maybe<ResponseStatus>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGroup?: Maybe<GroupResponse>;
  deleteGroup?: Maybe<VoidResponse>;
  editGroup?: Maybe<GroupResponse>;
};


export type MutationCreateGroupArgs = {
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteGroupArgs = {
  id: Scalars['String'];
};


export type MutationEditGroupArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PageGroupResponse = {
  __typename?: 'PageGroupResponse';
  index?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Group>>>;
  size?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  group?: Maybe<GroupResponse>;
  groups?: Maybe<GroupPaginatedResponse>;
};


export type QueryGroupArgs = {
  id: Scalars['String'];
};


export type QueryGroupsArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

/** Response statuses */
export enum ResponseStatus {
  Error = 'error',
  Ok = 'ok'
}

export type VoidResponse = {
  __typename?: 'VoidResponse';
  status?: Maybe<ResponseStatus>;
};

export type FullGroupFragment = { __typename?: 'Group', id: string, name: string, path: string, countChildren: number, createdAt: any, updatedAt: any, children?: Array<{ __typename?: 'GroupBase', id: string, name: string, path: string, countChildren: number, createdAt: any } | null> | null, parents?: Array<{ __typename?: 'GroupBase', id: string, name: string, createdAt: any } | null> | null };

export type GroupsResponseFragment = { __typename?: 'GroupPaginatedResponse', status?: ResponseStatus | null, total?: number | null, page?: { __typename?: 'PageGroupResponse', items?: Array<{ __typename?: 'Group', id: string, name: string, path: string, countChildren: number, createdAt: any, updatedAt: any, children?: Array<{ __typename?: 'GroupBase', id: string, name: string, path: string, countChildren: number, createdAt: any } | null> | null, parents?: Array<{ __typename?: 'GroupBase', id: string, name: string, createdAt: any } | null> | null } | null> | null } | null };

export type CreateGroupMutationVariables = Exact<{
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', createGroup?: { __typename?: 'GroupResponse', status?: ResponseStatus | null, item?: { __typename?: 'Group', id: string, name: string, path: string, countChildren: number, createdAt: any, updatedAt: any, children?: Array<{ __typename?: 'GroupBase', id: string, name: string, path: string, countChildren: number, createdAt: any } | null> | null, parents?: Array<{ __typename?: 'GroupBase', id: string, name: string, createdAt: any } | null> | null } | null } | null };

export type EditGroupMutationVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
}>;


export type EditGroupMutation = { __typename?: 'Mutation', editGroup?: { __typename?: 'GroupResponse', status?: ResponseStatus | null, item?: { __typename?: 'Group', id: string, name: string, path: string, countChildren: number, createdAt: any, updatedAt: any, children?: Array<{ __typename?: 'GroupBase', id: string, name: string, path: string, countChildren: number, createdAt: any } | null> | null, parents?: Array<{ __typename?: 'GroupBase', id: string, name: string, createdAt: any } | null> | null } | null } | null };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', deleteGroup?: { __typename?: 'VoidResponse', status?: ResponseStatus | null } | null };

export type GetGroupQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetGroupQuery = { __typename?: 'Query', group?: { __typename?: 'GroupResponse', status?: ResponseStatus | null, item?: { __typename?: 'Group', id: string, name: string, path: string, countChildren: number, createdAt: any, updatedAt: any, children?: Array<{ __typename?: 'GroupBase', id: string, name: string, path: string, countChildren: number, createdAt: any } | null> | null, parents?: Array<{ __typename?: 'GroupBase', id: string, name: string, createdAt: any } | null> | null } | null } | null };

export type GetGroupsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  flat?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type GetGroupsQuery = { __typename?: 'Query', groups?: { __typename?: 'GroupPaginatedResponse', status?: ResponseStatus | null, total?: number | null, page?: { __typename?: 'PageGroupResponse', items?: Array<{ __typename?: 'Group', id: string, name: string, path: string, countChildren: number, createdAt: any, updatedAt: any, children?: Array<{ __typename?: 'GroupBase', id: string, name: string, path: string, countChildren: number, createdAt: any } | null> | null, parents?: Array<{ __typename?: 'GroupBase', id: string, name: string, createdAt: any } | null> | null } | null> | null } | null } | null };

export const FullGroupFragmentDoc = gql`
    fragment FullGroup on Group {
  id
  name
  path
  children {
    id
    name
    path
    countChildren
    createdAt
  }
  parents(first: 1) {
    id
    name
    createdAt
  }
  countChildren
  createdAt
  updatedAt
}
    `;
export const GroupsResponseFragmentDoc = gql`
    fragment GroupsResponse on GroupPaginatedResponse {
  status
  total
  page {
    items {
      ...FullGroup
    }
  }
}
    ${FullGroupFragmentDoc}`;
export const CreateGroupDocument = gql`
    mutation CreateGroup($name: String!, $parentId: String) {
  createGroup(name: $name, parentId: $parentId) {
    status
    item {
      ...FullGroup
    }
  }
}
    ${FullGroupFragmentDoc}`;
export type CreateGroupMutationFn = Apollo.MutationFunction<CreateGroupMutation, CreateGroupMutationVariables>;

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      parentId: // value for 'parentId'
 *   },
 * });
 */
export function useCreateGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupMutation, CreateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument, options);
      }
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = Apollo.MutationResult<CreateGroupMutation>;
export type CreateGroupMutationOptions = Apollo.BaseMutationOptions<CreateGroupMutation, CreateGroupMutationVariables>;
export const EditGroupDocument = gql`
    mutation EditGroup($id: ID!, $name: String!) {
  editGroup(id: $id, name: $name) {
    status
    item {
      ...FullGroup
    }
  }
}
    ${FullGroupFragmentDoc}`;
export type EditGroupMutationFn = Apollo.MutationFunction<EditGroupMutation, EditGroupMutationVariables>;

/**
 * __useEditGroupMutation__
 *
 * To run a mutation, you first call `useEditGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editGroupMutation, { data, loading, error }] = useEditGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useEditGroupMutation(baseOptions?: Apollo.MutationHookOptions<EditGroupMutation, EditGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditGroupMutation, EditGroupMutationVariables>(EditGroupDocument, options);
      }
export type EditGroupMutationHookResult = ReturnType<typeof useEditGroupMutation>;
export type EditGroupMutationResult = Apollo.MutationResult<EditGroupMutation>;
export type EditGroupMutationOptions = Apollo.BaseMutationOptions<EditGroupMutation, EditGroupMutationVariables>;
export const DeleteGroupDocument = gql`
    mutation DeleteGroup($id: String!) {
  deleteGroup(id: $id) {
    status
  }
}
    `;
export type DeleteGroupMutationFn = Apollo.MutationFunction<DeleteGroupMutation, DeleteGroupMutationVariables>;

/**
 * __useDeleteGroupMutation__
 *
 * To run a mutation, you first call `useDeleteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGroupMutation, { data, loading, error }] = useDeleteGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGroupMutation, DeleteGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGroupMutation, DeleteGroupMutationVariables>(DeleteGroupDocument, options);
      }
export type DeleteGroupMutationHookResult = ReturnType<typeof useDeleteGroupMutation>;
export type DeleteGroupMutationResult = Apollo.MutationResult<DeleteGroupMutation>;
export type DeleteGroupMutationOptions = Apollo.BaseMutationOptions<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const GetGroupDocument = gql`
    query GetGroup($id: String!) {
  group(id: $id) {
    status
    item {
      ...FullGroup
    }
  }
}
    ${FullGroupFragmentDoc}`;

/**
 * __useGetGroupQuery__
 *
 * To run a query within a React component, call `useGetGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGroupQuery(baseOptions: Apollo.QueryHookOptions<GetGroupQuery, GetGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGroupQuery, GetGroupQueryVariables>(GetGroupDocument, options);
      }
export function useGetGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupQuery, GetGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGroupQuery, GetGroupQueryVariables>(GetGroupDocument, options);
        }
export type GetGroupQueryHookResult = ReturnType<typeof useGetGroupQuery>;
export type GetGroupLazyQueryHookResult = ReturnType<typeof useGetGroupLazyQuery>;
export type GetGroupQueryResult = Apollo.QueryResult<GetGroupQuery, GetGroupQueryVariables>;
export const GetGroupsDocument = gql`
    query GetGroups($search: String, $flat: Boolean, $page: Int, $pageSize: Int) {
  groups(search: $search, flat: $flat, page: $page, pageSize: $pageSize) {
    status
    total
    page {
      items {
        ...FullGroup
      }
    }
  }
}
    ${FullGroupFragmentDoc}`;

/**
 * __useGetGroupsQuery__
 *
 * To run a query within a React component, call `useGetGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      flat: // value for 'flat'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useGetGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GetGroupsQuery, GetGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGroupsQuery, GetGroupsQueryVariables>(GetGroupsDocument, options);
      }
export function useGetGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupsQuery, GetGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGroupsQuery, GetGroupsQueryVariables>(GetGroupsDocument, options);
        }
export type GetGroupsQueryHookResult = ReturnType<typeof useGetGroupsQuery>;
export type GetGroupsLazyQueryHookResult = ReturnType<typeof useGetGroupsLazyQuery>;
export type GetGroupsQueryResult = Apollo.QueryResult<GetGroupsQuery, GetGroupsQueryVariables>;