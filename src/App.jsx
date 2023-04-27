import React from "react"
import PlatformNav from "./components/Platform Nav/PlatformNav"
import Navigation from "./components/Navigation/Navigation"
import Calendar from "./components/Calendar/Calendar"

function App() {
    return (
        <div className="App">
            <PlatformNav />
            <Navigation />
            <Calendar />
        </div>
    )
}

export default App
