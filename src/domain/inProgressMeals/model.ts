import { AsyncStorage } from 'react-native'

import { Meal } from 'domain/meals/model'
import { Media } from 'constants/dummyData'

const STORAGE_KEY = '@inProgressMeal'
const IMAGE_STORAGE_KEY = '@inProgressMeal-image'

export { Meal as InProgressMeal }

class InProgressMeal {
    public async get(): Promise<Meal> {
        const inProgressMeal = await AsyncStorage.getItem(STORAGE_KEY)

        if (!inProgressMeal) {
            return null
        }


        return JSON.parse(inProgressMeal) as Meal
    }

    public async save(meal: Meal) {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(meal))
    }

    public async getPhoto() {
        const photo = await AsyncStorage.getItem(IMAGE_STORAGE_KEY)

        if (!photo) {
            return null
        }


        return JSON.parse(photo) as Media
    }

    public async setPhoto(photo: Media) {
        await AsyncStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(photo))
    }

    public async clear() {
        await AsyncStorage.removeItem(STORAGE_KEY)
    }


}

export const InProgressMealModel = new InProgressMeal()
