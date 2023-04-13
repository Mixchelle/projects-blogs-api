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

module.exports = {
  newPost,
};