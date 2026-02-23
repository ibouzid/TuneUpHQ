import { useState } from "react";
import { useLogin } from "./hooks/useLogin";
import { Button } from "../../components/ui/Button";
import Logo from "../../assets/logos/tuneUpHQLogo.svg";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { mutate: login, isPending } = useLogin(setError);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ username, password });
  };
  return (
    <div className="login-page w-full h-screen p-20 flex flex-col gap-20 items-center justify-center bg-background-primary text-text-primary">
      <form
        className="flex flex-col gap-10 bg-background-elevated border border-border-strong p-40 rounded-2xl"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl text-text-goldPrimary flex gap-2">
          <div>TuneUpHQ</div>
          <img src={Logo} alt="TuneUp Logo" className="w-10 h-10" />
        </h1>
        <label>
          Username:
          <input
            type="text"
            className="bg-background-secondary rounded-sm m-2 p-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            className="bg-background-secondary rounded-sm m-2 p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {error && <p className="text-text-error">{error}</p>}

        <Button
          className="w-40 bg-gradient-gold-primary text-text-primary p-2 rounded-md"
          type="submit"
          disabled={isPending}
          label={isPending ? "Logging in..." : "Login"}
        />
      </form>
    </div>
  );
}
