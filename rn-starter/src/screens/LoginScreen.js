import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const signIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <TextInput
        style={{borderWidth: 1, width: '80%', marginBottom: 10}}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={{borderWidth: 1, width:'80%', marginBottom: 10}}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
    />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Button title="Login" onPress={signIn} />
    <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Signup')}
    />
    </View>
    );
};
        
export default LoginScreen;
