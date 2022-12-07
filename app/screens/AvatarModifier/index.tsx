import React, { useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import PlainButton from 'app/components/buttons/PlainButton';
import RegularButton from 'app/components/buttons/RegularButton';
import { useTranslation } from 'react-i18next';
import NavigationService from 'app/navigation/NavigationService';

const AvatarModifier: React.FC = () => {
  const { t, i18n } = useTranslation();
  const direction: string = i18n.dir();
  const [selectedItem, setSelectedItem] = useState('Face');
  const [avatarProperties, setAvatarProperties] = useState([
    {
      name: 'Face',
      image: require('../../assets/properties/face.png'),
      isSelected: true,
      children: [
        {
          name: 'face_one',
          image: require('../../assets/faces/face_one.png'),
          isSelected: true,
        },
        {
          name: 'face_two',
          image: require('../../assets/faces/face_two.png'),
          isSelected: false,
        },
        {
          name: 'face_three',
          image: require('../../assets/faces/face_three.png'),
          isSelected: false,
        },
        {
          name: 'face_four',
          image: require('../../assets/faces/face_four.png'),
          isSelected: false,
        },
        {
          name: 'face_five',
          image: require('../../assets/faces/face_five.png'),
          isSelected: false,
        },
        {
          name: 'face_six',
          image: require('../../assets/faces/face_six.png'),
          isSelected: false,
        },
        {
          name: 'face_seven',
          image: require('../../assets/faces/face_seven.png'),
          isSelected: false,
        },
        {
          name: 'face_eight',
          image: require('../../assets/faces/face_eight.png'),
          isSelected: false,
        },
        {
          name: 'face_nine',
          image: require('../../assets/faces/face_nine.png'),
          isSelected: false,
        },
      ],
    },
    {
      name: 'Hijab',
      image: require('../../assets/properties/hijab.png'),
      isSelected: false,
      children: [
        {
          name: 'hijab_one',
          image: require('../../assets/hijabs/hijab_one.png'),
          isSelected: true,
        },
        {
          name: 'hijab_two',
          image: require('../../assets/hijabs/hijab_two.png'),
          isSelected: false,
        },
        {
          name: 'hijab_three',
          image: require('../../assets/hijabs/hijab_three.png'),
          isSelected: false,
        },
        {
          name: 'hijab_four',
          image: require('../../assets/hijabs/hijab_four.png'),
          isSelected: false,
        },
        {
          name: 'hijab_five',
          image: require('../../assets/hijabs/hijab_five.png'),
          isSelected: false,
        },
        {
          name: 'hijab_six',
          image: require('../../assets/hijabs/hijab_six.png'),
          isSelected: false,
        },
        {
          name: 'hijab_seven',
          image: require('../../assets/hijabs/hijab_seven.png'),
          isSelected: false,
        },
        {
          name: 'hijab_eight',
          image: require('../../assets/hijabs/hijab_eight.png'),
          isSelected: false,
        },
        {
          name: 'hijab_nine',
          image: require('../../assets/hijabs/hijab_nine.png'),
          isSelected: false,
        },
      ],
    },
    {
      name: 'Hair',
      image: require('../../assets/properties/hair.png'),
      isSelected: false,
      children: [
        {
          name: 'hair_one',
          image: require('../../assets/hairs/hair_one.png'),
          isSelected: true,
        },
        {
          name: 'hair_two',
          image: require('../../assets/hairs/hair_two.png'),
          isSelected: false,
        },
        {
          name: 'hair_three',
          image: require('../../assets/hairs/hair_three.png'),
          isSelected: false,
        },
        {
          name: 'hair_four',
          image: require('../../assets/hairs/hair_four.png'),
          isSelected: false,
        },
        {
          name: 'hair_five',
          image: require('../../assets/hairs/hair_five.png'),
          isSelected: false,
        },
        {
          name: 'hair_six',
          image: require('../../assets/hairs/hair_six.png'),
          isSelected: false,
        },
        {
          name: 'hair_seven',
          image: require('../../assets/hairs/hair_seven.png'),
          isSelected: false,
        },
        {
          name: 'hair_eight',
          image: require('../../assets/hairs/hair_eight.png'),
          isSelected: false,
        },
        {
          name: 'hair_nine',
          image: require('../../assets/hairs/hair_nine.png'),
          isSelected: false,
        },
      ],
    },
    {
      name: 'Eye',
      image: require('../../assets/properties/eye.png'),
      isSelected: false,
      children: [
        {
          name: 'eye_one',
          image: require('../../assets/eyes/eye_one.png'),
          isSelected: true,
        },
        {
          name: 'eye_two',
          image: require('../../assets/eyes/eye_two.png'),
          isSelected: false,
        },
        {
          name: 'eye_three',
          image: require('../../assets/eyes/eye_three.png'),
          isSelected: false,
        },
        {
          name: 'eye_four',
          image: require('../../assets/eyes/eye_four.png'),
          isSelected: false,
        },
        {
          name: 'eye_five',
          image: require('../../assets/eyes/eye_five.png'),
          isSelected: false,
        },
        {
          name: 'eye_six',
          image: require('../../assets/eyes/eye_six.png'),
          isSelected: false,
        },
        {
          name: 'eye_seven',
          image: require('../../assets/eyes/eye_seven.png'),
          isSelected: false,
        },
        {
          name: 'eye_eight',
          image: require('../../assets/eyes/eye_eight.png'),
          isSelected: false,
        },
        {
          name: 'eye_nine',
          image: require('../../assets/eyes/eye_nine.png'),
          isSelected: false,
        },
      ],
    },
    {
      name: 'Glass',
      image: require('../../assets/properties/glass.png'),
      isSelected: false,
      children: [
        {
          name: 'glass_one',
          image: require('../../assets/glasses/glass_one.png'),
          isSelected: true,
        },
        {
          name: 'glass_two',
          image: require('../../assets/glasses/glass_two.png'),
          isSelected: false,
        },
        {
          name: 'glass_three',
          image: require('../../assets/glasses/glass_three.png'),
          isSelected: false,
        },
        {
          name: 'glass_four',
          image: require('../../assets/glasses/glass_four.png'),
          isSelected: false,
        },
        {
          name: 'glass_five',
          image: require('../../assets/glasses/glass_five.png'),
          isSelected: false,
        },
        {
          name: 'glass_six',
          image: require('../../assets/glasses/glass_six.png'),
          isSelected: false,
        },
        {
          name: 'glass_seven',
          image: require('../../assets/glasses/glass_seven.png'),
          isSelected: false,
        },
        {
          name: 'glass_eight',
          image: require('../../assets/glasses/glass_eight.png'),
          isSelected: false,
        },
        {
          name: 'glass_nine',
          image: require('../../assets/glasses/glass_nine.png'),
          isSelected: false,
        },
      ],
    },
    {
      name: 'Nose',
      image: require('../../assets/properties/nose.png'),
      isSelected: false,
      children: [
        {
          name: 'nose_one',
          image: require('../../assets/noses/nose_one.png'),
          isSelected: true,
        },
        {
          name: 'nose_two',
          image: require('../../assets/noses/nose_two.png'),
          isSelected: false,
        },
        {
          name: 'nose_three',
          image: require('../../assets/noses/nose_three.png'),
          isSelected: false,
        },
        {
          name: 'nose_four',
          image: require('../../assets/noses/nose_four.png'),
          isSelected: false,
        },
        {
          name: 'nose_five',
          image: require('../../assets/noses/nose_five.png'),
          isSelected: false,
        },
        {
          name: 'nose_six',
          image: require('../../assets/noses/nose_six.png'),
          isSelected: false,
        },
        {
          name: 'nose_seven',
          image: require('../../assets/noses/nose_seven.png'),
          isSelected: false,
        },
        {
          name: 'nose_eight',
          image: require('../../assets/noses/nose_eight.png'),
          isSelected: false,
        },
        {
          name: 'nose_nine',
          image: require('../../assets/noses/nose_nine.png'),
          isSelected: false,
        },
      ],
    },
    {
      name: 'Lips',
      image: require('../../assets/properties/lips.png'),
      isSelected: false,
      children: [
        {
          name: 'lip_one',
          image: require('../../assets/lips/lip_one.png'),
          isSelected: true,
        },
        {
          name: 'lip_two',
          image: require('../../assets/lips/lip_two.png'),
          isSelected: false,
        },
        {
          name: 'lip_three',
          image: require('../../assets/lips/lip_three.png'),
          isSelected: false,
        },
        {
          name: 'lip_four',
          image: require('../../assets/lips/lip_four.png'),
          isSelected: false,
        },
        {
          name: 'lip_five',
          image: require('../../assets/lips/lip_five.png'),
          isSelected: false,
        },
        {
          name: 'lip_six',
          image: require('../../assets/lips/lip_six.png'),
          isSelected: false,
        },
        {
          name: 'lip_seven',
          image: require('../../assets/lips/lip_seven.png'),
          isSelected: false,
        },
        {
          name: 'lip_eight',
          image: require('../../assets/lips/lip_eight.png'),
          isSelected: false,
        },
        {
          name: 'lip_nine',
          image: require('../../assets/lips/lip_nine.png'),
          isSelected: false,
        },
      ],
    },
  ]);

  const [avatarPropertyItems, setAvatarPropertyItems] = useState([
    {
      name: 'face_one',
      image: require('../../assets/faces/face_one.png'),
      isSelected: true,
    },
    {
      name: 'face_two',
      image: require('../../assets/faces/face_two.png'),
      isSelected: false,
    },
    {
      name: 'face_three',
      image: require('../../assets/faces/face_three.png'),
      isSelected: false,
    },
    {
      name: 'face_four',
      image: require('../../assets/faces/face_four.png'),
      isSelected: false,
    },
    {
      name: 'face_five',
      image: require('../../assets/faces/face_five.png'),
      isSelected: false,
    },
    {
      name: 'face_six',
      image: require('../../assets/faces/face_six.png'),
      isSelected: false,
    },
    {
      name: 'face_seven',
      image: require('../../assets/faces/face_seven.png'),
      isSelected: false,
    },
    {
      name: 'face_eight',
      image: require('../../assets/faces/face_eight.png'),
      isSelected: false,
    },
    {
      name: 'face_nine',
      image: require('../../assets/faces/face_nine.png'),
      isSelected: false,
    },
  ]);

  const [selectedFace, setSelectedFace] = useState(
    require('../../assets/faces/face_one.png'),
  );
  const [selectedHijab, setSelectedHijab] = useState(
    require('../../assets/hijabs/hijab_one.png'),
  );
  const [selectedHair, setSelectedHair] = useState(null);
  const [selectedEye, setSelectedEye] = useState(
    require('../../assets/eyes/eye_one.png'),
  );
  const [selectedGlass, setSelectedGlass] = useState(
    require('../../assets/glasses/glass_one.png'),
  );
  const [selectedNose, setSelectedNose] = useState(
    require('../../assets/noses/nose_one.png'),
  );
  const [selectedLip, setSelectedLip] = useState(
    require('../../assets/lips/lip_one.png'),
  );

  const handleOnAPropPress = (index: number) => {
    let afterSelection = avatarProperties.map((item, ix) => {
      if (index === ix) {
        item.isSelected = true;
        setSelectedItem(item.name);
        setAvatarPropertyItems(item.children);
      } else {
        item.isSelected = false;
      }
      return item;
    });
    setAvatarProperties(afterSelection);
  };

  const handleOnMPropPress = (index: number) => {
    let afterMSelection = avatarPropertyItems.map((item, ix) => {
      if (index === ix) {
        item.isSelected = true;
        switchProperties(item.image);
      } else {
        item.isSelected = false;
      }
      return item;
    });
    setAvatarPropertyItems(afterMSelection);
  };

  const switchProperties = (property: any) => {
    switch (selectedItem) {
      case 'Face':
        setSelectedFace(property);
        break;
      case 'Hijab':
        setSelectedHijab(property);
        setSelectedHair(null);
        break;
      case 'Hair':
        setSelectedHair(property);
        setSelectedHijab(null);
        break;
      case 'Eye':
        setSelectedEye(property);
        break;
      case 'Glass':
        setSelectedGlass(property);
        break;
      case 'Nose':
        setSelectedNose(property);
        break;
      case 'Lips':
        setSelectedLip(property);
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView style={styles(direction).container} bounces={false}>
      <SafeAreaView style={styles(direction).safeAreaView}>
        <View style={styles(direction).container2}>
          <View style={styles(direction).topContainer}>
            <RegularButton
              onPress={() => {
                NavigationService.goBack();
              }}
              icon={'arrow-back'}
              radius={38}
              height={38}
              width={38}
              colors={['#EBECF0', '#EBECF0']}
            />
            <PlainButton
              onPress={() => {}}
              style={styles(direction).skipButtonText}
              containerStyle={styles(direction).skipButtonContainer}
              text={t('Done')}
            />
          </View>
          <View style={styles(direction).neomorphContainer}>
            <View style={styles(direction).imageContainer}>
              <Image
                source={require('../../assets/avatarHolder.png')}
                style={styles(direction).imageStyle}
              />
              <Image
                source={selectedFace}
                style={styles(direction).faceImageStyle}
              />
              {selectedHijab !== null && (
                <Image
                  source={selectedHijab}
                  style={styles(direction).hijabImageStyle}
                />
              )}
              <Image
                source={selectedEye}
                style={styles(direction).eyeImageStyle}
              />
              <Image
                source={selectedGlass}
                style={styles(direction).glassImageStyle}
              />
              {selectedHair !== null && (
                <Image
                  source={selectedHair}
                  style={styles(direction).hairImageStyle}
                />
              )}
              <Image
                source={selectedNose}
                style={styles(direction).noseImageStyle}
              />
              <Image
                source={selectedLip}
                style={styles(direction).lipImageStyle}
              />
            </View>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles(direction).avatarPropsContainer}>
            {avatarProperties.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => handleOnAPropPress(index)}
                  style={styles(direction).aPropContainer}>
                  <View style={styles(direction).mainPropContainer}>
                    {item.isSelected && (
                      <Image
                        source={require('../../assets/hSelected.png')}
                        style={styles(direction).imageAvatarStyle}
                      />
                    )}
                    {!item.isSelected && (
                      <Image
                        source={require('../../assets/hUnSelected.png')}
                        style={styles(direction).imageAvatarStyle}
                      />
                    )}
                    {item.image && (
                      <Image
                        source={item.image}
                        style={styles(direction).imagePropertyStyle}
                      />
                    )}
                  </View>

                  <Text style={styles(direction).aPropText}>
                    {t(item.name)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <FlatList
            data={avatarPropertyItems}
            style={styles(direction).mFlatList}
            numColumns={3}
            renderItem={({ item, index }: any) => {
              return (
                <TouchableOpacity
                  onPress={() => handleOnMPropPress(index)}
                  style={styles(direction).mPropContainer}>
                  {item.isSelected && (
                    <Image
                      source={require('../../assets/mSelected.png')}
                      style={styles(direction).imageAvatarPropStyle}
                    />
                  )}
                  {!item.isSelected && (
                    <Image
                      source={require('../../assets/mUnSelected.png')}
                      style={styles(direction).imageAvatarPropStyle}
                    />
                  )}
                  {item.image && (
                    <Image
                      source={item.image}
                      style={styles(direction).imageMPropertyStyle}
                    />
                  )}
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AvatarModifier;
