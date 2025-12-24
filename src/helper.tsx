import Cookies from "js-cookie";

// Define your actual user fields here
interface User {
  id: number;
  name: string;
  email: string;
  [key: string]: unknown; // optional extra fields
}

export const isAuthenticated = (): { user: User; token: string } | null => {
  const token = Cookies.get("token");
  const userStr = Cookies.get("user");

  if (!token || !userStr) return null;

  try {
    const user: User = JSON.parse(userStr);
    return { user, token };
  } catch (error) {
    return null; // invalid cookie data
  }
};
