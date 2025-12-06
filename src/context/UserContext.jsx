import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage("nutrity_profile", {
    nome: "",
    sesso: "M",
    età: "",
    altezza: "",
    peso: "",
    polso: "",
    addome: "",
    fianchi: "",
    avambraccio: "",
    morfologia: "",
    robustezza: "",
    massaGrassa: "",
    bmr: "",
    fabbisogno: "",
    pesoIdeale: "",
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
