import { useState, useEffect } from "react";
import { ProgressBar } from "./Progressbar";
import "../sequentialProgressBar/progressStyle.css";
export default function ProgressCont() {
  const [list, setList] = useState([]);
  const [currActiveId, setCurrActiveId] = useState(1);

  const onClickHandler = () => {
    //worrking but not so good
    // if (list.length === 0) {
    //   setList([1]);
    // } else {
    //   setList([...list, list.length + 1]);// we are using list length to add value in array ele
    // }

    // Alternative
    setList((prev) => {
      const last = prev.slice(-1) || 0;
      // prev.slice(-1) returns array with last element
      //+last will extract last element from array
      console.log(typeof last, last, +last);
      return [...prev, +last + 1];
    });
  };

  const setProgressCompleted = () => {
    // const PrevActiveId = currActiveId;
    // console.log("PrevActiveId", PrevActiveId);
    setCurrActiveId((prevId) => prevId + 1);
  };

  return (
    <main>
      <button onClick={onClickHandler}>+ Add</button>
      <div className="progress-bars">
        {list?.map((listItem) => {
          // console.log(listItem, currActiveId);
          return (
            <ProgressBar
              key={listItem}
              play={listItem === currActiveId}
              setProgressCompleted={setProgressCompleted}
            />
          );
        })}
      </div>
    </main>
  );
}
