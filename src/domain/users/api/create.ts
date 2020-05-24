import { Auth } from 'aws-amplify'
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'

import {
    CreateUserInput,
    CreateUserMutation,
} from 'API'

import { createUser } from 'graphql/mutations'

import { getCognitoUser } from './getCurrentUser'

/**
 * Creates a user from the incognito credentials
 */
export async function createNewUser() {
    const incognitoUser = await getCognitoUser()
    console.log('incognitoUser to create with', incognitoUser)
    const input: CreateUserInput = {
        username: incognitoUser.username,
        id: incognitoUser.id,
        email: incognitoUser.attributes.email,
    }

    console.log('Create with', input)

    const response: GraphQLResult<CreateUserMutation> = await API.graphql(graphqlOperation(createUser, { input }))

    return response.data.createUser
}