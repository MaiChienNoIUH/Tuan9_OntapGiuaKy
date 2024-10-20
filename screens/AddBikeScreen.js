import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddBikeScreen({ route, navigation }) {
  const { fetchBikes } = route.params; // Nhận hàm từ params
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const URL_database = 'https://66fc1f44c3a184a84d1627ea.mockapi.io/bicycledb';

  const handleAddBike = async () => {
    const newBike = {
      name,
      price,
      description,
      category
    };

    try {
      const response = await fetch(URL_database, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBike),
      });
      const data = await response.json();
      fetchBikes(); // Gọi hàm để cập nhật danh sách sản phẩm
      navigation.goBack(); // Quay lại màn hình trước sau khi thêm thành công
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
      <Button title="Add Bike" onPress={handleAddBike} />
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
