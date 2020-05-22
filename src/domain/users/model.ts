import { GetUserQuery } from 'API'

import getUserList from './api/getUserList'

import { authEventHandler } from 'domain/auth/events'

import { getCurrentUser } from './api/getCurrentUser'

export type User = Omit<Exclude<GetUserQuery['getUser'], null>, '__typename'>;

class Users {
    private currentUser: User = null

    public constructor() {
        authEventHandler.listen({
            event: 'login',
            handler: async () => {
                // Check if we need to create
                this.currentUser = await getCurrentUser()
            }
        })
    }

    public async listUsers(): Promise<User[]> {
        return getUserList()
    }

    public getCurrentUser(): User {
        return this.currentUser
    }
}

export const UserModel = new Users()
