import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity, StyleSheet, Text, FlatList} from 'react-native';

const data = [
  {
    id: 1,
    name: 'Mi note 7',
  },
  {
    id: 2,
    name: 'Mi note 8',
  },
  {
    id: 3,
    name: 'Mi note 10',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        bounces={false}
        horizontal={true}
        renderItem={({item, index}: {item: any; index: number}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('AppScreen')}
              style={styles.phone}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={styles.flatStyle}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b93ba',
  },
  flatStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  phone: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 200,
    marginRight: 5,
    marginLeft: 15,
    borderRadius: 10,
    borderWidth: 0.5,
  },
});
