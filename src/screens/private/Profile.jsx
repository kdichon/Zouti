import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MaterialIcons} from 'react-native-vector-icons';
import {COLORS, SIZES, FONTS} from '../../core/theme';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
const ImageProfile = require('./../../assets/hero1.jpg');
const ImageCover = require('./../../assets/cover.jpg');

const PhotosRoutes = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'blue',
    }}
  />
);

const LikesRoutes = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'blue',
    }}
  />
);

const renderScene = SceneMap({
  first: PhotosRoutes,
  second: LikesRoutes,
});

const Profile = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'first', title: 'Photos'},
    {key: 'second', title: 'Likes'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: COLORS.primary,
      }}
      style={{
        backgroundColor: COLORS.white,
        height: 44,
      }}
      renderLabel={({focused, route}) => (
        <Text style={[{color: focused ? COLORS.black : COLORS.gray}]}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar backgroundColor={COLORS.gray} />
      <View style={{width: '100%'}}>
        <Image
          source={ImageCover}
          resizeMode="cover"
          style={{
            height: 228,
            width: '100%',
          }}
        />
      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={ImageProfile}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: COLORS.primary,
            borderWidth: 2,
            marginTop: -90,
          }}
        />

        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.primary,
            marginVertical: 8,
          }}>
          Melissa Peters
        </Text>
        <Text
          style={{
            color: COLORS.black,
            ...FONTS.body4,
          }}>
          Interior designer
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 6,
            alignItems: 'center',
          }}>
          <MaterialIcons name="location-on" size={24} color="black" />
          <Text
            style={{
              ...FONTS.body4,
              marginLeft: 4,
            }}>
            Lagos, Nigeria
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 8,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginHorizontal: SIZES.padding,
            }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.primary,
              }}>
              122
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.primary,
              }}>
              Followers
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginHorizontal: SIZES.padding,
            }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.primary,
              }}>
              67
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.primary,
              }}>
              Followings
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginHorizontal: SIZES.padding,
            }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.primary,
              }}>
              77K
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.primary,
              }}>
              Likes
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              marginHorizontal: SIZES.padding * 2,
            }}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
              }}>
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              marginHorizontal: SIZES.padding * 2,
            }}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
              }}>
              Add Friend
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1, marginHorizontal: 22, marginTop: 20}}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
