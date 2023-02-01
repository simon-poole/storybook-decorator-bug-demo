import {ChakraProvider} from '@chakra-ui/react'
import React from 'react'
import {theme} from '../src/theme'

const ThemeDecorator = (storyFn: any) => (
  <ChakraProvider theme={theme}>{storyFn()}</ChakraProvider>
)

export default ThemeDecorator
