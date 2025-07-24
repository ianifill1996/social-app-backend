import express from "express";
import Post from '../models/Post.js';
import {authMiddleware} from "../utils/auth.js";

const router = new express.Router();

router.get('/', async (req, res )=> {
    try {
        const post = await Post.find ({author: req});

        res.json(post);

    }catch (error) {
        console.error(error);
        res.status(400).json(error)
    }
})

router.post("/", async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        author: req.user._id,
      });
      res.json(newPost);
    } catch (error) {
      console.error(error);
      res.status(400).json(error);
    }
  });
  
  export default router;