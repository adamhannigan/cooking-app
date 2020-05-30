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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
              meal {
                id
                title
                description
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
        menuItem {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
        owner
      }
      owner
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
              meal {
                id
                title
                description
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
        menuItem {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
        owner
      }
      owner
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
              meal {
                id
                title
                description
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
        menuItem {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
        owner
      }
      owner
    }
  }
`;
export const createFollower = /* GraphQL */ `
  mutation CreateFollower(
    $input: CreateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    createFollower(input: $input, condition: $condition) {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
        owner
      }
      owner
    }
  }
`;
export const updateFollower = /* GraphQL */ `
  mutation UpdateFollower(
    $input: UpdateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    updateFollower(input: $input, condition: $condition) {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
        owner
      }
      owner
    }
  }
`;
export const deleteFollower = /* GraphQL */ `
  mutation DeleteFollower(
    $input: DeleteFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    deleteFollower(input: $input, condition: $condition) {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
        owner
      }
      owner
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
      likes {
        items {
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
              meal {
                id
                title
                description
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
        menuItem {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
      menuItem {
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
              meal {
                id
                title
                description
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
        owner
      }
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
      likes {
        items {
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
              meal {
                id
                title
                description
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
        menuItem {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
      menuItem {
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
              meal {
                id
                title
                description
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
        owner
      }
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
      likes {
        items {
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
              meal {
                id
                title
                description
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
        menuItem {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
      menuItem {
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
              meal {
                id
                title
                description
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
        owner
      }
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
export const createMenuItem = /* GraphQL */ `
  mutation CreateMenuItem(
    $input: CreateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    createMenuItem(input: $input, condition: $condition) {
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
              meal {
                id
                title
                description
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
        menuItem {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
        owner
      }
      owner
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
              meal {
                id
                title
                description
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
        menuItem {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
        owner
      }
      owner
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
              meal {
                id
                title
                description
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
        menuItem {
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
              likes {
                nextToken
              }
              inspiredBy {
                id
                title
                description
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
        likes {
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
        owner
      }
      owner
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
        nextToken
      }
      menuItems {
        items {
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
        nextToken
      }
      likes {
        items {
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
        nextToken
      }
      owner
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
        nextToken
      }
      menuItems {
        items {
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
        nextToken
      }
      likes {
        items {
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
        nextToken
      }
      owner
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
        nextToken
      }
      menuItems {
        items {
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
        nextToken
      }
      likes {
        items {
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
        nextToken
      }
      owner
    }
  }
`;
