import Storage from '@aws-amplify/storage'
import Predictions from '@aws-amplify/predictions'
import ImageResizer from 'react-native-image-resizer';
interface Options {
    fileUrl: string
}

interface Response {
    s3Path: string
}

function predict(s3Key: string) {
    Predictions.identify({
        entities: {
          source: {
            key: s3Key,
          },
        }
      })
      .then((response) => console.log({ response }))
      .catch(err => console.log({ err }));
}


export async function upload(options: Options): Promise<Response> {
    try {
        console.log('Fetch with URL', options.fileUrl)
        const response = await fetch(options.fileUrl)
        const blob = await response.blob()
        console.log('Blob size: ', `${blob.size / 1024} KB`)
        const fileName = `${Date.now()}.jpeg`

        const stored = await Storage.put(fileName, blob, {
            contentType: 'image/jpeg',
            level: 'public'
        })

        console.log('uploaded: ', stored.key)
        // predict(stored.key)
        
        return {
            s3Path: stored.key
        }
    } catch (e) {
        console.error(e)

        return null
    }
}