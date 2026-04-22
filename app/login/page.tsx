import { loginAction } from "./actions";

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Website in Aufbau
            </h1>
            <p className="text-gray-500 text-sm">
              Für eine Vorschau den Seitenbetreiber fragen.
            </p>
          </div>

          <form action={loginAction} className="space-y-4">
            <div>
              <input
                type="text"
                name="username"
                placeholder="Benutzername"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900 placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Passwort"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900 placeholder-gray-400"
              />
            </div>

            <ErrorMessage searchParams={searchParams} />

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Anmelden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

async function ErrorMessage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  if (!params.error) return null;
  return (
    <p className="text-red-500 text-xs">
      Benutzername oder Passwort falsch.
    </p>
  );
}
