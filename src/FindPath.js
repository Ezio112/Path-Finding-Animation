import RunDfs from "./Algorithms/dfs.js";
import RunBfs from "./Algorithms/bfs.js";
function getBox(i,j){
  return document.querySelector(".i"+i).querySelector(".j"+j);
}
function color(i,j){
  var box=getBox(i,j);
  return box.style.backgroundColor;
}

var index=0,path=[],agent;
function showOnScren(){
  if(index === path.length){
    clearInterval(agent);
    index=0;
    return;
  }
  //console.log(path[index][0],path[index][1]);
  getBox(path[index][0],path[index][1]).style.backgroundColor="yellow";
  ++index;
}
function FindEndpoints(){
  var list=[NaN,NaN];
  for(var i=0;i<10;++i){
    for(var j=0;j<10;++j){
      if(color(i,j)==="green"){
        list[0]=[i,j];
      }
      else if(color(i,j)==="red"){
        list[1]=[i,j];
      }
    }
  }
  return list;
}
function FindPath(algo){

  var Endpoints=FindEndpoints();
  console.log(Endpoints);
  if(algo === "DFS"){
    path=RunDfs(10,10,Endpoints);
  }
  else if(algo === "BFS"){
    path=RunBfs(10,10,Endpoints);
  }
  agent=setInterval(showOnScren,500);
}
export default FindPath;
