const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const PersonSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        default: 0
    }
})
PersonSchema.plugin(AutoIncrement, {inc_field: 'id'})

const PersonModel = mongoose.model('Person', PersonSchema)

module.exports = PersonModel
