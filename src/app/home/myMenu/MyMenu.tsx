import React from 'react'

import Profile from 'app/profile/components/Profile'

import { UserModel, User } from 'domain/users/model'
import { Spinner } from '@ui-kitten/components'

const MyMenu = () => {
    const [user, setUser] = React.useState<User>()
    const [isLoading, setIsLoading] = React.useState(true)
  
    React.useEffect(() => {
      const load = async () => {
        let loadedUser =  await UserModel.getCurrentUser()
        console.log('Got: ', loadedUser)
        setUser(loadedUser)
        setIsLoading(false)
      }
  
      load()
    }, [])

    if (isLoading) {
        return (
            <Spinner />
        )
    }

    return (
        <Profile id={user.id} isCurrentUser />
    )
}

export default MyMenu;
