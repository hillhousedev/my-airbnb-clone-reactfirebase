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
                    src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
                    description="A beautiful experience"
                    title="Cabins and Cottages"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320"
                    description="Wholesome scene"
                    title="Unique Stays"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=320"
                    description="Wholesome scene"
                    title="Unique Stays"
                />
            </div>
 
             <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=320"
                    description="Wholesome scene"
                    title="Unique Stays"
                    price="$100/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
                    description="A beautiful experience"
                    title="Cabins and Cottages"
                    price="$80/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
                    description="Wholesome scene"
                    title="Unique Stays"
                    price="$120/night"
                />
             </div>

         </div> 
    )
}

export default Home
