function getBox(i,j){
  return document.querySelector(".i"+i).querySelector(".j"+j);
}
function color(i,j){
  return getBox(i,j).style.backgroundColor;
}
var NumberOfRaw=2,NumberOfColumn=2;
//Variables in BFS algorithm
var path=[];
var dx=[0, 0,-1,1];
var dy=[1,-1, 0,0];
function valid(x,y){
  return (x>=0 && y>=0 && x<NumberOfRaw && y<NumberOfColumn && color(x,y) === "blue");
}
let visited = new Set();
//BFS algorithm
function bfs(i_root,j_root){
  var q=[[i_root,j_root]];

  while(q.length!=0){
    var [x,y]=q[0];
    q.splice(0,1);

    if(visited.has(x*1000+y)) continue;
    else  visited.add(x*1000+y);
    console.log(x,y);
    path.push([x,y]);

    for(var dir=0;dir<4;++dir){
      if(valid(x+dx[dir],y+dy[dir])){
        q.push([x+dx[dir],y+dy[dir]]);
      }
    }
  }
}

function RunBfs(n,m){
  NumberOfRaw=n;
  NumberOfColumn=m;
  console.log("BFS started")
  bfs(0,0);
  return path;
}
export default RunBfs;
