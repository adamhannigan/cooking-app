// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
export const onCreateMeal = /* GraphQL */ `
  subscription OnCreateMeal {
    onCreateMeal {
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
export const onUpdateMeal = /* GraphQL */ `
  subscription OnUpdateMeal {
    onUpdateMeal {
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
export const onDeleteMeal = /* GraphQL */ `
  subscription OnDeleteMeal {
    onDeleteMeal {
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
export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem {
    onCreateMenuItem {
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
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem {
    onUpdateMenuItem {
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
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem {
    onDeleteMenuItem {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
