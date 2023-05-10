import { type } from "os";
import React from "react";
import { number } from "yargs";
//!type alias 사용하기
function Study5() {
  //!alias사용하기
  //이건 type alias다.
  //타입은 주로 대문자로시작한다
  type AnimalTpye = string | number;
  let animal: AnimalTpye = "사자";

  //!const내부 오브잭트 수정 막아주기.
  //!readonly사용하기.
  //ts파일내부에서만 막아주지 js에서는 안막아준다.
  //즉js는 바꿔주는데 컴파일할때 에러띄워줄뿐이다.
  type GirlFriendType = { readonly name: string };

  const girfreind: GirlFriendType = {
    name: "엠버",
  };
  // girfreind.name="유라"//읽기전용이다.

  //! type합쳐보기1
  type Name = string;
  type Age = number;
  type Person = Name | Age;

  //! type합쳐보기 2 &사용
  //!extend라고한다
  //!interface도 있다.
  //type은 재 정의가 불가능하다.
  type PositionX = { x: number };
  type PositionY = { y: number };
  //이걸 합치고싶다.
  //이렇게{x:number,y:number}
  type NewTpye = PositionX & PositionY;
  //=={x:number,y:number}

  //? object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
  type A = { a: string } & { a: string }; //오잉 중복 상관없네?

  //? 다음을 만족하는 type alias를 만들어보십시오.
  // 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
  // 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
  // 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.
  type User = { name: string; email?: string; phone: number };
  let user: User & { goood: boolean } = {
    name: "kim",
    phone: 123,
    goood: true,
  };
  return (
    <div>
      <span>공부날짜:5월10일</span>
      <div>오늘은:{Date()}</div>
    </div>
  );
}

export default Study5;
