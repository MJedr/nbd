// 13
// map reduce
var mapJobs = function() {
  if(!this.job) return;
  emit('jobArray', {jobs : this.job});
}

var reduceJobs = function(key, val) {
  var result = val.map(x => x.jobs);
  result = result.filter(Boolean);
  resultUnique = Array.from(new Set(result));
  return {"unique_jobs": resultUnique};
}

db.people.mapReduce(
  mapJobs,
  reduceJobs,
    { out: "map_reduce_jobs"});

printjson((db.map_reduce_jobs.find({}).toArray()));