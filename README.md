# Front-End: Next.js App

This is the front-end of the Todo App built with Next.js, which interacts with the Express API for handling tasks.

**Features:**

* View a list of tasks with their title, color, and completed status.
* Add, edit, and delete tasks.
* Toggle the completion status of tasks.
* Responsive and clean UI.

**Repository Structure:**

nextjs-tasks-app/
│
├── public/                     # Static files
├── src/
│   ├── app/                    # App-specific files
│   │   ├── components/         # React components
│   │   ├── home/               # Next.js home page
│   │   ├── tasks/              # Next.js tasks pages
│   │   ├── globals.css         # Global CSS styles
│   │   └── layout.tsx          # Layout component for the app
│   ├── lib/                    # Library functions
│   │   ├── constants/          # Constants used in the app
│   │   └── validation/         # Validation functions
│   └── types/                  # TypeScript types
│       └── Task.ts             # Type definition for Task
│
├── .env.local                  # Environment variables
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation

**Setup Instructions:**

1. Clone the repository: `git clone https://github.com/AivazovskiiRoman/nextjs-tasks-app.git`
   - Navigate into the project directory: `cd nextjs-tasks-app`
2. Install dependencies: `npm install`
3. Create a new file named `.env.local` in the root directory and add the following variables: `NEXT_PUBLIC_API_URL=http://localhost:4000/tasks`
4. Run the Development Server: `npm run dev`

The Next.js app should now be running at http://localhost:3000.

**Contributing:**

Contributions are welcome! Please open a pull request with your changes.