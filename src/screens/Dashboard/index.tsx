import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/HighlightCard/TransactionCard"


import {
    Container,
    Header,
    UserWrapper,
    Photo,
    User,
    UserName,
    UserInfo,
    UserGreeting,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList

} from './styles'

export interface DataListProps extends TransactionCardProps {
    id: string
    title: string
    type: string
    amount: string
    category: object
    name: string
    data: object
    }

export function Dashboard() {
    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "desenvolvimento de site",
            amount: "R$6.000,00",
            category: {
                name: 'vendas',
                icon: 'dollar-sign',
            },
            date: "13/04/2022"

        },
        {
            id: '2',
            type: 'negative',
            title: "Pizza Mestre",
            amount: "R$ 60,00",
            category: {
                name: 'Alimentação',
                icon: 'shopping-bag',
            },
            date: "12/04/2022"

        },
        {
            id: '3',
            type: 'negative',
            title: "Aluguel da Casa",
            amount: "R$ 1200,00",
            category: {
                name: 'Casa',
                icon: 'home',
            },
            date: "13/04/2022"

        }
    ];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>

                        <Photo
                            source={{ uri: "https://avatars.githubusercontent.com/u/71533630?s=400&u=7880f7f4d4a98a94d804194a0327e3654a9eab0c&v=4" }} />
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Daniel</UserName>
                        </User>

                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard
                    type="up"
                    title="Entradas"
                    amount="R$ 17,400.00"
                    lastTransaction="Última entrada dia 13 de Abril"
                />
                <HighlightCard
                    type="down"
                    title="Saídas"
                    amount="R$ 1259,00"
                    lastTransaction="Última entrada dia 03 de Abril"
                />
                <HighlightCard
                    type="total"
                    title="Total"
                    amount="R$ 16,141.00"
                    lastTransaction="01 à 06 de Abril"
                />
            </HighlightCards>

            <Transactions>
                <Title>
                    Listagem
                </Title>

                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}

                />


            </Transactions>
        </Container>
    )
}

