import { GetMealQuery } from 'API';

import getMealList from './api/getMealList'
import create, { CreateMealInput } from './api/create'
import like from './api/like'
import addToMenu from './api/addToMenu'
import { UserModel } from 'domain/users/model';

export type Meal = Omit<Exclude<GetMealQuery['getMeal'], null>, '__typename'>;

class Meals {
    public async getAll(): Promise<Meal[]> {
        return getMealList()
    }

    public async create(meal: CreateMealInput) {
        return create(meal)
    }

    public async like(meal: Meal) {
        const currentUser = UserModel.getCurrentUser()

        return like({
            userId: currentUser.id,
            mealId: meal.id,
        })
    }

    public async addToMenu(meal: Meal) {
        const currentUser = UserModel.getCurrentUser()
        
        return addToMenu({
            userId: currentUser.id,
            mealId: meal.id,
        })
    }
}

export const MealsModel = new Meals()
