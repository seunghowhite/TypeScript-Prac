import React, { useState } from "react";
import styled from "styled-components";
import { BuyItem } from "../pages/Home";

function Cards({
  item,
  id,
  setBuyList,
}: {
  item: BuyItem;
  id: number;
  setBuyList: any;
}): JSX.Element {
  const [onoffUpdate, setonoffUpdate] = useState(false);

  const templete: BuyItem = {
    articlename: item.articlename,
    articleprice: item.articleprice,
    buied: item.buied,
    id: id,
  };

  const [update, setUpdate] = useState(templete);
  const deletecard = (id: number) => {
    setBuyList((pre: BuyItem[]) => {
      return pre.filter((item) => item.id !== id);
    });
    setUpdate(templete);
    setonoffUpdate(false);
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

  const onupdate = (id: number) => {
    if (JSON.stringify(update) !== JSON.stringify(templete)) {
      setBuyList((pre: BuyItem[]) => {
        const List = pre.map((item) => {
          if (item.id === id) {
            return update;
          } else {
            return item;
          }
        });
        return List;
      });
    }
    setonoffUpdate(false);
  };

  const buiedcheck = (id: number) => {
    setBuyList((pre: BuyItem[]) => {
      const buiedList = pre.map((item) => {
        if (item.id === id) {
          return { ...item, buied: !item.buied };
        } else {
          return item;
        }
      });

      return buiedList;
    });
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
      <button onClick={() => deletecard(id)}>삭제</button>
      <button onClick={updateonfoff}>
        {onoffUpdate ? "취소하기" : "수정하기"}
      </button>
      <button onClick={() => buiedcheck(id)}>
        {item.buied ? "구매취소" : "구매하기"}
      </button>
      {onoffUpdate && <button onClick={() => onupdate(id)}>완료하기</button>}
    </ItemCards>
  );
}

export default Cards;

const ItemCards = styled.div`
  border-radius: 2px;
  border: 1px solid black;
  height: 10em;
  width: 10em;
`;
