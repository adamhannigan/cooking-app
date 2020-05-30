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
  key: string
}

const S3Image: React.FC<Props> = ({
    key,
    ...imageProps
}) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [signedImageUrl, setSignedImageUrl] = React.useState()

    React.useEffect(() => {
      const load = async () => {
        const signed = Storage.get(key)
          .then(image => {
            console.log('Signed image: ', image)
            setSignedImageUrl(image)
          })
          .catch(console.error)

            .finally(() => {
                setIsLoading(false)
            })
      }

      load()
    }, [key])

    console.log('S3 load wirh: ', signedImageUrl)

    return (
        <Block style={imageProps.style}>
            <Image
                source={{
                    uri: signedImageUrl,
                }}
                style={styles.image}
            />
            {
                isLoading && (
                    <Spinner />
                )
            }
        </Block>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default S3Image;
