import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  launchCameraAsync,
  requestCameraPermissionsAsync,
  MediaTypeOptions,
} from 'expo-image-picker'

import { Button, Spinner } from '@ui-kitten/components'

import { Media, meals } from 'constants/dummyData'

// galio components
import {
  Block, theme,
} from 'galio-framework';


import CameraSVG from '../assets/camera.svg'
import { upload } from 'domain/meals/api/uploadImage';

export { CookHeaderButton } from '../CookHeaderButton'

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 300,
    backgroundColor: '#f0f0f0',

    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE,


    shadowOffset:{  width: 3,  height: 5,  },
    shadowColor: '#777',
    shadowOpacity: 0.3,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,

  },
});


interface Props {
    onPhoto: (photo: Media) => void
    photo: Media
}

const TakePhoto: React.FC<Props> = ({
  onPhoto,
  photo,
}) => {
  const [isLoading, setIsLoading] = React.useState(false)

  const onTakePhoto = async () => {
    await requestCameraPermissionsAsync()
    
    setIsLoading(true)

    let result = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.Images,
      quality: 0.1,
    });

    if (!result.cancelled) {
      const url = result.uri

      const uploaded = await upload({
        fileUrl: url,
      })


      if (uploaded) {
        onPhoto({
          url,
          s3Path: uploaded.s3Path,
        })
      }
    }

    setIsLoading(false)
  }

   
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={onTakePhoto}
    >
        {
          isLoading && (
            <Spinner
              size='giant'
            />
          )
        }
        {
            !isLoading && !photo && [
                <CameraSVG
                width={100}
                height={100}
                style={{
                    marginTop: theme.SIZES.BASE,
                }}
                />,
                <Button
                  appearance='ghost'
                  status='info'
                  
                  style={{
                      marginVertical: theme.SIZES.BASE,
                  }}
                >
                Take a photo of your meal
                </Button>
                ]
        }

        {
            !isLoading && photo &&  (
              <Image
                  source={{
                      uri: photo.url
                  }}
                  style={styles.image}
              />
          )
        }
    </TouchableOpacity>
  )
};


export default TakePhoto;
