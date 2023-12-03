import React from "react";
import { useState } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/themed";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

const validationSchema = yup.object().shape({
  name: yup.string().required("Todos os campos devem ser preenchidos"),
});

const New = () => {
  const [userMail, setUserMail] = useState("");
  const [userPass, setuserPass] = useState("");
  const [userRePass, setuserRepass] = useState("");

  function newUser() {
    if(userMail === '' || userPass === '' || userRePass === ''){
      alert('Todos os campos devem ser preenchidos');
      return;
    }
    if(userPass !== userRePass){
      alert('A senha e a confirmação não são iguais');
      return
    }else{
      createUserWithEmailAndPassword(auth, userMail, userPass)
        .then((UserCredential)=>{
          const user = UserCredential.user;
          alert('O usuário '+ userMail + ' foi criado. Faça o login');
          navigation.navigate('Register')
        })
        .catch((error)=>{
          const errorMessage = error.message;
          alert(errorMessage);
          navigation.navigate("Register")
        })
    }
  }

  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleName = () => {
    navigation.navigate("DataNasc");
  };

  return (
    <ImageBackground
      source={require("../../../assets/Backgrund.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>E-mail</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              containerStyle={{ width: "80%" }}
              style={{ color: "white" }}
              placeholder="E-mail de usuário"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              value={userMail}
              onChangeText={setUserMail}
            />
          )}
          name="name"
          defaultValue=""
        />
        <Text style={styles.text}>Senha</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              containerStyle={{ width: "80%" }}
              style={{ color: "white" }}
              placeholder="Senha de usuário"
              autoCapitalize="none"
              secureTextEntry
              value={userPass}
              onChangeText={setuserPass}
            />
          )}
          name="name"
          defaultValue=""
        />
         <Text style={styles.text}>Repita a senha</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              containerStyle={{ width: "80%" }}
              style={{ color: "white" }}
              placeholder="Repita a senha"
              autoCapitalize="none"
              secureTextEntry
              value={userRePass}
              onChangeText={setuserRepass}
            />
            
          )}
          name="name"
          defaultValue=""
        />
        {errors.name && (
          <Text style={{ color: "red" }}>{errors.name.message}</Text>
        )}
        <Button
          title="Cadastrar"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "rgba(25, 144, 51, 0.51)",
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 23 }}
          containerStyle={{
            marginHorizontal: 15,
            width: 300,
          }}
          onPress={newUser}
        />
      </View>
    </ImageBackground>
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
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 24,
    width: 300,
  },
});

export default New;
