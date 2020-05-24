import { GetUserQuery, ListUsersQuery } from 'API'

import getUserList from './api/getUserList'

import { authEventHandler } from 'domain/auth/events'

import { getCurrentUser } from './api/getCurrentUser'
import { follow } from './api/follow'
import { createNewUser } from './api/create'

export type User = Omit<Exclude<ListUsersQuery['listUsers']['items'][0], null>, '__typename'>;

class Users {
    private currentUser: User = null

    public constructor() {
        console.log('Constructed')
    }

    public async listUsers(): Promise<User[]> {
        return getUserList()
    }

    public async getCurrentUser(): Promise<User> {
        if (!this.currentUser) {
            this.currentUser = await getCurrentUser()
        }

        return this.currentUser
    }

    public async createNewUser(): Promise<User> {
        const currentUser = await this.getCurrentUser()

        if (currentUser) {
            console.error('COOKING: Why are you trying to create another user')
            return
        }

        console.log('No user so create one')

        return createNewUser()
    }

    public async follow(user: User) {
        const currentUser = await this.getCurrentUser()

        return follow({
            followerId: currentUser.id,
            userId: user.id,
        })
    }
}

export const UserModel = new Users()
