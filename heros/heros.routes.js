const Heros = require('./heros.controller.js')

module.exports = function(router){
    router.post('/create',Heros.createHero)
    router.get('/get',Heros.getHeros)
    router.get('/get/:id',Heros.getHero)
    router.put('/update/:id', Heros.updateHero)
    router.delete('/delete/:id', Heros.removeHero)
}