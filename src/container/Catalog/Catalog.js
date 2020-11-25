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
        shoesPhoto: brownShoes,
        brand: 'KENZO',
        color: 'brown',
        priceInUAH: 540,
        hightfShafl: 6.5,
    },
    {
        shoesPhoto: menBrownShoes,
        brand: 'ECCO',
        color: 'brown',
        priceInUAH: 287,
        hightfShafl: 6.5,
    },
    {
        shoesPhoto: womenGrayShoes,
        brand: 'KENZO',
        color: 'gray',
        priceInUAH: 540,
        hightfShafl: 5.5,
    },
    {
        shoesPhoto: yellowShoes,
        brand: 'ECCO',
        color: 'yellow',
        priceInUAH: 287,
        hightfShafl: 5,
    },
];

const Catalog = () => {
    const [checkFiltr, setCheckFilter] = useState(false);
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
                            <MinPrice type="text" placeholder="min price"/> <br/>
                            <MaxPrice type="text" placeholder="max price"/> <br/>
                        </ByPrice>   
                        <h4>Hight of shafl: </h4>
                        <ByHight>
                            <MinHight type="text" placeholder="min hight"/> <br/>
                            <MaxHight type="text" placeholder="max hight"/> <br/>
                        </ByHight> 
                        <ApplyBtn type="submit">Apply</ApplyBtn>
                    </InputFilterForms>
                    }
                    </NewFunctions>
                    
                </FilterForm>
                <SearchForm>
                    <InputSearch type="text" placeholder="Search by color and brand"/> <br/>
                    <SearchBtn type="submit"></SearchBtn>
                </SearchForm>
            </Forms>
            <Cards>
                {data.map(({shoesPhoto, brand, color, priceInUAH, hightfShafl }, idx) => (
                    <CatalogCardItem
                        shoesPhoto={shoesPhoto}
                        brand={brand}
                        color={color}
                        priceInUAH={priceInUAH}
                        hightfShafl={hightfShafl}
                        id={idx}
                    />
                ))}
            </Cards>
        </CatalogOuter>
    );
};

export default Catalog;