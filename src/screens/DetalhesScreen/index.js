import React, {useContext} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { ProjetContext } from "../../contexts/projet";


const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#132815",
        alignItems: "center",
        padding: 20,
        height: 2,
      }}
    >
      <Text style={{ color: "#fff" }}>
        O CPCIF capacita operacionalmente os voluntarios e militares de outras
        instituições a desempenharem a função de combatente florestal, a fim de
        elevar a eficiência e a segurança das operações de prevenção e combate a
        incêndio florestal no bioma cerrado, bem como nos demais biomas do
        Brasil.O CPCIF é destinado à especialização de oficiais.
      </Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.box3}>
    <Image style={{height: 150, marginRight: 5}} source={require('../../../assets/Local.png')} resizeMode="contain"/>
    <View>
        <View>
            <Text style={{color:'#fff'}}>Chapada dos Viadeiros</Text>
            <Text style={{color:'#fff'}}>Fazenda IV</Text>
        </View>
        <Image style={{width: 280}} source={require('../../../assets/Mapa.png')} resizeMode="contain"/>
    </View>
</View>
  );
}

function SettingsData() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#132815",
        alignItems: "center",
        padding: 20,
      }}
    >
<View style={{ flexDirection: 'row' }}>
  <View style={{ alignItems: 'center', borderColor: '#ffffff', borderWidth: 1, borderTopLeftRadius: 12,  borderBottomLeftRadius: 12, padding: 10 }}>
    <Text style={{ fontSize: 20, color: '#ffffff' }}>Inicio das atividades</Text>
    <Text style={{ color: '#ffffff' }}>Data: 27 de Agosto 2023</Text>
    <Text style={{ color: '#ffffff' }}>12:00</Text>
  </View>
  <View style={{ alignItems: 'center', borderColor: '#ffffff', borderWidth: 1, borderTopRightRadius: 12, borderBottomRightRadius: 12, padding: 10 }}>
    <Text style={{ fontSize: 20, color: '#ffffff' }}>Término das atividades</Text>
    <Text style={{ color: '#ffffff' }}>Data: 30 de Agosto 2023</Text>
    <Text style={{ color: '#ffffff' }}>18:35</Text>
  </View>
</View>
    </View>
  );
}

function SettingsOrganizador() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#132815",
        padding: 20,
      }}
    >

      <View >
      <Text style={{color:"#fff", fontSize:15, marginBottom:15}}>CBM-DF</Text>
      <View style={{ flexDirection: 'row',}}>
        <Icon name="phone" size={20} color="#fff" />
        <Text style={{ color: '#fff', marginLeft: 20 }}>(00)00000-0000</Text>
      </View>
      <View style={{ flexDirection: 'row',  marginTop: 10 }}>
        <Icon name="envelope" size={20} color="#fff" />
        <Text style={{ color: '#fff', marginLeft: 20 }}>cbmdf@gmail.com</Text>
      </View>
    </View>
      
    </View>
  );
}

const DetalhesScreen = ({ route, navigation }) => {
  const {selecionado, setSelecionado} = useContext(ProjetContext)
  const { item } = route.params;

  const handleParticipar = () => {
    navigation.navigate("FormParticipacao");
    setSelecionado(route.params)
  };

  return (

    
    <SafeAreaView style={styles.container}>
      

      <ImageBackground source={item.image} style={styles.cardImage}>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </ImageBackground>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 10 },
          tabBarStyle: {
            backgroundColor: "transparent", // torna o fundo transparente
          },
          tabBarActiveTintColor: "#fff", // Cor do texto ativo (branco)
          tabBarInactiveTintColor: "gray", // Cor do texto inativo (pode ajustar conforme necessário)
        }}
      >
        <Tab.Screen name="Curso" component={HomeScreen} />
        <Tab.Screen name="Local" component={SettingsScreen} />
        <Tab.Screen name="Data" component={SettingsData} />
        <Tab.Screen name="Organizador" component={SettingsOrganizador} />
      </Tab.Navigator>
      
      {/* Botão personalizado */}
      <TouchableOpacity
        style={styles.customButton}
        onPress={handleParticipar}
      >
        <Text style={styles.customButtonText}>Participar</Text>
      </TouchableOpacity>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#132815",
  },
  cardImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderBottomRightRadius: 110,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ffff",
    marginLeft: 20,
    marginTop: 30,
  },
  customButton: {
    backgroundColor: "green", 
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    marginTop: 1,
    width: 111,
    height: 38,
    marginLeft: 250,
  },
  customButtonText: {
    color: "#fff", 
    fontWeight: "bold",
    fontSize: 16,
  },
  box3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: "#132815",

    padding: 20,
},
});

export default DetalhesScreen;
