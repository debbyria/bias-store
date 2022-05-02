import NavigationBar from "../components/NavigationBar"
import { Outlet } from "react-router-dom"

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  )
}