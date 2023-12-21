import { IContextType, IUser } from '@/types';
import React, { Children, createContext , useContext , useEffect , useState} from 'react'


export const INITIAL_USER = {
    id : '',
    name : '',
    username: '',
    email: '',
    imageurl: '',
    bio : '',
}


const INTITIAL_STATE = {
    user: INITIAL_USER,
    isLoading : false,
    isAuthanticated : false,
    setUser : () => {},
    setIsAuthanticated : () => {},
    checkAuthUser : async () => false as boolean
}

const AuthContext = createContext<IContextType>(INTITIAL_STATE);

const Authprovider = ({ children} : {children : React.ReactNode}) =>{
      const   [ user ,setUser] = useState<IUser>(INTITIAL_STATE);
}

export default AuthContext