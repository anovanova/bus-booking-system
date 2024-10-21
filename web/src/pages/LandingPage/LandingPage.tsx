import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { Button } from 'src/components/ui/button'

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
            <Button
              onClick={() => {
                navigate(routes.personalInformation())
              }}
              variant="default"
            >
              Book Now!
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
