import { AppState } from "../AppState.js";
import { clickUpgrades } from "../models/ClickUpgrade.js";




class GameService {

  moonMine(){
    console.log('mining');
    AppState.cheese++
  }


  buyClickUpgrades(upgradeName){
const upgradeToBuy = AppState.clickUpgrades.find(upgrade => upgrade.name == upgradeName)
console.log('Buying', upgradeToBuy)
if (AppState.cheese >= upgradeToBuy.price)
AppState.cheese -= upgradeToBuy.price
upgradeToBuy.quantity++
  }

buyAutoUpgrades(upgradesName){
const upgradesToBuy = AppState.autoUpgrades.find(upgrades => upgrades.name == upgradesName)
console.log('Buying', upgradesToBuy)
if(AppState.cheese >= upgradesToBuy.price)
AppState.cheese -= upgradesToBuy.price
upgradesToBuy.quantity++
}

collectClickUpgrades(){
AppState.clickUpgrades.forEach(clickUpgrade => {
  AppState.cheese += clickUpgrade.multiplier * clickUpgrade.quantity
})

}

collectAutoUpgrades(){
  AppState.autoUpgrades.forEach(autoUpgrade => {
    AppState.cheese += autoUpgrade.multiplier * autoUpgrade.quantity
  })
  
  }

clickMultiplierCount(){
  AppState.clickUpgrades.forEach(clickUpgrade => { AppState.multiplier += clickUpgrade.quantity * clickUpgrade.multiplier })
}

autoMultiplierCount(){
  AppState.autoUpgrades.forEach(autoUpgrades =>  AppState.multiplier += autoUpgrades.quantity * autoUpgrades.multiplier )
  console.log("mutiplying")
}

}

export const gameService = new GameService()