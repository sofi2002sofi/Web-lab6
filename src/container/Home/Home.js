import React, {useState, useEffect} from 'react';
import {Advertisment, AdvertismentTitle, AdvertismentText, ShowMoreBtn, MostPopular, MostPopularTitle, Cards, HomePage, ViewMoreBtn} from './Home.styled'
import {ReactComponent as Line } from "./../../icons/most-popular/line.svg";
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
    const [itemsToShow, setItemsToShow] = useState(data.slice(0, 2));
    const [isViewMore, setIsViewMore] = useState(false);

    const showMore = () => {
        setItemsToShow(data);
        setIsViewMore(true);
      };

    const showLess = () => {
        setItemsToShow(data.slice(0, 2));
        setIsViewMore(false);
    };
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
                    {itemsToShow.map(({shoesPhoto, brand, color, priceInUAH, hightfShafl }, idx) => (
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
                {!isViewMore && (<ViewMoreBtn onClick={() => showMore()}>View more</ViewMoreBtn>)}
                {isViewMore && (<ViewMoreBtn onClick={() => showLess()}>View less</ViewMoreBtn>)}
            </MostPopular>
        </HomePage>);
};

export default Home;
