import React from 'react';
import successPurchase from "./../../icons/success/success.png";
import {SuccessOuter, SuccessImage, SuccessText, SuccessBtn} from '../Success/Success.styled';
import { useHistory } from "react-router-dom";

const Success = () => {
    let history = useHistory();

    const goBack = () => {
        history.push(`/catalog`);
    }

    return(
        <SuccessOuter>
            <SuccessImage src={successPurchase}/>
            <SuccessText>Your order was sent to processing!</SuccessText>
            <SuccessBtn onClick={goBack}>Go back to catalog</SuccessBtn>
        </SuccessOuter>
    );
}

export default Success;