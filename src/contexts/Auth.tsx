/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';
import { Provider, Subscription } from '@supabase/supabase-js';
import { supabase } from '../supabase';
import { UserRequest } from '../interfaces/UserResponse';
import { sendUser } from '../api/UserService';

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthContextValue {
  signUp: (data: any) => void;
  signIn: (data: any) => void;
  signOut: () => void;
  signInGoogle: () => void;
  signInGithub: () => void;
  user: any;
}

export const AuthContext = React.createContext<AuthContextValue>({
  signUp: () => {},
  signIn: () => {},
  signInGoogle: () => {},
  signInGithub: () => {},
  signOut: () => {},
  user: null,
});

const logDataToDB = async (res: any) => {
  const userData = res.data.user;
  const user: UserRequest = {
    id: userData.id,
    name: userData.email,
    email: userData.email,
    phone: userData.phone,
    user_provider: userData.app_metadata.provider,
  };
  const response = await sendUser(user);
};

const signUpSupabase =  (data: any) => {
  console.log(data)
  supabase.auth.signUp(data).then(async (res: any) => {
    await logDataToDB(res);
  });
};

const signInOAuth = (targetProvider: Provider) => {
  supabase.auth
    .signInWithOAuth({
      provider: targetProvider,
    })
    .then(async (res: any) => {
      await logDataToDB(res);
    });
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(async (res: any) => {
      const session = res.data.session;
      setUser(session?.user);
      setLoading(false);
    });
    const data: Subscription = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user);
        setLoading(false);
      }
    ).data.subscription;
    console.log(user);
    return () => {
      data?.unsubscribe();
    };
  }, []);

  const googleProvider: Provider = 'google';
  const githubProvider: Provider = 'github';

  const value: AuthContextValue = {
    signUp: (data) => signUpSupabase(data),
    signIn: (data) => supabase.auth.signInWithPassword(data),
    signInGoogle: () => signInOAuth(googleProvider),
    signInGithub: () => signInOAuth(githubProvider),
    signOut: () => supabase.auth.signOut(),
    user,
  };
  console.log(value);
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
