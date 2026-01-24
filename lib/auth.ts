import { headers } from "next/headers";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function isAuthenticated() {
  const headersList = await headers();
  const authHeader = headersList.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }

  try {
    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(":");
    
    console.log("--- Auth Debug ---");
    console.log("Received Username:", username);
    console.log("Expected Username:", ADMIN_USERNAME);
    // Don't log full actual password for security in shared logs, but checking equality
    console.log("Password Match:", password === ADMIN_PASSWORD);
    console.log("------------------");

    return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
  } catch (e) {
    return false;
  }
}
