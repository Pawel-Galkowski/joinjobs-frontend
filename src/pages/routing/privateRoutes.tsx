import { Route, Routes } from 'react-router'
import Dashboard from '../dashboard/Dashboard'
import CompanyForm from '../form/CompanyForm'
import CreateForm from '../form/CreateForm'
import Form from '../form/Form'
import FormResponses from '../form/FormResponses'
import SimpleForm from '../form/SimpleForm'
import SingleFormResponse from '../form/SingleFormResponse'
import Forms from '../forms/Forms'
import Post from '../post/Post'
import Posts from '../posts/Posts'
import AddEducation from '../profile/AddEducation'
import AddExperience from '../profile/AddExperience'
import CreateProfile from '../profile/CreateProfile'
import EditEducation from '../profile/EditEducation'
import EditExperience from '../profile/EditExperience'
import EditProfile from '../profile/EditProfile'
import PrivateRoute from './routeTypes/PrivateRoute'

const privateRoutes = () => (
  <Routes>
    <Route
      path='/forms'
      element={<PrivateRoute path='/forms' element={<Forms />} />}
    />
    <Route
      path='/api/forms/:company'
      element={
        <PrivateRoute path='/api/forms/:company' element={<CompanyForm />} />
      }
    />
    <Route
      path='/api/forms/create/:company'
      element={
        <PrivateRoute
          path='/api/forms/create/:company'
          element={<CreateForm />}
        />
      }
    />
    <Route
      path='/api/forms/:company/:id'
      element={
        <PrivateRoute path='/api/forms/:company/:id' element={<Form />} />
      }
    />
    <Route
      path='/api/forms/res/:company/:id'
      element={
        <PrivateRoute
          path='/api/forms/res/:company/:id'
          element={<FormResponses />}
        />
      }
    />
    <Route
      path='/api/forms/res/:company/:id/:response'
      element={
        <PrivateRoute
          path='/api/forms/res/:company/:id/:response'
          element={<SingleFormResponse />}
        />
      }
    />
    <Route
      path='/forms/post/:company/:id'
      element={
        <PrivateRoute
          path='/forms/post/:company/:id'
          element={<SimpleForm />}
        />
      }
    />
    <Route
      path='/dashboard'
      element={<PrivateRoute path='/dashboard' element={<Dashboard />} />}
    />
    <Route
      path='/create-profile'
      element={
        <PrivateRoute path='/create-profile' element={<CreateProfile />} />
      }
    />
    <Route
      path='/edit-profile'
      element={<PrivateRoute path='/edit-profile' element={<EditProfile />} />}
    />
    <Route
      path='/edit-experience/:id'
      element={
        <PrivateRoute
          path='/edit-experience/:id'
          element={<EditExperience />}
        />
      }
    />
    <Route
      path='/edit-education/:id'
      element={
        <PrivateRoute path='/edit-education/:id' element={<EditEducation />} />
      }
    />
    <Route
      path='/experience'
      element={<PrivateRoute path='/experience' element={<AddExperience />} />}
    />
    <Route
      path='/education'
      element={<PrivateRoute path='/education' element={<AddEducation />} />}
    />
    <Route
      path='/posts'
      element={<PrivateRoute path='/posts' element={<Posts />} />}
    />
    <Route
      path='/posts/:id'
      element={<PrivateRoute path='/posts/:id' element={<Post />} />}
    />
  </Routes>
)

export default privateRoutes
