import { Auth } from 'aws-amplify'
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'

import {
    GetUserQueryVariables,
    GetUserQuery,
} from 'API'

import { getUser } from 'graphql/queries'

import { User } from '../model'

async function fetchUser(id: string) {
    const input: GetUserQueryVariables = {
        id,
    }
    console.log('Fetch with ID', input)
    const response = await API.graphql(graphqlOperation(getUser, input))

    console.log('Response', response)

    return response
}

interface IncognitoUser {
    id: string
    username: string
    attributes: {
        email: string
    }
}

export async function getCognitoUser() {
    try {
        const user = (await Auth.currentUserInfo()) as IncognitoUser

        return user
    } catch (e) {
        console.error('getCognitoUser: ', e)

        return null
    } 
}

export async function getCurrentUser() {
    let incognitoUser = await getCognitoUser()

    console.log('incognitoUser', incognitoUser)
    if (!incognitoUser) {
        console.error('No incognito user')

        return
    }

    let user: User

    try {
        const response: GraphQLResult<GetUserQuery> = await fetchUser(incognitoUser.id)

        user = response.data.getUser
    } catch (e) {
        console.error('getUser: ', e)

        return
    }

    console.log('user', user)

    return user
}