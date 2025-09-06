PlayerEvents.loggedIn(e =>{
    if(!e.player.stages.has('not_new')){
        e.player.give('ftbquests:book')
        e.player.stages.add('not_new')
    }
})