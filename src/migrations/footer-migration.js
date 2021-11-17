module.exports = function (migration) {
  const footer = migration.createContentType("footer", {
    name: "Footer",
    description: "Footer for my blog page",
  })

  footer.createField("information", {
    name: "Footer aditional information",
    type: "Text",
    required: true,
  })
  footer.createField("bottom", {
    name: "Footer bottom",
    type: "Symbol",
    required: true,
  })
}
