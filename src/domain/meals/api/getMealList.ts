import API, { graphqlOperation } from '@aws-amplify/api'

import { listMeals } from 'graphql/queries'
import { Meal } from '../model'

export default async function getMealList(): Promise<Meal[]> {
    const response = await API.graphql(graphqlOperation(listMeals))

    return response
}
