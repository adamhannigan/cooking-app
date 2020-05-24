type TagType = 'vegetarian' | 'baking' | 'chicken'

export interface Tag {
    name: TagType
}

export default function getTags(): Tag[] {
    return [{
        name: 'vegetarian'
    }, {
        name: 'baking'
    }, {
        name: 'chicken',
    }]
}
