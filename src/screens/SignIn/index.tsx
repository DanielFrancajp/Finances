import React from "react";
import AppleSvg from '../../assets/apple'
import GoogleSvg from '../../assets/google'
import LogoSvg from '../../assets/finance'

import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,

} from './styles'
import { RFValue } from "react-native-responsive-fontsize";


export function SignIn() {
    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />
                    <Title>
                        Controle suas {'\n'}
                        finanças de forma{'\n'}
                        muito simples
                    </Title>
                </TitleWrapper>
                <SignInTitle>
                    Faça seu login com{'\n'}
                    uma das contas abaixo
                </SignInTitle>
            </Header>
            <Footer>

            </Footer>
        </Container>

    );
}