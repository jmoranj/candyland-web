import SideBar from '@/components/Sidebar/SideBar'
import CandysTable from '@/components/Products/CandysTable'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <main className="flex-1 p-4 bg-white">
        <CandysTable />
      </main>
    </div>
  )
}
