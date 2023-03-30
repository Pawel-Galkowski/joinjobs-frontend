import { useEffect } from 'react'
import Spinner from '../../../components/spinner/Spinner'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { getGithubRepos } from '../../../actions/profile'
import { type ProfileProps, type GithubRepositoryProps } from '../../../reducers/profile/types'

interface Props {
  username: any
}

const ProfileGithub: React.FC<Props> = ({
  username
}) => {
  const dispatch: AppDispatch = useAppDispatch()
  const { loading, repos }: ProfileProps = useAppSelector((state) => state.profile.profile)
  useEffect(() => {
    dispatch(getGithubRepos(username))
  }, [getGithubRepos, username])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='profile-github bg-white'>
      <h2 className='text-primary my-1'>Github Repos</h2>
      {!repos ? (
        <Spinner />
      ) : (
        repos.map((repo: GithubRepositoryProps, index: number) => (
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

export default ProfileGithub
