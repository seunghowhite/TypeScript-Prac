import React from "react";
//!interface문법
function Study8() {
  // type Square ={color:string,width:number}
  //==같다
  interface Square {
    color: string;
    width: number;
  }

  //!interface를 쓰는이유 합치기
  //interface합치지 않은경우
  // interface StudentType {
  //   name: string;
  // }
  // interface TeacherType {
  //   name: string;
  //   age: number;
  // }
  // let student: StudentType = { name: "kim" };
  // let teacher: TeacherType = { name: "kim", age: 20 };

  //!interface의 extends기능.
  // interface StudentType {
  //   name: string;
  // }
  // interface TeacherType extends StudentType {
  //   age: number;
  // }
  // let student: StudentType = { name: "kim" };
  // let teacher: TeacherType = { name: "kim", age: 20 };

  //!그냥 type으로 만들어보기
  //&기호 (intersection type)
  // type Animal = { name: string };
  // type Cat = { age: number } & Animal;
  //이건 intersection이랑 다르다.

  //! Type vs Interface
  //interfce중복선언이 가능하다.
  //type은 중복선언이 불가능하다.
  //예시
  // interface Student {
  //   name: string;
  // }
  // interface Student {
  //   age: 20;
  // }

  //interface를 사용을 권장한다.
  //추후 타입에 추가해서 사용이 가능하다.
  //다른사람이 이용을 많이 할꺼 같으면 interface로 자주 사용한다.

  //장점1 extends 중복이 되더라도 미리 잡아준다/
  //장점2 나중에 추가적인 타입지정이 가능하다

  //?숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
  // interface SALE {
  //   brand: string;
  //   serialNumber: number;
  //   model: string[];
  // }
  // let 상품: SALE = {
  //   brand: "Samsung",
  //   serialNumber: 1360,
  //   model: ["TV", "phone"],
  // };

  //? 숙제2) array 안에 object 여러개가 필요합니다.
  // interface bucket {
  //   product: string;
  //   price: number;
  // }
  // let 장바구니: bucket[] = [
  //   { product: "청소기", price: 7000 },
  //   { product: "삼다수", price: 800 },
  // ];

  //? 숙제3) 위에서 만든 타입을 extends 해봅시다.
  // { product : '청소기', price : 7000, card : false }
  // interface bucket extends card {
  //   product: string;
  //   price: number;
  // }
  // interface card {
  //   card: boolean;
  // }
  // let 장바구니: bucket[] = [
  //   { product: "청소기", price: 7000, card: false },
  //   { product: "삼다수", price: 800, card: false },
  // ];

  //? 숙제4) object 안에 함수를 2개 넣고 싶은데요

  interface objecttype {
    pluse: (a: number, b: number) => number;
    minuse: (a: number, b: number) => number;
  }
  const obj: objecttype = {
    pluse: (a, b) => a + b,
    minuse: (a, b) => a - b,
  };
  return (
    <div>
      <span>공부날짜:5월10일</span>
      <div>오늘은:{Date()}</div>
    </div>
  );
}

export default Study8;
