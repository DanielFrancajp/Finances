import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import themes from '../../../global/styles/themes';

interface IconProps {
    type: 'up' | 'down';
}

interface ContainerProps {
    isActive: boolean;
    type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
    width: 48%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1.5px solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    padding: 16px;


    
    ${({ isActive, type }) => isActive && type === 'up' && css`
    backgrond-color:  ${({ theme }) => theme.colors.attention_light}`
    }
    
    ${({ isActive, type }) => isActive && type === 'down' && css`
    backgrond-color:  ${({ theme }) => theme.colors.attention_light}`
    }
    
    `;
    
export const Icon = styled(Feather) <IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    color: ${({ theme, type }) =>
        type === 'up' ? theme.colors.sucess : theme.colors.attention_light
    }

`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${(RFValue(14))}px;
`;
