import { useEffect } from 'react'
import Spinner from '../../../../components/spinner/Spinner'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { type AppDispatch } from '../../../../store'
import { getGithubRepos } from '../../../../actions/profile'
import {
  type ProfileProps,
  type GithubRepositoryProps
} from '../../../../reducers/profile/types'
import { v4 as uuid } from 'uuid'
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import { Button } from '../../../../components'
import { BadgeIcon, ShareIcon, VisibilityIcon } from '../../../../utils/icons'
import { githubProfileStyles, repoStyles } from './styles'

export const ProfileGithub: React.FC<{ username: string }> = ({ username }) => {
  const dispatch: AppDispatch = useAppDispatch()
  const { loading, repos }: ProfileProps = useAppSelector(
    ({ profile }) => profile.profile
  )
  useEffect(() => {
    dispatch(getGithubRepos(username))
  }, [getGithubRepos, username])

  if (loading ?? !repos) {
    return <Spinner />
  }

  return (
    <Box sx={githubProfileStyles}>
      <Typography variant='h3'>Github Repos</Typography>
      {repos.map((repo: GithubRepositoryProps) => (
        <Box key={uuid()} sx={repoStyles}>
          <Typography variant='h4'>
            <Button link={repo.html_url}>{repo.name}</Button>
            <Typography variant='body1'>{repo.description}</Typography>
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <BadgeIcon />
              </ListItemIcon>
              <ListItemText primary={repo.stargazers_count} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <VisibilityIcon />
              </ListItemIcon>
              <ListItemText primary={repo.watchers_count} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ShareIcon />
              </ListItemIcon>
              <ListItemText primary={repo.forks_count} />
            </ListItem>
          </List>
        </Box>
      ))}
    </Box>
  )
}
