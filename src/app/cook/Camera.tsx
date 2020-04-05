import React, { useState, useEffect } from 'react';
import { Dimensions, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera'

import { useNavigation } from '@react-navigation/native'
import { Button } from '@ui-kitten/components';

// galio components
import {
  Block, Icon,
} from 'galio-framework';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    captureButton: {
        position: 'absolute',
        bottom: 50,
        left: '50%',
        marginLeft: -25,
        height: 70,
        width: 70,
        borderRadius: 50,
    },
    backButton: {
      position: 'absolute',
      bottom: 50,
      left: 25,
      height: 70,
      width: 70,
      borderRadius: 50,     
    },
    testButton: {
      position: 'absolute',
      bottom: 50,
      right: 25,
      height: 70,
      width: 70,
      borderRadius: 50,     
    },
    buttonIcon: {
      width: 70,
      height: 70,
      padding: 15,
      fontSize: 40,
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
    },
    helper: {
      height: 250,
      borderWidth: 3,
      borderColor: 'white',
      borderStyle: 'dashed',


      width: width - 20,
      marginHorizontal: 10,
    }
});

interface Props {
  onPhotoTaken: (uri: string) => void
  onBack: () => void
}

export const CameraView = ({ onPhotoTaken, onBack }: Props) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [isSet, setIsSet] = useState(false)
  const cameraRef = React.useRef(null)

  const navigation = useNavigation()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })();
  }, [])

  if (hasPermission === null) {
    return <View />
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onTakePicture = async () => {
    if (cameraRef.current) {
        const options = {
            quality: 1,
            base64: true,
            fixOrientation: true, 
            exif: true
        };

        setIsSet(true)

        console.log('On photo is: ',onPhotoTaken )
        await cameraRef.current.takePictureAsync(options).then(photo => {
           photo.exif.Orientation = 1;            
            console.log(photo);   
            
            onPhotoTaken(photo.uri)
        });     
      }
  }

  const onFakePicture = () => {
    onPhotoTaken('https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c6630a4d04074d11ab60bfa0cb4b03d1/BFV16130_Stir-Fry_4_Ways_FB.jpg?output-quality=100&resize=900:*')
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={cameraRef}
    >
        <View
          style={styles.container}>
            <Button
                style={styles.captureButton}
                onPress={onTakePicture}
                icon={() => 
                  <Icon
                      name='camera'
                      color='white'
                      family={"AntDesign"}
                      style={styles.buttonIcon}
                  />
                }
              />
            <Button
                style={styles.backButton}
                onPress={onBack}
                status='info'
                icon={() => 
                  <Icon
                      name='back'
                      color='white'
                      family={"AntDesign"}
                      style={styles.buttonIcon}
                  />
                }
              />
            <Button
                style={styles.testButton}
                onPress={onFakePicture}
                status='danger'
                icon={() => 
                  <Icon
                      name='edit'
                      color='white'
                      family={"AntDesign"}
                      style={styles.buttonIcon}
                  />
                }
              />
            <Block style={styles.helper} />
        </View>
      </Camera>
    </View>
  );
}