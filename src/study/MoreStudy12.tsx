import React from "react";

//!조건부 타입 만들어 보기
function MoreStudy12() {
  // type Age<T> = T; //(타입변수에도 타입파라미터 넣기 가능)

  //!3항연산자
  // type Age<T> = T extends string ? string : unknown;
  // let age: Age<string>; //age는 string 타입
  // let age2: Age<number>; //age는 unknown 타입

  //!숙제 1
  // type FirstItem<t>=t extends string[]?t[0]:any
  // let age1: FirstItem<string[]>;
  // let age2: FirstItem<number>;

  //!숙제2
  // type Age<t> = t extends [string, ...any] ? t[0] : unknown;

  // let age1: Age<[string, number]>;
  // let age2: Age<[boolean, number]>;

  // type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;
  // type a = 타입뽑기<(x: number) => void>;
  return <div>MoreStudy12</div>;
}

export default MoreStudy12;
