import React from 'react';
import { useHistory } from "react-router-dom";
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import 'antd/dist/antd.css';
import { FormOuter, FormContainer, FormTitle, FieldInput, SignUpButton, StyledErrorMessage, HasAccContainer, LoginBtn } from '../SignUp/SignUp.styled';

const schema = yup.object().shape({
    userName: yup.string()
    .min(3, 'Min length must be 3')
    .max(20, 'Max length must be 20')
    .required('User name is required'),
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
    passwordRepead: yup.string()
    .oneOf([yup.ref("password"), null], "Passwords doesnt match")
    .required('Retyped password is required'),
})

const SignUp = ({login}) => {
    let history = useHistory();

    const signUpSuccess = (values) => {
        localStorage.setItem("userName", values["userName"]);
        localStorage.setItem("email", values["email"]);
        localStorage.setItem("password", values["password"]);
        localStorage.setItem("userName-register", values["userName"]);
        localStorage.setItem("email-register", values["email"]);
        localStorage.setItem("password-register", values["password"]);
        login();        
        history.push("/");
    };

    const signIn = () => {
        history.push(`/login`)
    }

    return(
        <FormOuter>
            <FormContainer>
                <FormTitle>Register a new account</FormTitle>
                <Formik initialValues={{ userName: '', email: '', password: '', passwordRepead: ''}}
                        validationSchema = {schema}
                        onSubmit = {signUpSuccess}>
                    {({ handleSubmit}) => (
                        <Form onSubmit={handleSubmit}>
                            <Field type="text" name="userName" as={FieldInput} placeholder="Username"></Field>
                            <StyledErrorMessage name="userName" component="div"></StyledErrorMessage>
                            <Field type="email" name="email" as={FieldInput} placeholder="Email"></Field>
                            <StyledErrorMessage name="email" component="div"></StyledErrorMessage>
                            <Field type="password" name="password" as={FieldInput} placeholder="Password"></Field>
                            <StyledErrorMessage name="password" component="div"></StyledErrorMessage>
                            <Field type="password" name="passwordRepead" as={FieldInput} placeholder="Retype password"></Field>
                            <StyledErrorMessage name="passwordRepead" component="div"></StyledErrorMessage>
                            <HasAccContainer>
                                <p>Already has an account?</p>
                                <LoginBtn onClick={signIn}>Sign in</LoginBtn>
                            </HasAccContainer>
                            <SignUpButton type="button" onClick={handleSubmit}>Sign up</SignUpButton>
                        </Form>)}
                </Formik>
            </FormContainer>
        </FormOuter>
    );
}

export default SignUp;