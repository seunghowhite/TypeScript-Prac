import React from "react";
import { Name, myFunctionType } from "../types/MoreStudy4type";
function MoreStudy5() {
  let a: Name = "park";

  const fun1: myFunctionType = (a) => {};
  return (
    <div>
      <span>공부날짜:5월15일</span>
      <div>오늘은:{Date()}</div>
      <div></div>
    </div>
  );
}

export default MoreStudy5;
