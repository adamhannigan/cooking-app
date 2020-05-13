import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker'

import {  Button } from '@ui-kitten/components'

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
    width: '100%',
    backgroundColor: '#f0f0f0',

    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE,
  },
  image: {
    width: '100%',
    height: 400,
  },
});

interface Props {
    meal?: Meal
}

const Cooker: React.FC<Props> = ({
    meal,
}) => {
  const [photo, setPhoto] = React.useState<string>()

  const onTakePhoto = async () => {
    await ImagePicker.requestCameraPermissionsAsync()
    
    //setIsTakingPhoto(true)
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1
    });

    if (!result.cancelled) {
      setPhoto(result.uri)
    }
  }

   
  return (
    <Block style={styles.imageContainer}>
        {
            !photo && [
                <CameraSVG
                width={100}
                height={100}
                style={{
                    marginTop: theme.SIZES.BASE,
                }}
                />,
                <Button
                appearance='outline'
                status='basic'
                onPress={onTakePhoto}
                style={{
                    marginVertical: theme.SIZES.BASE,
                }}
                >
                Take a photo of your meal
                </Button>
                ]
        }
        {
            photo &&  (
            <Image
                source={{
                    uri: photo
                }}
                style={styles.image}
            />
        )
        }
    </Block>
  )
};


export default Cooker;
