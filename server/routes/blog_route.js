const express = require("express");
const router = express.Router();
const bloginfo = require("../model/blog_model");

router.post("/addBlog", async (req, res) => {
  const blogEntry = new bloginfo({
    blog_type: req.body.blog_type,
    blog: req.body.blog,
    blog_description: req.body.blog_description,
    create_by: req.body.create_by,
    c_date: req.body.c_date,
  });
  blogEntry.save();
});

// All record
router.get("/displayRecord", async (req, res) => {
  const data = await bloginfo.find();
  res.send(data);
});

// show only blog type
router.get("/getdistinct", async (req, res) => {
  const result = await bloginfo.distinct("blog_type");
  res.send(result);
});

// Specific Type and its detail
router.get("/displayRecord1/:type", async (req, res) => {
  const data = await bloginfo.find({ blog_type: req.params.type });
  res.send(data);
});

module.exports = router;
