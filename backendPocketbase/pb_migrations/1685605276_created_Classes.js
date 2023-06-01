migrate((db) => {
  const collection = new Collection({
    "id": "qgfkkw9aumwb8jc",
    "created": "2023-06-01 07:41:16.854Z",
    "updated": "2023-06-01 07:41:16.854Z",
    "name": "Classes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lkhdijd0",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qgfkkw9aumwb8jc");

  return dao.deleteCollection(collection);
})
