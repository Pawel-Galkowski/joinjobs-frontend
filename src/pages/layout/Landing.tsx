import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

export const Landing = ({ isAuthenticated }: any) =>
  isAuthenticated
? (
    <Navigate to="/dashboard" />
  )
: (
    <section className="landing">
      <div className="dark-overlay">
        <div className="container-fluid">
          <div className="landing-inner">
            <h1 className="x-large">Welcome to #JoinJobs</h1>
            <p className="lead">
              {'Create a profile or portfolio, share posts and find '}
              <u>your dream job</u>
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing)
