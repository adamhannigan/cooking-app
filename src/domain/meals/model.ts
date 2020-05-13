import { AsyncStorage } from 'react-native'

import { Meal, meals } from '../../constants/dummyData'

const STORAGE_KEY = '@createdMeals'

class Meals {
    public async getAll(): Promise<Meal[]> {
        const storedMeals = await AsyncStorage.getItem(STORAGE_KEY)

        if (!storedMeals) {
            return meals
        }

        const parsed = JSON.parse(storedMeals) as Meal[]

        return [
            ...parsed,
            ...meals,
        ]
    }

    public async addFakeMeal(meal: Meal) {
        const meals = await this.getAll()

        const newMeals = [
            meal,
            ...meals,
        ]
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newMeals))
    }

    public async clear() {
        await AsyncStorage.removeItem(STORAGE_KEY)
    }
}

export const MealsModel = new Meals()
