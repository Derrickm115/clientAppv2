import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';

const Login = ({ navigation }) => {
  const handleLogin = (phoneNumber, password) => {
    // TODO: Implement login logic
    console.log('Login with:', phoneNumber, password);
  };

  const handleCreateAccount = () => {
    // TODO: Navigate to the create account screen
    console.log('Navigate to create account screen');
  };
  return (
    <View styles={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>This is the Login Screen</Text>
        <LoginForm
          onLogin={handleLogin}
          onCreateAccount={handleCreateAccount}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
