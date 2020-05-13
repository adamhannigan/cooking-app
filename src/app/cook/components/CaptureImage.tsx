import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { Button } from '@ui-kitten/components'

import { CameraView } from './Camera'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  title: {
    paddingTop: theme.SIZES.BASE,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    width: width / 4 * 3,
    height: 150,
    marginRight: theme.SIZES.BASE,
    borderRadius: 10,
  },
  takingImageContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    width,
    height: 200,
  },
  captureButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    position: 'absolute',
    left: theme.SIZES.BASE,
    bottom: theme.SIZES.BASE / 2,
    marginLeft: -12,
    marginTop: -19,

    shadowOffset:{  width: 3,  height: 5,  },
    shadowColor: '#777',
    shadowOpacity: 0.3,
  },
  testButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    height: 50,
    width: 50,
    borderRadius: 50,     
  },
  removeButton: {
    position: 'absolute',
    bottom: 25,
    right: 85,
    height: 50,
    width: 50,
    borderRadius: 50,  
  },
  buttonIcon: {
    width: 48,
    height: 50,
    padding: 10,
    fontSize: 28,
  },
  emptyImage: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
  }
});

interface Props {
    photo: string
    onPhotoCaptured: (photo: string) => void
}

export const CaptureImage = ({
    photo,
    onPhotoCaptured,
}: Props) => {
  const [isTakingPhoto, setIsTakingPhoto] = React.useState(false)

  const onTakePhoto = async () => {

    ('Open it')
    //setIsTakingPhoto(true)
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    onPhotoCaptured(result.uri)
  }

  const onPhoto = (uri: string) => {
    setIsTakingPhoto(false)
    onPhotoCaptured(uri)
  }

  const onCameraClose = () => {
    setIsTakingPhoto(false)
    onPhotoCaptured(null)
  }

  if (isTakingPhoto) {
    return (
      <Block style={styles.takingImageContainer}>
        <CameraView
          onPhotoTaken={onPhoto}
          onBack={onCameraClose}
        />
      </Block>
    )
  }

  if (photo) {
    return (
      <Block style={styles.container}>
        <Image
            source={{ uri: photo }}
            style={styles.imageContainer}
        />
      </Block>
    )
  }

  return (
      <Block style={styles.container}>
          <Image
            source={{
                uri: 'https://www.thespruceeats.com/thmb/uYCUG1J6o2INmqbxNZY4nkLdBv4=/3120x3120/smart/filters:no_upscale()/greek-butter-cookies-1705307-step-01-5bfef717c9e77c00510e3bf9.jpg',
            }}
            style={styles.emptyImage}
          />
          <Button
              onPress={onTakePhoto}
              style={styles.captureButton}
              icon={() => 
              <Icon
                  name='camera'
                  color='white'
                  family={"AntDesign"}
                  style={styles.buttonIcon}
              />
              }
          />
      </Block>
  )
}


export default CaptureImage;
