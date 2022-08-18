// import { createAsyncThunk } from "@reduxjs/toolkit";
// // import { storage } from "../../services/services";
// import { IResponse, IUser, IUserTdo, UserSignInDto, UserSignOutDto } from "../types/types";
// import { ActionType } from "./common";

// const signOut = createAsyncThunk<UserSignOutDto, void>(
//   ActionType.SIGN_OUT,
//   async() => {
//     // storage.removeItem('token')
//     return { user: null}
//   }
// )

// const signUp = createAsyncThunk<IResponse, UserSignInDto>(
//   ActionType.SIGN_UP,
//   async (user) => {
//     const response = await fetch('https://travel-app-api.glitch.me/api/v1/auth/sign-up', {
//       body: JSON.stringify(user),
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//     })
//     if (response.status !== 201) {
//       const { message } = await response.json()
//       throw new Error(message)
//     } else {
//       const res = await response.json() as IResponse
//       storage.setItem('token', res.token)
//       return res
//     }
//   }
// );

// const signIn = createAsyncThunk<IResponse, UserSignInDto>(
//   ActionType.SIGN_IN,
//   async (user) => {
//     const response = await fetch('https://travel-app-api.glitch.me/api/v1/auth/sign-in', {
//       body: JSON.stringify(user),
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },

//     })

//     if (response.status !== 200) {
//       const { message } = await response.json()
//       throw new Error(message)
//     } else {
//       const res = await response.json() as IResponse
//       storage.setItem('token', res.token)
//       return res
//     }
//   }
// );

// const reSignIn = createAsyncThunk<IUserTdo, string>(
//   ActionType.RESIGN_IN,
//   async (token) => {
//     const response = await fetch('https://travel-app-api.glitch.me/api/v1/auth/authenticated-user', {
//       method: 'GET',
//       headers: {
//         "Authorization": `Bearer ${token}`
//       },

//     })

//     if (response.status !== 200) {
//       const { message } = await response.json()
//       storage.removeItem('token')
//       throw new Error(message)
//     } else {
//       const user = await response.json() as IUser
//       return {user}
//     }

//   }
// )


// export { signIn, reSignIn, signUp, signOut }