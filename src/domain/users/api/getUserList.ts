import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'

import { listUsers } from 'graphql/queries'
import { User } from '../model'
import { ListUsersQuery } from 'API'

export default async function getUserList(): Promise<User[]> {
    const response: GraphQLResult<ListUsersQuery> = await API.graphql(graphqlOperation(listUsers))

    return response.data.listUsers.items
}
