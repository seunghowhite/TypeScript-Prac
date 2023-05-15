import React, { useState } from "react";

//!React + TypeScript 사용할 때 알아야할 점
//JSX.Element
//props타입지정
function MoreStudy7() {
  //!jsx 표현하는 타입일시
  let box: JSX.Element = <div>good</div>;

  return <div>MoreStudy7</div>;
}

//!컴포넌트 타입지정
function Profile(): JSX.Element {
  //!state 타입지정
  //type을 강제로 가능
  const [user, setUser] = useState<string | number>("white");

  return (
    <>
      <Propstype name="승호" age={20}></Propstype>
    </>
  );
}
//!컴포넌트 내부 props 지정
function Propstype(props: { name: string; age: number }): JSX.Element {
  return <span>프로필입니다</span>;
}
export default MoreStudy7;
