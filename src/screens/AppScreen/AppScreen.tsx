import React from 'react';
import IconCard from '../../components/IconCard';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const image = require('../../assets/1.png');
const wethear = require('../../assets/2.png');
const playIcon = require('../../assets/play.png');
const phoneIcon = require('../../assets/phone.png');
const cameraIcon = require('../../assets/camera.png');
const messageIcon = require('../../assets/message.png');
const settingsIcon = require('../../assets/settings.png');

const AppScreen = ({navigation}) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={[styles.flex1, {top}]}>
          <View style={[styles.rowBetween, styles.flex1]}>
            <View>
              <Text style={styles.txtWhite}>04:20</Text>
              <Text style={styles.txtWhite1}>Sat 14, March</Text>
            </View>
            <View>
              <Image source={wethear} resizeMode="cover" style={styles.icon} />
              <Text style={styles.txtWhite1}>No data</Text>
            </View>
          </View>
          <View style={styles.flex9}>
            <View style={styles.height350} />
            <View style={styles.rowEvenly}>
              <IconCard
                icon={playIcon}
                title={'Play Store'}
                onIconHandler={() => console.log('hi')}
              />
              <IconCard
                icon={playIcon}
                title={'Play Store'}
                onIconHandler={() => console.log('hi')}
              />
              <IconCard
                icon={playIcon}
                title={'Play Store'}
                onIconHandler={() => console.log('hi')}
              />
              <IconCard
                icon={playIcon}
                title={'Play Store'}
                onIconHandler={() => console.log('hi')}
              />
            </View>
            <View style={styles.rowEvenly}>
              <IconCard
                icon={phoneIcon}
                title={'Phone'}
                onIconHandler={() => console.log('hi')}
                bg={{
                  backgroundColor: '#344f9a',
                }}
              />
              <IconCard
                icon={messageIcon}
                title={'Messages'}
                onIconHandler={() => console.log('hi')}
                bg={{
                  backgroundColor: '#344f9a',
                }}
              />
              <IconCard
                icon={settingsIcon}
                title={'Settings'}
                onIconHandler={() => navigation.navigate('SettingsScreen')}
                bg={{
                  backgroundColor: '#344f9a',
                }}
              />
              <IconCard
                icon={cameraIcon}
                title={'Camera'}
                onIconHandler={() => console.log('hi')}
              />
            </View>

            <View style={styles.height200} />
          </View>
        </View>
      </ImageBackground>
      <View
        style={[
          styles.rowEvenly,
          {
            position: 'absolute',
            bottom: bottom,
            width: '100%',
          },
        ]}>
        <TouchableOpacity>
          <IonIcon size={24} color="#000" name="caret-back-outline" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontIcon size={22} color="#000" name="circle" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontIcon size={22} color="#000" name="square" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rowBetween: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowEvenly: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  txtWhite: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 3,
  },
  txtWhite1: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  icon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginBottom: 5,
  },
  flex1: {
    flex: 1,
  },
  flex9: {
    flex: 9,
    justifyContent: 'center',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  height350: {
    height: 350,
  },
  height200: {
    height: 100,
  },
});
