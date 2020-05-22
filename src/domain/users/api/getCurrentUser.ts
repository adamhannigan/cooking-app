import { Auth } from 'aws-amplify'
import API, { graphqlOperation } from '@aws-amplify/api'

import {
    GetUserQueryVariables,
    GetUserQuery,
    CreateUserInput,
    CreateUserMutation,
} from 'API'

import { getUser } from 'graphql/queries'
import { createUser } from 'graphql/mutations'

import { User } from '../model'

async function createNewUser(user: CreateUserInput) {
    const response: Promise<CreateUserMutation> = await API.graphql(graphqlOperation(createUser, user))

    return response
}

async function fetchUser(id: string) {
    const input: GetUserQueryVariables = {
        id,
    }
    const response = await API.graphql(graphqlOperation(getUser))

    return response
}

interface IncognitoUser {
    id: string
    username: string
    attributes: {
        email: string
    }
}

async function getCognitoUser() {
    const user = (await Auth.currentUserInfo()) as IncognitoUser

    // Not logged in
    if (!user) {
        return null
    }

    return user
}

export async function getCurrentUser() {
    let incognitoUser
    
    try {
        incognitoUser = await getCognitoUser()
    } catch (e) {
        console.error('incognitoUser: ', e)

        // try refresh?

        // Kick to the log in page
        return
    }

    let user: User

    try {
        const response: GetUserQuery = await API.graphql(graphqlOperation(getUser))

        user = response.getUser
    } catch (e) {
        console.error('getUser: ', e)
    }

    // User does not yet exist
    if (!user) {
        try {
            // If no user found
            const createResponse = await createNewUser({
                id: incognitoUser.id,
                username: incognitoUser.username,
                email: incognitoUser.attributes.email,
            })

            user = createResponse.createUser
        } catch(e) {
            console.error('createUser: ', e)
        }
    }

    return user
}