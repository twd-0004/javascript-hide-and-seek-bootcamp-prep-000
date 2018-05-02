function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return getFirstSelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  var all = document.querySelectorAll('.ranked-list');
  var rList = [];
  for (let i = 0; i < all.length; i++) {
    rList = all[i].children;
    console.log(rList);
    for (let ii = 0; ii < rList.length; ii++) {
      rList[ii].innerHTML = parseInt(rList[ii].innerHTML) + n;
    }
    console.log(i);
  }
}

function deepestChild() {
  var GN = getFirstSelector('#grand-node');
  var current = GN;
  var next = GN;
    while (next != 'null') {
      current = next;
      next = current.querySelector('div');
      consol.log(current, next)
    }
}

function find(array, criteriaFn) {
  let current = array
  let next = []
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}
