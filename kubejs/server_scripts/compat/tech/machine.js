ServerEvents.recipes(e =>{
    e.replaceInput({output:'stellaris:rocket_station'},'minecraft:redstone','oritech:magnetic_coil')

    e.remove({output:'stellaris:water_pump'})
    e.shaped('stellaris:water_pump',[
        'aaa',
        'aba',
        'cdc'],{
            a:'#c:ingots/steel',
            b:'oritech:motor',
            c:'#c:silicon',
            d:'minecraft:bucket'
    })

    e.remove({output:'stellaris:fuel_refinery'})
    e.shaped('stellaris:fuel_refinery',[
        'aaa',
        'aba',
        'cdc'
    ],{
        a:'#c:ingots/steel',
        b:'oritech:motor',
        c:'minecraft:bucket',
        d:'oritech:fluid_pipe'
    })

    e.replaceInput({},'stellaris:cable','#c:gems/fluxite')
    e.replaceInput({output:'stellaris:oil_finder'},'minecraft:redstone_torch','#c:gems/fluxite')
})