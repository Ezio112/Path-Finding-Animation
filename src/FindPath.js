import RunDfs from "./Algorithms/dfs.js";
import RunBfs from "./Algorithms/bfs.js";
function getBox(i,j){
  return document.querySelector(".i"+i).querySelector(".j"+j);
}
var index=0,path=[],agent;
function showOnScren(){
  if(index === path.length){
    clearInterval(agent);
    index=0;
    return;
  }
  console.log(path[index][0],path[index][1]);
  getBox(path[index][0],path[index][1]).style.backgroundColor="yellow";
  ++index;
}

function FindPath(algo){
  console.log(algo);
  if(algo === "DFS"){
    path=RunDfs(10,10);
  }
  else if(algo === "BFS"){
    path=RunBfs(10,10);
  }
  agent=setInterval(showOnScren,1000);
}
export default FindPath;
