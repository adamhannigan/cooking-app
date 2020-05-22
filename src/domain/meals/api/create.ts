import API, { graphqlOperation } from '@aws-amplify/api'

import { CreateMealInput } from 'API'

import { createMeal } from 'graphql/mutations'

export { CreateMealInput }

export default async function create(input: CreateMealInput){
    await API.graphql(graphqlOperation(createMeal, input))
}
