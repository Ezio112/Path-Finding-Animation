function getBox(i,j){
  return document.querySelector(".i"+i).querySelector(".j"+j);
}
function color(i,j){
  return getBox(i,j).style.backgroundColor;
}
var NumberOfRaw,NumberOfColumn;
//Variables in BFS algorithm
var path=[],canReach=false;
var dx=[0, 0,-1,1];
var dy=[1,-1, 0,0];
function valid(x,y){
  return (x>=0 && y>=0 && x<NumberOfRaw && y<NumberOfColumn && (color(x,y) !== "black" && color(x,y) !== "yellow"));
}
let visited = new Set();
//BFS algorithm
function bfs(Endpoints){
  var q=[Endpoints[0]];

  while(q.length!==0){
    var [x,y]=q[0];
    q.splice(0,1);

    if(visited.has(x*1000000+y)) continue;
    else  visited.add(x*1000000+y);

    if(x===Endpoints[1][0] && y===Endpoints[1][1]){
      canReach=true;
      return;
    }

    path.push([x,y]);
    for(var dir=0;dir<4;++dir){
      if(valid(x+dx[dir],y+dy[dir])){
        q.push([x+dx[dir],y+dy[dir]]);
      }
    }
  }

}

function RunBfs(n,m,Endpoints){
  NumberOfRaw=n;
  NumberOfColumn=m;
  console.log("BFS started");

  bfs(Endpoints);
  path.splice(0,1);
  return {"path":path,"canReach":canReach};
}
export default RunBfs;
