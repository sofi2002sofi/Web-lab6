import React from 'react';
import {CardContainer, BootsPhoto, CardInfo, CardTitle, CardDescription, Price, ShopNowBtn} from './CardsItem.styled';

const CardItem = ({shoesPhoto, brand, color, hightfShafl, priceInUAH}) => {
    return (
        <CardContainer>
            <BootsPhoto src={shoesPhoto}/>
            <CardInfo>
                <CardTitle>Boots</CardTitle>
                <CardDescription> {brand} {color} boots, with hight of shafl {hightfShafl}. </CardDescription>
                <Price>$ {priceInUAH}</Price>
                <ShopNowBtn>Shop now</ShopNowBtn>
            </CardInfo>
        </CardContainer>
    );
};

export default CardItem;