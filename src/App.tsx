import type { Component } from "solid-js"
import { useRoutes } from "solid-app-router"

import { routes } from "./routes"

const App: Component = () => {
  const Route = useRoutes(routes)

  return (
    <main className="p-4">
      <Route />
    </main>
  )
}

export default App
