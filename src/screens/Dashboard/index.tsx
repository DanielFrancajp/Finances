import React, { useEffect, useState } from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/HighlightCard/TransactionCard"
import AsyncStorage from '@react-native-async-storage/async-storage'



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
    TransactionList,
    LogoutButton

} from './styles'

export interface DataListProps {
    id: string;
    title: string;
    type: 'positive' | 'negative';
    amount: string;
    category: object;
    data: string;
}

export function Dashboard() {
    const [data, setData] = useState<DataListProps[]>([]);

    async function loadTransaction() {
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);

        const transactions = response ? JSON.parse(response) : [];

       // const transactionFormatted = transactions.map();

        setData(transactions)
    }

    useEffect(() => {
        loadTransaction();

    }, [])


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
                    <LogoutButton onPress={() => { }}>
                        <Icon name="power" />
                    </LogoutButton>
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
                    keyExtractor={(item: DataListProps) => `${item.id}`}
                    renderItem={({ item }: TransactionCardProps) => <TransactionCard data={item} />}

                />


            </Transactions>
        </Container>
    )
}

