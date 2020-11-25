function getBox(i,j){
  return document.querySelector(".i"+i).querySelector(".j"+j);
}
function color(i,j){
  return getBox(i,j).style.backgroundColor;
}

//Variables in DFS algorithm
var path=[];
var dx=[0, 0,-1,1];
var dy=[1,-1, 0,0];
function valid(x,y){
  return (x>=0 && y>=0 && x<5 && y<5);
}
let visited = new Set();

//DFS algorithm
function dfs(i,j){
  if(visited.has(i*1000+j)) return;
  else  visited.add(i*1000+j);

  path.push([i,j]);
  for(var dir=0;dir<4;++dir){
    var x=i+dx[dir];
    var y=j+dy[dir];
    if(valid(x,y) && color(x,y)==="blue"){
      dfs(x,y);
    }
  }
}

function RunDfs(n,m){
  console.log("DFS started")
  dfs(0,0);
  return path;
}
export default RunDfs;
