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
};

interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  handleLogout: Dispatch<User>;
}

const defaultUserState = {
  user: {
    accessToken: "",
    email: "",
    userId: "",
  },
  setUser: () => {},
  handleLogout: () => {},
} as UserContextType;

const AuthContext = createContext(defaultUserState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(() => {
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
    return {
      accessToken: "",
      email: "",
      userId: "",
    };
  });

  const handleLogout = () => {
    setUser({ accessToken: "", email: "", userId: "" });
    localStorage.removeItem("user");
  };

  // Update localStorage when user changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
