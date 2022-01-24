import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type headProps = {
  title: string;
  isBack?: boolean;
};

const AppHead: React.FC<headProps> = ({title, isBack}) => {
  const navigation = useNavigation();
  const onBackHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headStyle}>
      {isBack && (
        <TouchableOpacity style={styles.backBtn} onPress={onBackHandler}>
          <MaterialIcon size={24} color={'#000'} name={'arrow-back'} />
        </TouchableOpacity>
      )}
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

export default AppHead;

const styles = StyleSheet.create({
  headStyle: {
    height: 50,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleStyle: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  backBtn: {
    width: 20,
    marginRight: 5,
    height: '100%',
    justifyContent: 'center',
  },
});
