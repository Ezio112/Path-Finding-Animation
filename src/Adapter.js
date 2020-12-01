function getBox(i,j){
  return document.querySelector(".i"+i).querySelector(".j"+j);
}
function color(i,j){
  var box=getBox(i,j);
  return box.style.backgroundColor;
}
function Adapter(i,j){
    getBox(i,j).addEventListener("click",function(){
    console.log(color(i,j));
    if(color(i,j) === "blue"){
      getBox(i,j).style.backgroundColor="black";
    }
    else if(color(i,j) === "black"){
      getBox(i,j).style.backgroundColor="red";
    }
    else if(color(i,j) === "red"){
      getBox(i,j).style.backgroundColor="green";
    }
    else{
      getBox(i,j).style.backgroundColor="blue";
    }
  });
}
function SetAdapter(n,m){
  for(var i=0;i<n;++i){
    for(var j=0;j<m;++j){
      getBox(i,j).style.backgroundColor="blue";
      Adapter(i,j);
    }
  }
}
export default SetAdapter;
