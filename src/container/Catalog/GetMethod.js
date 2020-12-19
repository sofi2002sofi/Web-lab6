import axios from "axios";
const baseURL = "http://localhost:8080/shoes";

const getAllShoes = async () => {
    let shoesRes = await axios.get(baseURL)
        .then(res => {
            const shoes = res.data;
            return shoes;
        })
        return shoesRes;
}

export const getShoesById = async (id) => {
    let shoesRes = await axios.get(baseURL + `/${id}`)
        .then(res => {
            const shoes = res.data;
            return shoes;
        })
        return shoesRes;
}

export const getAllShoesByPriceAndHight = async (priceBottom, priceTop, hightBottom, hightTop) => {
    let shoesRes = await axios.get(baseURL + `/priceBottom=${priceBottom}/priceTop=${priceTop}/hightBottom=${hightBottom}/hightTop=${hightTop}`)
        .then(res => {
            const shoes = res.data;
            return shoes;
        })
        return shoesRes;
}

export default getAllShoes;