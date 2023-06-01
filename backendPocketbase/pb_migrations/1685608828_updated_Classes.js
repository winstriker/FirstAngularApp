migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qgfkkw9aumwb8jc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4rfbheid",
    "name": "students",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "d6ie6c6hz74r15u",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qgfkkw9aumwb8jc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4rfbheid",
    "name": "students",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "d6ie6c6hz74r15u",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
