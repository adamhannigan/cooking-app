import API, { graphqlOperation } from '@aws-amplify/api'

import { listLikes } from 'graphql/queries'
import { Like } from '../model'

export default async function getLikes(): Promise<Like[]> {
    // TODO - just fetch the current user Likes
    const response = await API.graphql(graphqlOperation(listLikes))

    return response
}
