// 9
var bulkAddHobby = db.people.initializeUnorderedBulkOp();
bulkAddHobby.find( { "first_name": "Antonio" }).update( { $set: { "hobby": "pingpong" } } )
bulkAddHobby.execute()  // 59 modified