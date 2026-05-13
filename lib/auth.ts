import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const cookieName = "galactic_admin";

export async function verifyAdmin(email: string, password: string) {
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@galacticliving.com";
  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (email !== adminEmail) return false;
  if (!hash) return password === "admin12345";
  return bcrypt.compare(password, hash);
}

export function signAdminToken(email: string) {
  return jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET ?? "dev-secret", { expiresIn: "7d" });
}

export async function getAdminSession() {
  const token = (await cookies()).get(cookieName)?.value;
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET ?? "dev-secret");
  } catch {
    return null;
  }
}

export { cookieName };
