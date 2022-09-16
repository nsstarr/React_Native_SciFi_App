import React, {createContext} from 'react'


interface IContextProps {
  profilePic: string;
  setProfilePic: (state: string) => void;
}

export const AvatarContext = React.createContext({} as IContextProps);
