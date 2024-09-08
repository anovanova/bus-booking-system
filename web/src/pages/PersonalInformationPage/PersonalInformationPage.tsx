import { Form, TextField, Submit } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PersonalInformationPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <Metadata
        title="PersonalInformation"
        description="PersonalInformation page"
      />

      <div className="h-screen grid">
        <div className="lg:w-1/3 w-full p-4 m-auto">
          <div className="m-10">
            <h1 className="text-center text-4xl font-bold">
              Personal Information
            </h1>
          </div>

          <Form onSubmit={onSubmit} className="grid gap-4">
            <label htmlFor="firstName">Firstname:</label>
            <TextField name="firstName" className="input input-bordered" />
            <label htmlFor="middleName">Middlename:</label>
            <TextField name="middleName" className="input input-bordered" />
            <label htmlFor="lastName">Lastname:</label>
            <TextField name="lastName" className="input input-bordered" />
            <label htmlFor="emailAddress">Email Address:</label>
            <TextField name="emailAddress" className="input input-bordered" />
            <label htmlFor="contactNumber">Contact Number:</label>
            <TextField name="contactNumber" className="input input-bordered" />
            <Submit className="btn btn-lg btn-primary m-auto mt-8">Next</Submit>
          </Form>
        </div>
      </div>
    </>
  )
}

export default PersonalInformationPage
