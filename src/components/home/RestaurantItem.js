// // import React, {useState, useEffect} from 'react';
// // import {
// //   Image,
// //   ScrollView,
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// //   View,
// //   FlatList,
// // } from 'react-native';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import firestore from '@react-native-firebase/firestore';
// // import storage from '@react-native-firebase/storage';
// // import Categories from './Categories';


// // const ReataurantItem = ({navigation, text, ...props}) => {
// //   const [posts, setPosts] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   // const [deleted, setDeleted] = useState(false);

// //   const fetchPosts = async () => {
// //     try {
// //       const list = [];

// //       await firestore()
// //         .collection('Foods')
// //         // .orderBy('postTime', 'desc')
// //         .get()
// //         .then(querySnapshot => {
// //           // console.log('Total Posts: ', querySnapshot.size);

// //           querySnapshot.forEach(doc => {
// //             const {image_url, name, price, about} = doc.data();
// //             list.push({
// //               // image_url: require('../../assets/images/bakery.png'),
// //               // categories: ['Cafe', 'Bar'],
// //               name,
// //               image_url,
// //               price,
// //               about,
// //               rating: 4.5,
// //             });
// //           });
// //         });

// //       setPosts(list);

// //       if (loading) {
// //         setLoading(false);
// //       }

// //       console.log('Posts: ', posts);
// //     } catch (e) {
// //       console.log(e);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchPosts();
// //   }, []);

// //   const Card = ({food}) => {
// //     return (
// //       <TouchableOpacity
// //         activeOpacity={1}
// //         onPress={() => navigation.navigate('RestaurantDetail', food)}>
// //         <View style={{padding: 15, backgroundColor: '#fff', marginTop: 10}}>
// //           <View>
// //             <Image
// //               // source={food.image_url}
// //               source={{uri: food.image_url}}
// //               style={{height: 180, width: '100%'}}
// //             />
// //           </View>
// //           <Restaurantinfo name={food.name} about ={food.about} rating={food.rating} />
// //         </View>
// //       </TouchableOpacity>
// //     );
// //   };

// //   return (
// //     <>
// //       <View style={{height: 500}}>
// //       <Categories />
// //       <FlatList
// //         data={posts?.filter((e)=>e.name?.toLowerCase().includes(text?.toLowerCase()))}
// //         renderItem={({item}) => <Card food={item} maxHeight={300} />}
// //       />
// //       </View> 
// //     </>
// //   );
// // };

// // const Restaurantinfo = props => (
// //   <View
// //     style={{
// //       flexDirection: 'row',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //       marginTop: 10,
// //     }}>
// //     <View>
// //       <Text style={{fontSize: 15, fontWeight: '900'}}>{props.name}</Text>
// //       <Text style={{fontSize: 13, color: 'grey'}}>{props.about}</Text>
// //     </View>
// //     <View
// //       style={{
// //         backgroundColor: '#eee',
// //         height: 30,
// //         width: 30,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         borderRadius: 15,
// //       }}>
// //       <Text style={{fontWeight: 'bold'}}>{props.rating}</Text>
// //     </View>
// //   </View>
// // );

// // export default ReataurantItem;


// import React, {useState, useEffect} from 'react';
// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   FlatList,
// } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
// import Categories from './Categories';


// const ReataurantItem = ({navigation, ...props}) => {
//   const [posts, setPosts] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchPosts = async () => {
//     try {
//       const list = [];

//       await firestore()
//         .collection('Foods')
//         // .orderBy('postTime', 'desc')
//         .get()
//         .then(querySnapshot => {

//           querySnapshot.forEach(doc => {
//             const {image_url, name, price, about, Key} = doc.data();
//             list.push({
//               Key,
//               name,
//               image_url,
//               price,
//               about,
//               rating: 4.5,
//             });
//           });
//         });

//       setPosts(list);

//       if (loading) {
//         setLoading(false);
//       }

//       console.log('Posts: ', posts);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const Card = ({food}) => {
//     return (
//       <TouchableOpacity
//         activeOpacity={1}
//         onPress={() => navigation.navigate('RestaurantDetail', food)}>
//         <View style={{padding: 15, backgroundColor: '#fff', marginTop: 10}}>
//           <View>
//             <Image
//               source={{uri: food.image_url}}
//               style={{height: 180, width: '100%'}}
//             />
//           </View>
//           <Restaurantinfo name={food.name} about ={food.about} rating={food.rating} />
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View>
//       <View style={{height: 525, flex:1}}>
//       <Categories />
//       <FlatList
//         data={posts}
//         renderItem={({item}) => <Card food={item} maxHeight={300} />}
        
//         onRefresh={()=>fetchPosts()}
//         refreshing={loading}
//       />
//       </View> 
//     </View>
//   );
// };

// const Restaurantinfo = props => (
//   <View
//     style={{
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginTop: 10,
//     }}>
//     <View>
//       <Text style={{fontSize: 15, fontWeight: '900'}}>{props.name}</Text>
//       <Text style={{fontSize: 13, color: 'grey'}}>{props.about}</Text>
//     </View>
//     <View
//       style={{
//         backgroundColor: '#eee',
//         height: 30,
//         width: 30,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 15,
//       }}>
//       <Text style={{fontWeight: 'bold'}}>{props.rating}</Text>
//     </View>
//   </View>
// );

// export default ReataurantItem;


import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Categories from './Categories';


const ReataurantItem = ({navigation, text, ...props}) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [deleted, setDeleted] = useState(false);

  const fetchPosts = async () => {
    try {
      const list = [];

      await firestore()
        .collection('Foods')
        // .orderBy('postTime', 'desc')
        .get()
        .then(querySnapshot => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach(doc => {
            const {image_url, name, price, about} = doc.data();
            list.push({
              // image_url: require('../../assets/images/bakery.png'),
              // categories: ['Cafe', 'Bar'],
              name,
              image_url,
              price,
              about,
              rating: 4.5,
            });
          });
        });

      setPosts(list);

      if (loading) {
        setLoading(false);
      }

      console.log('Posts: ', posts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const Card = ({food}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('RestaurantDetail', food)}>
        <View style={{padding: 15, backgroundColor: '#fff', marginTop: 10}}>
          <View>
            <Image
              // source={food.image_url}
              source={{uri: food.image_url}}
              style={{height: 180, width: '100%'}}
            />
          </View>
          <Restaurantinfo name={food.name} about ={food.about} rating={food.rating} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{height: 525, flex:1}}>
      <Categories />
      <FlatList
        data={posts?.filter((e)=>e.name?.toLowerCase().includes(text?.toLowerCase()))}
        renderItem={({item}) => <Card food={item} maxHeight={300} />}
        onRefresh={()=>fetchPosts()}
        refreshing={loading}
      />
      </View> 
    </>
  );
};

const Restaurantinfo = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: '900'}}>{props.name}</Text>
      <Text style={{fontSize: 13, color: 'grey'}}>{props.about}</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}>
      <Text style={{fontWeight: 'bold'}}>{props.rating}</Text>
    </View>
  </View>
);

export default ReataurantItem;