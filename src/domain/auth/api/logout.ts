import { Auth } from 'aws-amplify'

export default async function logout() {
    await Auth.signOut()
}
