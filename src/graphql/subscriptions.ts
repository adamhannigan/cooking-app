// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($owner: String!) {
    onCreateLike(owner: $owner) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($owner: String!) {
    onUpdateLike(owner: $owner) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($owner: String!) {
    onDeleteLike(owner: $owner) {
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
export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower($owner: String!) {
    onCreateFollower(owner: $owner) {
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
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower($owner: String!) {
    onUpdateFollower(owner: $owner) {
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
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower($owner: String!) {
    onDeleteFollower(owner: $owner) {
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
export const onCreateMeal = /* GraphQL */ `
  subscription OnCreateMeal($owner: String!) {
    onCreateMeal(owner: $owner) {
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
export const onUpdateMeal = /* GraphQL */ `
  subscription OnUpdateMeal($owner: String!) {
    onUpdateMeal(owner: $owner) {
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
export const onDeleteMeal = /* GraphQL */ `
  subscription OnDeleteMeal($owner: String!) {
    onDeleteMeal(owner: $owner) {
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
export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem($owner: String!) {
    onCreateMenuItem(owner: $owner) {
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
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem($owner: String!) {
    onUpdateMenuItem(owner: $owner) {
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
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem($owner: String!) {
    onDeleteMenuItem(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
