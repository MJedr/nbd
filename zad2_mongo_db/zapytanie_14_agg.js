// 14
// aggregation
// BMI = weight/(height**2)
var query = db.people.aggregate([{'$match':{ 'height':{'$exists':true}, 'weight':{'$exists':true} }},
                        {$addFields: {bmi: {$avg: [{ $divide: [ "$weight", {$pow: ["$height", 2]} ] }]}}},
                        {$group : { _id : "$nationality", meanBMI : {"$avg" : "$bmi"}, maxBMI : {"$max" : "$bmi"}, minBMI : { $min : "$bmi"}}} 
])     
printjson(query.toArray());