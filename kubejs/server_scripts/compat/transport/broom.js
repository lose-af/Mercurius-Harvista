ServerEvents.recipes(e =>{
    e.remove({output:'elainabroom:elaina_broom'})
    e.shaped('elainabroom:elaina_broom',[
        ' bc',
        ' ad',
        'a  '
    ],{
        a:'oritech:carbon_fibre_strands',
        b:'oritech:motor',
        c:'immersive_aircraft:propeller',
        d:'oritech:basic_battery'
    })
})