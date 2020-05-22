import Storage from '@aws-amplify/storage'

interface Options {
    fileUrl: string
    fileName: string
}

interface Response {
    s3Path: string
}

export async function upload(options: Options): Promise<Response> {
    const file = await fetch(options.fileUrl)

    const response = await Storage.put(options.fileName, file, {
        contentType: 'image/png'
    })

    return {
        s3Path: (response as any).key,
    }
  }