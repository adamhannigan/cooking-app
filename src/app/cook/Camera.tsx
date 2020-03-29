import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera'

import { useNavigation } from '@react-navigation/native'
import { Button } from '@ui-kitten/components';

const styles = StyleSheet.create({
    captureButton: {
        position: 'absolute',
        bottom: 50,
        left: 50,
    },
});

export const CameraView = () => {
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
        console.log('Taking photo');
        const options = {
            quality: 1,
            base64: true,
            fixOrientation: true, 
            exif: true
        };

        setIsSet(true)

        await cameraRef.current.takePictureAsync(options).then(photo => {
           photo.exif.Orientation = 1;            
            console.log(photo);   
            
            navigation.goBack()
        });     
      }
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={cameraRef}
    >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
            <Button
                status={isSet ? 'info' : 'primary'}
                style={styles.captureButton}
                onPress={onTakePicture}
            >
                SNAP THE PHOTO
            </Button>
        </View>
      </Camera>
    </View>
  );
}