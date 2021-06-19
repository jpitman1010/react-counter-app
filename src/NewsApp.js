
import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";



const NewsApp = () => {
    const [news, setNews] = useState([]);

    const [searchQuery, setSearchQuery] = useState('react');
    //setting up a default of 'react' allows for it to populate results even if the user
    //doesn't type into search engine, that way page isn't blank.

    const [url, setUrl] = useState(`http://hn.algolia.com/api/v1/search?query=react`);   
    
    
    const [loading, setLoading] = useState(false);
    //setting up loading so that while it is loading it will show something on user side
    //to indicate that it is loading results. 

    //fetch news from hackernews API
    const fetchNews = () => {
        //set loading:
        setLoading(true);

        fetch(url)
        //setting the template strings to insert searchQuery dynamically by embedding variable
        .then(result => result.json()) //it returns a promise then you need to handle that promise using then
        .then(data => (setNews(data.hits)), setLoading(false)) //after turning object to JSON it returns another promise so must handle it again
        //add parameter to the second promise to reset loading to false so that once the data
        //is loaded it stops showing the loading to user.
        .catch(error => console.log(error)); //then need to catch any errors
    };


    useEffect(() => {
      fetchNews();
    }, [url]);
    //if you don't pass a second argument, it will keep re-rendering over and over everytime
    //someone types even a letter, if we want to control this to say only to change based
    //on searchQuery updating, we have to pass a second argument (you can also just pass [] 
    //if you are not using a specific event.)
    //then changed second parameter to [url] so that when the user hits submit, it will only
    //change the data on page when the url is changed (which is now occurring on handleSubmit
    //method placed on form.)
    
    //using handleChange method to grab the value (e) of the event and then use it to change
    //the state
    const handleChange = (e) => {
        //take the event (e) and grab the target value 
        setSearchQuery(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
        //this set's the url based on user input once they hit submit button
    };

    return (
      <div>
        <h2>News</h2>
        {loading ? <h2>News Loading...</h2> : ''}
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={handleChange} />
            <button>Search</button>
        </form>
        {/* //loop through the news, finding the index so we can map it to a key
        //then returning the value in the p tags. */}
        {news.map((n, i) => (<p key={i} >{n.title}</p>))}
      </div>
    )
  };

export default NewsApp;