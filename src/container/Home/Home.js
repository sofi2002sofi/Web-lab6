import React from 'react';
import {Advertisment, AdvertismentTitle, AdvertismentText, ShowMoreBtn, MostPopular, MostPopularTitle, Cards, Slider, Dots, HomePage} from './Home.styled'
import {ReactComponent as Line } from "./../../icons/most-popular/line.svg";
import {ReactComponent as LeftBtn } from "./../../icons/most-popular/slider/LeftBtn.svg";
import {ReactComponent as RightBtn } from "./../../icons/most-popular/slider/RightBtn.svg";
import {ReactComponent as ActiveDot } from "./../../icons/most-popular/slider/ActiveDot.svg";
import {ReactComponent as Dot } from "./../../icons/most-popular/slider/Dot.svg";
import redShoes from "./../../icons/most-popular/cards/redShoes.png";
import pinkShoes from "./../../icons/most-popular/cards/pinkShoes.png";
import CardItem from './../../components/CardItem/CardsItem'

const data = [
    {
        shoesPhoto: redShoes,
        brand: 'KENZO',
        color: 'red',
        priceInUAH: 540,
        hightfShafl: 24.5,
    },
    {
        shoesPhoto: pinkShoes,
        brand: 'ECCO',
        color: 'pink',
        priceInUAH: 287,
        hightfShafl: 11,
    },
];

const Home = () => { 
    return(
        <HomePage>
            <Advertisment>
                <AdvertismentTitle>Admire Stylish Dresses & Looks </AdvertismentTitle>
                <AdvertismentText>If we wanted to build a human-level tool to offer automated outfit advice, we needed to understand people’s fashion taste. </AdvertismentText>
                <ShowMoreBtn>Show more</ShowMoreBtn>
            </Advertisment>
            <MostPopular>
                <MostPopularTitle>
                    <Line/>
                    <p>The MOST popular this season</p>
                    <Line/>
                </MostPopularTitle>
                <Cards>
                    {data.map(({shoesPhoto, brand, color, priceInUAH, hightfShafl }, idx) => (
                        <CardItem
                            shoesPhoto={shoesPhoto}
                            brand={brand}
                            color={color}
                            priceInUAH={priceInUAH}
                            hightfShafl={hightfShafl}
                            id={idx}
                        />
                    ))}
                </Cards>
                <Slider>
                    <LeftBtn/>
                    <Dots>
                        <ActiveDot/>
                        <Dot/>
                        <Dot/>
                        <Dot/>
                    </Dots>
                    <RightBtn/>
                </Slider>
            </MostPopular>
        </HomePage>);
};

export default Home;
