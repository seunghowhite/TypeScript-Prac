import React from "react";

function Study1() {
  //타입 지정가능
  let name: string = "kim";
  //나중에 name이라는곳에 다른 type을 넣을시 오류를 내준다
  let age: number = 1;
  //arry
  let members: string[] = ["member1", "member2"];
  //object
  let obmembers: { member1: "seung"; member2: "park" } = {
    member1: "seung",
    member2: "park",
  };
  //모든곳에 type지정할 필요가 없다.
  //자동으로 tsx알아서 만들어준다.

  //---------------------------------------
  //Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
  const carthegarden: {
    name: string;
    age: number;
    bestsong: { songname: string; year: number };
  } = {
    name: "car",
    age: 30,
    bestsong: { songname: "기다린만큼더", year: 20220320 },
  };

  // Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
  let project: {
    member: string[];
    days: number;
    started: boolean;
  } = {
    member: ["kim", "park"],
    days: 30,
    started: true,
  };
  return (
    <div>
      <span>{age}</span>
      <span>{name}</span>
      {members.map((member) => {
        return <span>{member}</span>;
      })}
    </div>
  );
}

export default Study1;
