import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ProjetContext } from "../../contexts/projet";

const DetalhesConfirmados = ({route}) => {
  const {selecionado1, setSelecionado1} = useContext(ProjetContext)
  const {item} = route.params
  setSelecionado1(route.params)

  const navigation = useNavigation();

  const Detalhes1 = () => {
    navigation.navigate("DetalhesConfirmados1");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{ marginHorizontal: 25 }}>
        <View style={styles.box1}>
          <TouchableOpacity onPress={handleGoBack}>
            <Image source={require("../../../assets/Voltar.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 30, color: "white", marginTop: 50, marginLeft:35 }}>
          {item.title}
        </Text>

        <View style={{ alignSelf: "center" }}>
          <ImageBackground
            style={styles.box2}
            source={item.image2}
            resizeMode="contain"
          >
            <View style={styles.box2_1}>
              <View>
                <Text style={styles.box2_text}>Data: 27 de Agosto 2023</Text>
                <Text style={styles.box2_text2}>12:00</Text>
              </View>
              <View style={styles.box2_2}>
                <View style={styles.box2_2_1}></View>
                <View style={styles.box2_2_1}></View>
                <View style={styles.box2_2_1}></View>
                <View style={styles.box2_2_1}></View>
              </View>
              <View>
                <Text style={styles.box2_text}>Data: 27 de Agosto 2023</Text>
                <Text style={styles.box2_text2}>18:35</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => Detalhes1()}>
          <View style={styles.botao}>
            <Text style={{ color: "white", margin: 5 }}>Dados do Evento</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#132815",
  },
  box1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box2: {
    width: 330,
    height: 550,
  },
  box2_text: {
    color: "white",
    fontSize: 9,
  },
  box2_text2: {
    color: "white",
    fontSize: 13,
  },
  box2_1: {
    marginTop: 230,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  box2_2: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  box2_2_1: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: "white",
    marginHorizontal: 2,
  },
  botao: {
    backgroundColor: "rgba(25, 144, 51, 0.51)",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 40,
    width: 320,
    height: 35,
  },
});

export default DetalhesConfirmados;
