import React, { useEffect, useState } from "react";
import "./style.css";

export const App = () => {
  let [imgUrl, setImgUrl] = useState("");

  const sendRequest = (breedName) => {
    let url = `https://dog.ceo/api/breed/${breedName}/images/random`;
    if (breedName === "") {
      url = "https://dog.ceo/api/breeds/image/random";
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => setImgUrl((imgUrl = result.message)));
  };

  useEffect(() => {
    sendRequest("");
  }, []);

  return (
    <>
      <div className="notmain">
        <div>
          <button
            onClick={() => {
              sendRequest("akita");
            }}
          >
            Akita
          </button>
          <button
            onClick={() => {
              sendRequest("chow");
            }}
          >
            Chow
          </button>
          <button
            onClick={() => {
              sendRequest("boxer");
            }}
          >
            Boxer
          </button>
          <button
            onClick={() => {
              sendRequest("husky");
            }}
          >
            Husky
          </button>
          <button
            onClick={() => {
              sendRequest("mix");
            }}
          >
            Mix
          </button>
        </div>
        <div>
          {imgUrl && <img className="img" src={imgUrl} alt="123"></img>}
        </div>
      </div>
    </>
  );
};
{()=>{
  let delay = 0;
  const jobs = document.querySelectorAll(".vacancy-serp-item__layout a.bloko-button");
  jobs.forEach(job =>{
    setTimeout{()=>{
      job.click();
    },delay}
    delay+=2000
  })
}}();