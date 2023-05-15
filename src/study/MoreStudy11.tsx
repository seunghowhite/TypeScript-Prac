import React from "react";
//!key of 연산자
function MoreStudy11() {
  // let obj = { name: "kim", age: 12 };
  // Object.keys(obj); //['name','age]
  //!keyof 사용하기
  // interface Person {
  //   age: number;
  //   name: string;
  // }
  // type PersonKeys = keyof Person;   //"age" | "name" 타입됩니다
  // let a :PersonKeys = 'age'; //가능
  // let b :PersonKeys = 'ageeee'; //불가능

  //!인댁스 시그니처로 변환
  // interface Person {
  //   [key :string]: number;
  // }
  // type PersonKeys = keyof Person;   //string | number 타입됩니다
  // let a :PersonKeys = 'age'; //가능
  // let b :PersonKeys = 123; //가능

  //!Mapped Types를 이용한 타입 바꿔보기
  // type Car = {
  //   color: boolean,
  //   model : boolean,
  //   price : boolean | number,
  // };

  // type TypeChanger <MyType> = {
  //   [key in keyof MyType]: string;
  // };

  // type 새로운타입 = TypeChanger<Car>;

  // let obj :새로운타입 = {
  //   color: 'red',
  //   model : 'kia',
  //   price : '300',
  // }

  //!숙제 1
  // type Bus = {
  //   color: string;
  //   model: boolean;
  //   price: number;
  // };

  // type tschnager<Bus> = {
  //   [key in keyof Bus]: string | number;
  // };

  // type NewBus = tschnager<Bus>
  //!숙제2
  // type Bus = {
  //   color: string;
  //   model: boolean;
  //   price: number;
  // };

  // type TypeChanger<MyType, T> = {
  //   [key in keyof MyType]: T;
  // };

  // type NewBus = TypeChanger<Bus, boolean>;
  // type NewBus2 = TypeChanger<Bus, string[]>;
  return <div>MoreStudy11</div>;
}

export default MoreStudy11;
