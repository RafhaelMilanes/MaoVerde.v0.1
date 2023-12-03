import React from 'react';
import { createContext, useState } from "react";

export const ProjetContext = createContext({});

function ProjetProvider ({ children }) { 
  const [projetos, setProjetos] = useState(
    [
      {
        id: "1",
        title: "Combate a Incêndio",
        description:
          "O CPCIF capacita operacionalmente os voluntarios e militares de outras instituições a desempenharem a função de combatente florestal, a fim de elevar a eficiência e a segurança das operações de prevenção e combate a incêndio florestal no bioma cerrado, bem como nos demais biomas do Brasil.O CPCIF é destinado à especialização de oficiais.",
        image: require("../../assets/queimada.jpg"),
        image2 : require("../../assets/Box2.png"),
        inscrito: false
      },
      {
        id: "2",
        title: "Reflorestamento",
        description:
          "O CPCIF capacita operacionalmente os voluntarios e militares de outras instituições a desempenharem a função de combatente florestal, a fim de elevar a eficiência e a segurança das operações de prevenção e combate a incêndio florestal no bioma cerrado, bem como nos demais biomas do Brasil.O CPCIF é destinado à especialização de oficiais.",
        image: require("../../assets/reflorestamento.jpg"),
        image2 : require("../../assets/Box2R.png"),
        inscrito: false
      },
      {
        id: "3",
        title: "Educa Cerrado",
        description:
          "O CPCIF capacita operacionalmente os voluntarios e militares de outras instituições a desempenharem a função de combatente florestal, a fim de elevar a eficiência e a segurança das operações de prevenção e combate a incêndio florestal no bioma cerrado, bem como nos demais biomas do Brasil.O CPCIF é destinado à especialização de oficiais.",
        image: require("../../assets/educa.jpg"),
        image2 : require("../../assets/Box2E.png"),
        inscrito: false
      },
    ]
  )
  const [selecionado, setSelecionado] = useState()
  const [selecionado1, setSelecionado1] = useState()


  
      return (
        <ProjetContext.Provider value={{projetos, setProjetos, selecionado, setSelecionado, selecionado1, setSelecionado1}}>
          {children}
        </ProjetContext.Provider>
      );
    }
    
    export default ProjetProvider;