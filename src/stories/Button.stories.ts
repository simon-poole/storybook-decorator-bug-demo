import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@chakra-ui/react'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: StoryObj<typeof Button> = {
  name: 'Button',
  args: {
    size: 'md',
    children: 'Get started',
  },
}

