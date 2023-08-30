import React from 'react';
import { useEffect, useState } from "react";


const callRestApi = async () => {
    const token = "Bearer "+localStorage.getItem("token");
    console.log(token);
    let response = await fetch("https://ancient-headland-44729-521a14483af1.herokuapp.com/infoms/v1/anime",
    {
        method: "GET",
        headers: {
          'accept': '*/*',
          'Authorization': token ,
        },
      }
    );

    const jsonResponse = await response.json();

    const arrayOfLists = jsonResponse.data.map(
      record => <AnimeItem anime={record}/>
    )
    return arrayOfLists;
  };


function AnimeSection() {
    const [apiResponse, setApiResponse] = useState("*** now loading ***");
  
    useEffect(() => {
        callRestApi().then(
            result => setApiResponse(result));
    },[]);
  
    return(
        <div>
            <h1>Anime</h1>
            <ul>{apiResponse}</ul>
        </div>
    );
};


function AnimeItem(props) {
    return (
        <div className="img-with-text">
            <img src={props.anime.attributes.posterImage.tiny} alt={props.anime.attributes.canonicalTitle} />
            <h6>{props.anime.attributes.canonicalTitle}</h6>
            <p>{props.anime.attributes.description}</p>
        </div>
    )
}




export default AnimeSection;
