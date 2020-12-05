import React, {useState} from 'react';
import CatalogCardItem from '../../components/CatalogCardItem/CatalogCardItem';
import { CatalogOuter, Input, IconMore, Forms, Cards, SearchBtn, SearchForm, InputSearch, FilterForm, NewFunctions, InputFilterForms, ByPrice, ByHight, FormHead, MinPrice, MaxHight, MaxPrice, MinHight, ApplyBtn } from '../Catalog/Catalog.styled';
import pinkShoes from "./../../icons/catalog/pink-boots.png";
import redShoes from "./../../icons/catalog/red-boots.png";
import brownShoes from "./../../icons/catalog/brown-boots.png";
import menBrownShoes from "./../../icons/catalog/men-brown-boots.png";
import womenGrayShoes from "./../../icons/catalog/women-gray-boots.png";
import yellowShoes from "./../../icons/catalog/yellow-boots.png";
import more from "./../../icons/catalog/more-filter.png";

export const data = [
    {
        id: 1,
        shoesPhoto: redShoes,
        brand: 'KENZO',
        color: 'red',
        priceInUAH: 540,
        hightfShafl: 24.5,
        materialOfVamp: 'leather',
        toecapType: 'oval'
    },
    {
        id: 2,
        shoesPhoto: pinkShoes,
        brand: 'ECCO',
        color: 'pink',
        priceInUAH: 287,
        hightfShafl: 11,
        materialOfVamp: 'leather',
        toecapType: 'oval'
    },
    {
        id: 3,
        shoesPhoto: brownShoes,
        brand: 'KENZO',
        color: 'brown',
        priceInUAH: 540,
        hightfShafl: 6.5,
        materialOfVamp: 'leather',
        toecapType: 'oval'
    },
    {
        id: 4,
        shoesPhoto: menBrownShoes,
        brand: 'ECCO',
        color: 'brown',
        priceInUAH: 287,
        hightfShafl: 6.5,
        materialOfVamp: 'leather',
        toecapType: 'oval'
    },
    {
        id: 5,
        shoesPhoto: womenGrayShoes,
        brand: 'KENZO',
        color: 'gray',
        priceInUAH: 540,
        hightfShafl: 5.5,
        materialOfVamp: 'leather',
        toecapType: 'oval'
    },
    {
        id: 6,
        shoesPhoto: yellowShoes,
        brand: 'ECCO',
        color: 'yellow',
        priceInUAH: 287,
        hightfShafl: 5,
        materialOfVamp: 'leather',
        toecapType: 'oval'
    },
];

const Catalog = () => {
    const [checkFiltr, setCheckFilter] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(data);
    const [title, setTitle] = useState('');
    const [minPrice, setMinPrice] = useState('20');
    const [maxPrice, setMaxPrice] = useState('5000');
    const [minHight, setMinHight] = useState('2');
    const [maxHight, setMaxHight] = useState('27');

    const search = (input) => {
        setItemsToShow(itemsToShow.filter((item) => (item.brand.toLowerCase().includes(input) || item.color.toLowerCase().includes(input)) ));
    };

    const filter = (minPrice, maxPrice, minHight, maxHight) => {
        setItemsToShow(itemsToShow.filter((item) => ((item.priceInUAH >= parseInt(minPrice)) && (item.priceInUAH <= parseInt(maxPrice)) && (item.hightfShafl >= parseInt(minHight)) && (item.hightfShafl <= (maxHight))) ));
    }

    return(
        <CatalogOuter>
            <Forms>
                <FilterForm>
                    <FormHead>
                        <h3>Filer by: </h3>
                        <Input type="checkbox" id="check" onChange={() => setCheckFilter(!checkFiltr)}></Input>
                        <label for="check">
                            <i><IconMore src={more} check={checkFiltr}/></i>
                        </label>
                    </FormHead>
                   
                    <NewFunctions check={checkFiltr}>
                    { checkFiltr&&
                    <InputFilterForms> 
                        <h4>Price: </h4> 
                        <ByPrice>
                            <MinPrice type="text" placeholder="min price" defaultValue = "20" onChange={event => setMinPrice(event.target.value)}/> <br/>
                            <MaxPrice type="text" placeholder="max price" defaultValue = "5000" onChange={event => setMaxPrice(event.target.value)}/> <br/>
                        </ByPrice>   
                        <h4>Hight of shafl: </h4>
                        <ByHight>
                            <MinHight type="text" placeholder="min hight" defaultValue = "2" onChange={event => setMinHight(event.target.value)}/> <br/>
                            <MaxHight type="text" placeholder="max hight" defaultValue = "27" onChange={event => setMaxHight(event.target.value)}/> <br/>
                        </ByHight> 
                        <ApplyBtn type="button" onClick={() => filter(minPrice, maxPrice, minHight, maxHight)}>Apply</ApplyBtn>
                    </InputFilterForms>
                    }
                    </NewFunctions>
                    
                </FilterForm>
                <SearchForm>
                    <InputSearch type="text" id="input" placeholder="Search by color and brand" value={title} onChange={event => setTitle(event.target.value)} /> <br/>
                    <SearchBtn onClick={() => search(title)}></SearchBtn>
                </SearchForm>
            </Forms>
            <Cards>
                {itemsToShow.map(({shoesPhoto, brand, color, priceInUAH, hightfShafl, materialOfVamp, toecapType, id}, idx) => (
                    <CatalogCardItem
                        shoesPhoto={shoesPhoto}
                        brand={brand}
                        color={color}
                        priceInUAH={priceInUAH}
                        hightfShafl={hightfShafl}
                        materialOfVamp={materialOfVamp}
                        toecapType={toecapType}
                        id={id}
                        key={idx}
                    />
                ))}
            </Cards>
        </CatalogOuter>
    );
};

export default Catalog;