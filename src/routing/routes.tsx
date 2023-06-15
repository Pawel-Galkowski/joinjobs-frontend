import { Route, Routes } from 'react-router'
import { Register } from '../pages/auth/Register'
import { Login } from '../pages/auth/Login'
import { NotFound } from '../pages/layout'
import Profiles from '../pages/profile/profiles/ProfilesList'
import { ProfileMain } from '../pages/profile/profileSections'
import AdminRoute from './routeTypes/AdminRoute'
import { Admin } from '../pages/admin'
import { Recovery } from '../pages/auth/Recovery'
import { Authorize } from '../pages/auth/Authorize'
import { ChangePassword } from '../pages/auth/ChangePassword'
import { LandingPage } from '../pages/layout/landingPage'
import Dashboard from '../pages/layout/dashboard'
import { CompanyForm, CreateForm } from '../pages/form/'
import Form from '../pages/form/Form'
import FormResponses from '../pages/form/FormResponses'
import SimpleForm from '../pages/form/SimpleForm'
import SingleFormResponse from '../pages/form/SingleFormResponse'
import Forms from '../pages/form/forms/Forms'
import Post from '../pages/post/Post'
import Posts from '../pages/post/Posts'
import {
  AddEducation,
  AddExperience,
  CreateProfile,
  EditEducation,
  EditExperience,
  EditProfile
} from '../pages/profile'
import PrivateRoute from './routeTypes/PrivateRoute'

const ApplicationRoutes: React.FC = () => (
  <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/api/users/confirmation/:token' element={<Authorize />} />
      <Route path='/recovery' element={<Recovery />} />
      <Route path='/api/users/recovery/:token' element={<ChangePassword />} />
      <Route path='/profiles' element={<Profiles />} />
      <Route path='/profile/:id' element={<ProfileMain />} />
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
