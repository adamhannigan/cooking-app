export interface Preference {
  emoji?: string
  name: string
}

const preferences = {
  // Lifestyles
  quick: {
    name: 'Quick',
    emoji: '⏰',
  },
  vegetarian: {
    name: 'Vegetarian',
    emoji:  '🥒',
  },
  vegan: {
    name: 'Vegan',
    emoji: '🍆',
  },
  fitness: {
    name: 'Fitness',
    emoji: '💪',
  },
  weight: {
    name: 'Weight watchers',
  },
  lowCarb: {
    name: 'Low Carb',
  },
  paleo: {
    name: 'Paleo',
  },
  keto: {
    name: 'Keto',
  },
  lowFat: {
    name: 'Low Fat',
  },
  glutenFree: {
    name: 'Gluten Free',
  },

  // Types
  stirFry: {
    name: 'Stir Fries',
    emoji: '🍚',
  },
  bbq: {
    name: 'BBQs',
    emoji: '🍖',
  },
  salad: {
    name: 'Salads',
  },
  curry: {
    name: 'Curry',
  },
  sandwich: {
    name: 'Sandwiches/Wraps',
  },
  soup: {
    name: 'Soup',
  },
  pie: {
    name: 'Pie',
  },
  slowCooked: {
    name: 'Slow Cooked',
  },
  burger: {
    name: 'Burgers'
  },
  pasta: {
    name: 'Pasta',
  },
  noodle: {
    name: 'Noodles',
  },
  seafood: {
    name: 'Seafood',
  },
  pizza: {
    name: 'Pizza',
  },

  // Foods
  chicken: {
    name: 'Chicken',
    emoji: '🐔'
  },

  // Countries
  india: {
    name: 'Indian',
    emoji:  '🇮🇳',
  },
  thailand: {
    name: 'Thai',
    emoji: '🇹🇭',
  },
  japan: {
    name: 'Japanese',
    emoji: '🇯🇵',
  },
  mexico: {
    name: 'Mexico',
  },
  brazil: {
    name: 'Brazillian',
  },
  lebanon: {
    name: 'Lebanese',
  },
  france: {
    name: 'French',
  },
  spain: {
    name: 'Spanish',
  },
  germany: {
    name: 'German',
  },
  korea: {
    name: 'Korean',
  },
  vietnam: {
    name: 'Vitenamese',
  },
  morocco: {
    name: 'Moroccan',
  },
  turkey: {
    name: 'Turkish',
  },
  greece: {
    name: 'Greek',
  },
  china: {
    name: 'Chinese',
  },
  america: {
    name: 'America',
  },
  italy: {
    name: 'Italian'
  },
}

export interface Meal {
    id: number
    title: string
    image: string
    action: string
    user?: {
      name: string
    },
    preferences: Preference[]
    likes: number
    recipe?: string
    tip?: string
  }


export const people: User[] = [{
  id: 2,
  name: 'Adam Hannigan',
  preferences: [preferences.fitness, preferences.bbq]
}, {
  id: 3,
  name: 'Joe Rogan',
  preferences: [preferences.stirFry, preferences.lowCarb]
}, {
  id: 4,
  name: 'Mitch Hannigan',
  preferences: [preferences.germany, preferences.stirFry]
}]

const recipeBook = {
  // Tacos

  // Pasta
  sweetPotatoGnocci: {
    id: 1,
    title: 'Sweet Potato Gnocci',
    action: '🤤 Is hungry for...',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
    recipe: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
    tip: 'Make sure you have a clean surface to roll the gnocci!',
    user: people[0],
    likes: 22,
    preferences: [preferences.vegetarian, preferences.pasta],
  },
  creamyCajunPasta: {
    id: 3,
    title: 'Creamy Cajun Pasta',
    action: '👨‍🍳 Just cooked...',
    image: 'https://img.buzzfeed.com/video-api-prod/assets/ec15137f921a40f49317cd75d38a961d/BFV14804_Meal-PrepGarlicChickenAndVeggiePasta-TextlessThumb.jpg?output-quality=100&resize=900:*',
    recipe: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
    tip: 'Keep stirring so the pasta does not stick to the bottom',
    user: people[1],
    preferences: [preferences.pasta, preferences.chicken],
    likes: 12,
  },
  easySausagePasta: {
    id: 5,
    title: 'Easy sausage pasta',
    action: '👨‍🍳 Just cooked...',
    image: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/44481df056c343438402051b7aec4c7c.jpeg',
    recipe: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/44481df056c343438402051b7aec4c7c.jpeg',
    tip: 'Keep stirring so the pasta does not stick to the bottom',
    user: people[2],
    preferences: [preferences.pasta, preferences.italy],
    likes: 12,
  },

  // Stir Fry
  chickenBrocolliStirFry: {
    id: 4,
    title: 'Chicken and Brocoslli Stir Fry',
    action: '📖 Added a meal to his menu ',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c6630a4d04074d11ab60bfa0cb4b03d1/BFV16130_Stir-Fry_4_Ways_FB.jpg?output-quality=100&resize=900:*',
    recipe: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
    tip: 'Add salt while boiling the brocolli',
    user: people[1],
    preferences: [preferences.stirFry,  preferences.chicken],
    likes: 10,
  }
}

interface TaggedMeals {
  tag: Preference
  meals: Meal[]
}

type PreferenceType = keyof typeof preferences

export const meals = Object.values(recipeBook) as Meal[]

export const sortedMeals: TaggedMeals[] =
  Object.keys(preferences)
    .reduce((sorted, key: PreferenceType) => {
      const preference = preferences[key]

      const matchedMeals = meals.filter(meal => 
          !!meal.preferences.find(mealPref =>
            mealPref.name === preference.name
          )
      )

      if (matchedMeals.length === 0) {
        return sorted
      }

      return [
        ...sorted,
        {
          tag: preference,
          meals: matchedMeals,
        }
      ]
    }, [] as TaggedMeals[])
  
interface User {
  id: number
  name: string
  preferences: Preference[]
}

export const groups = [{
    preference: preferences.fitness,
    people,
}, {
    preference: preferences.vegan,
    people,
}]

export interface Activity {
  user: User
  meal: Meal
  event: 'drooled' | 'cooked' | 'menu'
}

export const activities: Activity[] = [{
  user: people[0],
  meal: meals[2],
  event: 'cooked',
}, {
  user: people[1],
  meal: meals[3],
  event: 'menu',
}, {
  user: people[0],
  meal: meals[3],
  event: 'menu',
},{
  user: people[0],
  meal: meals[2],
  event: 'drooled',
},{
  user: people[1],
  meal: meals[2],
  event: 'drooled',
}]

interface Group {
  name: string
  items: Preference[]
}

export const tagGroups: Group[] = [{
  name: 'Lifestyle',
  items: [
    preferences.vegetarian,
    preferences.vegan,
    preferences.fitness,
    preferences.weight,
    preferences.lowCarb,
    preferences.paleo,
    preferences.keto,
    preferences.lowFat,
    preferences.glutenFree,
  ],
}, {
  name: 'Meals',
  items: [
    preferences.stirFry,
    preferences.bbq,
    preferences.salad,
    preferences.curry,
    preferences.sandwich,
    preferences.soup,
    preferences.pie,
    preferences.slowCooked,
    preferences.burger,
    preferences.pasta,
    preferences.noodle,
    preferences.seafood,
    preferences.pizza,
  ],
}, {
  name: 'Countries',
  items: [
    preferences.india,
    preferences.thailand,
    preferences.japan,
    preferences.mexico,
    preferences.brazil,
    preferences.lebanon,
    preferences.france,
    preferences.spain,
    preferences.germany,
    preferences.korea,
    preferences.vietnam,
    preferences.morocco,
    preferences.turkey,
    preferences.greece,
    preferences.china,
    preferences.america,
    preferences.italy,
  ]
}]