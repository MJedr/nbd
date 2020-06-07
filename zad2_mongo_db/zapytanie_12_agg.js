// 12
// aggregation
var query = db.people.aggregate(
            [
                { $unwind : "$credit" },
                {$group : { _id : "$credit.currency", sumBalance : {$sum : "$credit.balance"}}}
            ]
        );
printjson(query).toArray();