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

export const meals: Meal[] = [{
    id: 1,
    title: 'Sweet Potato Gnocci',
    action: '🤤 Is hungry for...',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
    recipe: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
    tip: 'Make sure you have a clean surface to roll the gnocci!',
    user: {
      name: 'Adam Hannigan'
    },
    likes: 22,
    preferences: [preferences.vegetarian, preferences.lowCarb],
  }, {
    id: 2,
    title: 'Brazillian Carrot Cake',
    action: '👨‍🍳 Just cooked...',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/0b3bf188572f406aa09f32890d9749f5/BFV43049_HowToMakeMesmerizingBrazilianDesserts_FINAL.jpg?output-quality=100&resize=900:*',
    recipe: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
    tip: 'Use a tall cake tin for crispy edges',
    user: {
      name: 'Jess Lobster',
    },
    preferences: [preferences.brazil],
    likes: 62,
  }, {
    id: 3,
    title: 'Creamy Cajun Pasta',
    action: '👨‍🍳 Just cooked...',
    image: 'https://img.buzzfeed.com/video-api-prod/assets/ec15137f921a40f49317cd75d38a961d/BFV14804_Meal-PrepGarlicChickenAndVeggiePasta-TextlessThumb.jpg?output-quality=100&resize=900:*',
    recipe: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
    tip: 'Keep stirring so the pasta does not stick to the bottom',
    user: {
      name: 'Joe Rogan',
    },
    preferences: [preferences.fitness, preferences.turkey],
    likes: 12,
  }, {
    id: 4,
    title: 'Chicken and Brocoslli Stir Fry',
    action: '📖 Added a meal to his menu ',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c6630a4d04074d11ab60bfa0cb4b03d1/BFV16130_Stir-Fry_4_Ways_FB.jpg?output-quality=100&resize=900:*',
    recipe: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
    tip: 'Add salt while boiling the brocolli',
    user: {
      name: 'Mitchell Hannigan',
    },
    preferences: [preferences.stirFry,  preferences.chicken],
    likes: 10,
  }]

export const people = [{
  name: 'Adam Hannigan',
  preferences: [preferences.fitness, preferences.bbq]
}, {
    name: 'Joe Rogan',
    preferences: [preferences.stirFry, preferences.lowCarb]
}]

export const groups = [{
    preference: preferences.fitness,
    people,
}, {
    preference: preferences.vegan,
    people,
}]

export const activity = [{
  name: 'Adam Hannigan',
  action: 'Is craving your Prawn Rissoto',
  icon: 'hearto',
}, {
    name: 'Joe Rogan',
    action: 'Is cooking your Chicken Teriyaki & rice',
    icon: 'rocket1',
}, {
    name: 'Victoria Mota',
    action: 'Is planning to cook your Chicken Teriyaki & rice',
    icon: 'book',

},{
    name: 'Victoria Mota',
    action: 'Is hungry for your Chicken Teriyaki & rice',
    icon: 'hearto',
}, {
    name: 'Adam Hannigan',
    meal: 'Chicken Teriyaki & rice',
    action: 'Added to their menu: Chicken Teriyaki & rice',
    icon: 'book',
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