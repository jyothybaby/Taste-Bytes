const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        recipeCount: Int
        savedRecipes: [Recipe]
        savedInventories: [Inventory]
        inventoryCount: Int
        savedGroceries: [Grocery]
        groceryCount: Int
    }
    type Recipe {
        recipeId: ID!
        ingredientLines: [String]
        source: String
        image: String
        link: String
        title: String!
        ingredients: [String]

    }
    type Auth {
        token: ID!
        user: User
      }

    input RecipeInput {
        ingredientLines: [String]
        source: String!
        recipeId: String!
        image: String
        link: String
        title: String!
        ingredients: [String]

      }
    type Inventory {
          _id:ID!
          inventoryLines: [String]  
      }

    input InventoryInput {
        inventoryLines: [String]  
      }


      type Grocery {
        _id:ID!
        groceryLines: [String]  
    }

    input GroceryInput {
        groceryLines: [String]  
    }
    

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveRecipe(recipeData: RecipeInput!): User
        saveInventory(inventoryData: InventoryInput!): User
        saveGrocery(groceryData: GroceryInput!): User
        removeRecipe(recipeId: ID!): User
    }

`;


module.exports = typeDefs;