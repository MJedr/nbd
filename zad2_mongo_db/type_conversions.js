function convertDataToNumberFormat(field) {

    db.people.find({field: {$exists: true}}).forEach(function(obj) {
      obj[field] = Number(obj[field]);     
      db.people.save(obj); });
  }

convertDataTypes = function(){
    db.people.find({height: {$exists: true}}).forEach(function(obj) {
      if (Number(obj['height'])){
      obj['height'] = Number(obj.height);     
      db.people.save(obj);
    }});
    print('height converted to number')
    db.people.find({weight: {$exists: true}}).forEach(function(obj) {
      if (Number(obj['weight'])){
      obj['weight'] = Number(obj.weight);     
      db.people.save(obj);
    }});
    print('weight converted to number')
    db.people.find({credit: {$exists: true}}).forEach(function(obj) {
        creditObjects = obj.credit;
        for (var i = 0; i < creditObjects.length; i++) {
        creditObjects[i]["balance"] = parseFloat(creditObjects[i]["balance"]);
        }    
        db.people.save(obj);
        });
    print('balance converted to number')
    db.people.find({birth_date: {$exists: true}}).forEach(function(obj) { 
        obj.birth_date = new Date(obj.birth_date);
        db.people.save(obj);
    });
    print('date converted to date format')
}

convertDataTypes();

db.people.find("$height").forEach(function(obj) {
  if ((obj['height']) === String){
  obj['height'] = Number(obj.height.trim());     
  db.people.save(obj);
}});