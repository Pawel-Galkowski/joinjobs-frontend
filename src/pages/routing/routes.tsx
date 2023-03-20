import { Route, Routes } from 'react-router';
import Register from '../auth/Register';
import Login from '../auth/Login';
import NotFound from '../layout/NotFound';
import Profiles from '../profiles/Profiles';
import Profile from '../showProfile/MainProfile/Profile';
import AdminRoute from './routeTypes/AdminRoute';
import Admin from '../dashboard/Admin';
import ReMailer from '../auth/ReMailer';
import Authorize from '../auth/Authorize';
import ChangePassword from '../auth/ChangePassword';
import { Alert } from '../../components';
import { Landing } from '../layout/Landing';

const ApplicationRoutes = () => (
  <>
    <Alert />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/api/users/confirmation/:token" element={<Authorize />} />
      <Route path="/recovery" element={<ReMailer />} />
      <Route path="/api/users/recovery/:token" element={<ChangePassword />} />
      <Route path="/profiles" element={<Profiles />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route
        path="/profile/:id"
        element={<AdminRoute path="/admin" element={<Admin />} />}
      />
      <Route element={<NotFound />} />
    </Routes>
  </>
)

export default ApplicationRoutes
