
var images = [
  "B.png",
  "C.png",
  "D.png",
  "E.png",
  "F.png",
  "G.png",
  "H.png",
  "I.png",
  "J.png",
  "K.png",
  "L.png",
  "M.png",
  "N.png",
  "O.png",
  "P.png",
  "R.png",
  "S.png",
  "T.png",
  "U.png",
  "V.png",
  "W.png",
  "X.png",
  "Y.png",
  "Z.png",
  "A.png"
];

var i = 0;
function nextsign(){
  
  
    if(i == 25)
    {
      i = 0;
    }
    
 
  
  document.getElementById("sign").src = images[i];
  i++;

}