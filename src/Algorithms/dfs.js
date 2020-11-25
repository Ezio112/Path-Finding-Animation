function getBox(i,j){
  return document.querySelector(".i"+i).querySelector(".j"+j);
}
var i=0,j=0,MyAgent;
function NextStep(){
  getBox(i,j).style.backgroundColor="yellow";
  i=i+Math.floor((j+1)/5);
  j=(j+1)%5;
  if(i === 5 && j === 0){
    clearInterval(MyAgent);
  }
}
function RunDfs(n,m){
  MyAgent=setInterval(NextStep,1000);
  console.log("DFS started")
}
export default RunDfs;
