import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation';
import data from '../../data.json';
import {Workout} from '../types/data';
import WorkoutItem from '../components/WorkoutItem';

type Props = NativeStackScreenProps<RootStackParamsList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>I am a Homescreen</Text>
      <FlatList
        data={data as Workout[]}
        keyExtractor={item => item.slug}
        renderItem={WorkoutItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
