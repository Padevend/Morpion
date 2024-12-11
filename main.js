player_1 = '×'
player_2 = 'o'
_posx = []
_poso = []

ac_player = player_1
function next_player(prev){
  if (prev==player_1) {
    return player_2
  }
  return player_1
}

boxs = document.querySelectorAll("div span")
boxs.forEach((box)=>{
  box.addEventListener("click",()=>{
    if (box.getAttribute("used")!="true") {
      box.setAttribute("used","true")
      pos = box.getAttribute("id")
      box.innerHTML = ac_player
      if (ac_player==player_1) {
        _posx.push(pos)
      } else {
        _poso.push(pos)
      }
      ac_player = next_player(ac_player)
      verify()
    }
  })
  
})

function verify(){
  win_pos.forEach(el=>{
    console.log()
    if(cmpArray(el, _posx)){
      alert("player 1(×) Win")
    } else if (cmpArray(el,_poso)) {
      alert("player 2(o) Win")
    } else if (_poso.length==5 || _posx.length==5) {
      alert("no have winner 🏆 ")
    }
  })
}

function cmpArray(tab1, tab2){
  cmpt = 0
  i = 0
  while(i<tab1.length){
    if(tab2.includes(tab1[i])){
      cmpt += 1
    }
    i+=1
  }
  
  if(cmpt==tab1.length){
    return true
  }
  
  return false
}