
function sqrt(n) {
  if (n < 0) {
    return -1;
  }
  if (n === 0 || n === 1) {
    return n;
  }

  var precision = .0001;
  var start = 0;
  var end = n;

  if (n < 1) {
    end = 1;
  }

  while (end - start > precision) {
    var mid = (start + end) / 2;
    var midSqare = mid * mid;
    if (midSqare === n) {
      return mid;
    } else if (midSqare < n) {
      start = mid;
    } else {
      end = mid;
    }
  }
  return (start + end) / 2;
}
