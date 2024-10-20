import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function EditBikeScreen({ route, navigation }) {
  const { bike, fetchBikes } = route.params;
  const [name, setName] = useState(bike.name); 
  const [price, setPrice] = useState(bike.price.toString());
  const [description, setDescription] = useState(bike.description);
  const [category, setCategory] = useState(bike.category);

  const handleEditBike = async () => {
    const updatedBike = {
      name,
      price,
      description,
      category
    };

    try {
      const response = await fetch(`https://66fc1f44c3a184a84d1627ea.mockapi.io/bicycledb/${bike.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBike),
      }); 
      const data = await response.json();
      fetchBikes();
      navigation.goBack(); // Quay lại màn hình trước sau khi chỉnh sửa thành công
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Bike Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput 
        placeholder="Bike Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <Button title="Save Changes" onPress={handleEditBike} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
