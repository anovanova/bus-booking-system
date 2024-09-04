import { render } from '@redwoodjs/testing/web'

import PersonalInformationPage from './PersonalInformationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PersonalInformationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PersonalInformationPage />)
    }).not.toThrow()
  })
})
