migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qgfkkw9aumwb8jc")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qgfkkw9aumwb8jc")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
