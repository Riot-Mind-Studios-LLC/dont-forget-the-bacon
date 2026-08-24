// import dependancies
// import components

const LayoutDashboard = () => {
  return (
    <div className="min-h-screen">
      <header>Header</header>
      <main className="grid grid-cols-[280px_1fr]">

        {/* preset panel */}
        <div className="bg-amber-500 w-full h-full">Preset panel</div>

        {/* list panel */}
        <div className="bg-amber-700 w-full h-full">List panel</div>

      </main>
    </div>
  )
}

export default LayoutDashboard;