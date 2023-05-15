import React from "react";
//!index signature 사용
//!recursive 하게 타입 만들기.
function MoreStudy10() {
  //!index signature 사용
  // interface StringOnly {
  //   [key: string]: string;
  // }

  // let obj: StringOnly = {
  //   name: "kim",
  //   age: "20",
  //   location: "seoul",
  // };
  //!에러 종류
  // interface StringOnly {
  //   age : number,   ///에러 모든게 string인데?
  //   [key: string]: string,
  // }

  // interface StringOnly {
  //   age : string,   ///가능
  //   [key: string]: string,
  // }
  // interface StringOnly {
  //   age : number,   ///가능
  //   [key: string]: string | number,
  // }

  //!array 형태도 가능
  // interface StringOnly {
  //   [key: number]: string,
  // }

  // let obj :StringOnly = {
  //   0 : 'kim'
  //   1 : '20',
  //   2 : 'seoul'
  // }
  //!Recursive Index Signatures
  // interface MyType {
  //   'font-size': MyType | number
  // }

  // let obj :MyType = {
  //   'font-size' : {
  //     'font-size' : {
  //       'font-size' : 14
  //     }
  //   }
  // }
  //!숙제1
  // let obj: {
  //   [key: string]: string | number;
  // } = {
  //   model: "k5",
  //   brand: "kia",
  //   price: 6000,
  //   year: 2030,
  //   date: "6월",
  //   percent: "5%",
  //   dealer: "김차장",
  // };
  //이렇게하면 버그는 줄어들지만
  //유연한 타입지정이 가능하지만 엄격하지 않아서
  // 버그를 잡아준다는 장점은 없어질 수 있습니다.
  //!숙제2 recursive
  // interface MyType {
  //   'font-size' : number,
  //   [key :string] : number | MyType,
  // }

  // let obj = {
  //   'font-size' : 10,
  //   'secondary' : {
  //     'font-size' : 12,
  //     'third' : {
  //       'font-size' : 14
  //     }
  //   }
  // }
  return <div>MoreStudy10</div>;
}

export default MoreStudy10;
