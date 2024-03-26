import MainContainer from "@/components/main-container/main-container";
import { AuthProvider } from "@/hooks/contexts/auth-context";

export default function Home() {
  return (
    <AuthProvider>
      <main>
        <h1>Hello World</h1>
      </main>
    </AuthProvider>
  );
}
