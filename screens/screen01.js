import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function screen01({navigation}) {
  return (
    <View style = {styles.container}>
      <View style = {styles.topView}>
      <Text style = {styles.topViewText}>
        A premiun online store for sporter and their stylish choice
      </Text>
    </View>
    <View style = {styles.detailView}>
      <Image source = {require('../assets/image/logo.png')} style = {styles.imageLogo} />
      <Text style = {styles.detailText}>
        POWER BIKE SHOP
      </Text>
    </View>
    <View style = {styles.bottomView}>
      <TouchableOpacity style = {styles.bottomViewButton} onPress = {() => navigation.navigate('Screen 02')}>
       <Text style = {styles.bottomViewText}>Get started</Text>
      </TouchableOpacity>
    </View>
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
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  topViewText:{
    fontWeight: 500,
  },

  detailView:{
    flex:2,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#C0C0C0'
  },

  detailText:{
    fontWeight: 700,
    borderRadius: 20
  },
  imageLogo:{
    width: 300,
    height:300,
  },
  bottomView:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },

  bottomViewButton:{
    backgroundColor:'red',
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 20,

  },

  bottomViewText:{
    color:'white',
    fontWeight: 500,
  }
});
