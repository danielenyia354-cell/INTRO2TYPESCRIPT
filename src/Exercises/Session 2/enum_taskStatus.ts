enum TaskStatus{
    PENDING = 'PENDING',
    INPROGRESS= 'IN PROGRESS',
    COMPLETED = 'COMPLETED',
  
}


let mySize:TaskStatus = TaskStatus.INPROGRESS;



function checkStatus (mySize:string,){

if( mySize == TaskStatus.PENDING){
    console.log("task is in progress")
}else if (
    mySize = TaskStatus.INPROGRESS
){
    console.log("task is still processing")
}else if (mySize = TaskStatus.COMPLETED){
    console.log("task is done")
}
}
   console.log(checkStatus(mySize))