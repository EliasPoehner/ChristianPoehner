"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (username === "Christian" && password === "Poehner") {
    const cookieStore = await cookies();
    cookieStore.set("preview_auth", "christian_poehner", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    redirect("/");
  }

  redirect("/login?error=1");
}
