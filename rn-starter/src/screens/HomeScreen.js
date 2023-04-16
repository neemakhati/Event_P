import React from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}) => {
  const signOut = async () => {
    await auth().signOut();
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default HomeScreen;
