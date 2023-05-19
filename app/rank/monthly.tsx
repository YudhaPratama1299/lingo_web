"use client";
import RankMedal from "./rankMedal";
import RankList from "./rankList";
import { useState } from "react";
export default function Monthly() {
  const monthlyDatas = [
    {
      id: 1,
      img: "user1.jpg",
      name: "Jhon Do",
      poin: 1500,
      date: "2023-2-3",
    },
    {
      id: 2,
      img: "user2.jpg",
      name: "Jhono",
      poin: 100,
      date: "2023-2-3",
    },
    {
      id: 3,
      img: "user3.jpg",
      name: "Jhony",
      poin: 500,
      date: "2023-2-3",
    },
    {
      id: 4,
      img: "user2.jpg",
      name: "Jhon Surif",
      poin: 2100,
      date: "2023-2-3",
    },
    {
      id: 5,
      img: "user3.jpg",
      name: "Juan Dawe",
      poin: 500,
      date: "2023-2-3",
    },
    {
      id: 6,
      img: "user1.jpg",
      name: "Juan Bawak",
      poin: 1600,
      date: "2023-2-3",
    },
    {
      id: 7,
      img: "user3.jpg",
      name: "Anneh",
      poin: 600,
      date: "2023-2-3",
    },
    {
      id: 8,
      img: "user2.jpg",
      name: "Shing ad ape",
      poin: 2000,
      date: "2023-2-3",
    },
  ];
  const monthlyMedal = monthlyDatas.sort((a, b) => b.poin - a.poin).slice(0, 3);
  const [expand, setExpand] = useState(false);
  const [monthlyIndex, setMonthlyIndex] = useState(4);
  const monthlyDisplay = monthlyDatas
    .sort((a, b) => b.poin - a.poin)
    .slice(0, monthlyIndex);
  const handleExpand = () => {
    setMonthlyIndex(monthlyIndex + 1);
    if (monthlyIndex === monthlyDatas.length) {
      setExpand(false)
    } else {
      setExpand(true)
    }
  };
  const handleLess = () => {
    setMonthlyIndex(4);
    setExpand(!expand);
  };
  return (
    <>
      <div className="flex justify-center gap-6 mt-6">
        {monthlyMedal.map((medal, index) => (
          <RankMedal
            key={medal.id}
            index={index + 1}
            userImg={medal.img}
            name={medal.name}
            poin={medal.poin}
          />
        ))}
      </div>
      {monthlyDisplay.map((monthly, index) => (
        <RankList
          key={monthly.id}
          squence={index + 1}
          userImg={monthly.img}
          name={monthly.name}
          poin={monthly.poin}
        />
      ))}
      {expand && monthlyIndex === monthlyDatas.length ? (
        <button
          onClick={handleLess}
          className="block mx-auto font-semibold text-blue-500"
        >
          Load Less
        </button>
      ) : (
        <button
          onClick={handleExpand}
          className="block mx-auto font-semibold text-blue-500"
        >
          Load More...
        </button>
      )}
    </>
  );
}
