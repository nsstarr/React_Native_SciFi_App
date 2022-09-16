import React, {createContext} from 'react'


interface ContextProps {
  profilePic: string;
  setProfilePic: React.Dispatch<string | {uri: string}>;
}

export const AvatarContext = React.createContext({} as ContextProps);
