import React from "react";
//!Generic 함수 만들기.
//!extends
function MoreStudy6() {
  //!타입을 지정하면 평생 그 타입이다.
  //a는 사람이 보기에 분명히 숫자가 맞지만 아직 타입은 unknown 타입
  // function 함수(x: unknown[]) {
  //   return x[0];
  // }

  // let a = 함수([4,2])
  // console.log(a)

  //!Generic애초에 타입을 파라미터로 함수에 미리 입력
  // function myfunction<t>(x: t[]): t {
  //   return x[0];
  // }
  // let a = myfunction<number>([4, 2]);
  // let b = myfunction<string>(["kim", "park"]);

  //extends사용
  // function 함수<MyType>(x: MyType) {
  //   return x - 1
  // }

  // let a = 함수<number>(100)
  // //이렇게 된다면 x가 string이면 큰일이라서 막아준다.
  //!extends 사용으로 조건식을 걸어준느낌
  // function 함수<MyType extends number>(x: MyType) {
  //   return x - 1;
  // }

  // let a = 함수<number>(100);

  // interface lengthCheck {
  //   length : number
  // }
  // function 함수<MyType extends lengthCheck>(x: MyType) {
  //   return x.length
  // }

  // let a = 함수<string>('hello')  //가능
  // let a = 함수<number>(1234) //에러남

  //!숙제 1

  // function myf<myt extends string | string[]>(x: myt) {
  //   return x.length;
  // }

  // myf<string>("hello");
  // myf<string[]>(["kim", "park"]);

  //!숙제 2
  // interface Animal {
  //   name : string;
  //   age : number
  // }

  // let data = '{"name" : "dog", "age" : 1 }'

  // function myf <Animal>(data:string):Animal{
  //   return JSON.parse(data);
  // }
  // myf<Animal>(data)

  //!숙제 3
  class Person<T> {
    name;
    constructor(a: T) {
      this.name = a;
    }
  }
  let a = new Person<string>("어쩌구");
  console.log(a.name); //string 타입이 되었넹
  return (
    <div>
      <span>공부날짜:5월15일</span>
      <div>오늘은:{Date()}</div>
      <div></div>
    </div>
  );
}

export default MoreStudy6;
