import { type FC } from 'react';
import { type Props } from '../types';

const UsersItem: FC<Props> = ({
  profile: {
    user: { name, avatar }
  }
}) => (
  <div className="profile bg-light">
    <img src={avatar} alt="avatar" className="round-img" />
    <div>
      <h2>{name}</h2>
    </div>
  </div>
)

export default UsersItem
