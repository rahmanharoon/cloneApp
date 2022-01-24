import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';

type iconProps = {
  icon: any;
  title: string;
  bg?: StyleProp<ViewStyle>;
  onIconHandler: () => void;
};

const IconCard: React.FC<iconProps> = ({icon, title, onIconHandler, bg}) => {
  return (
    <TouchableOpacity onPress={onIconHandler}>
      <View style={[styles.icon, bg ? bg : styles.bgWhite]}>
        <Image source={icon} resizeMode="cover" style={styles.iconInner} />
      </View>
      <Text style={styles.txtWhite1}>{title}</Text>
    </TouchableOpacity>
  );
};

export default IconCard;

const styles = StyleSheet.create({
  txtWhite1: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  iconInner: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
});
