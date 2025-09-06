LootJS.modifiers(e =>{
    e.addBlockModifier("caupona:wolfberry_leaves").removeLoot("caupona:wolfberry_leaves")
    e.addBlockModifier("caupona:wolfberry_leaves").randomChance(0.1).addLoot('minecraft:stick')
})