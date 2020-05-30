import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'

import { getMeal } from 'graphql/queries'

import { GetMealQuery, GetMealQueryVariables } from 'API'

import { Meal } from '../model'

export default async function get(id: string): Promise<Meal> {
    const input: GetMealQueryVariables = {
        id,
    }

    const response: GraphQLResult<GetMealQuery> = await API.graphql(graphqlOperation(getMeal, input))

    return response.data.getMeal
}
