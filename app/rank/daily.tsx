"use client";
import { useState } from "react";
import RankList from "./rankList";
import RankMedal from "./rankMedal";

export default function Daily() {
  const dailyDatas = [
    {
      id: 1,
      img: "user1.jpg",
      name: "Jhon Do",
      poin: 1000,
    },
    {
      id: 2,
      img: "user2.jpg",
      name: "Jhono",
      poin: 200,
    },
    {
      id: 3,
      img: "user3.jpg",
      name: "Jhony",
      poin: 500,
    },
    {
      id: 4,
      img: "user2.jpg",
      name: "Jhon Surf",
      poin: 100,
    },
    {
      id: 5,
      img: "user3.jpg",
      name: "Juan Dawe",
      poin: 2000,
    },
    {
      id: 6,
      img: "user1.jpg",
      name: "Juan Bawak",
      poin: 1600,
    },
    {
      id: 7,
      img: "user3.jpg",
      name: "Anneh",
      poin: 900,
    },
    {
      id: 8,
      img: "user2.jpg",
      name: "Shing ad aphe",
      poin: 800,
    },
    {
      id: 9,
      img: "user2.jpg",
      name: "yi sun din",
      poin: 8000,
    },
  ];
  const dailyMedal = dailyDatas.sort((a, b) => b.poin - a.poin).slice(0, 3);
  const [expand, setExpand] = useState(false);
  const [dailyIndex, setDailyIndex] = useState(4);
  const dailyDisplay = dailyDatas
    .sort((a, b) => b.poin - a.poin)
    .slice(0, dailyIndex);
  const handleExpand = () => {
    setDailyIndex(dailyIndex + 1);
    if (dailyIndex === dailyDatas.length) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  };
  const handleLess = () => {
    setDailyIndex(4);
  };
  return (
    <>
      <div className="flex justify-center gap-6 mt-6">
        {dailyMedal.map((medal, index) => (
          <RankMedal
            key={medal.id}
            index={index + 1}
            userImg={medal.img}
            name={medal.name}
            poin={medal.poin}
          />
        ))}
      </div>
      {dailyDisplay.map((daily, index) => (
        <RankList
          key={daily.id}
          squence={index + 1}
          userImg={daily.img}
          name={daily.name}
          poin={daily.poin}
        />
      ))}
      {expand && dailyIndex === dailyDatas.length ? (
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
