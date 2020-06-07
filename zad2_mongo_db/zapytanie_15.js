// 15
// map-reduce
var mapCreditFemaleAndPolish = function() {
this.credit.forEach(function(account){
    var balance = Number(account.balance);
    if(!isNaN(balance))
        emit(account.currency, {sum: balance, mean: balance})
});
};

var reduceCredit = function(key, val) {
sum = 0;
val.forEach(function(item){
    sum += item.sum;
});
var mean = sum / Object.keys(val).length;
return {'sum': sum, 'mean': mean};
};

db.people.mapReduce(
    mapCreditFemaleAndPolish,
    reduceCredit,
    { out: "map_reduce_credit_polish_female", query : { sex: 'Female', nationality:'Poland' } },
    )

printjson((db.map_reduce_credit_polish_female.find({})).toArray());