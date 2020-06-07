// 5
db.people.find({ "birth_date": {$gte: new ISODate("2000-01-01T00:00:00Z") }}, 
               {"first_name": 1, "last_name": 1, "birth_date": 1, _id:0}).pretty();