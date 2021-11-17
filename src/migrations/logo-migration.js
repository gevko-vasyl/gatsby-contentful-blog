module.exports = function (migration) {
  const logo = migration.createContentType("logo", {
    name: "Logo",
    description: "Logo for my blog",
  })

  logo.createField("logo", {
    name: "Logo",
    type: "Link",
    linkType: "Asset",
    required: true,
  })
}
