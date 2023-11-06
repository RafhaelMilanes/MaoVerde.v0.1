import React from "react";
import { View, Text, StyleSheet, ImageBackground,ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const handleNavRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView>
    <ImageBackground
      source={require("../../../assets/Backgrund.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Cuide.</Text>
        <Text style={styles.text}>Conserve.</Text>
        <Text style={styles.text}>Renove.</Text>
      </View>

      <View>
        <Button
          title="Get Started"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "rgba(25, 144, 51, 0.51)",
            borderRadius: 5,
            margin:'auto'
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 23 }}
          containerStyle={{
            height: '10vh',
            width: '80vw',
            marginVertical: 400,
            margin: 50,
           display:'flex'

            
          }}
          onPress={() => handleNavRegister()}
        />
      </View>
    </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "#132815",
  },
  container: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 42,
    backgroundColor: "transparent",
  },
  text: {
    color: "#fff",
    fontSize: 58,
    fontWeight: "900",
  },
});

export default Login;
