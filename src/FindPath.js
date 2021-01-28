import RunDfs from "./Algorithms/dfs.js";
import RunBfs from "./Algorithms/bfs.js";
import RunBdir from "./Algorithms/bidir.js";
function getBox(i,j){
  return document.querySelector(".i"+i).querySelector(".j"+j);
}
function color(i,j){
  var box=getBox(i,j);
  return box.style.backgroundColor;
}

var index=0,path=[],canReach=false,agent;

//It executes at regular intervals to change the colour of next box in path.
function showOnScren(){
  if(index === path.length){
    clearInterval(agent);
    index=0;

    if(canReach===false) alert("It was impossible to reach destination.");
    else  alert("Destination was reached successfully.");

    return;
  }
  getBox(path[index][0],path[index][1]).style.backgroundColor="yellow";
  ++index;
}


//Returns array of begining and starting point coordinates.
//Returns -1 if a Component is not found in gaph;
function FindEndpoints(n,m){
  var list=[-1,-1];
  for(var i=0;i<n;++i){
    for(var j=0;j<m;++j){
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

//Choose which algorithm is to be called.
function FindPath(algo,n,m){

  var Endpoints=FindEndpoints(n,m);
  //Checks for invalid graph.
  if(Endpoints[0]===-1 || Endpoints[1]===-1){
    alert("Wrong selection.");
    return;
  }

  if(algo === "DFS"){
    var route=RunDfs(n,m,Endpoints);
    path=route.path;
    canReach=route.canReach;
  }
  else if(algo === "BFS"){
    var route=RunBfs(n,m,Endpoints);
    path=route.path;
    canReach=route.canReach;
  }
  else if(algo==="BiDir"){
    var route=RunBdir(n,m,Endpoints);
    path=route.path;
    canReach=route.canReach;
  }
  agent=setInterval(showOnScren,500);
}
export default FindPath;
