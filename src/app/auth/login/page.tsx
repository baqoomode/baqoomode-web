import { LoginForm } from "@/components/auth/login-form";

// export const runtime = "edge";

export default async function LoginPage() {
    return (
        <div className="container mx-auto px-4 py-24 min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8">로그인 (Login)</h1>
            <LoginForm />
        </div>
    );
}
