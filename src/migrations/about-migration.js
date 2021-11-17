module.exports = function (migration) {
  const about = migration.createContentType("about", {
    name: "About Page",
    description: "Page with information about author of the blog",
  })

  about.createField("title", {
    name: "Title",
    type: "Symbol",
    required: true,
  })

  about.createField("subtitle", {
    name: "Subtitle",
    type: "Symbol",
    required: false,
  })

  about.createField("image", {
    name: "About page image",
    type: "Link",
    linkType: "Asset",
    required: true,
  })
  about.createField("text", {
    name: "Text",
    type: "Text",
    required: true,
  })
}
