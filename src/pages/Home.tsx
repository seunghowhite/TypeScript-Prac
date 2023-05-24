import React, { useState } from "react";
import styled from "styled-components";
function Home() {
  const templete: { articlename: string; articleprice: number } = {
    articlename: "",
    articleprice: 0,
  };
  interface BuyItem {
    articlename: string;
    articleprice: number;
  }
  const [shopList, setShopList] = useState(templete);
  const [buyList, setBuyList] = useState<BuyItem[]>([]);
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShopList((pre): { articlename: string; articleprice: number } => {
      return { ...pre, [name]: value };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBuyList([
      ...buyList,
      {
        articlename: shopList.articlename,
        articleprice: shopList.articleprice,
      },
    ]);
    setShopList(templete);
  };

  const deletecard = (index: number) => {
    setBuyList(buyList.filter((item) => item !== buyList[index]));
  };

  return (
    <>
      <ShopHeader>
        <ShopH1>ShopingList</ShopH1>
        <ShopInputBox onSubmit={onSubmit}>
          <span>상품명</span>
          <input
            value={shopList.articlename}
            name="articlename"
            onChange={onchange}
          />
          <span>가격</span>
          <input
            value={shopList.articleprice}
            name="articleprice"
            onChange={onchange}
          />
          <button>제출</button>
        </ShopInputBox>
      </ShopHeader>

      {buyList.map((item, index) => {
        return (
          <Cards key={index}>
            <span>이름</span>
            {item.articlename}
            <span>가격</span>
            {item.articleprice}
            <button onClick={() => deletecard(index)}>삭제</button>
          </Cards>
        );
      })}
    </>
  );
}

export default Home;

const Cards = styled.div`
  border-radius: 2px;
  border: 1px solid black;
`;

const ShopInputBox = styled.form``;

const ShopHeader = styled.div`
  gap: 1em;
  background-color: #d7eaec;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  font-size: 16px;
`;
const ShopH1 = styled.h1`
  font-size: 2em;
`;
