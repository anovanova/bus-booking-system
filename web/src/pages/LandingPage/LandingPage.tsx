import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const LandingPage = () => {
  return (
    <>
      <Metadata title="Landing" description="Landing page" />

      <div className="h-screen w-screen grid place-content-center">
        <div>
          <p className="text-6xl">
            This system helps you to book a bus to your destination!
          </p>
          <div className="h-44 grid place-content-center">
            <Link
              to={routes.personalInformation()}
              className="btn btn-lg btn-primary m-auto"
            >
              Book Now!
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
