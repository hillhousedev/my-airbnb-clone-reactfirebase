import React from 'react'
import { Button } from '@material-ui/core';
import "./SearchPage.css";
import SearchResult from "./SearchResult";
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 august to 30 
                    august . 2 guest 
                </p>
                <h1>Stays nearby</h1>
                <Button
                variant="outlined">Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and beds
                </Button>
                <Button variant="outlined">More filters</Button>
            </div>

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=320"
                location="Private room in center of London"
                title="House of Comfort"
                description=" A place to find comfort"
                star={4.73}
                price="$50 / night"
                total="$120 total"

            />

            <SearchResult
                img="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=320"
                location="Private room in center of London"
                title="House of Comfort"
                description=" A place to find comfort"
                star={4.73}
                price="$50 / night"
                total="$120 total"

            />
            
        </div>
    )
}

export default SearchPage
