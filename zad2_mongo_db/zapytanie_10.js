// 10
bulkRemoveEmail = db.people.initializeUnorderedBulkOp();
bulkRemoveEmail.find( { "job": "Editor" } ).update( { $unset: { "email": "" } } )
bulkRemoveEmail.execute();  // 86 modified