// 11

// map reduce (weight)
var mapSexWeightHeight = function() {
  var weightHeightMapping = {avgWeight: this.weight,
                             avgHeight: this.height}
    emit(this.sex, weightHeightMapping);
  };

var reduceCalculateMeanHeight = function(key, val) {
  let heightsArray = val.map(x => x.avgHeight);
  let weightsArray =  val.map(x => x.avgWeight);
  let meanHeight = Array.avg(heightsArray.filter(Boolean))
  let meanWeight = Array.avg(weightsArray.filter(Boolean));
    return {'meanWeight': meanWeight, 'meanHeight': meanHeight}};

  db.people.mapReduce(
    mapSexWeightHeight,
    reduceCalculateMeanHeight,
      { out: "map_reduce_weight_height"},
    )


  printjson((db.map_reduce_weight_height.find({})).toArray());