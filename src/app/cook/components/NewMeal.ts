import Meal from "app/home/feed/components/Actions"

export class Preparation {
    private title: string
    private image: string
    private tags: string[]
    private recipe: string

    public constructor(name: string) {
        this.title = name
        this.image = null
        this.tags = []
        this.recipe = null
    }

    public setPhoto(image: string) {
        this.image = image
    }

    public setTags(tags: string[]) {
        this.tags = tags

    }

    public setRecipe(recipe: string){
        this.recipe = recipe
    }

    public getTitle() {
        return this.title
    }

    public getTags () {
        return this.tags
    }
}

let instance: Preparation

export function prepareMeal(name: string) {
    instance = new Preparation(name)
}

export function getMeal() {
    if (!instance) {
        instance = new Preparation('Fake Spaghetti')
    }

    return instance
}