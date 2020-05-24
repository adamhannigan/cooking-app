import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'

import { listMeals } from 'graphql/queries'

import { ListMealsQuery } from 'API'

import { Meal } from '../model'

export default async function getMealList(): Promise<Meal[]> {
    const response: GraphQLResult<ListMealsQuery> = await API.graphql(graphqlOperation(listMeals))

    return response.data.listMeals.items as Meal[]
}
