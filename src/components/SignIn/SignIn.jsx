import React from 'react'
import { FormLabel } from './SigninElement'
import {Form, FormButton, FormContent, FormH1, FormInput, FormWrap, Text, Icon, Container} from './SigninElement'

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>IPF</Icon>
                <FormContent>
                    <Form action="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type="email"/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type="password"/>
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot Password</Text>
                    </Form>

                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn
