import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const signUp = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Sign Up</Text>
      <TextInput
        style={{borderWidth: 1, width: '80%', marginBottom: 10}}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={{borderWidth: 1, width: '80%', marginBottom: 10}}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Button title="Sign Up" onPress={signUp} />
    </View>
  );
};

export default SignupScreen;
