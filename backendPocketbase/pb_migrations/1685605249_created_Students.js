migrate((db) => {
  const collection = new Collection({
    "id": "d6ie6c6hz74r15u",
    "created": "2023-06-01 07:40:49.527Z",
    "updated": "2023-06-01 07:40:49.527Z",
    "name": "Students",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v0ciiv0g",
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
        "id": "598pqauv",
        "name": "surname",
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
        "id": "1s1epi4t",
        "name": "birthDate",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("d6ie6c6hz74r15u");

  return dao.deleteCollection(collection);
})
