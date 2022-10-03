import React from "react";
import {
    TouchableOpacity,
    Text,
} from "react-native";
import { FlatList } from "react-native";
import themes from "../../global/styles/themes";
import { categories } from "../../utils/categories";

import {
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    Separator,
    Footer,


} from "./styles";


interface Category {
    key: string;
    name: string;
}

interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}



export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory,
}: Props) {

    function handleCategorySelect(category: Category) {
        setCategory(category);

    }
    return (
        <Container>
            <Header>
                <Title>
                    Categoria
                </Title>
            </Header>

            <FlatList
                data={categories}
                style={{ flex: 1, width: "100 %" }}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Category
                        onPress={() => handleCategorySelect(item)}
                        isActive ={category.key === item.key}
                    >
                        <Icon name={item.icon} />
                        <Name>
                            {item.name}
                        </Name>
                    </Category>
                )}

                ItemSeparatorComponent={() => <Separator />}


            />

            <Footer>
                <TouchableOpacity
                    style={{
                        width: '100%',
                        padding: 18,
                        borderRadius: 5,
                        alignItems: 'center',
                        backgroundColor: themes.colors.secondary
                    }}
                    onPress={closeSelectCategory} >
                    <Text style={{ color: '#fff', fontSize: 16 }} >Selecionar</Text>
                </TouchableOpacity>

            </Footer>

        </Container>

    )
}