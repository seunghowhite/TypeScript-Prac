export type Name = string;

//옛날 타스
//namespace쓰는 이유 변수명이 겹칠까봐
namespace ns {
  export type Name = String | Number;
}

let 변수: ns.Name = "kim";

type Car = {
  wheel: number;
  model: string;
};
interface Bike {
  wheel: 2;
  model: string;
}

export interface myFunctionType {
  (a: { name: string }): void;
}

//숙제 3
namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog {
    name: string;
  }
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };
