import React from 'react'
import { FormLabel } from './SignUpElement'
import {Form, FormButton, FormContent, FormH1, FormInput, FormWrap, Icon, Container} from './SignUpElement'

const SignUpIndex = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>IPF</Icon>
                <FormContent>
                    <Form action="#">
                    <FormH1>Sign Up</FormH1>
                    <FormLabel htmlFor='for'>Name</FormLabel>
                    <FormInput type="text"/>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type="password"/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type="password"/>
                   <FormButton>Submit</FormButton>
                    </Form>

                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignUpIndex