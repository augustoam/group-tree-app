import { ApolloClient, ApolloLink, BaseMutationOptions, DocumentNode, OperationVariables } from '@apollo/client'
import { InMemoryCache } from '@apollo/client/cache'
import { createUploadLink } from "apollo-upload-client"
import { getArrayResponse, getDataResponse, getEntityResponse, getPagedResponse, isArrayResponse, isEntityResponse, isPagedResponse } from './ResponseMapper'
import result from '../__generated__/fragments'

interface CommonRequestOptions {
    authorizationRequired?: boolean,
    operationName?: string
}

interface GQLRequestOptions extends CommonRequestOptions {
    variables?: OperationVariables
    catchErrorManually?: boolean
    context?: string
}
interface QueryOptions extends GQLRequestOptions {
    rest?: boolean
    query: DocumentNode
}

export const defaultOptions: BaseMutationOptions = {
    fetchPolicy: 'no-cache'
}

const baseLink = createUploadLink({ uri: 'http://localhost:4000' })

export const baseClient = new ApolloClient({
    link: ApolloLink.from([baseLink]),
    cache: new InMemoryCache({
        possibleTypes: result.possibleTypes,
        resultCaching: false
    }),
    defaultOptions: {
        query: defaultOptions,
    },
})

const client = (rest: boolean = false) => {
    return baseClient
}

export const query = (options: QueryOptions): Promise<any> => {
    const rest = options.rest || false

    return client(rest)
        .query({
            query: options.query,
            variables: options.variables,
        })
        .then((response: any) => {
            switch (true) {
                case isPagedResponse(response):
                    return getPagedResponse(response)
                case isEntityResponse(response):
                    return getEntityResponse(response)
                case isArrayResponse(response):
                    return getArrayResponse(response)
                default: {
                    return getDataResponse(response)
                }
            }
        })
        .catch((error: any) => {
            throw error
        })
}
