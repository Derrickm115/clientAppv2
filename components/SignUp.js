import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const SignUp = () => {

const SignUpFn = () => {

    firebase.auth().signInWithEmailAndPassword(Phone, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });


}


  return (
    <View>
      <SafeAreaView>
        <View>
          <Text>This is the sign up page</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   SafeAreaView: {
//     flex: 2,
//   },
// });

export default SignUp;