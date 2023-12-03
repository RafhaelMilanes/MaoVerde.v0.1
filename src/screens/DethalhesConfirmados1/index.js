import React, { useState, useContext } from "react";
import {View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { CardContext } from '../../contexts/card';
import { ProjetContext } from "../../contexts/projet";

const DetalhesConfirmados1 = () => {
    const {card, setCard} = useContext(CardContext)
    const {click} = useContext(CardContext)

    const {projetos, setProjetos} = useContext(ProjetContext)
    const {selecionado1, setSelecionado1} = useContext(ProjetContext)
    const {item} = selecionado1

    function cancelar() {
        navigation.navigate("Cancelado");
        const selectedItem = projetos.find(projetos => projetos.id === item.id);
    
      // Manipular o item (exemplo: adicionar um prefixo ao nome)
      if (selectedItem) {
        selectedItem.inscrito = false;
      }
    
      // Função para salvar o item de volta na lista
      const saveItemToList = () => {
        setProjetos(prevList => {
          const updatedList = prevList.map(projetos =>
            projetos.id === item.id ? selectedItem : projetos
          );
          return updatedList;
        });
      }};
    
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
      };

    return (



        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={{marginHorizontal: 25}}>
                <View style={styles.box1}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Image source={require('../../../assets/Voltar.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={30} color="white" />
                    </TouchableOpacity>
                </View>

                <Image style={{alignSelf: 'center', width: 350}} source={require('../../../assets/qrcode.png')} resizeMode="contain"/>

                <View style={styles.box3}>
                    <Image style={{height: 150, marginRight: 5}} source={require('../../../assets/Local.png')} resizeMode="contain"/>
                    <View>
                        <View>
                            <Text style={styles.box3_texto}>Chapada dos Viadeiros</Text>
                            <Text style={styles.box3_texto}>Fazenda IV</Text>
                        </View>
                        <Image style={{width: 280}} source={require('../../../assets/Mapa.png')} resizeMode="contain"/>
                    </View>
                </View>
{/*                 <TouchableOpacity style={{marginTop: 70}} onPress={() => Cancelar()}>*/}
                <TouchableOpacity onPress={cancelar}>
                    <View style={styles.botao}>
                        <Text style={{ color: 'white', margin:1}}>Cancelar Participação</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#132815',
    },
    box1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    box3: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
        box3_texto: {
            color: 'white',
            fontSize: 11,
        },
    botao: {
        backgroundColor: 'rgba(25, 144, 51, 0.51)',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        width: 300,
        height: 35,
        marginBottom:30
    }
}
)

export default DetalhesConfirmados1;