import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type User = {
  accessToken: string;
  email: string;
  userId: string;
};

interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  promptLogin: boolean;
  setPromptLogin: Dispatch<SetStateAction<boolean>>;
}

const defaultUserState = {
  user: {
    accessToken: "",
    email: "",
    userId: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (_user: User) => {},
  promptLogin: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setPromptLogin: (_prompt: boolean) => {},
} as UserContextType;

const AuthContext = createContext(defaultUserState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    accessToken: "",
    email: "",
    userId: "",
  });
  const [promptLogin, setPromptLogin] = useState(false);

  return (
    <AuthContext.Provider
      value={{ user, setUser, promptLogin, setPromptLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
