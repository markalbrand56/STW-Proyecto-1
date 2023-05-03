import React from "react"
import "./App.css"
import PlatformNav from "./components/Platform Nav/PlatformNav"
import Navigation from "./components/Navigation/Navigation"
import Calendar from "./components/Calendar/Calendar"
import News from "./components/News/News"
import RoundDetails from "./components/RoundDetails/RoundDetails"
import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer/Footer"

function App() {
    const calendar = {
        round: "Round 1",
        dates: "27-28 April",
        year: "2023",
        location: "Spielberg, Austria",
        flag: "src/assets/Flag_of_Austria.svg.png",
        session: "Free Practice 1 Countdown:",
    }

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

    const roundDetails = {
        round: "Round 1",
        dates: "27 - 28 April 2023",
        country: "Austria",
        city: "Spielberg",
        fp1: {
            day: "Friday",
            time: "8:15 - 8:55",
        },
        fp2: {
            day: "Friday",
            time: "10:40 - 11:20",
        },
        q1: {
            day: "Friday",
            time: "15:10 - 15:25",
        },
        q2: {
            day: "Friday",
            time: "15:30 - 15:45",
        },
        r1: {
            day: "Saturday",
            time: "10:45 - 11:15",
        },
        r2: {
            day: "Saturday",
            time: "14:05 - 14:25",
        },
        r3: {
            day: "Saturday",
            time: "17:20 - 17:50",
        },
    }

    const cards = {
        card1: "What is F1 academy?",
        card2: "Meet the drivers and teams",
        card3: "Latest news about F1 academy",
    }

    return (
        <div className="App">
            <PlatformNav />
            <Navigation />
            <Calendar calendar={calendar} />
            <News news={news} />
            <RoundDetails roundDetails={roundDetails} />
            <Cards cards={cards} />
            <Footer />
        </div>
    )
}

export default App
