module.exports = function (migration) {
  const content = migration.createContentType("content", {
    name: "Content",
    description: "Content for my blog page",
  })

  content.createField("title", {
    name: "Post title",
    type: "Symbol",
    required: true,
  })

  content.createField("slug", {
    name: "Slug",
    type: "Symbol",
    required: true,
  })

  content.createField("publishedDate", {
    name: "Published Date",
    type: "Date",
    required: true,
  })

  content.createField("excerpt", {
    name: "Excerpt",
    type: "Symbol",
    required: true,
  })

  content.createField("image", {
    name: "Post image",
    type: "Link",
    linkType: "Asset",
    required: true,
  })

  content.createField("content", {
    name: "Post content",
    type: "Text",
    required: true,
  })
}
