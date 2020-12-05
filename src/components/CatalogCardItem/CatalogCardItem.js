import React from 'react';
import {CardContainer, BootsPhoto, CardInfo, CardTitle, CardDescription, Price, ShopNowBtn} from './CatalogCardItem.styled';
import {useHistory} from 'react-router-dom';

const CatalogCardItem = ({shoesPhoto, brand, color, hightfShafl, priceInUAH, materialOfVamp, toecapType, id}) => {
    let history = useHistory();

    const goToItem = () => {
        history.push(`/item?id=`+ id);
    }

    return (
        <CardContainer>
            <BootsPhoto src={shoesPhoto}/>
            <CardInfo>
                <CardTitle>Boots</CardTitle>
                <CardDescription> {brand} {color} boots, with hight of shafl {hightfShafl}. </CardDescription>
                <Price>$ {priceInUAH}</Price>
                <ShopNowBtn onClick={goToItem}>Shop now</ShopNowBtn>
            </CardInfo>
        </CardContainer>
    );
};

export default CatalogCardItem;