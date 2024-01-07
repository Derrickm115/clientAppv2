import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Optional: if you want icons
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View>
      <SafeAreaView>
        <View>
          <Text>Welcome to Haircut Now</Text>
          {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator> */}
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

export default Home;
