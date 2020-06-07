// 12
// map-reduce
var mapCreditBalance = function() {
this.credit.forEach(function(account){
    var balance = Number(account.balance);
    if(!isNaN(balance))
        emit(account.currency, {sum: balance})
});
};

var reduceCreditBalance = function(key, val) {
sum = 0;
val.forEach(function(item){
    sum += item.sum;
});
return {'sum': sum}
};

db.people.mapReduce(
mapCreditBalance,
reduceCreditBalance,
    { out: "map_reduce_credit_balance"},
)

printjson((db.map_reduce_credit_balance.find({}).toArray()));
