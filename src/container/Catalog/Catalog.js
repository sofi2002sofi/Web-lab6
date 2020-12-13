import React, {useState, useEffect} from 'react';
import CatalogCardItem from '../../components/CatalogCardItem/CatalogCardItem';
import { CatalogOuter, Input, IconMore, Forms, Cards, SearchBtn, SearchForm, InputSearch, FilterForm, NewFunctions, InputFilterForms, ByPrice, ByHight, FormHead, MinPrice, MaxHight, MaxPrice, MinHight, ApplyBtn, Loader } from '../Catalog/Catalog.styled';
import pinkShoes from "./../../icons/catalog/pink-boots.png";
import redShoes from "./../../icons/catalog/red-boots.png";
import brownShoes from "./../../icons/catalog/brown-boots.png";
import menBrownShoes from "./../../icons/catalog/men-brown-boots.png";
import womenGrayShoes from "./../../icons/catalog/women-gray-boots.png";
import yellowShoes from "./../../icons/catalog/yellow-boots.png";
import more from "./../../icons/catalog/more-filter.png";
import getAllShoes, {getAllShoesByPriceAndHight} from './GetMethod';
import ScaleLoader from "react-spinners/ScaleLoader";

const Catalog = () => {
    const [checkFiltr, setCheckFilter] = useState(false);
    const [title, setTitle] = useState('');
    const [minPrice, setMinPrice] = useState('20');
    const [maxPrice, setMaxPrice] = useState('5000');
    const [minHight, setMinHight] = useState('2');
    const [maxHight, setMaxHight] = useState('27');
    let [shoesToShow, setShoesToShow] = useState([]);

    const search = (input) => {
        setShoesToShow(shoesToShow.filter((item) => (item.brand.toLowerCase().includes(input) || item.color.toLowerCase().includes(input)) ));
    };

    const filter = (minPrice, maxPrice, minHight, maxHight) => {
        getAllShoesByPriceAndHight(minPrice, maxPrice, minHight, maxHight).then( (e) => {
            setShoesToShow(e);
        });
    }

    useEffect( () => {
        if (shoesToShow.length === 0){
            getAllShoes().then( (e) => {
                setShoesToShow(e);
            });
        }
    });
    
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
            {shoesToShow.length!==0 ? (
                <Cards>
                {shoesToShow.map((item, idx) => (
                    <CatalogCardItem
                        shoesPhoto={pinkShoes}
                        brand={item.brand}
                        color={item.color}
                        priceInUAH={item.priceInUAH}
                        hightfShafl={item.hightfShafl}
                        materialOfVamp={item.materialOfVamp}
                        toecapType={item.toecapType}
                        id={item.id}
                        key={idx}
                    />
                ))}
            </Cards>
            ) : (<Loader>
                <ScaleLoader color={"#218378"}/>
            </Loader>)}
        </CatalogOuter>
    );
};

export default Catalog;