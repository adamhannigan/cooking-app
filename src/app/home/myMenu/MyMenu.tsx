import React from 'react'

import Profile from 'app/profile/components/Profile'

const MyMenu = () => (
    // HACK current user ID
    <Profile id={22} isCurrentUser />
)

export default MyMenu;
