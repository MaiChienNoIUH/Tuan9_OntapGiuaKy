import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ActivityIndicator, FlatList, TextInput } from 'react-native';

import React, {useState, useEffect} from 'react'; 



export default function screen02({navigation}) {
  const [bikes, setBikes] = useState([]);

  const [filterBikes, setFilterBikes] = useState([]);

  //Gọi fetchBikes khi component được render lần đầu
  useEffect(() => {
    fetchBikes();
  }, []);

  const fetchBikes = async () =>{
    try {
      const response = await fetch('https://66fc1f44c3a184a84d1627ea.mockapi.io/bicycledb');
      const data = await response.json();
      setBikes(data);
      setFilterBikes(data);
    }catch(error){
      console.error(error.message);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await fetch(`https://66fc1f44c3a184a84d1627ea.mockapi.io/bicycledb/${id}`, { method: 'DELETE' });
      const updateBike = bikes.filter(bike => bike.id !== id);
      setBikes(updateBike);
      setFilterBikes(data);
    } catch (error) {
      console.error(error.message);
    }
  };

    const renderBikes = ({ item }) => (
    <View style={styles.bikeContainer}>
      <TouchableOpacity style={styles.itemBike} onPress={() => navigation.navigate('Screen 03', { bike: item })}>
        <Image source = {require('../assets/image/Mountain.png')} style = {styles.image} />
        <Text style={styles.bikeName}>{item.name}</Text>
        <Text style={styles.bikePrice}>$ {item.price}</Text>
        <TouchableOpacity style={styles.buttonEdit} onPress={() => navigation.navigate('EditBikeScreen', { bike: item, fetchBikes: fetchBikes})}>
          <Text style={styles.buttonText}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDelete} onPress={() => handleDeleteProduct(item.id)}> 
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  return (
 <View style = {styles.container}>
      <View style = {styles.topView}>
      <Text style = {styles.topViewText}>
        The world's Best Bike
      </Text>
       <TextInput
        placeholder="Search products"
        style={styles.searchInput} 
        onChangeText={(text) => {
          setFilterBikes(bikes.filter(bike => bike.name.toLowerCase().includes(text.toLowerCase())));
        }}
      />
      <TouchableOpacity style={styles.buttonAdd} onPress={() => navigation.navigate('AddBikeScreen', {fetchBikes: fetchBikes})}> 
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
    </View>
    <View style = {styles.menuView}>
      <TouchableOpacity style = {styles.menuItem} onPress = {() => setFilterBikes(bikes)}>
        <Text style = {styles.menuItemText}>
          ALL
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.menuItem} onPress = {() => setFilterBikes(bikes.filter(p => p.category === 'Roadbike'))}>
        <Text style = {styles.menuItemText}>
          Roadbike
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.menuItem} onPress = {() => setFilterBikes(bikes.filter(p => p.category === 'Mountain'))}>
        <Text style = {styles.menuItemText}>
          Mountain
        </Text>
      </TouchableOpacity>
    </View>
    <FlatList style = {styles.flatlist}
        data={filterBikes}
        keyExtractor={item => item.id.toString()}
        renderItem={renderBikes}
        numColumns={2}
        // horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  topView:{
    flex: 0.2,
    alignItems:'center',
    justifyContent: 'space-between',
  },
  topViewText:{
    fontWeight: 500,
    color: 'red',
    fontSize: 24,
  },

  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: 330
  },

  menuView:{
    flex: 0.1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  menuItem:{
    backgroundColor: 'white',
    alignItems:'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius:10,
    borderWidth:2,
    borderColor: 'red'
  },
  menuItemText:{
    fontWeight: 700
  },
  flatlist:{
    flex: 1,
    alignItems:'center',
    backgroundColor:'white'
  },
  bikeContainer:{
    alignItems:'center',
    backgroundColor:'#f3f3f3',
    padding: 10,
  },
  itemBike:{
    backgroundColor:'#fef5ed',
    alignItems:'center',
    padding: 5,
  },
  buttonEdit:{
    backgroundColor:'yellow',
    paddingHorizontal:10,
    paddingVertical:3,
    borderRadius:5
  },
  buttonAdd:{
    backgroundColor:'green',
    paddingHorizontal:10,
    paddingVertical:3,
    borderRadius:5
  },
  buttonDelete:{
    backgroundColor:'red',
    paddingHorizontal:10,
    paddingVertical:3,
    borderRadius:5
  },
  buttonText:{
    fontWeight: 700,

  },
});
