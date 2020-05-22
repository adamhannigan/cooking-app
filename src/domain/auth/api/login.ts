import { Auth } from 'aws-amplify'

interface User {
    username: string
    password: string
}

export default async function login({
    username,
    password,
}: User) {
    await Auth.signIn({
        username,
        password,
    })
}
