import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {removeFromCart} from '../../rootSlice';
// import COLORS from '../../const/Colors';


const CartItem = ({e, i,cartCountArray,setCartCountArray}) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const increment = () => {
    setCount(count + 1);
  };
  useEffect(()=>{
    let newCountArray=[...cartCountArray]
    newCountArray[i]=count
    setCartCountArray(newCountArray)
  },[count])
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <View style={{flex:1}}>
      <View
        key={i}
        style={{
          marginTop: 2,
          marginVertical: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          marginHorizontal: 30,
        }}>
        <View style={{}}>
          <Image
            style={{width: 80, height: 80, borderRadius: 10}}
            source={{uri: e.image_url}}
          />
        </View>

        <View
          style={{
            paddingRight: 60,
            paddingVertical: 5,
            paddingTop: 10,
            paddingLeft: 40,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            {e.name}
          </Text>
          <Text>{e.about}</Text>
          <Text style={{color: 'red', fontWeight: '700', fontSize: 17}}>
            {e.price}
          </Text>
          <Text style={{color: 'red', fontWeight: '700', fontSize: 17}}>
            Total Price {e.price * count}
          </Text>
        </View>

        <Icon
          name="delete"
          size={28}
          style={{right: 20, top: 10, position: 'absolute'}}
          onPress={() => {
            dispatch(removeFromCart(e));
          }}
        />
        <View
          style={{
            justifyContent: 'flex-end',
            display: 'flex',
            flexDirection: 'row',
            paddingTop: 50,
          }}>
          <Text
            onPress={decrement}
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              marginRight: 15,
              color: 'black',
            }}>
            -
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'red',
              marginRight: 15,
            }}>
            {count}
          </Text>
          <Text
            onPress={increment}
            style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
            +
          </Text>
        </View>
       
      </View>

    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  // buyBtn: {
  //   width: 130,
  //   height: 50,
  //   backgroundColor: COLORS.green,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 30,
  //   left: 40,
  //   top: 80,
  //   width: '80%',
  // },
});
