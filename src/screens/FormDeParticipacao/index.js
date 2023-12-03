import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { FormContext } from "../../contexts/form";
import { ProjetContext } from "../../contexts/projet";

const FormParticipacao = ({ route }) => {
  const {selecionado, setSelecionado} = useContext(ProjetContext)
  const {projetos, setProjetos} = useContext(ProjetContext)
  const {item} = selecionado

  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [doc, setDoc] = useState("");
  const [endereco, setEndereco] = useState("");
  const [restricao, setRestricao] = useState("");
  const [errors, setErrors] = useState({
    nome: "",
    tel: "",
    doc: "",
    endereco: "",
  });

  const { Cadastro } = useContext(FormContext);

  const navigation = useNavigation();

  const handleNavRevisar = () => {
    // Limpa mensagens de erro anteriores
    setErrors({
      nome: "",
      tel: "",
      doc: "",
      endereco: "",
    });

    let hasError = false;

    if (!nome || nome.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nome: "Nome obrigatório",
      }));
      hasError = true;
    }

    if (!tel || !/^\d{11}$/.test(tel)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        tel: "Número de contato inválido",
      }));
      hasError = true;
    }

    if (!doc || !/^\d{11}$/.test(doc)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        doc: "CPF inválido",
      }));
      hasError = true;
    }

    if (!endereco || endereco.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        endereco: "Endereço obrigatório",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // Restrição Dietética não é obrigatória, portanto não é validada

    Cadastro(nome, tel, doc, endereco);
    navigation.navigate("RevisaoInformacao");

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.buttonPerfil}>
          <View style={{ justifyContent: "center"}}>
            <Image source={item.image} style={{resizeMode : 'cover', height: 200}}/>

            <Text style={styles.text}>{item.title}</Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={{ color: "#fff", marginLeft: 14, fontSize: 15 }}>
            Para confirmar sua inscrição, precisamos de algumas informações
            pessoais:
          </Text>
          <Text style={styles.textInput}>Nome Completo</Text>

          <View style={{ alignSelf: "stretch" }}>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
              placeholder="Digite seu nome"
              placeholderTextColor="white"
            />
          </View>
          {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}

          <Text style={styles.textInput}>Número para Contato</Text>
          <TextInput
            style={styles.input}
            value={tel}
            onChangeText={(text) => setTel(text)}
            placeholder="(00)00000-0000"
            placeholderTextColor="white"
          />
          {errors.tel && <Text style={styles.errorText}>{errors.tel}</Text>}

          <Text style={styles.textInput}>Número do CPF</Text>
          <TextInput
            style={styles.input}
            value={doc}
            onChangeText={(text) => setDoc(text)}
            placeholder="000000000000"
            placeholderTextColor="white"
          />
          {errors.doc && <Text style={styles.errorText}>{errors.doc}</Text>}

          <Text style={styles.textInput}>Endereço Residencial </Text>
          <TextInput
            style={styles.input}
            value={endereco}
            onChangeText={(text) => setEndereco(text)}
            placeholder="Q 00 conj 00 casa 00,  Cidade - DF"
            placeholderTextColor="white"
          />
          {errors.endereco && (
            <Text style={styles.errorText}>{errors.endereco}</Text>
          )}

          <Text style={styles.textInput}>
            Você tem alguma restrição dietética?
          </Text>
          <TextInput
            style={styles.input}
            value={restricao}
            onChangeText={(text) => setRestricao(text)}
            placeholder=""
            placeholderTextColor="white"
          />
        </View>

        <TouchableOpacity style={styles.customButton} onPress={handleNavRevisar}>
          <Text style={styles.customButtonText}>Participar</Text>
        </TouchableOpacity>
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
    color: "#fff", // Altere para a cor desejada
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 13,
  },
  containerCard2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage2: {
    width: 80,
    height: 80,
    borderRadius: 50,
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
    marginHorizontal: 14,
    marginTop: 15,
  },
  input: {
    alignSelf: "stretch",
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 8,
    height: 40,
    marginHorizontal: 14,
  },
  form: {
    alignItems: "stretch",
  },
  customButton: {
    backgroundColor: "green",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 35,
    marginRight: 15,
    marginBottom: 15,
  },
  customButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginLeft: 14,
    fontSize: 15,
    marginBottom: 8,
  },
});

export default FormParticipacao;
