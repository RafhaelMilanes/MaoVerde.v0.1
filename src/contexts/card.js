import React from 'react';
import { createContext, useState } from "react";
import { StyleSheet } from 'react-native';

export const CardContext = createContext({});

function CardProvider ({ children }) { 
  const [card, setCard] = useState(StyleSheet.create({
    alignItems: "center",
    borderRadius: 40,
    display: 'flex',
    marginVertical: 20
  }))

  function click (card) {
    setCard(StyleSheet.create({
      alignItems: "center",
      borderRadius: 40,
      display: 'none'
    }))
  }

      return (
        <CardContext.Provider value={{card, setCard, click}}>
          {children}
        </CardContext.Provider>
      );
    }
    
    export default CardProvider;