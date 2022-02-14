import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import COLORS from '../const/Colors';
import firestore from '@react-native-firebase/firestore';

const OrdderCompleted = ({route}) => {
  const restaurant = route.params;

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 60) {
        setMinutes(minutes + 1);
        if(minutes === 4){
          clearInterval(timer);
          Alert.alert('Your order is completed');
      
          setMinutes(0);
          // clearInterval(timer);
        }
        setSeconds(0);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });


  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', marginTop: 200}}>
      <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
        Your Verification Code
      </Text>
      <Text style={{fontSize: 25, color: 'orange'}}>{restaurant.phone}</Text>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          marginTop: 40,
          fontWeight: 'bold',
        }}>
        Total Bill
      </Text>
      <Text style={{fontSize: 30, color: 'orange'}}>{restaurant.total}</Text>
      <TouchableOpacity style={styles.buyBtn}>
        <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
          {minutes<10? '0'+minutes:minutes}:{seconds<10? '0'+seconds:seconds}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrdderCompleted;

const styles = StyleSheet.create({
  buyBtn: {
    width: 300,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 10,
    marginLeft: 20,
    marginTop: 10,
  },
});
