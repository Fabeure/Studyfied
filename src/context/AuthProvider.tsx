import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from "react";

type User = {
  accessToken: string;
  email: string;
  userId: string;
  name: string;
};

interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  promptLogin: boolean;
  setPromptLogin: Dispatch<SetStateAction<boolean>>;
  handleLogout: Dispatch<User>;
}

const defaultUserState = {
  user: {
    accessToken: "",
    email: "",
    userId: "",
    name: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (_user: User) => {},
  promptLogin: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setPromptLogin: (_prompt: boolean) => {},
  handleLogout: () => {},

} as UserContextType;

const fetchLocalUser = (): User => {
  // Check for user data in localStorage on component mount
  const localStorageUser = localStorage.getItem("user");
  if (localStorageUser) {
    try {
      // Parse and validate user data (optional)
      const parsedUser = JSON.parse(localStorageUser);
      // You can add validation logic here if needed (e.g., check for required fields)
      return parsedUser;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      // Handle parsing error (e.g., remove invalid data)
      localStorage.removeItem("user");
    }
  }
  return defaultUserState.user;
};

const AuthContext = createContext(defaultUserState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [promptLogin, setPromptLogin] = useState(false);
  const [user, setUser] = useState<User>(fetchLocalUser());

  const handleLogout = () => {
    setUser({ accessToken: "", email: "", userId: "", name: "" });
    localStorage.removeItem("user");
  };

  // Update localStorage when user changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, promptLogin, setPromptLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
