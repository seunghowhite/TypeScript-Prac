import React from "react";
import { boolean } from "yargs";

function Study2() {
  // !union type
  let member: number | string = "kim";
  member = 123;
  member = "문자도 가능";

  //*Arry
  let ArryMember: (string | number)[] = [1, "이", 3];

  //*object
  let ObjectMember: { a: string; b: number } = { a: "문자", b: 123 };

  // *any type
  //이럴꺼면 타입스크립트 왜쓰는건가?
  //unknown타입도 있긴하다.마찬가지로 모든걸 다 넣을수 있다.

  //*any보다 unknown보다 안전한 이유는?
  let anytype: unknown;
  anytype = 1;
  anytype = "문자";
  anytype = true;
  // let vars1:string =anytype;//!any를 작성시 string을 무시해버림
  //unknown을 사용할시 type실드를 무시는 못하는데 아무거나 다 넣어줄수있다.

  //*any보다 unknown보다 안전한 이유는2?
  let unknowntype: unknown;
  // unknowntype-1//!unknoewn은 number타입이 아니다. 그래서 간단한 수학연산도 못하게 막아줌

  //*엄격한 경우
  // let age: number | string;
  // age+1//여기서 왜 불가능하냐?
  //+1은 number일때만 가능하다. 그래서 명확하게 정해줘야한다.
  //!결론적으로 타입이 맞아야지 가능하다 타입스크립트는 엄격함.

  //?다음 변수 4개에 타입을 지정해봅시다.
  let user: string = "kim";
  let age: undefined | number = undefined;
  let married: boolean = false;
  let 철수: (string | number | undefined | boolean)[] = [user, age, married];

  //?학교라는 변수에 타입지정해보십시오.'

  type school = {
    score: (boolean | number)[];
    teacher: string;
    friend: string | string[];
  };
  let 학교: school = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
  };
  학교.score[4] = false;
  학교.friend = ["Lee", 학교.teacher];

  return (
    <div>
      <span>공부날짜:5월10일</span>
      <div>오늘은:{Date()}</div>
    </div>
  );
}

export default Study2;
