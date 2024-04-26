import React, { useState } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Despachar la acción de inicio de sesión con los datos del formulario
    dispatch(authActions.login({ email, password }));

    // Limpiar el estado de error y los campos del formulario después de enviar
    setError("");
    setEmail("");
    setPassword("");
  };
};
