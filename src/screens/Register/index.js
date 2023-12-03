import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Text,
} from "react-native";
import { Button, Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const validationSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve conter pelo menos 6 dígitos")
    .required("Informe sua senha"),
});

export default function Home() {
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");

  const userLogin = () => {
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Login Efetuado...');
        console.log(user);
        navigation.navigate("Home")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handNewUser = () => {
    navigation.navigate("New");
  };

  return (
    <ImageBackground
      source={require("../../../assets/Backgrund.png")}
      style={styles.background}
    >
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Controller
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  containerStyle={{ width: "80%" }}
                  style={{ color: "white" }}
                  placeholder="E-mail"
                  value={userMail}
                  onChangeText={setUserMail}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={{ color: "red" }}>{errors.email.message}</Text>
            )}

            <Controller
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  containerStyle={{ width: "80%" }}
                  style={{ color: "white" }}
                  placeholder="Senha"
                  value={userPass}
                  onChangeText={setUserPass}
                  secureTextEntry={true}
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={{ color: "red" }}>{errors.password?.message}</Text>
            )}
          </View>

          <View>
            <Button
              title="Login"
              loading={false}
              loadingProps={{ size: "small", color: "white" }}
              buttonStyle={{
                backgroundColor: "rgba(25, 144, 51, 0.51)",
                borderRadius: 5,
                width: 315,
              }}
              titleStyle={{ fontWeight: "bold", fontSize: 23 }}
              containerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={userLogin}
            />
            <Button
              title="Cadastrar"
              loading={false}
              loadingProps={{ size: "small", color: "white" }}
              buttonStyle={{
                backgroundColor: "rgba(25, 144, 51, 0.51)",
                borderRadius: 5,
                width: 315,
                marginTop: 15,
              }}
              titleStyle={{ fontWeight: "bold", fontSize: 23 }}
              containerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handNewUser}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "#132815",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
