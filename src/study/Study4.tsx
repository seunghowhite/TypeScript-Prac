function Study4() {
  //!narrowing 공부
  //타입스크립트에서 무조건해야하는 코딩 방식

  function test1(x: number | string) {
    if (typeof x === "number") {
      return x + 1;
    } else {
      return x + "1";
    }
  }
  //!네로잉할때 if문썻을때 else까지 써주자
  //in 속성사용
  //instanceof 사용
  function test2(x: number | string) {
    let array: number[] = [];
    if (typeof x === "number") {
      array[0] = x;
      return array;
    } else {
    }
  }
  //!assertion문법으로 네로잉하기
  //하지만 but 비유티.
  //as문법의 용도를 잘 알아야 한다.
  //1.union타입을 확정시켜 주고싶을때 사용한다.
  //즉 타입을 a에서 b로 변환시키는게 아니다.
  //2.무슨타입이 들어올지 100%확실할때 사용하자
  //대부분 as안쓰고 if를 사용하자. 버그추적을 못 한다.

  function test3(x: number | string) {
    let array: number[] = [];
    array[0] = x as number;
    //왼쪽에있는 타입을 number로 덮어써주세얌
    return array;
  }

  //?(Q1) 숫자여러개를 array 자료에 저장해놨는데
  // 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
  // 이걸 클리닝해주는 함수가 필요합니다.
  // 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
  // [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
  function test4(x: (number | string)[]) {
    return x.map((item) => {
      if (typeof item === "string") {
        return Number(item);
      } else {
        return item;
      }
    });
  }

  //?(Q2) 함수만들기.
  // 만들함수( { subject : 'math' } )  //이 경우 'math'를 return
  // 만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
  // 만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다

  function myfunc(x: { subject: string | string[] }) {
    if (Array.isArray(x.subject)) {
      return x.subject[x.subject.length - 1];
    } else {
      return x.subject;
    }
  }

  console.log(myfunc({ subject: "math" }));
  console.log(myfunc({ subject: ["science", "art", "korean"] }));
  return (
    <div>
      <span>공부날짜:5월10일</span>
      <div>오늘은:{Date()}</div>
    </div>
  );
}

export default Study4;
