import { AsyncStorage } from 'react-native'

import { Meal } from '../../constants/dummyData'

const STORAGE_KEY = '@inProgressMeal'

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

    public async clear() {
        await AsyncStorage.removeItem(STORAGE_KEY)
    }
}

export const InProgressMealModel = new InProgressMeal()
