import type { User } from "../types"

export class UserService {
  static async getUsers(): Promise<User[]> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    return [
      {
        id: "1",
        name: "Sarah Johnson",
        email: "sarah.j@company.com",
        role: "admin",
        status: "active",
        joinedAt: new Date("2024-01-15"),
      },
      {
        id: "2",
        name: "Michael Chen",
        email: "m.chen@company.com",
        role: "manager",
        status: "active",
        joinedAt: new Date("2024-02-20"),
      },
      {
        id: "3",
        name: "Emily Rodriguez",
        email: "emily.r@company.com",
        role: "user",
        status: "active",
        joinedAt: new Date("2024-03-10"),
      },
      {
        id: "4",
        name: "David Kim",
        email: "d.kim@company.com",
        role: "user",
        status: "inactive",
        joinedAt: new Date("2024-01-05"),
      },
      {
        id: "5",
        name: "Jessica Taylor",
        email: "j.taylor@company.com",
        role: "manager",
        status: "active",
        joinedAt: new Date("2024-02-28"),
      },
    ]
  }
}
