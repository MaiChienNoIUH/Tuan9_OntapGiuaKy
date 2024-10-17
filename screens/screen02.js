import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';

import React, {useState, useEffect} from 'react'; 

// You can import supported modules from npm
import { Card } from 'react-native-paper';


export default function screen02({navigation}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bikes, setBikes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  //Gọi fetchBike khi component được render lần đầu
  useEffect(() => {
    fetchBike();
  }, []);

  const filterBike = () =>{
    if(selectedCategory === "ALL"){
      return bikes;
    }
    else if(selectedCategory === "Roadbike"){
      return bikes.filter(bike => bike.category === "Roadbike");
    }
    else{
      return bikes.filter(bike => bike.category === "Mountain");
    }
  }

  const fetchBike = async () =>{
    try {
      const response = await fetch('https://66fc1f44c3a184a84d1627ea.mockapi.io/bicycledb');
      const data = await response.json();
      setBikes(data);
      setLoading(false);
    }catch{
      setError(error.message);
      setLoading(false);
    }
  };

    if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
  }

  if (error) {
    return <Text style={styles.errorText}>Error: {error}</Text>;
  }

    const renderBikes = ({ item }) => (
    <View style={styles.bikeContainer}>
      <View style={styles.itemBike}>
        <Image source = {require('../assets/image/Mountain.png')} style = {styles.image} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>$ {item.price}</Text>
        <TouchableOpacity style={styles.buttonEdit} onPress={() => navigation.navigate('EditProduct', { product: item, fetchProducts: fetchProducts} )}>
          <Text style={styles.buttonText}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDeletebuttonDelete} onPress={() => handleDeleteProduct(item.id)}> 
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
 <View style = {styles.container}>
      <View style = {styles.topView}>
      <Text style = {styles.topViewText}>
        The world's Best Bike
      </Text>
    </View>
    <View style = {styles.menuView}>
      <TouchableOpacity style = {styles.menuItem} onPress = {() => setSelectedCategory('ALL')}>
        <Text style = {styles.menuItemText}>
          ALL
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.menuItem} onPress = {() => setSelectedCategory('Roadbike')}>
        <Text style = {styles.menuItemText}>
          Roadbike
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.menuItem} onPress = {() => setSelectedCategory('Mountain')}>
        <Text style = {styles.menuItemText}>
          Mountain
        </Text>
      </TouchableOpacity>
    </View>
    <FlatList style = {styles.flatlist}
        data={filterBike()}
        keyExtractor={item => item.id.toString()}
        renderItem={renderBikes}
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
    flex: 0.1,
    alignItems:'center',
    justifyContent: 'center',
  },
  topViewText:{
    fontWeight: 500,
    color: 'red',
    fontSize: 24,
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
    
  },
});
