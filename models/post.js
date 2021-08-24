const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    content:{
        type: String,
        required: true,
        trim: true
    },
    postedBy:{
        type: String,
        required: true,
        trim: true
    }
});

const Post= mongoose.model('Post', postsSchema);
module.exports = Post;