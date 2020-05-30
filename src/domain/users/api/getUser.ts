import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'

import { getUser } from 'graphql/queries'

import { GetUserQuery, GetUserQueryVariables } from 'API'

import { User } from '../model'

export default async function get(id: string): Promise<User> {
    const input: GetUserQueryVariables = {
        id,
    }

    const response: GraphQLResult<GetUserQuery> = await API.graphql(graphqlOperation(getUser, input))

    return response.data.getUser
}
