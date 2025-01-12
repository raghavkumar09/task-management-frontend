import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Dashboard() {
  
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-6">
            <div className="backlog bg-gray-300 rounded-xl p-4 border border-gray-200 flex flex-col justify-center items-center w-full">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">Backlog</span>
              </div>
              <span>25 Tasks</span>
            </div>
            <div className="backlog bg-blue-400 rounded-xl p-4 border border-gray-200 flex flex-col justify-center items-center w-full">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">In Progress</span>
              </div>
              <span>25 Tasks</span>
            </div>
            <div className="backlog bg-gray-300 rounded-xl p-4 border border-gray-200 flex flex-col justify-center items-center w-full">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">In Review</span>
              </div>
              <span>25 Tasks</span>
            </div>
            <div className="backlog bg-gray-300 rounded-xl p-4 border border-gray-200 flex flex-col justify-center items-center w-full">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">Completed</span>
              </div>
              <span>25 Tasks</span>
            </div>
            <div className="backlog bg-gray-300 rounded-xl p-4 border border-gray-200 flex flex-col justify-center items-center w-full">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">Overdue</span>
              </div>
              <span>25 Tasks</span>
            </div>
            <div className="backlog bg-red-400 rounded-xl p-4 border border-gray-200 flex flex-col justify-center items-center w-full">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">Failed</span>
              </div>
              <span>25 Tasks</span>
            </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}