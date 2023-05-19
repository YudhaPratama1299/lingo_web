import RankMedal from "./rankMedal";
import RankList from "./rankList";
import { useState } from "react";
export default function Weekly(){
    const weeklyDatas = [
        {
          id : 1,
          img: "user1.jpg",
          name: "Jhon Do",
          poin: 1000,
          date: "2023-2-3",
        },
        {
          id : 2,
          img: "user2.jpg",
          name: "Jhono",
          poin: 2000,
          date: "2023-2-3",
        },
        {
          id : 3,
          img: "user3.jpg",
          name: "Jhony",
          poin: 500,
          date: "2023-2-3",
        },
        {
          id : 4,
          img: "user2.jpg",
          name: "Jhon Surf",
          poin: 100,
          date: "2023-2-3",
        },
        {
          id : 5,
          img: "user3.jpg",
          name: "Juan Dawe",
          poin: 1500,
          date: "2023-2-3",
        },
        {
          id : 6,
          img: "user1.jpg",
          name: "Juan Bawak",
          poin: 1600,
          date: "2023-2-3",
        },
        {
          id : 7,
          img: "user3.jpg",
          name: "Anneh",
          poin: 900,
          date: "2023-2-3",
        },
        {
          id : 8,
          img: "user2.jpg",
          name: "Shing ad aphe",
          poin: 800,
          date: "2023-2-3",
        },
      ];
      const weeklyMedal = weeklyDatas.sort((a, b) => b.poin - a.poin).slice(0, 3);
      const [expand, setExpand] = useState(false);
      const [weeklyIndex, setWeeklyIndex] = useState(4);
      const weeklyDisplay = weeklyDatas.sort((a, b) => b.poin - a.poin).slice(0, weeklyIndex);
      const handleExpand = () => {
        setWeeklyIndex(weeklyIndex + 1);
        if (weeklyIndex === weeklyDatas.length) {
          setExpand(false);
        } else {
          setExpand(true);
        }
      };
      const handleLess = () => {
        setWeeklyIndex(4);
      };
    return    <>
    <div className="flex justify-center gap-6 mt-6">
      {weeklyMedal.map((medal, index) => (
        <RankMedal
          key={medal.id}
          index={index + 1}
          userImg={medal.img}
          name={medal.name}
          poin={medal.poin}
        />
      ))}
    </div>
    {weeklyDisplay.map((weekly, index) => (
      <RankList
        key={weekly.id}
        squence={index + 1}
        userImg={weekly.img}
        name={weekly.name}
        poin={weekly.poin}
      />
    ))}
          {expand && weeklyIndex === weeklyDatas.length ? (
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
}