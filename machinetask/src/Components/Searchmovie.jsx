import React, { useEffect, useState } from 'react'

const API_key = "c45a857c193f6302f2b5061c3b85e743";

const SearchMovie = () => {

    const [result, setresult] = useState([]);
    console.log(result, "result")

    const [query, setquery] = useState("");
    console.log(query, "query");

    function searchhere(e) {
        setquery(e.target.value)
    }

    function handlesearch() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_key}&language=en-US&query=${query}&page=1`)
            .then(res => res.json())
            // .then(json => console.log(json.results, "hello"))
            .then(json => setresult(json.results))
            
    } console.log(result, "wuy");
    return (
        <div>
            <input onChange={(e) => searchhere(e)} value={query} type="text" placeholder='Search the movie' />
            <button onClick={() => handlesearch()}>search</button>
            <div>
               {result && result.map((e) => (
                <div>
                    <p>{e.original_title}</p>
                </div>
               ))}
            </div>
        </div>
    )

}

export default SearchMovie


