import React from 'react';
import { useHistory } from "react-router-dom";
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import { FormOuter, FormContainer, FormTitle, FieldInput, StyledErrorMessage } from '../SignUp/SignUp.styled';
import { NewUserContainer, RegisterBtn, SignInButton } from '../Login/Login.styled';

const schema = yup.object().shape({
    email: yup.string()                       
    .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email"
    )
    .required("Email is required"),
    password: yup.string()
    .length(8, 'Required length of your passwors is 8 symbols')
    .test("test-name", "Include spaces", function (value) {
        return /\s/.test(value) ? false : true;
      })
    .required('Password is required'),
})

const Login = ({login}) => {
    let history = useHistory();

    const openNotificationError = () => {
        notification.open({
          message: 'Not existed user',
          description:
            'User with such email and password does not exist',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };

    const signInSuccess = (values) => {
        const user = {
            userName: localStorage.getItem("userName-register", values["userName"]),
            email: localStorage.getItem("email-register", values["email"]),
            password: localStorage.getItem("password-register", values["password"]),
        };
    
        if (user.email === values["email"] &&
            user.password === values["password"]
        ){
            localStorage.setItem("userName", values["userName"]);
            localStorage.setItem("email", values["email"]);
            localStorage.setItem("password", values["password"]);
            login();
            history.push("/");
        } else {
            openNotificationError();
        }
    };

    const signUp = () => {
        history.push(`/register`)
    }

    return(
        <FormOuter>
            <FormContainer>
                <FormTitle>Submit the form to sign in</FormTitle>
                <Formik initialValues={{ email: '', password: '' }}
                        validationSchema = {schema}
                        onSubmit = {signInSuccess}>
                    {({ handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <Field type="email" name="email" as={FieldInput} placeholder="Email"></Field>
                        <StyledErrorMessage name="email" component="div"></StyledErrorMessage>
                        <Field type="password" name="password" as={FieldInput} placeholder="Password"></Field>
                        <StyledErrorMessage name="password" component="div"></StyledErrorMessage>
                        <NewUserContainer>
                            <p>Not a member?</p>
                            <RegisterBtn onClick={signUp}>Sign up</RegisterBtn>
                        </NewUserContainer>
                        <SignInButton type="submit" onClick={handleSubmit}>Sign in</SignInButton>
                    </Form>)}
                </Formik>
            </FormContainer>
        </FormOuter>
    );
}

export default Login;