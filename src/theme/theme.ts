import { mapping, light as lightTheme } from '@eva-design/eva'
import customTheme from 'theme/custom-theme.json'
import fontMapping from 'theme/custom-mapping.json'

export const customMapping = fontMapping
export const theme = { ...lightTheme, ...customTheme }
