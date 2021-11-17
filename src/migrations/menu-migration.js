module.exports = function (migration) {
  const menu = migration.createContentType("menu", {
    name: "Menu",
    description: "Menu items list",
  })

  menu.createField("homePage", {
    name: "Home Page",
    type: "Symbol",
    required: true,
  })

  menu.createField("secondPage", {
    name: "Second Page",
    type: "Symbol",
    required: true,
  })

  menu.createField("thirdPage", {
    name: "Third Page",
    type: "Symbol",
    required: false,
  })
  menu.createField("fourthPage", {
    name: "Fourth Page",
    type: "Symbol",
    required: false,
  })
}
