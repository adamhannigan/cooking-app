import React from 'react'

import Profile from 'app/profile/components/Profile'

import { people } from 'constants/dummyData'
const MyMenu = () => (
    // HACK current user ID
    <Profile id={people[0].id} isCurrentUser />
)

export default MyMenu;
