// Find the number of lakes on a given map.
// The map is represented by a bi-dimensional matrix where
// value === 1  means water, while a value === 0 means land.

// test > countLakes
// # countLakes([[1,1,0,0,0],[1,0,0,1,1],[0,1,0,0,0],[0,1,0,0,1]]) == 4 (Find the number of lakes on a given map)
// # countLakes([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]) == 0 (Return 0 if there are no even-occurrence items)
exports.countLakes = function(arr) {
  var map = arr.slice();
  var lakes = 0;

  function cleanLake(x,y) {
    if (map[x] === undefined || !map[x][y]) {
      return;
    }

    map[x][y] = 0;

    cleanLake(x,y+1);
    cleanLake(x-1,y);
    cleanLake(x+1,y);
    cleanLake(x,y-1);
  }

  for (var x = 0; x < map.length; x++) {
    for (var y = 0; y < map[0].length; y++) {
      if (map[x][y] === 1) {
        lakes += 1;
        cleanLake(x,y);
      }
    }
  }
  return lakes;
};
