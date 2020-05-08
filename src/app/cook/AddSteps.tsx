import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import { Video } from 'expo-av'

import * as ImagePicker from 'expo-image-picker'

import { Text, Input, Button } from '@ui-kitten/components'

// galio components
import {
  Block, theme
} from 'galio-framework';

import { Step } from 'constants/dummyData'

import StepsSVG from './assets/steps.svg'

export { CookHeaderButton } from './CookHeaderButton'
const { width } = Dimensions.get('screen');

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
  step: {
      marginTop: theme.SIZES.BASE * 2,
  },
  addAnotherStep: {
      marginVertical: theme.SIZES.BASE,
  },
  image: {
      width: '100%',
      height: 400,
  }
});

interface Props {
    initialSteps?: Step[]
}

const AddSteps: React.FC<Props> = ({
    initialSteps,
}) => {
  // Currently, we are just storing image steps
  const [steps, setSteps] = React.useState<Step[]>(
      initialSteps 
        ? [...initialSteps, null]
        : [null]
    )

  const onTakeStepPhoto = async (stepIndex: number) => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1
    });

    console.log('onTakeStepPhoto', result)
    if (!result.cancelled) {
        const newSteps = [...steps]

        if (result.type === 'video') {
            newSteps[stepIndex] = {
                ...newSteps[stepIndex],
                video: {
                    url: result.uri,
                },
            }
        } else {
            newSteps[stepIndex] = {
                ...newSteps[stepIndex],
                photo: {
                    url: result.uri,
                },
            }
        }

        setSteps(newSteps)
    }
  }

  const onSetStepText = (text: string, stepIndex: number) => {
    const newSteps = [...steps]

    // Nullify if empty string
    const name = text || null
    newSteps[stepIndex] = {
        ...newSteps[stepIndex],
        description: name,
    }

    setSteps(newSteps)
  }

  const onAddStep = () => {
      setSteps([
          ...steps,
          null,
      ])
  }


  return (
    <Block>
        {
            steps.map((step, index) => (
                <Block style={styles.step}>
                    <Text category='h5' status='info'>
                        {`Step ${index + 1}`}
                    </Text>

                    <Block style={styles.imageContainer}>
                        {
                            step && step.photo && (
                                <Image
                                    source={{
                                        uri: step.photo.url
                                    }}
                                    style={styles.image}
                                />
                            )
                        }
                        {
                            step && step.video && (
                                <Video
                                    source={{ uri: step.video.url }}
                                    rate={1.0}
                                    volume={1.0}
                                    isMuted={false}
                                    resizeMode="cover"
                                    shouldPlay
                                    isLooping
                                    style={styles.image}
                                />
                            )
                        }
                        {
                            !step && [
                                <StepsSVG
                                    width={100}
                                    height={100}
                                    style={{
                                        marginTop: theme.SIZES.BASE,
                                    }}
                                />,
                                <Button
                                    appearance='outline'
                                    status='basic'
                                    onPress={() => onTakeStepPhoto(index)}
                                    style={{
                                        marginTop: theme.SIZES.BASE,
                                        marginBottom: theme.SIZES.BASE,
                                    }}
                                >
                                    Upload a photo or video of the step
                                </Button>,
                            ]
                        }
                        
                    </Block>

                    <Input
                        multiline={true}
                        placeholder='Describe the step...'
                        textStyle={{
                            minHeight: 64,
                        }}
                        value={step && step.description}
                        onChangeText={(text) => onSetStepText(text, index)}
                    />
                </Block>
            ))
        }

        <Button
            style={styles.addAnotherStep}
            status='info'
            // Disable if last step is still empty
            disabled={!steps[steps.length - 1]}
            onPress={onAddStep}
        >
            Add another step +
        </Button>
    </Block>
  )
};


export default AddSteps;
