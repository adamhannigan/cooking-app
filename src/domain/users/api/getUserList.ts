import API, { graphqlOperation } from '@aws-amplify/api'

import { listUsers } from 'graphql/queries'
import { User } from '../model'

export default async function getUserList(): Promise<User[]> {
    const response = await API.graphql(graphqlOperation(listUsers))

    return response
}
