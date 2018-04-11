function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = earthRadius + arr[0].avgAlt;

    arr = arr.map(function (obj, i) {
      var a = earthRadius + obj.avgAlt;
      delete obj.avgAlt;
      obj.orbitalPeriod = Math.round(2* Math.PI * Math.sqrt(Math.pow(a, 3)/GM));
      return obj;
    });

    return arr;
  }
  
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);