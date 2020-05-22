import { Auth } from 'aws-amplify'

export default async function getCognitoUser() {
    const user = (await Auth.currentUserInfo()) as {
        id: number
        username: string
    }

    if (!user) {
        // Not logged in
        return null
    }

    return user
}