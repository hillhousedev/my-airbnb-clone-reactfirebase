import React from 'react'
import './Home.css';
import Banner from "./Banner";
import Card from "./Card";

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card 
                    src="https://media.cntraveler.com/photos/5f5105abad72d4ef60c3a87c/master/w_1600%2Cc_limit/remote-33638284-airbnb.jpg"
                    description="Unique activities we can do together, led by a world of hosts."
                    title="Big house"
                />
                <Card 
                    src="https://media.cntraveler.com/photos/5f5105aa42341b4d2fb70a1f/master/w_1600%2Cc_limit/remote-21783133-airbnb.jpg"
                    description="A beautiful experience"
                    title="Wooden Castle"/>
                <Card 
                    src="https://media.cntraveler.com/photos/5f510b99ad72d4ef60c3a87e/master/w_1600%2Cc_limit/remote-191013-airbnb.jpeg"
                    description="Wholesome scene"
                    title="Comfort Homes"/>
            </div>

            <div className="home__section">
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}

export default Home
