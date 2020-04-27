import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

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
    height: 255, 
    borderRadius: 10,
  },
  takePhotoContainer: {
  },
  captureButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    position: 'absolute',
    left: '25%',
    top: '50%',
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
    width: 43,
    height: 50,
    padding: 10,
    fontSize: 28,
  },
  emptyImage: {
    width: width / 3 * 2,
    height: 150,
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

  const onTakePhoto = () => {
    setIsTakingPhoto(true)
    onPhotoCaptured(null)
  }

  const onPhoto = (uri: string) => {
    setIsTakingPhoto(false)
    onPhotoCaptured(uri)
  }

  const onRemovePhoto = () => {
    onPhotoCaptured(null)
  }

  const onCameraClose = () => {
    setIsTakingPhoto(false)
    onPhotoCaptured(null)
  }


  if (isTakingPhoto) {
    return (
      <CameraView
        onPhotoTaken={onPhoto}
        onBack={onCameraClose}
      />
    )
  }

  return (
      <Block>
        <Block style={styles.takePhotoContainer}>
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
        {
            photo && [
                <Image
                    source={{ uri: photo }}
                    style={{
                    ...styles.imageContainer,
                    }}
                />,
                <Button
                style={{
                    ...styles.removeButton,
                }}
                status='danger'
                onPress={onRemovePhoto}
                icon={() => 
                    <Icon
                        name='delete'
                        color='white'
                        family={"AntDesign"}
                        style={styles.buttonIcon}
                    />
                }
                />,
                <Button
                    style={styles.testButton}
                    onPress={onTakePhoto}
                    icon={() => 
                        <Icon
                            name='camera'
                            color='white'
                            family={"AntDesign"}
                            style={styles.buttonIcon}
                        />
                    }
                />
            ]
        }
    </Block>
  )
}


export default CaptureImage;
