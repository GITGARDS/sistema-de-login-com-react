import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Private = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <h2>Pagina Privada</h2>
      ola {auth.user?.name}, tudo joia?
    </>
  );
};
