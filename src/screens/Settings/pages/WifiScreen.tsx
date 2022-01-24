import React, {useState} from 'react';
import AppHead from '../../../components/AppHead';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {commonStyle} from '../../../utils/config/appStyle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const WifiScreen = () => {
  const {top} = useSafeAreaInsets();
  const [isSwitch, setIsSwitch] = useState(false);
  const onSwitchHandler = () => {
    setIsSwitch(!isSwitch);
  };
  return (
    <View style={[commonStyle.flex1, {marginTop: top}]}>
      <AppHead title="Wifi" isBack />
      <View style={styles.paddView}>
        <TouchableOpacity
          style={commonStyle.rowBetween}
          onPress={onSwitchHandler}>
          <Text style={styles.txtMed}>Wifi</Text>
          <ToggleSwitch
            isOn={isSwitch}
            onColor="#483d8b"
            offColor="#848484"
            size="medium"
            onToggle={onSwitchHandler}
          />
        </TouchableOpacity>
        {isSwitch && (
          <>
            <View style={[commonStyle.rowBetween, styles.spaceTop]}>
              <Text style={styles.txtGrey}>Wi-Fi NETWORKS</Text>
              <TouchableOpacity>
                <Text style={styles.txtThemeColor}>Refresh</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.spaceTop, styles.addNetwrkBtn]}>
              <Text style={styles.txtThemeColor}>Mannually add a network</Text>
            </TouchableOpacity>
            <Text style={[styles.txtGrey, styles.spaceTop]}>
              Wi-Fi NETWORKS
            </Text>
            <TouchableOpacity style={[commonStyle.rowBetween, styles.spaceTop]}>
              <Text style={styles.txtMed}>Advanced settings</Text>
              <MaterialIcon size={24} color="#808080" name={'chevron-right'} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default WifiScreen;

const styles = StyleSheet.create({
  paddView: {
    padding: 12,
  },
  txtMed: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },
  spaceTop: {
    marginTop: 15,
  },
  txtGrey: {
    fontSize: 12,
    color: '#808080',
    fontWeight: '500',
  },
  txtThemeColor: {
    fontSize: 12,
    color: '#483d8b',
    fontWeight: '500',
  },
  addNetwrkBtn: {
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: 'center',
  },
});
