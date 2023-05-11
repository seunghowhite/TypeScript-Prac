import React from "react";

function MoreStudy1() {
  //!rest param 타입지정법
  // function func(...a: number[]) {
  //   console.log(a);
  // }
  // func(1, 2, 3, 4, 5);
  //!destructuring
  // let person = { student: true, age: 20 };

  // function 함수({ student, age }: { student: boolean; age: number }) {
  //   console.log(student, age);
  // }
  // 함수({ student: true, age: 20 });

  // !숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
  // 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
  // (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
  // (조건2) Math.max() 사용금지 반복문이나 쓰셈
  // interface BigNumberType {
  //   (...numbers: number[]): number;
  // }
  // const bigNumber: BigNumberType = (...numbers) => {
  //   const max = numbers.reduce((acc, cur) => {
  //     if (cur > acc) {
  //       return cur;
  //     } else {
  //       return acc;
  //     }
  //   });
  //   return max;
  // };

  // !숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
  // type UserType = {
  //   user : string,
  //   comment : number[],
  //   admin : boolean
  // }

  // function 함수({user, comment, admin} :UserType) :void{
  //   console.log(user, comment, admin)
  // }

  // 함수({ user : 'kim', comment : [3,5,4], admin : false })

  //!숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.

  // 함수( [40, 'wine', false] )

  interface MyfunctionType {
    (args: [number, string, boolean]): void;
  }
  const myfunction: MyfunctionType = ([a, b, c]) => {
    console.log(a, b, c);
  };

  myfunction([40, "wine", false]);
  return (
    <div>
      <span>공부날짜:5월11일</span>
      <div>오늘은:{Date()}</div>
    </div>
  );
}

export default MoreStudy1;
