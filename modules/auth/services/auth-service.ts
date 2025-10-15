import type { User, LoginCredentials, RegisterCredentials, ResetPasswordCredentials } from "../types"

// Mock authentication service - replace with your actual API calls
export class AuthService {
  private static readonly STORAGE_KEY = "auth_user"

  static async login(credentials: LoginCredentials): Promise<User> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock validation
    if (credentials.email && credentials.password) {
      const user: User = {
        id: "1",
        email: credentials.email,
        name: "John Doe",
        avatar: "/diverse-user-avatars.png",
        role: "admin",
        createdAt: new Date(),
      }

      // Store in localStorage for demo purposes
      if (typeof window !== "undefined") {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user))
      }

      return user
    }

    throw new Error("Invalid credentials")
  }

  static async register(credentials: RegisterCredentials): Promise<User> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const user: User = {
      id: "1",
      email: credentials.email,
      name: credentials.name,
      avatar: "/diverse-user-avatars.png",
      role: "user",
      createdAt: new Date(),
    }

    if (typeof window !== "undefined") {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user))
    }

    return user
  }

  static async resetPassword(credentials: ResetPasswordCredentials): Promise<void> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Password reset email sent to:", credentials.email)
  }

  static async logout(): Promise<void> {
    if (typeof window !== "undefined") {
      localStorage.removeItem(this.STORAGE_KEY)
    }
  }

  static getCurrentUser(): User | null {
    if (typeof window === "undefined") return null

    const stored = localStorage.getItem(this.STORAGE_KEY)
    if (!stored) return null

    try {
      return JSON.parse(stored)
    } catch {
      return null
    }
  }
}
