import React, { useState } from "react";
import styled from "styled-components";
import { BuyItem } from "../pages/Home";

function Cards({
  item,
  index,
  setBuyList,
}: {
  item: BuyItem;
  index: number;
  setBuyList: any;
}): JSX.Element {
  const [onoffUpdate, setonoffUpdate] = useState(false);

  const templete: BuyItem = {
    articlename: item.articlename,
    articleprice: item.articleprice,
  };

  const [update, setUpdate] = useState(templete);
  const deletecard = (index: number) => {
    setBuyList((pre: BuyItem[]) => {
      return pre.filter((item) => item !== pre[index]);
    });
  };

  const updateonfoff = () => {
    setonoffUpdate(!onoffUpdate);
    setUpdate(templete);
  };

  const onchnageUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdate((pre): BuyItem => {
      return { ...pre, [name]: value };
    });
  };

  const onupdate = (index: number) => {
    setBuyList((pre: BuyItem[]) => {
      const updatedList = [...pre];
      updatedList[index] = update;
      return updatedList;
    });
    setonoffUpdate(false);
  };

  return (
    <ItemCards>
      <span>이름</span>
      {onoffUpdate ? (
        <input
          value={update.articlename}
          name="articlename"
          onChange={onchnageUpdate}
        />
      ) : (
        <span>{item.articlename}</span>
      )}
      <span>가격</span>
      {onoffUpdate ? (
        <input
          value={update.articleprice}
          name="articleprice"
          onChange={onchnageUpdate}
        />
      ) : (
        <span>{item.articleprice}</span>
      )}
      <button onClick={() => deletecard(index)}>삭제</button>
      <button onClick={updateonfoff}>
        {onoffUpdate ? "취소하기" : "수정하기"}
      </button>
      {onoffUpdate && <button onClick={() => onupdate(index)}>완료하기</button>}
    </ItemCards>
  );
}

export default Cards;

const ItemCards = styled.div`
  border-radius: 2px;
  border: 1px solid black;
`;
