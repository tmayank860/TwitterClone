const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const {isLoggedIn} = require('../../middleware');


//to get all posts
router.get('/api/post', async(req, res) => {
    const posts= await Post.find({});
    res.json(posts);
}
);


/// to add new post

router.post('/api/post',isLoggedIn, async(req, res) => {
    console.log(req.body);
    const post={
        content: req.body.content,
        postedBy: req.user.username
    }
    const newPost = await Post.create(post);
    res.json(newPost);
}
);

module.exports = router;