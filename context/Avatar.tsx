import {createContext, useState} from 'react';
import React from 'react'

type ContextProps = {
    profilePic?: string,
    setProfilePic?: React.Dispatch<React.SetStateAction<string>>
}


export const AvatarContext: any = React.createContext([]);

