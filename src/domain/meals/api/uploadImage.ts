import Storage from '@aws-amplify/storage'

interface Options {
    fileUrl: string
    fileName: string
}

interface Response {
    s3Path: string
}

export async function upload(options: Options): Promise<Response> {
    try {
        console.log('Fetch with URL', options.fileUrl)
        //const upload = await storeFileInS3(options.fileUrl)
        const upload =  await Storage.put(options.fileName, options.fileUrl);
        console.log('uploaded: ', upload)
        
        return {
            s3Path: upload.key
        }
    } catch (e) {
        console.error(e)

        return null
    }
  }