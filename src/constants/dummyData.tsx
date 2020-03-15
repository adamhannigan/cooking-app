export interface Meal {
    id: number
    title: string
    image: string
    action: string
    user?: {
      name: string
    },
    preferences: string[]
    likes: number,
  }

export const meals: Meal[] = [{
    id: 1,
    title: 'Sweet Potato Gnocci',
    action: '🤤 Is hungry for...',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
    user: {
      name: 'Adam Hannigan'
    },
    likes: 22,
    preferences: ['🍆', '🍠'],
  }, {
    id: 2,
    title: 'Brazillian Carrot Cake',
    action: '👨‍🍳 Just cooked...',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/0b3bf188572f406aa09f32890d9749f5/BFV43049_HowToMakeMesmerizingBrazilianDesserts_FINAL.jpg?output-quality=100&resize=900:*',
    user: {
      name: 'Jess Lobster',
    },
    preferences: ['🇧🇷', '🍰'],
    likes: 62,
  }, {
    id: 3,
    title: 'Creamy Cajun Pasta',
    action: '👨‍🍳 Just cooked...',
    image: 'https://img.buzzfeed.com/video-api-prod/assets/ec15137f921a40f49317cd75d38a961d/BFV14804_Meal-PrepGarlicChickenAndVeggiePasta-TextlessThumb.jpg?output-quality=100&resize=900:*',
    user: {
      name: 'Joe Rogan',
    },
    preferences: ['💪',  '🇲🇷'],
    likes: 12,
  }, {
    id: 4,
    title: 'Chicken and Brocoslli Stir Fry',
    action: '📖 Added a meal to his menu ',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c6630a4d04074d11ab60bfa0cb4b03d1/BFV16130_Stir-Fry_4_Ways_FB.jpg?output-quality=100&resize=900:*',
    user: {
      name: 'Mitchell Hannigan',
    },
    preferences: ['🍚',  '🐔'],
    likes: 10,
  }]

export const people = [{
  name: 'Adam Hannigan',
  preferences: ['💪Fitness', '🍖BBQ']
}, {
    name: 'Joe Rogan',
    preferences: ['💪Fitness', '🍖BBQ']
}]
