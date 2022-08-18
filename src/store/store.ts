import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { authReducer } from "./rootReducer";



const store = configureStore({
  reducer: {
    auth: authReducer,
    // trips: tripsReducer,
    // bookings: bookingsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        // хотів зробити як в міні проекті, щоб було гарніше, але не встиг
      }
    }
  }),
})

export { store };
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
