import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Screen3 = ({ route }) => {
  const { bike } = route.params; // đổi product thành bike

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/image/Mountain.png')} style={styles.image} />
      <Text style={styles.title}>{bike.name}</Text>
      <Text style={styles.price}>
        ${bike.discountPrice} <Text style={styles.originalPrice}>${bike.price}</Text>
      </Text>
      <Text style={styles.discount}>15% OFF</Text>
      <Text style={styles.description}>Product description here.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to card</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: 'red',
    marginBottom: 10,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  discount: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen3;
