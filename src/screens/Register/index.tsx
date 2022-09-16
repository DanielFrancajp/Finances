import React from "react";

import { Input } from "../../components/Form/Input/Index";

import {
    Container,
    Header,
    Title,
    Form,
} from './styles'

export function Register() {
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
                <Input
                    placeholder="Teste git"
                />
            </Form>
        </Container>
    )
}