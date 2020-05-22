/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLikeInput = {
  id?: string | null,
  likeMealId?: string | null,
  likeLikedById?: string | null,
};

export type ModelLikeConditionInput = {
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type UpdateLikeInput = {
  id: string,
  likeMealId?: string | null,
  likeLikedById?: string | null,
};

export type DeleteLikeInput = {
  id?: string | null,
};

export type CreateMealInput = {
  id?: string | null,
  title: string,
  image?: MediaInput | null,
  description?: string | null,
  recipe?: string | null,
  ingredients?: Array< IngredientsInput | null > | null,
  steps?: Array< StepInput | null > | null,
  tags?: Array< string > | null,
  mealInspiredById?: string | null,
  mealMenuItemId?: string | null,
  mealCreatedById?: string | null,
};

export type MediaInput = {
  file?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket?: string | null,
  region?: string | null,
  key: string,
};

export type IngredientsInput = {
  image?: MediaInput | null,
  items?: Array< string > | null,
};

export type StepInput = {
  image?: MediaInput | null,
  description: string,
};

export type ModelMealConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  recipe?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelMealConditionInput | null > | null,
  or?: Array< ModelMealConditionInput | null > | null,
  not?: ModelMealConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateMealInput = {
  id: string,
  title?: string | null,
  image?: MediaInput | null,
  description?: string | null,
  recipe?: string | null,
  ingredients?: Array< IngredientsInput | null > | null,
  steps?: Array< StepInput | null > | null,
  tags?: Array< string > | null,
  mealInspiredById?: string | null,
  mealMenuItemId?: string | null,
  mealCreatedById?: string | null,
};

export type DeleteMealInput = {
  id?: string | null,
};

export type CreateMenuItemInput = {
  id?: string | null,
  order: number,
  menuItemMealId?: string | null,
  menuItemCreatedById?: string | null,
};

export type ModelMenuItemConditionInput = {
  order?: ModelIntInput | null,
  and?: Array< ModelMenuItemConditionInput | null > | null,
  or?: Array< ModelMenuItemConditionInput | null > | null,
  not?: ModelMenuItemConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMenuItemInput = {
  id: string,
  order?: number | null,
  menuItemMealId?: string | null,
  menuItemCreatedById?: string | null,
};

export type DeleteMenuItemInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  bio?: string | null,
  image?: MediaInput | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  bio?: string | null,
  image?: MediaInput | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMealFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  recipe?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelMealFilterInput | null > | null,
  or?: Array< ModelMealFilterInput | null > | null,
  not?: ModelMealFilterInput | null,
};

export type ModelMenuItemFilterInput = {
  id?: ModelIDInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelMenuItemFilterInput | null > | null,
  or?: Array< ModelMenuItemFilterInput | null > | null,
  not?: ModelMenuItemFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike:  {
    __typename: "Like",
    id: string,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    likedBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike:  {
    __typename: "Like",
    id: string,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    likedBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike:  {
    __typename: "Like",
    id: string,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    likedBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateMealMutationVariables = {
  input: CreateMealInput,
  condition?: ModelMealConditionInput | null,
};

export type CreateMealMutation = {
  createMeal:  {
    __typename: "Meal",
    id: string,
    title: string,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    description: string | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inspiredBy:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    menuItem:  {
      __typename: "MenuItem",
      id: string,
      order: number,
      meal:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    recipe: string | null,
    ingredients:  Array< {
      __typename: "Ingredients",
      items: Array< string > | null,
    } | null > | null,
    steps:  Array< {
      __typename: "Step",
      description: string,
    } | null > | null,
    tags: Array< string > | null,
    owner: string | null,
  } | null,
};

export type UpdateMealMutationVariables = {
  input: UpdateMealInput,
  condition?: ModelMealConditionInput | null,
};

export type UpdateMealMutation = {
  updateMeal:  {
    __typename: "Meal",
    id: string,
    title: string,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    description: string | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inspiredBy:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    menuItem:  {
      __typename: "MenuItem",
      id: string,
      order: number,
      meal:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    recipe: string | null,
    ingredients:  Array< {
      __typename: "Ingredients",
      items: Array< string > | null,
    } | null > | null,
    steps:  Array< {
      __typename: "Step",
      description: string,
    } | null > | null,
    tags: Array< string > | null,
    owner: string | null,
  } | null,
};

export type DeleteMealMutationVariables = {
  input: DeleteMealInput,
  condition?: ModelMealConditionInput | null,
};

export type DeleteMealMutation = {
  deleteMeal:  {
    __typename: "Meal",
    id: string,
    title: string,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    description: string | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inspiredBy:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    menuItem:  {
      __typename: "MenuItem",
      id: string,
      order: number,
      meal:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    recipe: string | null,
    ingredients:  Array< {
      __typename: "Ingredients",
      items: Array< string > | null,
    } | null > | null,
    steps:  Array< {
      __typename: "Step",
      description: string,
    } | null > | null,
    tags: Array< string > | null,
    owner: string | null,
  } | null,
};

export type CreateMenuItemMutationVariables = {
  input: CreateMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type CreateMenuItemMutation = {
  createMenuItem:  {
    __typename: "MenuItem",
    id: string,
    order: number,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateMenuItemMutationVariables = {
  input: UpdateMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type UpdateMenuItemMutation = {
  updateMenuItem:  {
    __typename: "MenuItem",
    id: string,
    order: number,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteMenuItemMutationVariables = {
  input: DeleteMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type DeleteMenuItemMutation = {
  deleteMenuItem:  {
    __typename: "MenuItem",
    id: string,
    order: number,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    bio: string | null,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    meals:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    bio: string | null,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    meals:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    bio: string | null,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    meals:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike:  {
    __typename: "Like",
    id: string,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    likedBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      meal:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      likedBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMealQueryVariables = {
  id: string,
};

export type GetMealQuery = {
  getMeal:  {
    __typename: "Meal",
    id: string,
    title: string,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    description: string | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inspiredBy:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    menuItem:  {
      __typename: "MenuItem",
      id: string,
      order: number,
      meal:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    recipe: string | null,
    ingredients:  Array< {
      __typename: "Ingredients",
      items: Array< string > | null,
    } | null > | null,
    steps:  Array< {
      __typename: "Step",
      description: string,
    } | null > | null,
    tags: Array< string > | null,
    owner: string | null,
  } | null,
};

export type ListMealsQueryVariables = {
  filter?: ModelMealFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMealsQuery = {
  listMeals:  {
    __typename: "ModelMealConnection",
    items:  Array< {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMenuItemQueryVariables = {
  id: string,
};

export type GetMenuItemQuery = {
  getMenuItem:  {
    __typename: "MenuItem",
    id: string,
    order: number,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListMenuItemsQueryVariables = {
  filter?: ModelMenuItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenuItemsQuery = {
  listMenuItems:  {
    __typename: "ModelMenuItemConnection",
    items:  Array< {
      __typename: "MenuItem",
      id: string,
      order: number,
      meal:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    bio: string | null,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    meals:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateLikeSubscriptionVariables = {
  owner: string,
};

export type OnCreateLikeSubscription = {
  onCreateLike:  {
    __typename: "Like",
    id: string,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    likedBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateLikeSubscriptionVariables = {
  owner: string,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike:  {
    __typename: "Like",
    id: string,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    likedBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteLikeSubscriptionVariables = {
  owner: string,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike:  {
    __typename: "Like",
    id: string,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    likedBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateMealSubscriptionVariables = {
  owner: string,
};

export type OnCreateMealSubscription = {
  onCreateMeal:  {
    __typename: "Meal",
    id: string,
    title: string,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    description: string | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inspiredBy:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    menuItem:  {
      __typename: "MenuItem",
      id: string,
      order: number,
      meal:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    recipe: string | null,
    ingredients:  Array< {
      __typename: "Ingredients",
      items: Array< string > | null,
    } | null > | null,
    steps:  Array< {
      __typename: "Step",
      description: string,
    } | null > | null,
    tags: Array< string > | null,
    owner: string | null,
  } | null,
};

export type OnUpdateMealSubscriptionVariables = {
  owner: string,
};

export type OnUpdateMealSubscription = {
  onUpdateMeal:  {
    __typename: "Meal",
    id: string,
    title: string,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    description: string | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inspiredBy:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    menuItem:  {
      __typename: "MenuItem",
      id: string,
      order: number,
      meal:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    recipe: string | null,
    ingredients:  Array< {
      __typename: "Ingredients",
      items: Array< string > | null,
    } | null > | null,
    steps:  Array< {
      __typename: "Step",
      description: string,
    } | null > | null,
    tags: Array< string > | null,
    owner: string | null,
  } | null,
};

export type OnDeleteMealSubscriptionVariables = {
  owner: string,
};

export type OnDeleteMealSubscription = {
  onDeleteMeal:  {
    __typename: "Meal",
    id: string,
    title: string,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    description: string | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    inspiredBy:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    menuItem:  {
      __typename: "MenuItem",
      id: string,
      order: number,
      meal:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    recipe: string | null,
    ingredients:  Array< {
      __typename: "Ingredients",
      items: Array< string > | null,
    } | null > | null,
    steps:  Array< {
      __typename: "Step",
      description: string,
    } | null > | null,
    tags: Array< string > | null,
    owner: string | null,
  } | null,
};

export type OnCreateMenuItemSubscriptionVariables = {
  owner: string,
};

export type OnCreateMenuItemSubscription = {
  onCreateMenuItem:  {
    __typename: "MenuItem",
    id: string,
    order: number,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateMenuItemSubscriptionVariables = {
  owner: string,
};

export type OnUpdateMenuItemSubscription = {
  onUpdateMenuItem:  {
    __typename: "MenuItem",
    id: string,
    order: number,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteMenuItemSubscriptionVariables = {
  owner: string,
};

export type OnDeleteMenuItemSubscription = {
  onDeleteMenuItem:  {
    __typename: "MenuItem",
    id: string,
    order: number,
    meal:  {
      __typename: "Meal",
      id: string,
      title: string,
      description: string | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      inspiredBy:  {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null,
      menuItem:  {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null,
      createdBy:  {
        __typename: "User",
        id: string,
        username: string,
        email: string | null,
        firstName: string | null,
        lastName: string | null,
        bio: string | null,
        owner: string | null,
      } | null,
      recipe: string | null,
      ingredients:  Array< {
        __typename: "Ingredients",
        items: Array< string > | null,
      } | null > | null,
      steps:  Array< {
        __typename: "Step",
        description: string,
      } | null > | null,
      tags: Array< string > | null,
      owner: string | null,
    } | null,
    createdBy:  {
      __typename: "User",
      id: string,
      username: string,
      email: string | null,
      firstName: string | null,
      lastName: string | null,
      bio: string | null,
      meals:  {
        __typename: "ModelMealConnection",
        nextToken: string | null,
      } | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    bio: string | null,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    meals:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    bio: string | null,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    meals:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    bio: string | null,
    image:  {
      __typename: "Media",
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string,
      } | null,
    } | null,
    meals:  {
      __typename: "ModelMealConnection",
      items:  Array< {
        __typename: "Meal",
        id: string,
        title: string,
        description: string | null,
        recipe: string | null,
        tags: Array< string > | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        order: number,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};