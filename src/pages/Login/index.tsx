import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "./styles.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/");
      }else {
        alert("Usuario invalido!")
      }
    }
  };

  return (
    <>
      <h2>Pagina Fechada</h2>

      <form onSubmit={handleOnSubmit}>
        <label htmlFor="">
          Email:
          <input
            type="text"
            value={email}
            placeholder="digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Senha:
          <input
            type="password"
            value={password}
            placeholder="digite a senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Logar</button>
      </form>
    </>
  );
};
