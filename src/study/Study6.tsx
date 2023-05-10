import React from "react";
//!엄격한 타입지정하기
function Study6() {
  //! literal type
  //미리 들어올 값을 정해둔 타입.
  let name: "beack"; //beack만 가능하다. 그냥 타입이 beack이라는뜻
  name = "beack";

  let me: "tall" | "solo";
  me = "solo"; //이렇게 가능하다이말이지

  //함수 작성할때 좋을꺼같다.
  //litertype은 const상위호완
  var 자료 = {
    name: "kim",
  } as const; //이건뭐냐?
  //!이 object는 literal type으로 바꿔달라.
  //결론적으로 자료는 kim타입이다.
  //2번째 기능으로 readonly만 가능하다

  function 내함수(a: "kim") {}
  내함수(자료.name);

  return (
    <div>
      <span>공부날짜:5월10일</span>
      <div>오늘은:{Date()}</div>
    </div>
  );
}

export default Study6;
