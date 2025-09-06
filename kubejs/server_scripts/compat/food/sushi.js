ServerEvents.recipes(e =>{
    e.shapeless(Item.of('sushigocrafting:nori_sheets'),['3x minecraft:dried_kelp'])
})

ServerEvents.tags("item",e=>{
    e.add('caupona:seafood','sushigocrafting:nori_sheets')

    e.add('c:raw_fishes/tuna','tide:volcano_tuna')
    e.add('c:raw_fishes/tuna','tide:tuna')

    e.add('minecraft:parrot_food','sushigocrafting:rice_crop')
    e.add('minecraft:parrot_food','sushigocrafting:cucumber_crop')
    e.add('minecraft:parrot_food','sushigocrafting:soy_crop')
    e.add('minecraft:parrot_food','sushigocrafting:wasabi_crop')
    e.add('minecraft:parrot_food','sushigocrafting:sesame_crop')
    e.add('minecraft:parrot_food','sushigocrafting:rice_crop')
    e.add('minecraft:parrot_food','sushigocrafting:cucumber_crop')
    e.add('minecraft:parrot_food','sushigocrafting:soy_crop')
    e.add('minecraft:parrot_food','sushigocrafting:wasabi_crop')
    e.add('minecraft:parrot_food','sushigocrafting:sesame_crop')
})

LootJS.modifiers(e=>{
    e.addBlockModifier("minecraft:acacia_leaves")
    .randomChance(0.03)
    .addLoot('sushigocrafting:avocado')
    e.addBlockModifier("minecraft:acacia_leaves")
    .randomChance(0.03)
    .addLoot('sushigocrafting:avocado_sapling')
})