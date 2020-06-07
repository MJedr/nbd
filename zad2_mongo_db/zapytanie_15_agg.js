// 15
// aggregate
var query = db.people.aggregate(
    [
        { $unwind : "$credit" },
        { $match : { sex : "Female", nationality : "Poland"}},
        {$group : { _id : "$credit.currency", meanBalance : {$avg : "$credit.balance"}, sumBalance : {$sum : "$credit.balance"}}}
    ]
  )
printjson(query.toArray());