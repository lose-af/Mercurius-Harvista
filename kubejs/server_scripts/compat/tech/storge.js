ServerEvents.recipes(e =>{
    e.remove('rsinfinitybooster:infinity_card')
    e.shaped('rsinfinitybooster:infinity_card',[
        'aba',
        'bcb',
        'ddd'],{
            a:'minecraft:ender_eye',
            b:'refinedstorage:range_upgrade',
            c:'oritech:fluxite',
            d:'oritech:platinum_ingot'
        })

    e.remove('rsinfinitybooster:dimension_card')
    e.shaped('rsinfinitybooster:dimension_card',[
        'aba',
        'bcb',
        'aba'],{
            a:'rsinfinitybooster:infinity_card',
            b:'oritech:adamant_ingot',
            c:'oritech:enderic_lens'
        })
})