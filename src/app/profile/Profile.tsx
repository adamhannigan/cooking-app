import React from 'react';

import { useRoute } from '@react-navigation/native'
import Profile from './components/Profile'
import { NavProp, Route } from 'Navigation';

const UserProfile = () => {
    const route = useRoute<Route<'/profile/:id'>>()

    const id = route.params.id

    return (
        <Profile id={id} />
    )
}

export default UserProfile
