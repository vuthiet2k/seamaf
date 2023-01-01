import React from "react";
const initialState: any = []
const blogSlice = React.createContext({
  name: "blog",
  initialState,
  reducer: {},
});

export default blogSlice;
