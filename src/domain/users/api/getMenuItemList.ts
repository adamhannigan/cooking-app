import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'

import { listMenuItems } from 'graphql/queries'

import { ListMenuItemsQuery } from 'API'

export type MenuItem = Omit<Exclude<ListMenuItemsQuery['listMenuItems']['items'][0], null>, '__typename'>;

export default async function getMealList(userId: string): Promise<MenuItem[]> {
    // TODO - use userId
    const response: GraphQLResult<ListMenuItemsQuery> = await API.graphql(graphqlOperation(listMenuItems))

    return response.data.listMenuItems.items as MenuItem[]
}
