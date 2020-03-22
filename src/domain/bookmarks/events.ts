import { Meal } from '../../constants/dummyData'

type Event = 'mealSaved'

type Handler = () => void

interface Listener {
    event: Event
    handler: Handler
}

class BookmarkEvents {
    private listeners: Listener[] = []

    public listen(listener: Listener) {
        this.listeners.push(listener)
    }

    public onMealAdded() {
        console.log('Added')
        this.listeners.forEach(listener => listener.handler())
    }
}

export const bookmarkEventHandler = new BookmarkEvents()
