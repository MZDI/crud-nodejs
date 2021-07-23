const mongoose = require('mongoose')
const heroSchema = require('./heros.model')

heroSchema.statics = {
    create : function(data, cb){
        var hero = new this(data)
        hero.save(cb)
    },

    get : function(query, cb){
        this.find(query, cb)
    },

    getByName : function(query, cb){
        this.find(query, cb)
    },

    update : function(query, updateData, cb){
        this.findOneAndUpdate(query, {$set : updateData}, {new : true}, cb)
    },

    delete : function(query, cb){
        this.findAndDelete(query,cb)
    }
}

var herosModel = mongoose.model('Heros', heroSchema)
module.exports = herosModel