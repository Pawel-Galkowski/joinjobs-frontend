import { Route, Routes } from 'react-router'
import Register from '../auth/Register'
import Login from '../auth/Login/Login'
import NotFound from '../layout/NotFound'
import Profiles from '../profiles/Profiles'
import Profile from '../showProfile/MainProfile/Profile'
import AdminRoute from './routeTypes/AdminRoute'
import Admin from '../dashboard/Admin'
import ReMailer from '../auth/ReMailer'
import Authorize from '../auth/Authorize'
import ChangePassword from '../auth/ChangePassword'
import { Alert } from '../../components'
import { Landing } from '../layout/Landing'
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

const ApplicationRoutes = () => (
  <>
    <Alert />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/api/users/confirmation/:token' element={<Authorize />} />
      <Route path='/recovery' element={<ReMailer />} />
      <Route path='/api/users/recovery/:token' element={<ChangePassword />} />
      <Route path='/profiles' element={<Profiles />} />
      <Route path='/profile/:id' element={<Profile />} />
      <Route
        path='/admin'
        element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        }
      />
      <Route
        path='/forms'
        element={
          <PrivateRoute>
            <Forms />
          </PrivateRoute>
        }
      />
      <Route
        path='/api/forms/:company'
        element={
          <PrivateRoute>
            <CompanyForm />
          </PrivateRoute>
        }
      />
      <Route
        path='/api/forms/create/:company'
        element={
          <PrivateRoute>
            <CreateForm />
          </PrivateRoute>
        }
      />
      <Route
        path='/api/forms/:company/:id'
        element={
          <PrivateRoute>
            <Form />
          </PrivateRoute>
        }
      />
      <Route
        path='/api/forms/res/:company/:id'
        element={
          <PrivateRoute>
            <FormResponses />
          </PrivateRoute>
        }
      />
      <Route
        path='/api/forms/res/:company/:id/:response'
        element={
          <PrivateRoute>
            <SingleFormResponse />
          </PrivateRoute>
        }
      />
      <Route
        path='/forms/post/:company/:id'
        element={
          <PrivateRoute>
            <SimpleForm />
          </PrivateRoute>
        }
      />
      <Route
        path='/dashboard'
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path='/create-profile'
        element={
          <PrivateRoute>
            <CreateProfile />
          </PrivateRoute>
        }
      />
      <Route
        path='/edit-profile'
        element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        }
      />
      <Route
        path='/edit-experience/:id'
        element={
          <PrivateRoute>
            <EditExperience />
          </PrivateRoute>
        }
      />
      <Route
        path='/edit-education/:id'
        element={
          <PrivateRoute>
            <EditEducation />
          </PrivateRoute>
        }
      />
      <Route
        path='/experience'
        element={
          <PrivateRoute>
            <AddExperience />
          </PrivateRoute>
        }
      />
      <Route
        path='/education'
        element={
          <PrivateRoute>
            <AddEducation />
          </PrivateRoute>
        }
      />
      <Route
        path='/posts'
        element={
          <PrivateRoute>
            <Posts />
          </PrivateRoute>
        }
      />
      <Route
        path='/posts/:id'
        element={
          <PrivateRoute>
            <Post />
          </PrivateRoute>
        }
      />
      <Route element={<NotFound />} />
    </Routes>
  </>
)

export default ApplicationRoutes
