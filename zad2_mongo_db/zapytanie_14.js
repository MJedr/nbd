// 14
// BMI = weight/(height**2)                                       
// map-reduce
var mapBMI = function() {
  var BMI = this.weight/Math.pow(this.height, 2)
    emit(this.nationality, {"bmi": BMI});
  };

var reduceBMIStats = function(key, val) {
  let maxBMI =  Math.max.apply(Math, val.map(x => x.bmi).filter(Boolean));
  let minBMI =   Math.max.apply(Math, val.map(x => x.bmi).filter(Boolean));
  let avgBMI = Array.avg(val.map(x => x.bmi).filter(Boolean));
    return {'meanBMI': avgBMI, 'minBMI': minBMI, 'maxBMI': maxBMI}};

  db.people.mapReduce(
    mapBMI,
    reduceBMIStats,
      { out: "map_reduce_bmi"},
    )

printjson((db.map_reduce_bmi.find({})).toArray());