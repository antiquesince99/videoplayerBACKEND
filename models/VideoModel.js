const mongoose = require('../connection')
const schema = new mongoose.Schema({
    Artist: String,
    title: String,
    description: String,
    created: Date,
    profileImg: {
        type: String
    }
})
  

const model = mongoose.model('Videos' , schema);
module.exports = model
