migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d6ie6c6hz74r15u")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d6ie6c6hz74r15u")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
