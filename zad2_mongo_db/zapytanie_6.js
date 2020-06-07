// 6
db.people.insert( 
    {
        "sex": "Male",
        "first_name": "Marcjanna",
        "last_name": "J",
        "job": "Software Engineer",
        "email": "mj@pjatk.edu.pl",
        "location": {
            "city": "Geneva",
            "address": {
                "streetname": "Rue de Meryin",
                "streetnumber": "1"
            }
        },
        "description": "vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
        "height": {
            "numberDecimal":174.38
        },
        "weight": {
            "$numberDecimal": 60.81
        },
        "birth_date": {
            "$date": "1995-02-21T02:55:03.000Z"
        },
        "nationality": "Poland",
        "credit": [{
            "type": "switch",
            "number": "6000",
            "currency": "CHF",
            "balance": "5117.06"
        }]
    }
)