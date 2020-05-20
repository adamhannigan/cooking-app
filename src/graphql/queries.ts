// tslint:disable
// this is an auto generated file. This will be overwritten

export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        meal {
          id
          title
          description
          createdAt
          recipe
          tags
        }
        createdBy {
          id
          firstName
          lastName
          email
          mobile
          createdAt
        }
        createdAt
      }
      nextToken
    }
  }
`;
export const getMeal = /* GraphQL */ `
  query GetMeal($id: ID!) {
    getMeal(id: $id) {
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
export const listMeals = /* GraphQL */ `
  query ListMeals(
    $filter: ModelMealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMenuItem = /* GraphQL */ `
  query GetMenuItem($id: ID!) {
    getMenuItem(id: $id) {
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
export const listMenuItems = /* GraphQL */ `
  query ListMenuItems(
    $filter: ModelMenuItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
