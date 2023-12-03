import React, { useContext } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView, Platform, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/auth";
import { CardContext } from "../../contexts/card";
import { ProjetContext } from "../../contexts/projet";
import { Dimensions } from "react-native";

const ParticipacoesConfirmadas = () => {
  const { user, username } = useContext(AuthContext);
  const navigation = useNavigation();
  const { card, setCard } = useContext(CardContext);

  const {projetos, setProjetos} = useContext(ProjetContext)
  const {item} = projetos

  const hanDetalhes = () => {
    navigation.navigate("DetalhesConfirmados");
  };

  const hanFeedback = () => {
    navigation.navigate("Feedback");
  };

  const hanHome = () => {
    navigation.navigate("Home");
  };


  const renderItem = ({item}) => {
    if (item.inscrito == true) {
      return (
        <TouchableOpacity style={card} onPress={hanDetalhes}>
          <Image style={styles.box3_1} source={item.image} />
          <View style={styles.box3_2}>
            <Text style={{ color: 'white', fontSize: 20, marginBottom: 5 }}>{item.title}</Text>
            <Text style={{ color: 'white', fontSize: 10 }}>28, Ago, 12h </Text>
          </View>
        </TouchableOpacity>
      )
    }
  }

  const renderItem2 = ({item}) => {
    if (item.inscrito == true) {
      return (
        <TouchableOpacity style={card} onPress={hanFeedback}>
            <Image style={styles.box3_1} source={item.image} />
            <View style={styles.box3_2}>
              <Text style={{ color: 'white', fontSize: 20, marginBottom: 5 }}>{item.title}</Text>
              <Text style={{ color: 'white', fontSize: 10 }}>27, Ago, 12h </Text>
            </View>
          </TouchableOpacity>
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={{ padding: 10 }}>
          <View style={styles.box1}>
            <TouchableOpacity style={styles.box1_2}>
              <Image source={require("../../../assets/Perfil.png")} />
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.text}>{username.username}</Text>
                <Text style={styles.text1}>{user.email}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={hanHome}>
              <Ionicons name="home-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.box2}>
            <Text style={{ fontSize: 20, color: 'white', marginLeft: 15 }}>Comfimações</Text>
          </View>

          <FlatList
            style={styles.textCard}
            data={projetos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />

          <View style={styles.box2}>
            <Text style={{ fontSize: 20, color: 'white', marginLeft: 15 }}>Feedback</Text>
          </View>

          <FlatList
            style={styles.textCard}
            data={projetos}
            renderItem={renderItem2}
            keyExtractor={(item) => item.id}
          />
        </View>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
    backgroundColor: "#132815",
  },
  box1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    ...Platform.select({
      ios: {
        paddingVertical: 10,
      },
      android: {
        paddingVertical: 5,
      },
    }),
  },
  box1_2: {
    flexDirection: "row",
    alignItems: "center",
  },
  box2: {
    marginTop: 40,
    marginBottom: 10,
  },
  box3_1: {
    borderRadius: 10,
    resizeMode: "cover",
    width: '100%',
    height: 180,
  },
  box3_2: {
    alignSelf: 'flex-start',
    marginTop: -60,
    marginHorizontal: 15,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 14,
    fontWeight: "800",
  },
  text1: {
    color: "#fff",
    fontSize: 17,
    marginLeft: 14,
  },
});

export default ParticipacoesConfirmadas;
