import { useQuery } from "convex/react"
export default function Page() {
  const users = useQuery(api.users.getMany);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <p>apps/web</p>
    </div>
  )
}
