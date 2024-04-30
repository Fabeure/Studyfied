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
}

const defaultUserState = {
  user: {
    accessToken: "",
    email: "",
    userId: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (_user: User) => {},
} as UserContextType;

const AuthContext = createContext(defaultUserState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    accessToken: "",
    email: "",
    userId: "",
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
