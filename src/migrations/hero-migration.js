module.exports = function (migration) {
  const hero = migration.createContentType("hero", {
    name: "Hero",
    description: "Hero image for my blog",
  })

  hero.createField("hero", {
    name: "Hero",
    type: "Link",
    linkType: "Asset",
    required: true,
  })
}
