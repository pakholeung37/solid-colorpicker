import { lazy } from "solid-js"
import type { RouteDefinition } from "solid-app-router"
import { Main } from "./pages/Main"

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Main,
  },
]
