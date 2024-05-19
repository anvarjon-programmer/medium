import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useResgisterProps = () => {
    const [auth, setAuth] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return {
        auth,
        setAuth,
        dispatch,
        navigate,
    };
  };
  