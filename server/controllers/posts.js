import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            picturePath,
            userPicturePath: user.picturePath,
            likes: {},
            comments: [],
        });
        await newPost.save();
        
        const post = await Post.find(); //returns all the posts
        res.status(201).json(post); // once a new post is created, the feed will contain all the posts including the new one
        //201 is for success of creating
    } catch (err) {
        res.status(409).json({ message : err.message }); //409 is for error of creating
    }
}

/* READ */
export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post); //200 is for successful request
    } catch (err) {
        res.status(404).json({ message : err.message });
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message : err.message });
    }
}

/* UPDATE */
export const likePost = async (req, res) => {
    try{
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId);
        }
        else {
            post.likes.set(userId, true);
        }
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        );
      
        res.status(200).json(updatedPost);    
    } catch (err) {
        res.status(404).json({ message : err.message });
    }
}