const bookValidator = (req, res, next) => {
  const {
    title,
    author,
    description,
    language,
    publisher,
    categories,
    pageCount,
    publishedDate,
    isbn,
  } = req.body;
  if (!title?.length) {
    return res.status(400).json({
      status: 400,
      error: "Title is required",
    });
  }
  if (!author?.length) {
    return res.status(400).json({
      status: 400,
      error: "Author is required",
    });
  }
  if (!description?.length) {
    return res.status(400).json({
      status: 400,
      error: "Description is required",
    });
  }
  if (!language?.length) {
    return res.status(400).json({
      status: 400,
      error: "Language is required",
    });
  }
  if (!publisher?.length) {
    return res.status(400).json({
      status: 400,
      error: "Publisher is required",
    });
  }
  if (!categories?.length) {
    return res.status(400).json({
      status: 400,
      error: "At least one category is required",
    });
  }
  if (!Number.isInteger(pageCount) || +pageCount < 1) {
    return res.status(400).json({
      status: 400,
      error: "Page count is invalid",
    });
  }
  if (!publishedDate?.length) {
    return res.status(400).json({
      status: 400,
      error: "Published date is required",
    });
  }
  next();
};
