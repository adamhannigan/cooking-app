import { GetMealQuery } from 'API';

import getMealList from './api/getMealList'
import create, { CreateMealInput } from './api/create'
import like from './api/like'

export type Meal = Omit<Exclude<GetMealQuery['getMeal'], null>, '__typename'>;

class Meals {
    public async getAll(): Promise<Meal[]> {
        return getMealList()
    }

    public async create(meal: CreateMealInput) {
        return create(meal)
    }

    public async like(mealId: number) {
        return like(mealId)
    }
}

export const MealsModel = new Meals()
