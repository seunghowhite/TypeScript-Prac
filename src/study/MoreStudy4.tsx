import React from "react";
//! 객체지향에 필요한 public,private,protected, static
// class 많이 만들어서 개발하려면 유용하다.
function MoreStudy4() {
  //!기본 클래스 사용해 보기
  // class User {
  //   name: string;
  //   age: number;
  //   constructor() {
  //     this.name = "kim";
  //     this.age = 23;
  //   }
  // }
  // const name = new User();
  // console.log(name);

  //!public 사용해 보기.
  // class User {
  //   //! public을 붙인 속성은 자식들이 마음대로 사용이 가능하다
  //자동으로 public이 붙여져서 생략이 가능하다
  //   public name = "kim";
  //   constructor(a) {
  //     this.name = a;
  //   }

  //   public myfunction() {}
  // }

  //! private 사용해 보기.
  // class User {
  //   //!속성 안에서만 수정 가능하고 쓰고 싶을때는 private 쓰면됨
  //   //자식은 사용 불가능
  //   private name = "kim";
  //   constructor(a) {
  //     this.name = a;
  //   }

  //   public myfunction() {}
  // }
  // let user1 =new User('park')
  // user1.name

  //! 이런형태로 public이 가능함
  // class Person {
  //   constructor(public name: string) {}
  // }
  // let son = new Person("kim");
  // console.log(son);

  //!class 복사하는법
  // class User {
  //   x = 10;
  // }
  // class NewUser extends User {}
  // let 사람 = new NewUser();
  // console.log(사람);

  //!protected 사용해 보기
  //extends를 사용해서 여러개의 class를 만들때 사용하자
  // class User {
  //   //pivate를 붙이면 그 class{}내부에서만 사용 가능
  //   //BUT protected를 붙이면 extends된 class {} 안에서 사용가능
  //   protected x = 10;
  // }
  // class NewUser extends User {
  //   doThis() {
  //     this.x = 20;
  //   }
  // }

  //!static 사용해 보기
  // class User {
  //static 키워드 붙이면 class에 직접 부여됨. +자식 안물려줌
  //또한 private/protected/public+static 둘다 가능함
  //   static x = 10;
  //   y = 10;
  // }
  // let son = new User();
  // console.log(User.x);//원레는 자식은 불가능 하지만 부모한태 넣어줄수있다.

  // class User {
  //   static skill = "js";
  //   intro = User.skill + "전문가 입니다";
  // }

  // let me = new User();
  // console.log(me);

  //!숙제
  // class User {
  //   private static x = 10;
  //   public static y = 20;

  //   static addOne(params: number): number {
  //     return User.x + params;
  //   }

  //   static printX(): void {
  //     console.log(User.x);
  //   }
  // }

  // User.addOne(3); //이렇게 하면 x가 3 더해져야함
  // // console.log("  User.addOne(3) : ", User.addOne(3));
  // User.addOne(4); //이렇게 하면 x가 4 더해져야함
  // // console.log("  User.addOne(4): ", User.addOne(4));
  // User.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
  //!숙제2
  // class Square {
  //   ga: number;
  //   se: number;
  //   color: string;

  //   constructor(a: number, b: number, c: string) {
  //     this.ga = a;
  //     this.se = b;
  //     this.color = c;
  //   }

  //   draw() {}
  // }
  // let 네모 = new Square(30, 30, "red");
  // 네모.draw();
  // 네모.draw();
  // 네모.draw();
  // 네모.draw();
  return (
    <div>
      <span>공부날짜:5월10일</span>
      <div>오늘은:{Date()}</div>
      <div></div>
    </div>
  );
}

export default MoreStudy4;
