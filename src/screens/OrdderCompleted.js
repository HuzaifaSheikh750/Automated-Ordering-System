import {StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import React,{useState, useEffect} from 'react';
import COLORS from '../const/Colors';
import firestore from '@react-native-firebase/firestore';

const OrdderCompleted = ({route}) => {
  const restaurant = route.params;
//   const [posts, setPosts] = useState(null);
//   const [loading, setLoading] = useState(true);


//   const fetchPosts = async () => {
//     try {
//       const list = [];

//       await firestore()
//         .collection('Orders')
//         .get()
//         .then(querySnapshot => {
//           querySnapshot.forEach(doc => {
//             const {PhoneNummber} = doc.data();
//             list.push({
//             //   id: doc.id,
//             //   name,
//             //   image_url,
//             //   price,
//             //   about,
//             PhoneNummber
//             });
//           });
//         });

//       setPosts(list);
//       console.log('Phone number', list);

//       if (loading) {
//         setLoading(false);
//       }

//       console.log('Posts: order', posts);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   useEffect(() => {
//     fetchPosts();
//   }, []);

  
//   const Card = ({food}) => {
//     return (
//       <TouchableOpacity>
//         <View
//           style={{
//             marginTop: 2,
//             marginVertical: 10,
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             borderBottomColor: 'grey',
//             borderTopWidth: 1,
//             marginHorizontal: 30,
//           }}>
//           {/* <View style={{}}>
//             <Image
//               style={{width: 80, height: 80, borderRadius: 50}}
//               source={{uri: food.image_url}}
//             />
//           </View> */}

//           <View style={{paddingRight: 60, paddingVertical: 5, paddingTop: 20}}>
//             <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
//               {food.PhoneNummber}
//             </Text>
//             <Text>{food.PhoneNummber}</Text>
//           </View>

//           <View style={{justifyContent: 'flex-end'}}>
//             <Text style={{color: 'red', fontWeight: '700', fontSize: 17}}>
//               {food.PhoneNummber}
//             </Text>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

  return (
    //   <View>
          
    //   <FlatList
    //     data={posts}
    //     renderItem={({item}) => <Card food={item}/>}
    //     onRefresh={() => fetchPosts()}
    //     refreshing={loading}
    //     maxHeight={600}
    //   />
    //   </View>
    <View
      style={{alignItems: 'center', justifyContent: 'center', marginTop: 200}}>
      <Text style={{fontSize: 25, color: 'black', fontWeight:'bold'}}>Your Verification Code</Text>
      <Text style={{fontSize: 25, color: 'orange'}}>{restaurant.phone}</Text>
      <Text style={{fontSize: 30, color: 'black', marginTop: 40, fontWeight:'bold'}}>
        Total Bill
      </Text>
      <Text style={{fontSize: 30, color: 'orange'}}>{restaurant.total}</Text>
      <TouchableOpacity style={styles.buyBtn}>
        <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
          Your Order Completed at 10 mins
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrdderCompleted;

const styles = StyleSheet.create({ buyBtn: {
    width: 300,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 10,
    marginLeft: 20,
    marginTop:10
  },
});
