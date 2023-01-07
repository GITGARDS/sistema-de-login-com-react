import { createContext } from "react";
import { AuthContextType } from "../../types/Auth";

// context
export const AuthContext = createContext<AuthContextType>(null!);
