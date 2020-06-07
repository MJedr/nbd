// 8
var bulk = db.people.initializeUnorderedBulkOp();
bulk.find( { "location.city": "Moscow" } ).update( { $set: { "location.city": "Moskwa" } } );
bulk.execute();  // 2 modified