import React from 'react';
import AppHead from '../../components/AppHead';
import {useNavigation} from '@react-navigation/native';
import SettingsCard from '../../components/SettingsCard';
import {StyleSheet, ScrollView, View} from 'react-native';
import {commonStyle} from '../../utils/config/appStyle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  settingsData1,
  settingsData2,
  settingsData3,
  settingsData4,
  settingsData5,
} from '../../utils/data/settings';

const SettingsScreen = () => {
  const {top} = useSafeAreaInsets();
  const {navigate} = useNavigation();
  const onTapHandler = (item: string) => {
    if (item) {
      navigate(item);
    } else {
      console.log('hi');
    }
  };
  return (
    <View
      style={[
        {
          marginTop: top,
        },
        commonStyle.flex1,
      ]}>
      <AppHead title="Settings" />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.cardStyle}>
          {settingsData1.map((item, index) => (
            <SettingsCard
              key={item.id}
              title={item.name}
              icon={item.icon}
              iconColor={item.iconColor}
              onTapHandler={() => onTapHandler(item.navigate)}
            />
          ))}
        </View>
        <View style={styles.cardStyle}>
          {settingsData2.map((item, index) => (
            <SettingsCard
              key={item.id}
              title={item.name}
              icon={item.icon}
              iconColor={item.iconColor}
            />
          ))}
        </View>
        <View style={styles.cardStyle}>
          {settingsData3.map((item, index) => (
            <SettingsCard
              key={item.id}
              title={item.name}
              icon={item.icon}
              iconColor={item.iconColor}
            />
          ))}
        </View>
        <View style={styles.cardStyle}>
          {settingsData4.map((item, index) => (
            <SettingsCard
              key={item.id}
              title={item.name}
              icon={item.icon}
              iconColor={item.iconColor}
            />
          ))}
        </View>
        <View style={styles.cardStyle}>
          {settingsData5.map((item, index) => (
            <SettingsCard
              key={item.id}
              title={item.name}
              icon={item.icon}
              iconColor={item.iconColor}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  cardStyle: {
    padding: 10,
    paddingRight: 8,
    marginBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#fff',
  },
});
