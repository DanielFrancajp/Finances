import React, { useState } from "react";
import {
    Modal,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from "react-native";
import { useForm } from 'react-hook-form'
import * as SplashScreen from 'expo-splash-screen';


import { InputForm } from "../../components/Form/InputForm"
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { CategorySelect } from '../CategorySelect'

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsType,
} from './styles'

interface FormData {
    name: string;
    amount: string;

}

export function Register() {

    const [transactionType, setTransactionType] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    })

    const {
        control,
        handleSubmit

    } = useForm();

    function handleTransactionsTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }
    function handlecloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleRegister(form: FormData) {

        if (!transactionType)
            return Alert.alert('Selecione o tipo da transação');
        if (category.key === 'category')
            return Alert.alert('Selecione o tipo da Categoria');


        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }

        console.log(data);

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>

                <Header>

                    <Title>
                        Cadastro
                    </Title>
                </Header>

                <Form>

                    <Fields >
                        <InputForm
                            name="name"
                            control={control}
                            placeholder="Nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                        />
                        <InputForm
                            name="amount"
                            control={control}
                            placeholder="Preço"
                            keyboardType="numeric"
                        />

                        <TransactionsType>
                            <TransactionTypeButton
                                type='up'
                                title='Income'
                                onPress={() => handleTransactionsTypeSelect('up')}
                                isActive={transactionType === 'up'}
                            />
                            <TransactionTypeButton
                                type='down'
                                title='Outcome'
                                onPress={() => handleTransactionsTypeSelect('down')}
                                isActive={transactionType === 'down'}

                            />
                        </TransactionsType>
                        <CategorySelectButton
                            title={category.name}
                            onPress={handleOpenSelectCategoryModal}
                        />

                    </Fields>

                    <Button
                        title="Enviar"
                        onPress={handleSubmit(handleRegister)}

                    />
                </Form>
                <Modal visible={categoryModalOpen}>
                    <CategorySelect

                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handlecloseSelectCategoryModal}

                    />
                </Modal>
            </Container >
        </TouchableWithoutFeedback>
    )
}
