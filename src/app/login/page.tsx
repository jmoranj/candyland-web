import { LoginForm } from "@/components/Auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}
