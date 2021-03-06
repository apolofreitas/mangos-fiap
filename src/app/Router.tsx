import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "~/screens/Home";
import { SignIn } from "~/screens/SignIn";

export const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
