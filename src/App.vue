<script setup>
import { computed, onMounted, ref } from 'vue'
import { AppState } from './AppState.js'
import { gameService } from "./services/GameService.js";

const appState = computed(()=> AppState)

const cheese = computed(()=> AppState.cheese)

const clickUpgrades = computed(() => AppState.clickUpgrades)

const autoUpgrades = computed(() => AppState.autoUpgrades)


function moonMine(){
  console.log('mining');
gameService.moonMine()
gameService.collectClickUpgrades()
gameService.collectAutoUpgrades()
}

function buyClickUpgrades(upgradeName){
  console.log('Buying', upgradeName)

  gameService.buyClickUpgrades(upgradeName)
}

function buyAutoUpgrades(upgradesName){
  console.log('Buying', upgradesName)
  gameService.buyAutoUpgrades(upgradesName)
}

onMounted(()=>{
  setInterval(gameService.collectAutoUpgrades, 3000)
})

</script>


// HTML
<template>
<section class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-4">
          <img class="img-fluid" @click="moonMine()" src="moon.png.png" alt="moon">
        </div>
      </div>
    </section>

<div class="container">
  <div class="row d-flex justify-content-center ">
      <div class="col-4 border border-danger  card bg-warning" id="multiplier">Multiplier</div>
      <div class="col-4 border border-danger rounded-top bg-warning " id="cheese"><span
          class="mdi mdi-cheese">{{ cheese }}</span>
      </div>
      <div class="col-4 border border-danger card bg-warning">Timer</div>
    </div>
</div>

<section class="container-fluid">
      <div class="row ">

        <div class="col-6 d-flex justify-content-around flex-column gap-4">
          <h6 class="text-center">Click Upgrades</h6>
          <button class="btn btn-primary w-50" @click="buyClickUpgrades(buy.name)" v-for="buy in clickUpgrades" :key="buy.name">{{ buy.name }} ${{ buy.price }}</button>

          <button class="btn btn-primary w-50" @click="buyAutoUpgrades(buys.name)" v-for="buys in autoUpgrades" :key="buys.name">{{ buys.name }} ${{ buys.price }}</button>
        </div>

        <div class="col-6 d-flex justify-content-evenly flex-column">
          <h6 class="text-center">Stats</h6>
          <div class="border border-3 border-success" v-for="upgrade in clickUpgrades" :key="upgrade.name">{{ upgrade.name }} {{ upgrade.quantity }}</div>
          <div class="border border-3 border-success" v-for="upgrades in autoUpgrades" :key="upgrades.name">{{ upgrades.name }} {{ upgrades.quantity }}</div>
        </div>
      </div>

    </section>

</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";
</style>