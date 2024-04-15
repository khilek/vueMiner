import { reactive } from 'vue'
import { clickUpgrades } from "./models/ClickUpgrade.js"
import { autoUpgrades } from "./models/AutoUpgrade.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/ 
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  cheese: 10000,


  
  clickUpgrades: [
      new clickUpgrades ({
      name: 'pickaxe',
      price: 100,
      quantity: 0,
      multiplier: 1
    }),

   new clickUpgrades ({
      name: 'drill',
      price: 200,
      quantity: 0,
      multiplier: 10
    
  }),
  ],


  autoUpgrades: [
      new autoUpgrades ({
      name: 'rover',
      price: 600,
      quantity: 0,
      multiplier: 20
    }),

   new autoUpgrades ({
      name: 'miner',
      price: 800,
      quantity: 0,
      multiplier: 30
    
  }),
  ],











})
