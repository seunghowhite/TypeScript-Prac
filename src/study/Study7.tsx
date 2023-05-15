import { type } from "os";
import React from "react";
import { boolean } from "yargs";

//!함수타입 표현방법
function Study7() {
  //!함수타입지정하기
  type FuncType = (a: string) => number;
  const myFunc: FuncType = (a) => {
    return 10;
  };

  //!오브잭트 안에서 함수 만들기.
  type PlusOne = (a: number) => number;

  let 회원정보: {
    name: string;
    plusOne: PlusOne;
  } = {
    name: "kim",
    plusOne: (a: number): number => {
      return a + 1;
    },
  };

  // 사용하기
  회원정보.plusOne(2); // 3

  //!(Q1) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
  // - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
  // - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
  // - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.
  // 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.
  type CutZero = (x: string) => string;
  let cutZero: CutZero = function (x) {
    let result = x.replace(/^0+/, "");
    return result;
  };
  type RemoveDash = (x: string) => number;
  const removeDash: RemoveDash = (x) => {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
  };

  type 함수타입1 = (a: string) => string;
  type 함수타입2 = (a: string) => number;

  function 만들함수(a: string, func1: 함수타입1, func2: 함수타입2) {
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2);
  }
  만들함수("010-1111-2222", cutZero, removeDash);

  return (
    <div>
      <span>공부날짜:5월10일</span>
      <div>오늘은:{Date()}</div>
    </div>
  );
}

export default Study7;
