import React from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
} from 'react-native';

import Storage from '@aws-amplify/storage'

import { Spinner } from '@ui-kitten/components'

// galio components
import {
  Block, 
} from 'galio-framework';

interface Props extends Omit<ImageProps, 'source'> {
  s3Key: string
}

const S3Image: React.FC<Props> = ({
    s3Key,
    ...imageProps
}) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [signedImageUrl, setSignedImageUrl] = React.useState()

    React.useEffect(() => {
      const load = async () => {
        const signed = Storage.get(s3Key)
          .then(image => {
            // console.log('Signed image: ', image)
            setSignedImageUrl(image)
          })
          .catch((e) => {
              console.log('S3Image: ', e)
          })
        .finally(() => {
            // setIsLoading(false)
        })
      }

      if (s3Key) {
        load()
      }
    }, [s3Key])

    return (
        <Block style={{
            ...(imageProps.style as object),
            ...styles.container,
        }}>
            {
                signedImageUrl && (
                    <Image
                        source={{
                            uri: signedImageUrl,
                        }}
                        style={styles.image}
                        loadingIndicatorSource={{
                            uri: require('../assets/loadingImagePlaceholder.png')
                        }}

                    />
                )
            }
            {
                true && (
                    <Spinner style={styles.spinner}/>
                )
            }
        </Block>
  )
}

const styles = StyleSheet.create({
  container: {
      position: 'relative',
      backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  spinner: {
      position: 'absolute',
      left: 50,
      top: 50,

  }
});

export default S3Image;
