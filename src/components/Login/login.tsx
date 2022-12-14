import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { login } from "../../store/auth-slice/auth-actions";
import "./login.scss";

type LoginInoutsType = {
  username: string;
  password: string;
};
export default function Login() {
  const [inputs, setInputs] = useState<LoginInoutsType>({
    username: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  let authstate = useAppSelector((state) => state.Auth);

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  const handleLogin = () => {
    dispatch(login(inputs.username));
  };
  return (
    <>
      {authstate.api_key ? (
        <Navigate to="/" />
      ) : (
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          sx={{
            height: "100vh",
            width: "100vw",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div className="login-container">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="username"
              onChange={handleChage}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              onChange={handleChage}
            />
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Box>
      )}
    </>
  );
}
