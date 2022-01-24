import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type settingsCardProp = {
  icon: string;
  title: string;
  navigate?: string;
  iconColor: string;
  onTapHandler?: () => void;
};

const SettingsCard: React.FC<settingsCardProp> = ({
  icon,
  title,
  iconColor,
  onTapHandler,
}) => {
  return (
    <TouchableOpacity style={styles.viewRow} onPress={onTapHandler}>
      <View style={[styles.itemCenter, styles.flex1]}>
        <MaterialIcon size={24} color={iconColor} name={icon} />
      </View>
      <View style={[styles.viewRow, styles.flex9]}>
        <Text style={styles.txtStyle}>{title}</Text>
        <MaterialIcon size={24} color="#808080" name={'chevron-right'} />
      </View>
    </TouchableOpacity>
  );
};

export default SettingsCard;

const styles = StyleSheet.create({
  viewRow: {
    padding: 5,
    paddingRight: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
  },
  flex9: {
    flex: 9,
  },
  txtStyle: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'normal',
  },
});
