import { Meal } from '../../constants/dummyData'
import { bookmarkEventHandler } from './events'

class Bookmarks {
    private meals: Meal[] = []

    public addMeal(meal: Meal) {
        this.meals.push(meal)

        bookmarkEventHandler.onMealAdded()
    }
}

export const BookmarkModel = new Bookmarks()
