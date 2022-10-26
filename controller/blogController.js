const Blogs = require("../models/blog");

exports.index = function (req, res, next) {
  const blog = Blogs.find();

  res.status(200).json({
    message: "Successfully loaded",
    data: blog,
  });
};

exports.add = async (req, res, next) => {
  const { title, detail } = req.body;

  const blog = new Blog({
    title: title,
    detail: detail,
  });

  await blog.save();

  res.status(201).json({
    message: "Successfully added",
  });
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;

  await Blog.findByIdAndDelete(id);

  res.status(200).json({
    message: "Successfully removed",
  });
};
