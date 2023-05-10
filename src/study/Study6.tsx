import React from "react";
//!엄격한 타입지정하기
function Study6() {
  //! literal type
  //미리 들어올 값을 정해둔 타입.
  let name: "beack"; //beack만 가능하다. 그냥 타입이 beack이라는뜻
  name = "beack";

  let me: "tall" | "solo";
  me = "solo";
  return (
    <div>
      <span>공부날짜:5월10일</span>
      <div>오늘은:{Date()}</div>
    </div>
  );
}

export default Study6;
