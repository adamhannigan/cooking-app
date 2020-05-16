import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker'

import { Button, Spinner } from '@ui-kitten/components'

import { Meal } from 'constants/dummyData'

// galio components
import {
  Block, theme,
} from 'galio-framework';


import CameraSVG from '../assets/camera.svg'

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
    onPhoto: (url: string) => void
    photoUrl: string
}

const TakePhoto: React.FC<Props> = ({
  onPhoto,
  photoUrl,
}) => {
  const [isLoading, setIsLoading] = React.useState(false)

  const onTakePhoto = async () => {
    await ImagePicker.requestCameraPermissionsAsync()
    
    setIsLoading(true)

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1
    });

    if (!result.cancelled) {
      await new Promise(res => setTimeout(res, 500))

      onPhoto(result.uri)
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
            !isLoading && !photoUrl && [
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
            !isLoading && photoUrl &&  (
              <Image
                  source={{
                      uri: photoUrl
                  }}
                  style={styles.image}
              />
          )
        }
    </TouchableOpacity>
  )
};


export default TakePhoto;
