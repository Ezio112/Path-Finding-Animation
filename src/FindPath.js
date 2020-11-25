import RunDfs from "./Algorithms/dfs.js";

function getBox(i,j){
  return document.querySelector(".i"+i).querySelector(".j"+j);
}
var index=0,path=[],agent;
function showOnScren(){
  if(index === path.length){
    clearInterval(agent);
    return;
  }
  console.log(path[index][0],path[index][1]);
  getBox(path[index][0],path[index][1]).style.backgroundColor="yellow";
  ++index;
}
function FindPath(algo){
  console.log(algo);
  if(algo === "DFS"){
    path=RunDfs();
  }
  /*else if(algo === "bfs"){
    RunBFS();
  }*/
  agent=setInterval(showOnScren,1000);
}
export default FindPath;
