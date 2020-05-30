import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'

import { listLikes } from 'graphql/queries'

import { Like } from '../model'
import { ListLikesQuery } from 'API'

export default async function getLikes(): Promise<Like[]> {
    // TODO - just fetch the current user Likes
    const response: GraphQLResult<ListLikesQuery> = await API.graphql(graphqlOperation(listLikes))
    console.log('response', response)

    return response.data.listLikes.items
}
