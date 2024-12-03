import React, { useState } from 'react';

type SelectDogsProps = {
  store: string[];
  sendRequest: (arg: string) => Promise<void>;
};

export const SelectDogs = ({ store, sendRequest }: SelectDogsProps) => {
  const [currentOptionValue, setCurrentOptionValue] = useState('affenpinscher');

  const arr = [];
  for (const key in store) {
    arr.push(key);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeHandler = (e: any) => {
    return setCurrentOptionValue(e.target.value);
  };
  const test = () => {
    sendRequest(currentOptionValue);
  };
  return (
    <>
      <select className="line" onChange={changeHandler}>
        {arr.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
      <button className="buttonSubmit" onClick={test}>
        submit
      </button>
    </>
  );
};
