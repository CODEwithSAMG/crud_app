import { useState, useEffect } from "react";
import "./card.css";

const cardImages = "https://image.tmdb.org/t/p/w500";

const MovieCard = () => {
  const [state, setState] = useState([]);
  const [input, setInput] = useState("");

  const API_KEY = "api_key=e9b3cf898d02f9d8838d2d52b94bdeb5";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

  const onChange = (e) => {
    setInput(e.target.value);
  };

  // api calling
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setState(data.results);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData(API_URL);
  }, [])

  return (
    <>
      <div className="search_input">
        <input
          name="search"
          type="text"
          placeholder="Search The Movie"
          onChange={onChange}
          value={input}
        />
      </div>

      <div className="App_wrapper">
        {state &&
          state
            .filter((item) => {
              return input === ""
                ? item
                : item.title.toLowerCase().includes(input.toLowerCase());
            })
            .map((val, index) => {
              const { poster_path, title, vote_average } = val;
              return (
                <div key={index} className="card_container App_wrapper">
                  <img
                    width={"100%"}
                    height={"80%"}
                    src={`${cardImages}/${poster_path}`}
                    alt=""
                    className="card-img-top"
                  />

                  <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <b style={{ color: "#FDCC0D" }}>* {vote_average}</b>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default MovieCard;
