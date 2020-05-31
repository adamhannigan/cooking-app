import { GetMealQuery } from 'API';

import getMealList from './api/getMealList'
import getMeal from './api/getMeal'
import create, { CreateMealInput } from './api/create'
import like from './api/like'
import addToMenu from './api/addToMenu'
import { UserModel } from 'domain/users/model';
import { likeEventHandler } from 'domain/likes/events';

export type Meal = Omit<Exclude<GetMealQuery['getMeal'], null>, '__typename'>;

class Meals {
    public async getAll(): Promise<Meal[]> {
        return getMealList()
    }

    public async find(id: string): Promise<Meal> {
        return getMeal(id)
    }

    public async create(meal: Omit<CreateMealInput, 'mealCreatedById'>) {
        const currentUser = await UserModel.getCurrentUser()

        return create({
            mealCreatedById: currentUser.id,
            ...meal,
        })
    }

    public async like(meal: Meal) {
        const currentUser = await UserModel.getCurrentUser()

        likeEventHandler.onLike()
        
        /*return like({
            userId: currentUser.id,
            mealId: meal.id,
        })*/
    }

    public async addToMenu(meal: Meal) {
        const currentUser = await UserModel.getCurrentUser()
        
        return addToMenu({
            userId: currentUser.id,
            mealId: meal.id,
        })
    }
}

export const MealsModel = new Meals()
