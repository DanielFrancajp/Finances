import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useFocusEffect } from '@react-navigation/native'

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
    TransactionList,
    LogoutButton

} from './styles'

export interface DataListProps extends TransactionCardProps {
    id: string;
    name: string;
    amount: string;
    date: string;
    type: string;
    category: string
}

interface HighlightProps {
    amount: string;
}
interface HighlightData {

    entries: HighlightProps;
    expensives: HighlightProps
    total: HighlightProps;
}

export function Dashboard() {
    const [transaction, setTransactions] = useState<DataListProps[]>([]);
    const [HighlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);

    async function loadTransactions() {
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const transactions = response ? JSON.parse(response) : [];

        let entriesTotal = 0;
        let expensiveTotal = 0;

        const transactionsFormatted: DataListProps[] = transactions
            .map((item: DataListProps) => {

                if (item.type === 'positive') {

                    entriesTotal += Number(item.amount);
                } else {
                    expensiveTotal += Number(item.amount);
                }

                const amount = Number(item.amount)
                    .toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })

                const date = Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                }).format(new Date(item.date))
                return {
                    id: item.id,
                    name: item.name,
                    amount,
                    type: item.type,
                    category: item.category,
                    date,
                }
            });


        setTransactions(transactionsFormatted);

        const total = entriesTotal - expensiveTotal;

        setHighlightData({
            entries: {
                amount: entriesTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })
            },
            expensives: {
                amount: expensiveTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            },
            total: {
                amount: total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })

            }
        });
        console.log(transactionsFormatted)
    }

    useEffect(() => {
        loadTransactions();



    }, []);

    useFocusEffect(useCallback(() => {
        loadTransactions();
    }, []));


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
                    amount={HighlightData.entries.amount}
                    lastTransaction="Última entrada dia 13 de Abril"
                />
                <HighlightCard
                    type="down"
                    title="Saídas"
                    amount={HighlightData.expensives.amount}
                    lastTransaction="Última entrada dia 03 de Abril"
                />
                <HighlightCard
                    type="total"
                    title="Total"
                    amount={HighlightData.total.amount}
                    lastTransaction="01 à 06 de Abril"
                />
            </HighlightCards>

            <Transactions>
                <Title>
                    Listagem
                </Title>

                <TransactionList
                    data={transaction}
                    keyExtractor={(item: DataListProps) => `${item.id}`}
                    renderItem={({ item }: TransactionCardProps) => <TransactionCard data={item} />}

                />


            </Transactions>
        </Container>
    )
}