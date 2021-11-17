module.exports = function (migration) {
  const header = migration.createContentType("header", {
    name: "Header",
    description: "Header for my blog page",
  })


  header.createField("bgcolor", {
    name: "Header backgroundcolor",
    type: "Symbol",
    required: true,
  })


  header.createField("banner", {
    name: "Header banner",
    type: "Link",
    linkType: "Asset",
    required: true,
  })
}
