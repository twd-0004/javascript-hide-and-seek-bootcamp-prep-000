function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return getFirstSelector('#nested').querySelector('.target')
}

function deepestChild() {

}

function increaseRankBy(n) {
  var all = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < all.length; i++)
    var rList = all[i].children
    console.log(rList)
    for (let ii = 0; ii < rList.length; ii++) {
      rList[ii].innerHTML = parseInt(rList[ii].innerHTML) + n;
    }
    console.log(i)
}
