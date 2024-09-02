import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const LandingPage = () => {
  return (
    <>
      <Metadata title="Landing" description="Landing page" />

      <h1>LandingPage</h1>
      <p>
        Find me in <code>./web/src/pages/LandingPage/LandingPage.tsx</code>
      </p>
      <p>
        My default route is named <code>landing</code>, link to me with `
        <Link to={routes.landing()}>Landing</Link>`
      </p>
    </>
  )
}

export default LandingPage
