ServerEvents.recipes(e =>{
    e.replaceOutput({},'stellaris:steel_ingot','oritech:steel_ingot')
})
LootJS.modifiers(e =>{
    e.addBlockModifier("stellaris:mercury_uranium_ore").removeLoot('stellaris:raw_uranium')
    e.addBlockModifier("stellaris:mercury_uranium_ore").randomChance(1).addLoot('oritech:raw_uranium')

    e.addBlockModifier("stellaris:mars_plutonium_ore").removeLoot('stellaris:plutonium_piece')
    e.addBlockModifier("stellaris:mars_plutonium_ore").randomChance(1).addLoot('oritech:small_plutonium_dust')
})

ServerEvents.recipes(e =>{
    e.custom({
  "type": "oritech:pulverizer",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": "stellaris:mercury_uranium_ore"
    }
  ],
  "results": [
    {
      "count": 2,
      "id": "oritech:raw_uranium"
    }
  ],
  "time": 120
})
    e.custom({
  "type": "oritech:grinder",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": "stellaris:mercury_uranium_ore"
    }
  ],
  "results": [
    {
      "count": 3,
      "id": "oritech:raw_uranium"
    },
    {
      "count": 1,
      "id": "oritech:small_plutonium_dust"
    }
  ],
  "time": 60
})
    e.remove({output:"stellaris:uranium_ingot"})
    e.replaceOutput({},'stellaris:uranium_ingot','oritech:uranium_dust')
    e.replaceInput({},'stellaris:uranium_ingot','oritech:uranium_gem')

    e.remove({output:"stellaris:plutonium_ingot"})
    e.replaceOutput({},'stellaris:plutonium_ingot','oritech:plutonium_dust')
    e.replaceInput({},'stellaris:plutonium_ingot','oritech:plutonium_dust')
    
    e.custom({
  "type": "oritech:pulverizer",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": "stellaris:mars_plutonium_ore"
    }
  ],
  "results": [
    {
      "count": 2,
      "id": 'oritech:plutonium_dust'
    }
  ],
  "time": 120
})
    e.custom({
  "type": "oritech:grinder",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": "stellaris:mars_plutonium_ore"
    }
  ],
  "results": [
    {
      "count": 3,
      "id": 'oritech:plutonium_dust'
    },
    {
      "count": 1,
      "id": "oritech:small_plutonium_dust"
    }
  ],
  "time": 60
})
})

ServerEvents.recipes(e =>{
    e.custom({
  "type": "oritech:foundry",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": "minecraft:iron_ingot"
    },
    {
      "item": "oritech:quartz_dust"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "refinedstorage:quartz_enriched_iron"
    }
  ],
  "time": 25
})
    e.custom({
  "type": "oritech:foundry",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": 'minecraft:copper_ingot'
    },
    {
      "item": "oritech:quartz_dust"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": 'refinedstorage:quartz_enriched_copper'
    }
  ],
  "time": 25
})
})

ServerEvents.recipes(e =>{
    e.custom({
  "type": "oritech:particle_collision",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": "oritech:fluxite"
    },
    {
      "item": "stellaris:tharsite_ingot"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "oritech:overcharged_crystal"
    }
  ],
  "time": 2000
})
    e.custom({
  "type": "oritech:assembler",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": "stellaris:tharsite_ingot"
    },
    {
      "item": "stellaris:tharsite_ingot"
    },
    {
      "item": "oritech:processing_unit"
    },
    {
      "item": "oritech:adamant_ingot"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "oritech:unholy_intelligence"
    }
  ],
  "time": 120
})
    e.custom({
  "type": "oritech:assembler",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": "oritech:fluxite"
    },
    {
      "item": "oritech:fluxite"
    },
    {
      "item": "stellaris:corronium_ingot"
    },
    {
      "item": "oritech:adamant_ingot"
    }
  ],
  "results": [
    {
      "count": 2,
      "id": "oritech:uranium_gem"
    }
  ],
  "time": 200
})
    e.custom({
  "type": "oritech:foundry",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": "stellaris:corronium_ingot"
    },
    {
      "item": "oritech:adamant_ingot"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "oritech:dubios_container"
    }
  ],
  "time": 60
})
    e.custom({
  "type": "oritech:atomic_forge",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": "oritech:unholy_intelligence"
    },
    {
      "item": "stellaris:solerium"
    },
    {
      "item": "stellaris:solerium"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "oritech:heisenberg_compensator"
    }
  ],
  "time": 60
})
    e.custom({
  "type": "oritech:particle_collision",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": "oritech:fluxite"
    },
    {
      "item": "stellaris:solerium"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "oritech:overcharged_crystal"
    }
  ],
  "time": 1500
})
})