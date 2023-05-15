import React from "react";
//!어레이 튜플타입을 이용한 엄격한 접근
function MoreStudy8() {
  // let dog: [string, boolean];
  // dog = ["dog", true];
  //!Tuple 응용 : rest parameter
  // function myfunction(...x :[string, number] ){
  //   console.log(x)
  // }
  // myfunction('kim', 123)  //가능
  // myfunction('kim', 123, 456)  //에러
  // myfunction('kim', 'park')  //에러

  //!tuple 안에도 옵션가능
  //? 옵션기호는 뒤에만 붙일 수 있습니다.
  // type Num = [number, number?, number?];
  // let 변수1: Num = [10];
  // let 변수2: Num = [10, 20];
  // let 변수3: Num = [10, 20, 10];

  //!array 두개를 spread 연산자로 합치는 경우 타입지정
  // let arr = [1, 2, 3];
  // let arr2: [number, number, ...number[]] = [4, 5, ...arr];

  //!숙제1
  // let myfood: [string, number, boolean] = ["chiken", 123, true];
  //!숙제2
  // let arr: [string, number, ...boolean[]] = [
  //   "동서녹차",
  //   4000,
  //   true,
  //   false,
  //   true,
  //   true,
  //   false,
  //   true,
  // ];
  //!숙제3
  // function 함수(...x: [string, boolean, ...(number | string)[]]) {}
  //!숙제4
  function myfunction(...x: (string | number)[]): [string[], number[]] {
    let strings: string[] = [];
    let numbers: number[] = [];
    x.forEach((item) => {
      if (typeof item === "string") {
        strings.push(item);
      } else {
        numbers.push(item);
      }
    });
    return [strings, numbers];
  }
  console.log(myfunction("b", 5, 6, 8, "a"));
  return (
    <div>
      <span>공부날짜:5월15일</span>
      <div>오늘은:{Date()}</div>
      <div></div>
    </div>
  );
}

export default MoreStudy8;
