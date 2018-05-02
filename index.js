function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return getFirstSelector('#nested').querySelector('.target')
}

function deepestChild() {

}

function increaseRankBy(n) {
  var rList = getFirstSelector('.ranked-list').children
  for (let i = 0; i < rList.length; i++) {
    rList[i].innerHTML = parseInt(rList[i].innerHTML) + n;
  }
}
