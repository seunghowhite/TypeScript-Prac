import React from "react";
//!never이란 뭔가?
function MoreStudy3() {
  //!never
  //조건1 return값이 없어야함
  //조건2 endpoint가 없어야함
  // function myfunction ():never{
  //   while(true){
  //     console.log("good");
  //   }
  // }

  //!never 타입이 등장하는 경우1
  // function myf(parameter: string) {
  //   if (typeof parameter == "string") {
  //     console.log(parameter);
  //   } else {
  //     console.log(parameter); //여기서 있을수 없다. 이미 가드에서 걸린다.
  //   }
  // }
  //!never 타입이 등장하는 경우 2
  // const myf =()=>{
  //   throw new Error()
  // }

  return (
    <div>
      <span>공부날짜:5월10일</span>
      <div>오늘은:{Date()}</div>
    </div>
  );
}

export default MoreStudy3;
