const { postService } = require('../services');

const newPost = async (req, res) => {
  try {
    const post = req.body;
    const { id } = req.user;
    const result = await postService.newPost(post, id);
    if (result.message) return res.staus(400).json(result);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getPost = async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await postService.getpost(userId);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getPostId = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const result = await postService.getPostId(userId, id);
    if (result.message) return res.status(404).json(result);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const editpost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const post = req.body;
    const result = await postService.editPost(post, id, userId);
    if (result.message) return res.staus(401).json(result);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  newPost,
  getPost,
  getPostId,
  editpost,
};