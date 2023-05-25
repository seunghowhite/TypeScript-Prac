import React, { useRef, useState } from "react";
import styled from "styled-components";
import Cards from "../components/Cards";

export interface BuyItem {
  articlename: string;
  articleprice: number;
  buied: boolean;
  id: number;
}

function Home() {
  const templete: BuyItem = {
    articlename: "",
    articleprice: 0,
    buied: false,
    id: 0,
  };
  const [shopList, setShopList] = useState(templete);
  const [buyList, setBuyList] = useState<BuyItem[]>([]);
  let buyid = useRef(0);
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShopList((pre): BuyItem => {
      return { ...pre, [name]: value };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    buyid.current++;
    setBuyList([
      ...buyList,
      {
        articlename: shopList.articlename,
        articleprice: shopList.articleprice,
        buied: false,
        id: buyid.current,
      },
    ]);
    setShopList(templete);
  };

  return (
    <>
      <ShopHeader>
        <ShopH1>ShopingList</ShopH1>
        <form onSubmit={onSubmit}>
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
        </form>
      </ShopHeader>
      <ShopInputBox>
        <span>구매전</span>
        {buyList
          .filter((item) => item.buied === false)
          .map((item) => {
            return (
              <Cards
                item={item}
                id={item.id}
                setBuyList={setBuyList}
                key={item.id}
              />
            );
          })}
      </ShopInputBox>
      <ShopInputBox>
        <span>구매완료</span>
        {buyList
          .filter((item) => item.buied === true)
          .map((item) => {
            return (
              <Cards
                item={item}
                id={item.id}
                setBuyList={setBuyList}
                key={item.id}
              />
            );
          })}
      </ShopInputBox>
    </>
  );
}

export default Home;

const ShopInputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

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
