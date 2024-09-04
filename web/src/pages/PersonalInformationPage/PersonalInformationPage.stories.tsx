import type { Meta, StoryObj } from '@storybook/react'

import PersonalInformationPage from './PersonalInformationPage'

const meta: Meta<typeof PersonalInformationPage> = {
  component: PersonalInformationPage,
}

export default meta

type Story = StoryObj<typeof PersonalInformationPage>

export const Primary: Story = {}
