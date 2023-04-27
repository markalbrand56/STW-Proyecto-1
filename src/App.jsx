import React from "react"
import PlatformNav from "./components/Platform Nav/PlatformNav"
import Navigation from "./components/Navigation/Navigation"
import Calendar from "./components/Calendar/Calendar"
import News from "./components/News/News"

function App() {
    return (
        <div className="App">
            <PlatformNav />
            <Navigation />
            <Calendar />
            <News />
        </div>
    )
}

export default App
