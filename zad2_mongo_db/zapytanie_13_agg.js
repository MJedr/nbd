// 13
// agregation
var query = db.people.aggregate( [ {$group: {_id: "job", unique_jobs: {$addToSet: "$job"} } }])
printjson(query.toArray());