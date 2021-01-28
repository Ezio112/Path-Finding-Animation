function getBox(i,j){
  return document.querySelector(".i"+i).querySelector(".j"+j);
}
function color(i,j){
  return getBox(i,j).style.backgroundColor;
}
var NumberOfRaw,NumberOfColumn;
//Variables in Bidirectional Search algorithm
var path=[],canReach=false;
var dx=[0, 0,-1,1];
var dy=[1,-1, 0,0];
function valid(x,y){
  return (x>=0 && y>=0 && x<NumberOfRaw && y<NumberOfColumn && (color(x,y) !== "black"));
}
let visitedSource=new Set();
let visitedDestination=new Set();

function bidir(Endpoints){
  var q=[Endpoints[0],Endpoints[1]];
  visitedSource.add(1000000*Endpoints[0][0]+Endpoints[0][1]);
  visitedDestination.add(1000000*Endpoints[1][0]+Endpoints[1][1]);

  while(q.length!==0){
    var [x,y]=q[0];
    q.splice(0,1);

    if(x!==Endpoints[1][0] || y!==Endpoints[1][1])
      path.push([x,y]);

    if(visitedSource.has(1000000*x+y) && visitedDestination.has(1000000*x+y)){
      canReach=true;
      return;
    }


    var origin=1;
    if(visitedSource.has(1000000*x+y))
      origin=0;


    for(var dir=0;dir<4;++dir){
      if(valid(x+dx[dir],y+dy[dir])){
        if(origin===0 && visitedSource.has(1000000*(x+dx[dir])+y+dy[dir])) continue;
        if(origin===1 && visitedDestination.has(1000000*(x+dx[dir])+y+dy[dir])) continue;

        q.push([x+dx[dir],y+dy[dir]]);
        if(origin===0)  visitedSource.add(1000000*(x+dx[dir])+y+dy[dir]);
        else visitedDestination.add(1000000*(x+dx[dir])+y+dy[dir]);
      }
    }

  }
}

function RunBdir(n,m,Endpoints){
  NumberOfRaw=n;
  NumberOfColumn=m;
  console.log("Bidirectional Search started");

  bidir(Endpoints);
  path.splice(0,1);
  return {"path":path,"canReach":canReach};
}
export default RunBdir;
