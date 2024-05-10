import { useEffect } from "react";
import { isEmail } from "../components/validators";

interface SettersType {
  email?: React.Dispatch<React.SetStateAction<string>>;
  password?: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword?: React.Dispatch<React.SetStateAction<string>>;
  username?: React.Dispatch<React.SetStateAction<string>>;
  fullName?: React.Dispatch<React.SetStateAction<string>>;
  errorMessages: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      confirmPassword: string;
      fullName: string;
      username: string;
    }>
  >;
}

interface DependencyType {
  email?: string;
  password?: string;
  confirmPassword?: string;
  username?: string;
  fullName?: string;
  errorMessages: {
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
    username: string;
  };
}

export const useRegisterValidation = (
  dependencies: DependencyType,
  setters: SettersType
) => {
  useEffect(() => {
    let helperText = "";
    if (!isEmail(dependencies.email) && dependencies.email != "")
      helperText = "Invalid email";
    setters.errorMessages((errorMessages) => ({
      ...errorMessages,
      email: helperText,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies.email]);

  useEffect(() => {
    let helperText = "";
    if (dependencies.password != "") {
      if ((dependencies.password?.length as number) < 8)
        helperText = "Too short";
      if (!/\d/.test(dependencies.password as string))
        helperText = "Must contain a number";
      if (!/[a-z]/.test(dependencies.password as string))
        helperText = "Must contain a lowercase letter";
      if (!/[A-Z]/.test(dependencies.password as string))
        helperText = "Must contain an uppercase letter";
      if (!/[^a-zA-Z0-9]/.test(dependencies.password as string))
        helperText = "Must contain a symbol";
    }

    setters.errorMessages((errorMessages) => ({
      ...errorMessages,
      password: helperText,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies.password]);

  useEffect(() => {
    let helperText = "";
    if (
      dependencies.confirmPassword != dependencies.password &&
      dependencies.confirmPassword != ""
    )
      helperText = "Passwords don't match";
    setters.errorMessages((errorMessages) => ({
      ...errorMessages,
      confirmPassword: helperText,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies.confirmPassword]);

  useEffect(() => {
    let helperText = "";
    if (typeof dependencies.fullName != "string") helperText = "Invalid";
    else if (dependencies.fullName.length < 3 && dependencies.fullName != "")
      helperText = "Full name too short";
    setters.errorMessages((errorMessages) => ({
      ...errorMessages,
      fullName: helperText,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies.fullName]);

  useEffect(() => {
    let helperText = "";
    if (typeof dependencies.username != "string") {
      helperText = "Invalid";
    } else {
      if (dependencies.username.length < 3 && dependencies.username != "")
        helperText = "Username too short";
    }
    setters.errorMessages((errorMessages) => ({
      ...errorMessages,
      username: helperText,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies.username]);
};
