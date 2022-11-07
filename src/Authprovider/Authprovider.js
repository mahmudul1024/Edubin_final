import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../component/Firebase/Firebase.init.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
export const userContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //safety for memomy leakage and check for current user on firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //login  with email n pass............................

  const logIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  //registration in with email n pass............................

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with google/Github............................

  const signIn = (provid) => {
    setLoading(true);

    return signInWithPopup(auth, provid);
  };

  //update name and photo  ............................

  const updateUser = (profile) => {
    setLoading(true);

    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    setLoading(true);

    return signOut(auth);
  };

  const userInfo = {
    user,
    signIn,
    logOut,
    createUser,
    loading,
    setLoading,
    logIn,
    updateUser,
  };

  return (
    <userContext.Provider value={userInfo}>{children}</userContext.Provider>
  );
};

export default Authprovider;
