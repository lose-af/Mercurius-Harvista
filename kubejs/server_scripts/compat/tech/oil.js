ServerEvents.tags("fluid",e=>{
    e.add('c:oil','stellaris:oil')
    e.add('c:biodiesel','stellaris:oil')
})

ServerEvents.recipes(e => {
    e.custom({
  "type": "stellaris:fuel_refinery",
  "energyContainer": 100,
  "ingredient": {
    "fluid": "oritech:still_oil",
    "id": "stellaris:oil",
    "amount": 10
  },
  "fuel": {
    "fluid": "stellaris:fuel",
    "id": "stellaris:fuel",
    "amount": 5
  },
  "diesel": {
    "fluid": "stellaris:diesel",
    "id": "stellaris:diesel",
    "amount": 5
  }
})
  e.custom({
  "type": "oritech:centrifuge_fluid",
  "fluidInput": {
    "amount": 1000,
    "fluid": "oritech:still_oil"
  },
  "fluidOutputs": [
    {
      "amount": 1000,
      "fluid": "stellaris:oil"
    }
  ],
  "ingredients": [
    {
      "item": "oritech:iron_dust"
    }
  ],
  "results": [],
  "time": 100
})
})