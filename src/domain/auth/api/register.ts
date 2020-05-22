import { Auth, API } from 'aws-amplify'

import { GetUserQuery } from 'API'

interface User {
    username: string
    password: string
    email: string
}
export default async function register({
    username,
    password,
    email
}: User) {
    await Auth.signUp({
        username,
        password,
        attributes: {
            email,
        },
    })
}
