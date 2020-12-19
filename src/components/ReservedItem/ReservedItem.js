import React, { useEffect, useState } from 'react';
import {ReservedItemContainer, ShoesPhoto, ReservedItemTitle, ItemsCounter, ReservedItemPrice, DecreseBtn, Counter, IncreaseBtn} from './ReservedItem.styled';
import brownShoes from "./../../icons/catalog/brown-boots.png";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem} from "../../container/ReduxMethods/action"

const ReservedItem = ({value}) => {
    const [item, setItem] = useState(value);
    const dispatch = useDispatch();

    useEffect(() => {
        setItem(value);
    }, [value]);
    
    const increaseItemsCount = () => {
        if (item.number === 10) {
            return;
        }
        const newItem = {
        ...item,
        number: item.number + 1,
        priceInUAH: (item.priceInUAH / item.number) * (item.number + 1),
        };
        setItem(newItem);
        dispatch(updateItem(newItem));
    };

    const reduceItemsCount = () => {
        if (item.number === 1) {
            dispatch(deleteItem(item));;
        }
        const newItem = {
        ...item,
        number: item.number - 1,
        priceInUAH: (item.priceInUAH / item.number) * (item.number - 1),
        };
        setItem(newItem);
        dispatch(updateItem(newItem));
    };

    return (
        <ReservedItemContainer>
            <ShoesPhoto src={brownShoes}></ShoesPhoto>
            <ReservedItemTitle>Boots</ReservedItemTitle>
            <ItemsCounter>
                <DecreseBtn onClick={reduceItemsCount}/>
                <div/>
                <Counter>{item.number}</Counter>
                <div/>
                <IncreaseBtn onClick={increaseItemsCount}/>
            </ItemsCounter>
            <ReservedItemPrice>${item.priceInUAH}</ReservedItemPrice>
        </ReservedItemContainer>
    );
};

export default ReservedItem;