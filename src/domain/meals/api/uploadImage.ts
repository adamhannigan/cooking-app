import Storage from '@aws-amplify/storage'

interface Options {
    fileUrl: string
    fileName: string
}

interface Response {
    s3Path: string
}

const storeFileInS3 = async (
    fileUri,
    awsKey = null,
    access = "public"
  ) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function() {
       reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", fileUri, true);
      xhr.send(null);
    });
    const { name, type } = blob._data;
    const options = {
      level: access,
      contentType: type
    };
    const key = awsKey || name;
    try {
      const result = await Storage.put(key, blob, options);
      return {
        access,
        key: result.key
      };
    } catch (err) {
      throw err;
    }
  };

export async function upload(options: Options): Promise<Response> {
    try {
        console.log('Fetch with URL', options.fileUrl)
        const upload = await storeFileInS3(options.fileUrl)

        console.log('uploaded: ', upload)
        
        return {
            s3Path: upload.key
        }
    } catch (e) {
        console.error(e)

        return null
    }
  }