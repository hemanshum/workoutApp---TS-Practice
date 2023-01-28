import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation';

type Props = NativeStackScreenProps<RootStackParamsList, 'Planner'>;

const PlannerScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>PlannerScreen</Text>
    </View>
  );
};

export default PlannerScreen;
