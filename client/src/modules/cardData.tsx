import { createContext, useContext } from 'react';

export enum CardColor {RED, BLUE, GREEN, UNIQUE}

export enum CardStyle {BASE, GRADIENT}

export type CardContext = {
    cardColor: CardColor
    setCardColor:(c: CardColor) => void
    cardStyle: CardStyle
    setCardStyle:(c: CardStyle) => void
}

export const MyCardContext = createContext<CardContext>({
    cardColor: CardColor.RED,
    setCardColor: () => {},
    cardStyle: CardStyle.BASE,
    setCardStyle: () => {},
});

export const useCardContext = () => useContext(MyCardContext);