import { GetUserQuery } from 'API'
import { Auth as AwsAuth } from 'aws-amplify'

import register from './api/register'
import login from './api/login'
import { authEventHandler } from './events'

class Auth {
    public async register(user: {
        username: string,
        password: string,
        email: string
    }) {
        await register(user)

        try {
            const user = (await AwsAuth.currentUserInfo())
            console.log('currentUserInfo', user)
        } catch (e) {
            console.log('currentUserInfo', e)
            
        }

        try {
            const user = (await AwsAuth.currentAuthenticatedUser())
            console.log('currentAuthenticatedUser', user)
        } catch (e) {
            console.log('currentAuthenticatedUser', e)
        }

        try {
            const user = (await AwsAuth.currentCredentials())
            console.log('currentCredentials', user)
        } catch (e) {
            console.log('currentCredentials', e)
        }
        console.log('Registered')
    }

    public async login(user: {
        username: string,
        password: string,
    }) {
        const loggedIn = await login(user)
        console.log('loggedIn')

        // TODO store session
        authEventHandler.onLogin()
    }

    public async getCurrentUser() {
        try {
            const user = (await AwsAuth.currentAuthenticatedUser())
            console.log('currentAuthenticatedUser', user)

            return user
        } catch (e) {
            console.log('currentAuthenticatedUser', e)
        }
    }
}

export const AuthModel = new Auth()
