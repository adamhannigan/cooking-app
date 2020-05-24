import API, { graphqlOperation } from '@aws-amplify/api'

import { CreateLikeInput } from 'API'

import { createLike } from 'graphql/mutations'

interface Options {
    userId: string
    mealId: string
}

export default async function like({
    userId,
    mealId,
}: Options){
    const input: CreateLikeInput = {
        likeMealId: mealId,
        likeLikedById: userId,
    }

    await API.graphql(graphqlOperation(createLike, input))
}
