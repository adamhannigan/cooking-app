import { GetUserQuery, ListUsersQuery } from 'API'

import getUserList from './api/getUserList'

import { authEventHandler } from 'domain/auth/events'

import { getCurrentUser } from './api/getCurrentUser'
import { follow } from './api/follow'
import { createNewUser } from './api/create'
import getUser from './api/getUser'
import getMenuItemList, { MenuItem } from './api/getMenuItemList'

export { MenuItem }
export type User = Omit<Exclude<ListUsersQuery['listUsers']['items'][0], null>, '__typename'>;

class Users {
    private currentUser: User = null

    public constructor() {
        console.log('Constructed')
    }

    public async listUsers(): Promise<User[]> {
        return getUserList()
    }

    private userPromise: Promise<User> = null

    public async getCurrentUser(): Promise<User> {
        if (!this.currentUser) {
            if (!this.userPromise) {
                console.log('Get em')
                this.userPromise = getCurrentUser()
            }

            return this.userPromise
        }

        return this.currentUser
    }

    public async find(id: string): Promise<User> {
        return getUser(id)
    }

    public async createNewUser(): Promise<User> {
        const currentUser = await this.getCurrentUser()

        if (currentUser) {
            console.error('COOKING: Why are you trying to create another user', currentUser)
            return
        }

        console.log('No user so create one')
        // Remove the the old cache
        this.userPromise = null

        return createNewUser()
    }

    public async follow(user: User) {
        const currentUser = await this.getCurrentUser()

        return follow({
            followerId: currentUser.id,
            userId: user.id,
        })
    }

    public async getMenuItems(userId: string) {
        return await getMenuItemList(userId)
    }

    public clearCurrentUser() {
        this.userPromise = null
        this.currentUser = null
    }
}

export const UserModel = new Users()
