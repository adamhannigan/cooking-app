import API, { graphqlOperation } from '@aws-amplify/api'

import { CreateMenuItemInput } from 'API'

import { createMenuItem } from 'graphql/mutations'

interface Options {
    userId: string
    mealId: string
    order?: number
}

export default async function addToMenu({
    userId,
    mealId,
    order = 1,
}: Options){
    const input: CreateMenuItemInput = {
        order,
        menuItemCreatedById: userId,
        menuItemMealId: mealId,
    }

    await API.graphql(graphqlOperation(createMenuItem, input))
}
