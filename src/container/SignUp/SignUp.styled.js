import { ErrorMessage } from 'formik';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';

export const FormOuter = styled.div`
    width: 100%;
    padding: 40px 0;
    background-color: #F6F6F6;
`;

export const FieldInput = styled(Input)`
    margin: 10px 0;
    width: 460px;
    :hover, :focus{
        outline: none;
        border-color: #218378;
        box-shadow: 0px 0px 6px rgba(33, 131, 120, 0.3);
    }
`;

export const FormContainer = styled.div`
    margin: 0 auto;
    width: 560px;
    padding: 20px 50px;
    border: 2px solid transparent;
    border-color: #218378;
`;

export const FormTitle = styled.h1`
    font-size: 28px;
    color: #000000;
    font-weight: normal;
    text-align: center;
`;

export const HasAccContainer = styled.div`
    margin: 10px auto;
    width: 235px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 16px;
        margin: 0;
    }
`;

export const LoginBtn = styled.button`
    border: none;
    background: none;
    font-size: 16px;
    font-weight: bold;
    color: #218378;
    padding: 0;
    cursor: pointer;
`;

export const SignUpButton = styled(Button)`
    height: 45px;
    margin: 10px 0;
    width: 460px;
    font-size: 20px;
    color: #FFF;
    background-color: #218378;
    border-color: #218378;
    :hover, :focus, :active{
        border-color: #218378;
        color: #218378;
        background-color: #fff;
    }  
`;

export const StyledErrorMessage = styled(ErrorMessage)`
    margin: 0px 0;
    width: 460px;
    padding: 2px 30px 2px ;
    border: 1px solid transparent;
    border-color: #941A5B;
    background-color: #F1C1DB;
    font-size: 16px;
    font-weight: lighter;
    color: #941A5B;
    text-align: center;
`;