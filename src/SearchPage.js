import React from 'react'
import { Button } from '@material-ui/core';
import "./SearchPage.css";
import SearchResult from "./SearchResult";
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 JULY to 30 
                    JULY . 2 guest 
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
                img="https://a0.muscache.com/im/pictures/51083d2d-ebc1-4117-85b4-97c96161848d.jpg?im_w=960"
                location="Private room in center of London"
                title="Nytt hus - shopping, natur, bad, bussar Göteborg"
                description="Entire house hosted by Peter"
                star={4.45}
                price="CHF59 / night"
                total="CHF176 total"

            />

            <div className="searchPage_images">
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/8a6f4f8e-cf12-45e7-9c03-cf81f3e3b2b7.jpg?im_w=960"
                    location="Both city and sea only 10 min away"
                    title="Nytt hus - shopping, natur, bad, bussar Göteborg"
                    description="Entire house hosted by Annika"
                    star={4.45}
                    price="CHF 128/ night"
                    total="$120 total"

                />

                <SearchResult
                    img="https://a0.muscache.com/im/pictures/c1600107-6a52-4bd8-8c1d-984dfa4c457f.jpg?im_w=960"
                    location="Whitstable, England"
                    title="Pebble Cottage"
                    description="Entire cottage hosted by Janet"
                    star={4.73}
                    price="$50 / night"
                    total="$120 total"

                />

                <SearchResult
                    img="https://a0.muscache.com/im/pictures/140e873e-9767-4721-81a1-6659db6582ac.jpg?im_w=960"
                    location="Queens New York"
                    title="PChic Designer Home Guest Studio"
                    description="Private room in townhouse hosted by Maggie"
                    star={4.73}
                    price="$50 / night"
                    total="$150 total"

                />

                <SearchResult
                    img="https://a0.muscache.com/im/pictures/a3ff8fff-373d-486b-8c7f-f1931307a824.jpg?im_w=960"
                    location="Private room in center of London"
                    title="House of Comfort"
                    description=" A place to find comfort"
                    star={4.73}
                    price="$50 / night"
                    total="$120 total"

                />

                <SearchResult
                    img="https://a0.muscache.com/im/pictures/76eae945-9740-4dd1-9a4e-7f6205b91b27.jpg?im_w=960"
                    location="Private room in center of London"
                    title="House of Comfort"
                    description=" A place to find comfort"
                    star={4.73}
                    price="$50 / night"
                    total="$120 total"

                />
            </div>

            

        </div>
    )
}

export default SearchPage
