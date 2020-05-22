import { GetUserQuery } from 'API'

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

        console.log('Registered')
        // TODO store session
        authEventHandler.onLogin()
    }

    public async login(user: {
        username: string,
        password: string,
    }) {
        const loggedIn = await login(user)


    }

    public async getCurrentUser() {
    }
}

export const AuthModel = new Auth()
