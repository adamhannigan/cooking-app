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
              setIsLoading(false)
          })
      }

      if (s3Key) {
        load()
      }
    }, [s3Key])

    const onImageRendered = () => {
      setIsLoading(false)
    }

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
                        style={{
                          ...(imageProps.style as object),
                          ...styles.image,
                        }}
                        onLoadEnd={onImageRendered}
                    />
                )
            }
            {
                isLoading && (
                  <Block 
                    style={{
                      position: 'absolute',
                    }}
                  >
                    <Spinner status='info'/>
                  </Block>
                  
                )
            }
        </Block>
  )
}

const styles = StyleSheet.create({
  container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  spinner: {
      left: 50,
      top: 50,
      zIndex: 999,
      width: 50,
      height: 50,
  }
});

export default S3Image;
