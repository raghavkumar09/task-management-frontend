import { SidebarProvider } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"
import Slider from "./pages/dashboard/Dashboard"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <Slider />
      
    </SidebarProvider>
  )
}
