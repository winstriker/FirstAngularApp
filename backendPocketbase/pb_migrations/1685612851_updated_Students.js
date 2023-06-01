migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d6ie6c6hz74r15u")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d6ie6c6hz74r15u")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
