import React from 'react';
import { useEffect, useState } from "react";


const callRestApi = async () => {
    const token = "Bearer "+localStorage.getItem("token");
    console.log(token);
    let response = await fetch("https://ancient-headland-44729-521a14483af1.herokuapp.com/infoms/v1/jokes",
    {
        method: "GET",
        headers: {
          'accept': '*/*',
          'Authorization': token ,
        },
      }
    );

    const jsonResponse = await response.json();
    console.log(jsonResponse);
    //return JSON.stringify(jsonResponse);
    const arrayOfLists = jsonResponse.map(
      record => <JokeItem joke={record}/>
    )
    return arrayOfLists;
  };


function JokeSection() {
    const [apiResponse, setApiResponse] = useState("*** now loading ***");
  
    useEffect(() => {
        callRestApi().then(
            result => setApiResponse(result));
    },[]);
  
    return(
        <div>
            <h1>Jokes</h1>
            <ol>{apiResponse}</ol>
        </div>
    );
  };



function JokeItem(props) {
    
    return (<div>
      <li key={props.joke.punchline}>
         <h6>{props.joke.setup}</h6>
        <p>{props.joke.punchline}</p>
    </li>
        
    </div>);
};

export default JokeSection;