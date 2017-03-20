
/** themas indexes **/
db.getCollection("themas").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** themas indexes **/
db.getCollection("themas").ensureIndex({
  "body": NumberInt(1)
},{
  "unique": true
});

/** themas indexes **/
db.getCollection("themas").ensureIndex({
  "url": NumberInt(1)
},{
  "unique": true
});

/** themas records **/
db.getCollection("themas").insert({
  "_id": ObjectId("58d032d080d40fa805000029"),
  "name": "Заказ билета",
  "body": "Здесь в скором времени вы сможете заказать билет в театр",
  "url": "order"
});
db.getCollection("themas").insert({
  "_id": ObjectId("58d0335980d40fa81400002a"),
  "name": "Добро пожаловать в онлайн-помощник театра!",
  "body": "Здесь вы скоро сможете прочесть новости театра, ближайшие премьеры и много всего интересного!",
  "url": "home"
});
db.getCollection("themas").insert({
  "_id": ObjectId("58d033b580d40fc015000029"),
  "name": "Расписание ближайших спектаклей",
  "body": "И даже здесь скоро появится удобное расписание ваших любимых премьер!",
  "url": "schedule"
});
db.getCollection("themas").insert({
  "_id": ObjectId("58d0343880d40ff817000029"),
  "name": "Галлерея",
  "body": "Скоро здесь будет фото самых ярких и впечатляющих представлений нашего театра!",
  "url": "gallery"
});
db.getCollection("themas").insert({
  "_id": ObjectId("58d0345380d40ff012000029"),
  "name": "Контакты",
  "body": "Наши контакты...",
  "url": "contacts"
});
