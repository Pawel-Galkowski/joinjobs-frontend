import { useEffect } from 'react'
import { connect } from 'react-redux'
import Spinner from '../../../components/spinner/Spinner'
import { getGithubRepos as githubProfile } from '../../../actions/profile'

interface Props {
  username: any
  getGithubRepos?: any
  repos?: any
}

const ProfileGithub: React.FC<Props> = ({
  username,
  getGithubRepos,
  repos
}) => {
  useEffect(() => {
    getGithubRepos(username)
  }, [getGithubRepos, username])
  return (
    <div className='profile-github bg-white'>
      <h2 className='text-primary my-1'>Github Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo: any, index: number) => (
          <div key={index} className='repo bg-white'>
            <div>
              <h4>
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
                <p>{repo.description}</p>
              </h4>
            </div>
            <div>
              <ul>
                <li className='badge badge-primary'>
                  Stars:
                  {repo.stargazers_count}
                </li>
                <li className='badge badge-dark'>
                  Watchers:
                  {repo.watchers_count}
                </li>
                <li className='badge badge-light'>
                  Forks:
                  {repo.forks_count}
                </li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  repos: state.profile.repos
})

export default connect(mapStateToProps, { githubProfile })(ProfileGithub)
