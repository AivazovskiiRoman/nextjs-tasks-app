export const TASKS_API = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/tasks', // for demo
  endpoints: {
    list: () => TASKS_API.baseUrl,
    detail: (id: string) => `${TASKS_API.baseUrl}/${id}`,
    create: () => TASKS_API.baseUrl,
    update: (id: string) => `${TASKS_API.baseUrl}/${id}`,
    delete: (id: string) => `${TASKS_API.baseUrl}/${id}`,
  },
} as const;
