ServerEvents.tags("item",e=>{
    e.add('minecraft:ocelot_food','#minecraft:cat_food')
    e.add('caupona:garum_fish','#origins:meat')
    e.add('natures_spirit:pizza_toppings','tide:cooked_fish')
    e.add('natures_spirit:pizza_toppings','tide:cooked_fish_slice')
    e.add('minecraft:fishes','tide:cooked_fish_slice')
    e.add('minecraft:fishes','tide:cooked_fish')

    e.add('c:foods/raw_fish','sushigocrafting:raw_tuna')
})

ServerEvents.recipes(e =>{
    e.smelting('tide:cooked_fish','sushigocrafting:raw_tuna',0.1,200)
    e.smoking('tide:cooked_fish','sushigocrafting:raw_tuna',0.1,200)
    e.campfireCooking('tide:cooked_fish','sushigocrafting:raw_tuna',0,200)
})