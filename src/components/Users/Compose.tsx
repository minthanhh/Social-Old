import { NamedExoticComponent, memo } from 'react';
import BaseUser, { BaseUserProps } from './User';

import Name from './Name';
import Avatar from './Avatar';
import Info from './Info';
import Status from './Status';
import Viewer from './Viewer';

export interface IUserCompose {
   Name: typeof Name;
   Avatar: typeof Avatar;
   Info: typeof Info;
   Status: typeof Status;
   Viewer: typeof Viewer;
}

const User = memo(BaseUser) as NamedExoticComponent<BaseUserProps> &
   IUserCompose;

User.Name = Name;
User.Avatar = Avatar;
User.Info = Info;
User.Status = Status;
User.Viewer = Viewer;

export default User;
