import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

import {} from "../DetalhesCard";

import { FormContext } from "../../contexts/form";
import { ProjetContext } from "../../contexts/projet";

const FormParticipacao = () => {
  const {projetos, setProjetos} = useContext(ProjetContext)
  const {selecionado, setSelecionado} = useContext(ProjetContext)
  const {item} = selecionado

  function participar() {
    const selectedItem = projetos.find(projetos => projetos.id === item.id);

  // Manipular o item (exemplo: adicionar um prefixo ao nome)
  if (selectedItem) {
    selectedItem.inscrito = true;
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

  const { user } = useContext(FormContext);
  const navigation = useNavigation("");

  const handleNavConfirmado = () => {
    navigation.navigate("Confirmado");
    participar()
  };
  const handleNavBack = () => {
    navigation.navigate("FormParticipacao")
  } 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.buttonPerfil}>
          <View style={{ justifyContent: "center" }}>
            <Image source={item.image} style={{resizeMode : 'cover', height: 200}}/>

            <Text style={styles.text}>{item.title}</Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={{ color: "#fff", marginLeft: 14, fontSize: 15 }}>
            Revise suas Informações
          </Text>
          <Text style={styles.textInput}>Nome Completo</Text>
          <Text style={styles.input}>{user.nome}</Text>
          <Text style={styles.textInput}>Número para Contato</Text>
          <Text style={styles.input}>{user.tel}</Text>
          <Text style={styles.textInput}>Número de Documento RG ou CPF</Text>
          <Text style={styles.input}>{user.doc}</Text>
          <Text style={styles.textInput}>Endereço Residencial </Text>
          <Text style={styles.input}> {user.endereco}</Text>

          <Text style={styles.textInput}>
            Você tem alguma restrição dietética?
          </Text>
          <Text style={styles.input}>{user.restricao}</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={styles.customButton}
            onPress={handleNavBack}
          >
            <Text style={styles.customButtonText}>Editar informações</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.customButton1}
            onPress={handleNavConfirmado}
          >
            <Text style={styles.customButtonText}>Participar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    fontFamily: "",
    fontSize: 48,
    backgroundColor: "#132815",
  },
  text: {
    color: "#fff",
    fontSize: 45,
    marginLeft: 14,
    fontWeight: "800",
    maxWidth: 400
  },
  text1: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 14,
  },
  buttonPerfil: {
    flexDirection: "row",
  },
  notif: {
    marginLeft: 200,
  },
  containerCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  card: {
    flex: 1,
    margin: 12,
    paddingTop: 1,
    width: 144,
    height: 255,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  cardImage: {
    width: 160,
    height: 250,
    borderRadius: 8,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 13,
  },
  card2: {
    flex: 1,
    paddingTop: 1,
    width: 100,
    height: 120,

    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    marginBottom: 8,
    marginLeft: 14,
    marginTop: 15,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  input: {
    color: "white",
    paddingLeft: 8,
    height: 40,
    marginLeft: 14,
    alignSelf: "stretch",
  },
  form: {
    alignSelf: "stretch",
  },
  customButton: {
    backgroundColor: "green",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    marginTop: 0,
    marginRight: 15,
    marginBottom: 0,
  },
  customButton1: {
    backgroundColor: "green",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    marginTop: 0,
    marginRight: 15,
    marginBottom: 0,
  },
  customButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default FormParticipacao;
