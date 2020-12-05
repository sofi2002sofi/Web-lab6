import React, {useEffect, useState} from 'react';
import leather from "./../../icons/item-page/leather.png"
import toecap from "./../../icons/item-page/toecap.png"
import {ItemOuter, Item, BootsPhoto, Photo, VisitedPage, Line, VisitedInfo, BootsInfo, ItemHeader, ItemTitle, VampMaterial, VampIcon, ToecapType, ToecapIcon, ItemDescription, SizeSelect, SizeForm, LabelForSize, BuyBlock, BootsPrice, GoBachBtn, AddToCartBtn} from "./ItemPage.styled"
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../Catalog/Catalog';

const options = [
    {
        label: "35",
        value: 35,
    },
    {
        label: "36",
        value: 36,
    },
    {
        label: "37",
        value: 37,
    },
    {
        label: "38",
        value: 38,
    },
    {
        label: "39",
        value: 39,
    },
    {
        label: "40",
        value: 40,
    },
    {
        label: "41",
        value: 41,
    },
    {
        label: "42",
        value: 42,
    },
    {
        label: "43",
        value: 43,
    },
    ];

var num = 0;

const ItemPage = () => {
    let history = useHistory();
    const location = useLocation();
    const [itm, setItm] = useState({});
    const [count, setCount] = useState(num);
    
    useEffect(() => {
        const id = parseInt(location.search.split("=")[1]);
        const elem = data.find((item) => item.id===id);
        console.log(elem);
        setItm(elem);
        setCount(count + 1);
    },[location]);

    const goBack = () => {
        history.push(`/catalog`);
    }
    
    return(
        <ItemOuter>
                    <Item
                        shoesPhoto={itm.shoesPhoto}
                        brand={itm.brand}
                        color={itm.color}
                        priceInUAH={itm.priceInUAH}
                        hightfShafl={itm.hightfShafl}
                        materialOfVamp={itm.materialOfVamp}
                        toecapType={itm.toecapType}
                        id={itm.id}>
                            <BootsPhoto>
                                <Photo src={itm.shoesPhoto}></Photo>
                                <VisitedPage><Line/><VisitedInfo>This pair has been already looked for <h5>{count}</h5> times</VisitedInfo><Line/></VisitedPage>
                            </BootsPhoto>
                            <BootsInfo>
                                <ItemHeader>
                                    <ItemTitle>Boots</ItemTitle>
                                    <VampMaterial> <VampIcon src={leather}/> {itm.materialOfVamp} </VampMaterial>
                                    <ToecapType> <ToecapIcon src={toecap}/> {itm.toecapType} </ToecapType>
                                </ItemHeader>
                                <ItemDescription> {itm.brand} {itm.color} boots, with hight of shafl {itm.hightfShafl}. </ItemDescription>
                                <SizeForm>
                                    <SizeSelect id="sizeEURstandart_input">
                                        {options.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                        ))}
                                    </SizeSelect>
                                    <LabelForSize for="sizeEURstandart_input">Size</LabelForSize>
                                </SizeForm>
                                <BuyBlock>
                                    <BootsPrice> ${itm.priceInUAH} </BootsPrice>
                                    <GoBachBtn onClick={goBack}>Go back</GoBachBtn>
                                    <AddToCartBtn>Add to cart</AddToCartBtn>
                                </BuyBlock>
                            </BootsInfo>
                    </Item>
        </ItemOuter>
    );
};

export default ItemPage;