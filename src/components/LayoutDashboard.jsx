// import dependancies
// import components
import PresetPanel from "./PresetPanel";

const LayoutDashboard = () => {
  return (
    <div className="min-h-screen">
      <header>Header</header>
      <main className="grid grid-cols-[280px_1fr]">

        {/* preset panel */}
        <PresetPanel />

        {/* list panel */}
        <div className="bg-amber-700 w-full h-full">List panel</div>

      </main>
    </div>
  )
}

export default LayoutDashboard;