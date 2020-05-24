import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'

import {
    CreateFollowerInput,
    CreateFollowerMutation,
} from 'API'

import { createLike } from 'graphql/mutations'

interface Options {
    followerId: string
    userId: string
}

export async function follow({
    followerId,
    userId,
}){
    const input: CreateFollowerInput = {
        followerUserId: followerId,
        followerFollowedById: userId,
    }

    const response: GraphQLResult<CreateFollowerMutation> = await API.graphql(graphqlOperation(createLike, { input }))

    return response.data.createFollower
}
