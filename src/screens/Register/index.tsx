import React, { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";

import {
    Container,
    Header,
    Title,
    Form,
} from './styles'

export function Register() {

    useEffect(() => {
        SplashScreen.hideAsync();
    },[])

    return (
        <Container>
            <Header>

                <Title>
                    Cadastro
                </Title>
            </Header>

            <Form>
                <Input
                    placeholder="Nome"
                />
                <Input
                    placeholder="Preço"
                />
                <Button title ="Enviar"/>
            </Form>
        </Container>
    )
}
