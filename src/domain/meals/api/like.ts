import API, { graphqlOperation } from '@aws-amplify/api'

import { CreateLikeInput } from 'API'

import { createLike } from 'graphql/mutations'

export default async function like(mealId: number){
    const input: CreateLikeInput = {
        likeMealId: mealId.toString(),
        // TODO - how do we get the current user ID?
        likeLikedById: '22',
    }

    await API.graphql(graphqlOperation(createLike, input))
}
