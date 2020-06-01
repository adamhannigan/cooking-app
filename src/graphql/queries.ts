// tslint:disable
// this is an auto generated file. This will be overwritten

export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      meal {
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
        likes {
          items {
            id
            owner
          }
          nextToken
        }
        inspiredBy {
          id
          title
          description
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
            owner
          }
          menuItem {
            id
            order
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          createdAt
          recipe
          ingredients {
            items
          }
          steps {
            description
          }
          tags
          owner
        }
        menuItem {
          id
          order
          meal {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          owner
        }
        createdBy {
          id
          username
          email
          firstName
          lastName
          bio
          meals {
            nextToken
          }
          menuItems {
            nextToken
          }
          likes {
            nextToken
          }
          followers {
            nextToken
          }
          following {
            nextToken
          }
          owner
        }
        createdAt
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
        owner
      }
      likedBy {
        id
        username
        email
        firstName
        lastName
        bio
        image {
          file {
            bucket
            region
            key
          }
        }
        meals {
          items {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          nextToken
        }
        menuItems {
          items {
            id
            order
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            owner
          }
          nextToken
        }
        followers {
          items {
            id
            owner
          }
          nextToken
        }
        following {
          items {
            id
            owner
          }
          nextToken
        }
        owner
      }
      owner
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
            owner
          }
          menuItem {
            id
            order
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          createdAt
          recipe
          ingredients {
            items
          }
          steps {
            description
          }
          tags
          owner
        }
        likedBy {
          id
          username
          email
          firstName
          lastName
          bio
          meals {
            nextToken
          }
          menuItems {
            nextToken
          }
          likes {
            nextToken
          }
          followers {
            nextToken
          }
          following {
            nextToken
          }
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getFollower = /* GraphQL */ `
  query GetFollower($id: ID!) {
    getFollower(id: $id) {
      id
      user {
        id
        username
        email
        firstName
        lastName
        bio
        image {
          file {
            bucket
            region
            key
          }
        }
        meals {
          items {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          nextToken
        }
        menuItems {
          items {
            id
            order
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            owner
          }
          nextToken
        }
        followers {
          items {
            id
            owner
          }
          nextToken
        }
        following {
          items {
            id
            owner
          }
          nextToken
        }
        owner
      }
      followedBy {
        id
        username
        email
        firstName
        lastName
        bio
        image {
          file {
            bucket
            region
            key
          }
        }
        meals {
          items {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          nextToken
        }
        menuItems {
          items {
            id
            order
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            owner
          }
          nextToken
        }
        followers {
          items {
            id
            owner
          }
          nextToken
        }
        following {
          items {
            id
            owner
          }
          nextToken
        }
        owner
      }
      owner
    }
  }
`;
export const listFollowers = /* GraphQL */ `
  query ListFollowers(
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          username
          email
          firstName
          lastName
          bio
          meals {
            nextToken
          }
          menuItems {
            nextToken
          }
          likes {
            nextToken
          }
          followers {
            nextToken
          }
          following {
            nextToken
          }
          owner
        }
        followedBy {
          id
          username
          email
          firstName
          lastName
          bio
          meals {
            nextToken
          }
          menuItems {
            nextToken
          }
          likes {
            nextToken
          }
          followers {
            nextToken
          }
          following {
            nextToken
          }
          owner
        }
        owner
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
      likes {
        items {
          id
          meal {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          likedBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          owner
        }
        nextToken
      }
      inspiredBy {
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
        likes {
          items {
            id
            owner
          }
          nextToken
        }
        inspiredBy {
          id
          title
          description
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
            owner
          }
          menuItem {
            id
            order
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          createdAt
          recipe
          ingredients {
            items
          }
          steps {
            description
          }
          tags
          owner
        }
        menuItem {
          id
          order
          meal {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          owner
        }
        createdBy {
          id
          username
          email
          firstName
          lastName
          bio
          meals {
            nextToken
          }
          menuItems {
            nextToken
          }
          likes {
            nextToken
          }
          followers {
            nextToken
          }
          following {
            nextToken
          }
          owner
        }
        createdAt
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
        owner
      }
      menuItem {
        id
        order
        meal {
          id
          title
          description
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
            owner
          }
          menuItem {
            id
            order
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          createdAt
          recipe
          ingredients {
            items
          }
          steps {
            description
          }
          tags
          owner
        }
        createdBy {
          id
          username
          email
          firstName
          lastName
          bio
          meals {
            nextToken
          }
          menuItems {
            nextToken
          }
          likes {
            nextToken
          }
          followers {
            nextToken
          }
          following {
            nextToken
          }
          owner
        }
        owner
      }
      createdBy {
        id
        username
        email
        firstName
        lastName
        bio
        image {
          file {
            bucket
            region
            key
          }
        }
        meals {
          items {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          nextToken
        }
        menuItems {
          items {
            id
            order
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            owner
          }
          nextToken
        }
        followers {
          items {
            id
            owner
          }
          nextToken
        }
        following {
          items {
            id
            owner
          }
          nextToken
        }
        owner
      }
      createdAt
      recipe
      ingredients {
        image {
          file {
            bucket
            region
            key
          }
        }
        items
      }
      steps {
        image {
          file {
            bucket
            region
            key
          }
        }
        description
      }
      tags
      owner
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
        image {
          file {
            bucket
            region
            key
          }
        }
        description
        likes {
          items {
            id
            owner
          }
          nextToken
        }
        inspiredBy {
          id
          title
          description
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
            owner
          }
          menuItem {
            id
            order
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          createdAt
          recipe
          ingredients {
            items
          }
          steps {
            description
          }
          tags
          owner
        }
        menuItem {
          id
          order
          meal {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          owner
        }
        createdBy {
          id
          username
          email
          firstName
          lastName
          bio
          meals {
            nextToken
          }
          menuItems {
            nextToken
          }
          likes {
            nextToken
          }
          followers {
            nextToken
          }
          following {
            nextToken
          }
          owner
        }
        createdAt
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
        owner
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
      meal {
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
        likes {
          items {
            id
            owner
          }
          nextToken
        }
        inspiredBy {
          id
          title
          description
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
            owner
          }
          menuItem {
            id
            order
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          createdAt
          recipe
          ingredients {
            items
          }
          steps {
            description
          }
          tags
          owner
        }
        menuItem {
          id
          order
          meal {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          owner
        }
        createdBy {
          id
          username
          email
          firstName
          lastName
          bio
          meals {
            nextToken
          }
          menuItems {
            nextToken
          }
          likes {
            nextToken
          }
          followers {
            nextToken
          }
          following {
            nextToken
          }
          owner
        }
        createdAt
        recipe
        ingredients {
          items
        }
        steps {
          description
        }
        tags
        owner
      }
      createdBy {
        id
        username
        email
        firstName
        lastName
        bio
        image {
          file {
            bucket
            region
            key
          }
        }
        meals {
          items {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          nextToken
        }
        menuItems {
          items {
            id
            order
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            owner
          }
          nextToken
        }
        followers {
          items {
            id
            owner
          }
          nextToken
        }
        following {
          items {
            id
            owner
          }
          nextToken
        }
        owner
      }
      owner
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
        meal {
          id
          title
          description
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
            owner
          }
          menuItem {
            id
            order
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          createdAt
          recipe
          ingredients {
            items
          }
          steps {
            description
          }
          tags
          owner
        }
        createdBy {
          id
          username
          email
          firstName
          lastName
          bio
          meals {
            nextToken
          }
          menuItems {
            nextToken
          }
          likes {
            nextToken
          }
          followers {
            nextToken
          }
          following {
            nextToken
          }
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      firstName
      lastName
      bio
      image {
        file {
          bucket
          region
          key
        }
      }
      meals {
        items {
          id
          title
          description
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
            owner
          }
          menuItem {
            id
            order
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          createdAt
          recipe
          ingredients {
            items
          }
          steps {
            description
          }
          tags
          owner
        }
        nextToken
      }
      menuItems {
        items {
          id
          order
          meal {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          createdBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          meal {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          likedBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          owner
        }
        nextToken
      }
      followers {
        items {
          id
          user {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          followedBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          owner
        }
        nextToken
      }
      following {
        items {
          id
          user {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          followedBy {
            id
            username
            email
            firstName
            lastName
            bio
            owner
          }
          owner
        }
        nextToken
      }
      owner
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
        username
        email
        firstName
        lastName
        bio
        image {
          file {
            bucket
            region
            key
          }
        }
        meals {
          items {
            id
            title
            description
            createdAt
            recipe
            tags
            owner
          }
          nextToken
        }
        menuItems {
          items {
            id
            order
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            owner
          }
          nextToken
        }
        followers {
          items {
            id
            owner
          }
          nextToken
        }
        following {
          items {
            id
            owner
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
