import styled from 'styled-components';
import { Button } from 'antd';
import 'antd/dist/antd.css';

export const NewUserContainer = styled.div`
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

export const RegisterBtn = styled.button`
    border: none;
    background: none;
    font-size: 16px;
    font-weight: bold;
    color: #218378;
    padding: 0;
    cursor: pointer;
`;

export const SignInButton = styled(Button)`
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