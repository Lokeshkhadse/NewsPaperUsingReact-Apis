    import React, { useEffect, useState } from "react";
    import Card from './Card'

    const Newsapp = () => {
        const[search,setSearch] = useState("India");
         const[newsData,setNewsData] = useState(null);
       // const [newsData, setNewsData] = useState([]);  // ✅ Default empty array


        const API_KEY ="03492c80df714af99c11b2e5a9532bf5";

        const getData = async() => {
            console.log(search);
            const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
            const jsonData = await response.json();
            console.log(jsonData.articles);
            setNewsData(jsonData.articles);
        }

        useEffect( () => {
               getData() 
        },[])

        const handleInput = (e) => {
            console.log(e.target.value);
            setSearch(e.target.value);

        }

        const userInput = (e) => {
            const category = e.target.value;
            console.log(category);
            setSearch(category);
            getData(category); // ✅ Fetch news immediately when a category button is clicked
        };
        
        return (
            <div> 
                <nav>
                    <div> 
                        <h1>Trendy News</h1>
                    </div>
                    <ul>
                        <a> All News </a>
                        <a> Trending </a>
                    </ul>
                    <div className ="searchBar">
                        <input type ='text' placeholder='Search News' onChange={handleInput}/>     {/*value={search} */}
                        <button onClick={getData}> Search </button>
                    </div>
                </nav> 
                 
                 <div className="stayupdate">Stay update with me</div>
                <div className = "categoryBtn">
                    <button onClick={userInput} value="sports">Sports</button>
                    <button onClick={userInput} value="politics">Politics</button>
                    <button onClick={userInput} value="entertainment">Entertainment</button>
                    <button onClick={userInput} value="health">Helath</button>
                    <button onClick={userInput} value="fitness">Fitness</button>
                </div>

                <div>
                    {newsData? <Card data={newsData}/> : null}
                
                
                   {/* <Card data={newsData}/> */}
                </div>
            </div>
        );
    };

    export default Newsapp;
