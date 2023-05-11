import React from "react";
//!Narrowing 할 수 있는 방법 더 알아보기

function MoreStudy2() {
  //!if문을 2개써야한다
  // function myfunc (x:string|undefined){
  //   if(typeof x==="string"){

  //   }else{

  //   }
  // }
  //! 변환)&& 연산자로 if문 많이 쓰는대신 undefined와 null을 잡을수 있다.
  // function myfunc(x: string | undefined) {
  //   if (x && typeof x === "string") {
  //   }
  // }
  // && 연산자의 다른 기능

  // 원래 && 이건 조건식 2개가 참이면 전부 참으로 판정해주세요~ 라는 논리연산자인데
  // 여러개를 사용하면 이상한 현상이 있습니다.
  // && 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면
  // && 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남겨줍니다.
  // falsy 값은 false와 유사한 기능을 하는 null, undefined, NaN 이런 값들을 의미합니다.
  // 1 && null && 3   // null이 남음
  // undefined && '안녕' && 100  // undefined 남음

  // 이걸 약간 exploit 하면 if문을 조금 더 간략하게 쓸 수 있습니다.

  //! in 키워드로 object  narrowing 하기
  //각각 다른 배타적인 속성이 있을때 in을사용하자
  //속성명in오브잭트자료
  // type Fish = { swim: number };
  // type Bird = { fly: string };
  // function 함수(animal: Fish | Bird) {
  //   if ("swim" in animal) {
  //     return animal.swim;
  //   }
  //   return animal.fly;
  // }
  // 함수({ swim: 1, fly: "x" });
  //!class로부터 생산된 object라면 instanceof로 narrowing
  // let 날짜 = new Date();
  // if (날짜 instanceof Date) {
  //   console.log("참이에요");
  // }

  //!비슷한 object 타입일 경우  literal type이 있으면 narrowing
  // type Car = {
  //   wheel: "4개";
  //   color: string;
  // };
  // type Bike = {
  //   wheel: "2개";
  //   color: string;
  // };

  // function 함수(x: Car | Bike) {
  //   if (x.wheel === "4개") {
  //     console.log("이 차는 " + x.color);
  //   } else {
  //     console.log("이 바이크는 " + x.color);
  //   }
  // }

  return (
    <div>
      <span>공부날짜:5월11일</span>
      <div>오늘은:{Date()}</div>
    </div>
  );
}

export default MoreStudy2;
