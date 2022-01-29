import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../const/Colors';


import {useDispatch} from 'react-redux';
import {removeFromCart} from '../rootSlice';
import RestaurantDetail from './RestaurantDetail';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import CartItem from '../components/home/CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState();
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const cart = useSelector(state => state.rootReducer.cart);
  console.log('THis cart is printing', cart);
  const [cartCountArray, setCartCountArray]=useState(new Array(cart.length).fill(1) )
  useEffect(()=>{
    let newTotal=0
    for(let i=0; i<cart.length;i++){
      newTotal+=cart[i].price*cartCountArray[i]
    }
    setTotal(newTotal)
  },[cartCountArray])
  return (
    <View>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: '100%',
            marginTop: 10,
          }}>
          <Text style={{color: 'red', fontSize: 25, fontWeight: 'bold'}}>
            CART ITEM
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            paddingTop: 20,
            marginBottom: 20,
          }}>
          <TextInput
            onChangeText={text => setPhone(text)}
            keyboardType={'numeric'}
            style={{
              width: '80%',
              borderWidth: 2,
              borderColor: 'grey',
              borderRadius: 100,
              paddingLeft: 15,
            }}
            placeholder="Phone"
          />
        </View>
        {cart.map((e, i) => (
          <CartItem e={e} i={i} key={i} setCartCountArray={setCartCountArray} cartCountArray={cartCountArray}/>
        ))}
        <View style={{display:'flex',flexDirection:'row'}}>
          <View style={{marginLeft:40, margin:15}}>
            <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>Total = {total}</Text>
          </View>
        <TouchableOpacity style={styles.buyBtn}>
          <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
            Checkout
          </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  buyBtn: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin:10,
    marginLeft: 20,
  },
});
