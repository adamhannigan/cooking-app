// tslint:disable
// this is an auto generated file. This will be overwritten

export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      meal {
        id
        title
        description
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
        likes {
          nextToken
        }
        inspiredBy {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        menuItem {
          id
          order
          createdAt
        }
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
      }
      createdBy {
        id
        firstName
        lastName
        email
        mobile
        createdAt
        meals {
          nextToken
        }
        menuItems {
          nextToken
        }
        likes {
          nextToken
        }
      }
      createdAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      meal {
        id
        title
        description
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
        likes {
          nextToken
        }
        inspiredBy {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        menuItem {
          id
          order
          createdAt
        }
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
      }
      createdBy {
        id
        firstName
        lastName
        email
        mobile
        createdAt
        meals {
          nextToken
        }
        menuItems {
          nextToken
        }
        likes {
          nextToken
        }
      }
      createdAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      meal {
        id
        title
        description
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
        likes {
          nextToken
        }
        inspiredBy {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        menuItem {
          id
          order
          createdAt
        }
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
      }
      createdBy {
        id
        firstName
        lastName
        email
        mobile
        createdAt
        meals {
          nextToken
        }
        menuItems {
          nextToken
        }
        likes {
          nextToken
        }
      }
      createdAt
    }
  }
`;
export const createMeal = /* GraphQL */ `
  mutation CreateMeal(
    $input: CreateMealInput!
    $condition: ModelMealConditionInput
  ) {
    createMeal(input: $input, condition: $condition) {
      id
      title
      image {
        file {
          bucket
          region
          key
        }
      }
      description
      createdBy {
        id
        firstName
        lastName
        email
        mobile
        createdAt
        meals {
          nextToken
        }
        menuItems {
          nextToken
        }
        likes {
          nextToken
        }
      }
      createdAt
      likes {
        items {
          id
          createdAt
        }
        nextToken
      }
      inspiredBy {
        id
        title
        description
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
        likes {
          nextToken
        }
        inspiredBy {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        menuItem {
          id
          order
          createdAt
        }
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
      }
      menuItem {
        id
        order
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
        meal {
          id
          title
          description
          createdAt
          recipe
          tags
        }
      }
      recipe
      ingredients {
        items
      }
      steps {
        description
      }
      tags
    }
  }
`;
export const updateMeal = /* GraphQL */ `
  mutation UpdateMeal(
    $input: UpdateMealInput!
    $condition: ModelMealConditionInput
  ) {
    updateMeal(input: $input, condition: $condition) {
      id
      title
      image {
        file {
          bucket
          region
          key
        }
      }
      description
      createdBy {
        id
        firstName
        lastName
        email
        mobile
        createdAt
        meals {
          nextToken
        }
        menuItems {
          nextToken
        }
        likes {
          nextToken
        }
      }
      createdAt
      likes {
        items {
          id
          createdAt
        }
        nextToken
      }
      inspiredBy {
        id
        title
        description
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
        likes {
          nextToken
        }
        inspiredBy {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        menuItem {
          id
          order
          createdAt
        }
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
      }
      menuItem {
        id
        order
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
        meal {
          id
          title
          description
          createdAt
          recipe
          tags
        }
      }
      recipe
      ingredients {
        items
      }
      steps {
        description
      }
      tags
    }
  }
`;
export const deleteMeal = /* GraphQL */ `
  mutation DeleteMeal(
    $input: DeleteMealInput!
    $condition: ModelMealConditionInput
  ) {
    deleteMeal(input: $input, condition: $condition) {
      id
      title
      image {
        file {
          bucket
          region
          key
        }
      }
      description
      createdBy {
        id
        firstName
        lastName
        email
        mobile
        createdAt
        meals {
          nextToken
        }
        menuItems {
          nextToken
        }
        likes {
          nextToken
        }
      }
      createdAt
      likes {
        items {
          id
          createdAt
        }
        nextToken
      }
      inspiredBy {
        id
        title
        description
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
        likes {
          nextToken
        }
        inspiredBy {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        menuItem {
          id
          order
          createdAt
        }
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
      }
      menuItem {
        id
        order
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
        meal {
          id
          title
          description
          createdAt
          recipe
          tags
        }
      }
      recipe
      ingredients {
        items
      }
      steps {
        description
      }
      tags
    }
  }
`;
export const createMenuItem = /* GraphQL */ `
  mutation CreateMenuItem(
    $input: CreateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    createMenuItem(input: $input, condition: $condition) {
      id
      order
      createdBy {
        id
        firstName
        lastName
        email
        mobile
        createdAt
        meals {
          nextToken
        }
        menuItems {
          nextToken
        }
        likes {
          nextToken
        }
      }
      createdAt
      meal {
        id
        title
        description
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
        likes {
          nextToken
        }
        inspiredBy {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        menuItem {
          id
          order
          createdAt
        }
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
      }
    }
  }
`;
export const updateMenuItem = /* GraphQL */ `
  mutation UpdateMenuItem(
    $input: UpdateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    updateMenuItem(input: $input, condition: $condition) {
      id
      order
      createdBy {
        id
        firstName
        lastName
        email
        mobile
        createdAt
        meals {
          nextToken
        }
        menuItems {
          nextToken
        }
        likes {
          nextToken
        }
      }
      createdAt
      meal {
        id
        title
        description
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
        likes {
          nextToken
        }
        inspiredBy {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        menuItem {
          id
          order
          createdAt
        }
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
      }
    }
  }
`;
export const deleteMenuItem = /* GraphQL */ `
  mutation DeleteMenuItem(
    $input: DeleteMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    deleteMenuItem(input: $input, condition: $condition) {
      id
      order
      createdBy {
        id
        firstName
        lastName
        email
        mobile
        createdAt
        meals {
          nextToken
        }
        menuItems {
          nextToken
        }
        likes {
          nextToken
        }
      }
      createdAt
      meal {
        id
        title
        description
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
        likes {
          nextToken
        }
        inspiredBy {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        menuItem {
          id
          order
          createdAt
        }
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      mobile
      createdAt
      meals {
        items {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        nextToken
      }
      menuItems {
        items {
          id
          order
          createdAt
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      mobile
      createdAt
      meals {
        items {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        nextToken
      }
      menuItems {
        items {
          id
          order
          createdAt
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      mobile
      createdAt
      meals {
        items {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        nextToken
      }
      menuItems {
        items {
          id
          order
          createdAt
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
        }
        nextToken
      }
    }
  }
`;
