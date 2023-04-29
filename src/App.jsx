import React from "react"
import "./App.css"
import PlatformNav from "./components/Platform Nav/PlatformNav"
import Navigation from "./components/Navigation/Navigation"
import Calendar from "./components/Calendar/Calendar"
import News from "./components/News/News"

function App() {
    const news = {
        main: {
            img: "src/assets/NewsMainImg.webp",
            category: "INTERVIEW",
            title: "Inaugural Round of F1 Academy Kicks Off at the Red Bull Ring",
        },
        secondary1: {
            img: "src/assets/NewsImg1.webp",
            category: "INTERVIEW",
            title: "Pre-season Testing Concludes With Final Day at the Red Bull Ring",
        },
        secondary2: {
            img: "src/assets/NewsImg2.webp",
            category: "INTERVIEW",
            title: "Day 2 of Pre-Season testing completed at Circuit Paul Ricard",
        },
        secondary3: {
            img: "src/assets/NewsImg3.webp",
            category: "INTERVIEW",
            title: "Day 1 of testing completed in Le Castellet",
        },
    }

    return (
        <div className="App">
            <PlatformNav />
            <Navigation />
            <Calendar />
            <News news={news} />
        </div>
    )
}

export default App
