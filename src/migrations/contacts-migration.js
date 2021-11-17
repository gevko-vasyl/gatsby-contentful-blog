module.exports = function (migration) {
  const contacts = migration.createContentType("contacts", {
    name: "Contacts",
    description: "Contacts of author of the blog",
  })

  contacts.createField("contacts", {
    name: "Contacts",
    type: "Symbol",
    required: true,
  })
}
