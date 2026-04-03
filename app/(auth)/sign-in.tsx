import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="../sign-up">Create an Account</Link>
    </View>
  );
};

export default SignIn;
