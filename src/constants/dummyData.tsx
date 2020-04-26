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
  avocado: {
    name: 'Avocado',
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
    user?: User
    preferences: Preference[]
    likes: number
    recipe?: string
    tip?: string
  }


export const people: User[] = [{
  id: 1,
  name: 'Adam Hannigan',
  preferences: [preferences.vegan, preferences.india]
}, {
  id: 6,
  name: 'Raj Muhammad',
  preferences: [preferences.india]
}, {
  id: 7,
  name: 'Michelle Lewin',
  preferences: [preferences.lowFat, preferences.fitness]
}, {
  id: 8,
  name: 'Jennifer Selter',
  preferences: [preferences.lowFat, preferences.fitness]
}, {
  id: 8,
  name: 'Kayla Itsinex',
  preferences: [preferences.japan, preferences.fitness]
}, {
  id: 2,
  name: 'Adam Hannigan',
  preferences: [preferences.japan, preferences.bbq]
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
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c6630a4d04074d11ab60bfa0cb4b03d1/BFV16130_Stir-Fry_4_Ways_FB.jpg?output-quality=100&resize=900:*',
    recipe: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
    tip: 'Add salt while boiling the brocolli',
    user: people[1],
    preferences: [preferences.stirFry,  preferences.chicken],
    likes: 10,
  },
  lemonCousCous: {
    id: 5,
    title: 'Lemon Cous Cous Salad',
    image: 'https://www.inspiredtaste.net/wp-content/uploads/2017/12/Easy-Couscous-Salad-Recipe-2-1200.jpg',
    recipe: 'https://www.inspiredtaste.net/wp-content/uploads/2017/12/Easy-Couscous-Salad-Recipe-2-1200.jpg',
    tip: 'Add salt while boiling the brocolli',
    user: people[2],
    preferences: [preferences.salad,  preferences.morocco],
    likes: 10,
  },
  
  teriyakiChicken: {
    id: 6,
    title: 'Teriyaki Chicken',
    image: 'https://hips.hearstapps.com/delish/assets/17/26/1498598755-teriyaki-chicken.jpg',
    recipe: 'https://hips.hearstapps.com/delish/assets/17/26/1498598755-teriyaki-chicken.jpg',
    tip: 'High pan heat for crispy edges',
    user: people[3],
    preferences: [preferences.japan,  preferences.chicken],
    likes: 10,
  },

  lasagne: {
    id: 7,
    title: 'Lasagne',
    image: 'https://myfoodbook.com.au/sites/default/files/styles/single_recipe/public/recipe_photo/Classic%20Lasagne.jpg',
    recipe: 'https://myfoodbook.com.au/sites/default/files/styles/single_recipe/public/recipe_photo/Classic%20Lasagne.jpg',
    tip: 'High pan heat for crispy edges',
    user: people[3],
    preferences: [preferences.japan,  preferences.chicken],
    likes: 10,
  },

  roastVeggieSalad: {
    id: 8,
    title: 'Roast Veggie Salad',
    image: 'https://www.chelseasmessyapron.com/wp-content/uploads/2019/09/Roasted-Veggie-Salad-1.jpg',
    recipe: 'https://www.chelseasmessyapron.com/wp-content/uploads/2019/09/Roasted-Veggie-Salad-1.jpg',
    tip: 'Healthier if you use ripe avocados',
    user: people[3],
    preferences: [preferences.vegetarian,  preferences.avocado],
    likes: 10,
  },

  hamburgers: {
    id: 8,
    title: 'Hamburger',
    image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/2/25/0/bw2b07_hambugers1.jpg.rend.hgtvcom.826.620.suffix/1558017418187.jpeg',
    recipe: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/2/25/0/bw2b07_hambugers1.jpg.rend.hgtvcom.826.620.suffix/1558017418187.jpeg',
    tip: 'Healthier if you use ripe avocados',
    user: people[3],
    preferences: [preferences.bbq,  preferences.sandwich],
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

interface PeopleGroup {
  preference: Preference
  people: User[]
}

export const groups: PeopleGroup[] =
  Object.keys(preferences)
    .reduce((sorted, key: PreferenceType) => {
      const preference = preferences[key] as Preference

      const matchedPeople = people.filter(person => 
          !!person.preferences.find(mealPref =>
            mealPref.name === preference.name
          )
      )

      if (matchedPeople.length === 0) {
        return sorted
      }

      return [
        ...sorted,
        {
          preference,
          people: matchedPeople,
        }
      ]
    }, [] as PeopleGroup[])

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