import React from "react";
//!함수 타입지정
function Study3() {
  //!함수에 타입지정하기 param,return값 타입 지정
  function test1(x: number): number {
    return x * 2;
  }

  //!함수값에 return값이 없는 function 타입지정
  function test2(x: number): void {
    console.log("리턴값이 없어얌", x);
  }
  //!함수값에값을 넣어도되고 안넣어도될때는? 무름표 갈기자
  //이때 무름표의 원리
  //x?:number
  //x:nubmer|undefined
  //이거랑같다
  function test3(x?: number): void {
    console.log("리턴값은 없는데 x값도 있거나 없거나~", x);
  }

  //?(Q1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
  //? 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
  function test4(name?: string): void {
    if (typeof name === "string") {
      console.log("나마에와?", name);
    } else if (typeof name === "undefined") {
      console.log("이름이 없습니다");
    }
  }

  //?(Q2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
  // ?예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
  //? 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
  //? 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.
  function test5(x: string | number) {
    if (typeof x === "string") {
      return x.length;
    } else if (typeof x === "number") {
      return x.toString().length;
    }
  }
  console.log("test5(1): ", test5("12312312"));

  //?(Q3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
  //   1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
  // 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
  // 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

  function 결혼가능하냐(
    money: number,
    house: boolean,
    charm: string
  ): string | void {
    let score: number = 0;
    score += money;
    if (house === true) {
      score += 500;
    }
    if (charm === "상") {
      score += 100;
    }
    if (score >= 600) {
      return "결혼가능";
    }
  }
  console.log(결혼가능하냐(100, true, "상"));

  return (
    <div>
      <span>공부날짜:5월10일</span>
      <div>오늘은:{Date()}</div>
    </div>
  );
}

export default Study3;
