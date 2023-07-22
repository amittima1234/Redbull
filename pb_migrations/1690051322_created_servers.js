migrate((db) => {
  const collection = new Collection({
    "id": "9ulfixf8v6wuc2x",
    "created": "2023-07-22 18:42:02.108Z",
    "updated": "2023-07-22 18:42:02.108Z",
    "name": "servers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ibpsascc",
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
        "id": "trjlhcso",
        "name": "IP_address",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("9ulfixf8v6wuc2x");

  return dao.deleteCollection(collection);
})
