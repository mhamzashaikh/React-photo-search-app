import './Search.css';
import { useState } from 'react';

import DisplayImages from './DisplayImages';

const ACCESS_KEY = process.env.REACT_APP_API_KEY  



function Search() {
    const [result, setResult] = useState([]);
    const [query, setQuery] = useState("");



    const searchPhotos = async (e) => {
        if(query !== ""){
            // console.log("Not Null Value");
            fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${ACCESS_KEY}`)
            .then(response => response.json())
            .then((data) => {
                setResult(data.results);
                
            });
        }
        else{
            // console.log("Null Value");
        }

      


    }
    return (
        <>
        <h1 className='center'>Search any photos</h1>
            <div id='searchBox'>
                <input type="text" placeholder="Type 'cat' or something here..." value={query} onChange={(e) => { setQuery(e.target.value) }} />
                <button onClick={searchPhotos}>Search</button>
            </div>
            {result.length !==0?<p className='center'>Total results : {result.length}</p>: ""}
            <DisplayImages result={result} />
            <p className='footer-line'>Check out more on my <a href='https://github.com/mhamzashaikh' target="_blank" rel="noopener noreferrer">Github Profile @mhamzashaikh</a></p>
        </>
    );
}

export default Search;