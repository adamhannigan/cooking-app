import { AsyncStorage } from 'react-native'

import getTagList, { Tag } from './api/getTagList'

export { Tag }

const STORAGE_KEY = '@userPreferences'

class Tags {
    public async getAll(): Promise<Tag[]> {
        return getTagList()
    }

    /**
     * Set user preferences for onboarding purposes
     */
    public async setPreferences(tags: Tag[]) {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tags))
    }

    public async getPreferences() {
        const preferences = await AsyncStorage.getItem(STORAGE_KEY)

        if (!preferences) {
            return null
        }


        return JSON.parse(preferences) as Tag[]
    }
}

export const TagsModel = new Tags()
