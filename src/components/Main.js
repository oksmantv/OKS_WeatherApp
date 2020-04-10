import React, { useState } from 'react';
import WeekCard from './DayCard'
import DisplayCard from './DisplayCard'

let API_KEY = "dfad1c91a96fdbb335fa11dea72f9afe";
let URL = "http://api.openweathermap.org/data/2.5/";


const Main = () => {

    let [Query, setQuery] = useState("Stockholm");
    let [Today, setToday] = useState();
    let [Week, setWeek] = useState([]);
    let [ErrorText,setErrorText] = useState();

    useState(() => {
        getForecast();
        getWeather();
    });

    function presentCards (Days) {
        return Days.map((day, index) => <WeekCard day={day} key={index}/>)
    }

    function presentCard (Today) {
        return (<DisplayCard day={Today}/>)
    }

    function getForecast() {

        if(Query.length !== 0)
        {
        fetch(`${URL}forecast?q=${Query}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            let WeekData = response.list.filter(info => info.dt_txt.includes("18:00:00"));
            console.log(WeekData);
            setWeek(WeekData); 
        }).catch(error => { setErrorText(error); console.log("Error: " + error)})
        }
        else{ setErrorText("Must input into searchbar")}
    }
    
    function getWeather (event) {

        if(event != undefined){
            event.preventDefault();
            setQuery(event.target.elements.query.value)
        }
    if(Query.length !== 0)
    {
        fetch(`${URL}weather?q=${Query}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
            setToday(result);
            getForecast();
            setQuery('');
        })
    }
    else{ setErrorText("Must input into searchbar")}          
    }

    return (
        <div>
           <div className="container center">
                <div className="card">
                    <div className="row">
                    <br/>
                        <div className="col s12 center">
                            <div className="col offset-s3 s3">
                            <div className="card form">
                                <form className="input-field" onSubmit={getWeather}>
                                    <label htmlFor="query">Choose City</label>
                                    <input
                                        type="text"
                                        name="query"
                                        placedholder="Search...."
                                        value={Query}
                                        onChange={(e) => setQuery(e.target.value)}     
                                    />
                                    <span>{ErrorText}</span>
                                    <button className="waves-effect waves-light btn-small orange">Search</button>
                                </form>
                                </div>   
                            </div>
                            <div className="col s4">
                            {presentCard(Today)}
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col s12 offset-s2 center">
                            {presentCards(Week)}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Main;