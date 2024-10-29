export interface BlogPost {
    title: string;
    slug: string;
    description: string;
    category: string;
    date: string;
    content: string;
  }
  
  const blogPosts: Record<string, BlogPost> = {
    "understanding-react-hooks": {
      title: "Understanding the Basics of React Hooks",
      slug: "understanding-react-hooks",
      description: "An introduction to React Hooks and how they can simplify your React components.",
      category: "React",
      date: "2023-06-15",
      content: "React Hooks are a powerful feature introduced in React 16.8. They allow you to use state and other React features without writing a class. This means you can use React without classes. The most commonly used hooks are useState and useEffect.\n\nThe useState hook allows you to add state to functional components. Here's a simple example:\n\n```javascript\nconst [count, setCount] = useState(0);\n```\n\nThe useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.\n\n```javascript\nuseEffect(() => {\n  document.title = `You clicked ${count} times`;\n});\n```\n\nBy using these hooks, you can write more concise and easier-to-understand React code, leading to more maintainable applications."
    },
    "responsive-layouts-tailwind": {
      title: "Building Responsive Layouts with Tailwind CSS",
      slug: "responsive-layouts-tailwind",
      description: "Learn how to create beautiful, responsive layouts quickly using Tailwind CSS utility classes.",
      category: "CSS",
      date: "2023-06-20",
      content: "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML. It provides low-level utility classes that let you build completely custom designs.\n\nOne of the key features of Tailwind is its responsive design system. You can easily create responsive layouts using prefixes like sm:, md:, lg:, and xl:. For example:\n\n```html\n<div class=\"w-full md:w-1/2 lg:w-1/3\">\n  <!-- Content here -->\n</div>\n```\n\nThis div will be full width on small screens, half width on medium screens, and one-third width on large screens.\n\nTailwind also provides a flexible grid system using flexbox. You can create complex layouts with ease:\n\n```html\n<div class=\"flex flex-wrap\">\n  <div class=\"w-full sm:w-1/2 md:w-1/3 lg:w-1/4\">\n    <!-- Card 1 -->\n  </div>\n  <div class=\"w-full sm:w-1/2 md:w-1/3 lg:w-1/4\">\n    <!-- Card 2 -->\n  </div>\n  <!-- More cards -->\n</div>\n```\n\nBy leveraging Tailwind's utility classes, you can rapidly build responsive, custom designs without writing any custom CSS."
    },
    "nextjs-13-app-router": {
      title: "Getting Started with Next.js 13 and App Router",
      slug: "nextjs-13-app-router",
      description: "Explore the new features and improved performance of Next.js 13's App Router.",
      category: "Next.js",
      date: "2023-06-25",
      content: "Next.js 13 introduces a new App Router built on React Server Components. This new routing paradigm offers improved performance and developer experience.\n\nTo get started, create a new Next.js project:\n\n```bash\nnpx create-next-app@latest my-app --typescript\n```\n\nThe new App Router uses a file-system based router similar to the pages directory, but with new file conventions:\n\n- layout.tsx: Shared UI for a segment and its children\n- page.tsx: UI unique to a route\n- loading.tsx: Loading UI\n- error.tsx: Error UI\n- not-found.tsx: Not found UI\n\nHere's a simple example of a page component:\n\n```typescript\nexport default function Page() {\n  return <h1>Hello, Next.js 13!</h1>\n}\n```\n\nThe App Router also introduces new data fetching methods. For example, you can now use async/await in Server Components:\n\n```typescript\nasync function getData() {\n  const res = await fetch('https://api.example.com/data')\n  return res.json()\n}\n\nexport default async function Page() {\n  const data = await getData()\n  return <main>{/* Use data */}</main>\n}\n```\n\nBy leveraging these new features, you can build more performant and maintainable Next.js applications."
    },
    "advanced-typescript": {
      title: "Mastering TypeScript: Advanced Types and Techniques",
      slug: "advanced-typescript",
      description: "Dive deep into TypeScript's advanced features to write more robust and maintainable code.",
      category: "TypeScript",
      date: "2023-06-30",
      content: "TypeScript is a powerful superset of JavaScript that adds optional static typing and other features. In this post, we'll explore some of the more advanced types and techniques that TypeScript offers.\n\nUnion Types:\nUnion types allow a value to be one of several types. For example:\n\n```typescript\nlet result: number | string;\nresult = 10; // OK\nresult = \"hello\"; // Also OK\n```\n\nConditional Types:\nConditional types select one of two possible types based on a condition:\n\n```typescript\ntype CheckNumber<T> = T extends number ? \"Is a number\" : \"Not a number\";\ntype Result = CheckNumber<5>; // \"Is a number\"\n```\n\nMapped Types:\nMapped types allow you to create new types based on old ones:\n\n```typescript\ntype Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};\n\ntype Person = { name: string; age: number };\ntype ReadonlyPerson = Readonly<Person>;\n```\n\nUtility Types:\nTypeScript provides several utility types to facilitate common type transformations:\n\n```typescript\ntype Partial<T> = { [P in keyof T]?: T[P] };\ntype Required<T> = { [P in keyof T]-?: T[P] };\ntype Pick<T, K extends keyof T> = { [P in K]: T[P] };\n```\n\nBy mastering these advanced TypeScript features, you can write more robust and maintainable code, catching more errors at compile-time and improving your overall development experience."
    },
    "rest-api-comment-section": {
      title: "Building a REST API Comment Section with Next.js and MongoDB",
      slug: "rest-api-comment-section",
      description: "Learn how to create a fully functional comment section using Next.js API routes and MongoDB, with a step-by-step guide on installation and implementation.",
      category: "Web Development",
      date: "2023-07-05",
      content: "In this tutorial, we'll walk through the process of building a REST API comment section using Next.js and MongoDB. This powerful combination allows for a seamless integration of backend and frontend, creating a dynamic and interactive comment system for your blog or website.\n\nFirst, set up a new Next.js project:\n\n```bash\nnpx create-next-app@latest my-blog --typescript\ncd my-blog\n```\n\nNext, install necessary dependencies:\n\n```bash\nnpm install mongodb date-fns\n```\n\nCreate a MongoDB Atlas account and set up a new cluster. Add your MongoDB connection string to a .env.local file:\n\n```\nMONGODB_URI=your_mongodb_connection_string_here\n```\n\nCreate a lib/mongodb.ts file for database connection:\n\n```typescript\nimport { MongoClient } from 'mongodb'\n\nif (!process.env.MONGODB_URI) {\n  throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"')\n}\n\nconst uri = process.env.MONGODB_URI\nconst options = {}\n\nlet client\nlet clientPromise: Promise<MongoClient>\n\nif (process.env.NODE_ENV === 'development') {\n  if (!global._mongoClientPromise) {\n    client = new MongoClient(uri, options)\n    global._mongoClientPromise = client.connect()\n  }\n  clientPromise = global._mongoClientPromise\n} else {\n  client = new MongoClient(uri, options)\n  clientPromise = client.connect()\n}\n\nexport default clientPromise\n```\n\nCreate API routes for handling comments in app/api/posts/[postId]/comments/route.ts:\n\n```typescript\nimport { NextResponse } from 'next/server'\nimport clientPromise from '@/lib/mongodb'\n\nexport async function GET(request: Request, { params }: { params: { postId: string } }) {\n  const { postId } = params\n  const client = await clientPromise\n  const db = client.db(\"blogcomments\")\n  const comments = await db.collection('comments').find({ postId }).sort({ createdAt: -1 }).toArray()\n  return NextResponse.json(comments)\n}\n\nexport async function POST(request: Request, { params }: { params: { postId: string } }) {\n  const { postId } = params\n  const { author, text } = await request.json()\n  const client = await clientPromise\n  const db = client.db(\"blogcomments\")\n  const newComment = {\n    postId,\n    author,\n    text,\n    createdAt: new Date()\n  }\n  const result = await db.collection('comments').insertOne(newComment)\n  const insertedComment = {\n    ...newComment,\n    _id: result.insertedId.toString()\n  }\n  return NextResponse.json(insertedComment)\n}\n```\n\nWith these steps, you'll have a fully functional REST API comment section integrated into your Next.js blog. This setup allows for real-time commenting, efficient data storage with MongoDB, and a sleek UI powered by Next.js and React."
    }
  };
  
  export default blogPosts;