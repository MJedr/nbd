// 11

// aggregation
var query;
query = db.people.aggregate( [ {$group: {_id: "$sex", mean_weight: {$avg: "$weight"} , mean_height: {$avg: "$height"}} }])
printjson(query.toArray()); 