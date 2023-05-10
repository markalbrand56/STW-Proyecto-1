import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Calendar from "./Calendar"

const calendar = {
    round: "Round 1",
    dates: "27-28 April",
    year: "2023",
    location: "Spielberg, Austria",
    flag: "src/assets/Flag_of_Austria.svg.png",
    session: "Free Practice 1 Countdown:",
}

describe("Calendar tests", () => {
    it("renders correctly", () => {
        render(<Calendar calendar={calendar} />)

        screen.debug()
    })
    it("renders details correctly", () => {
        render(<Calendar calendar={calendar} />)

        expect(screen.getByText("Round 1")).toBeInTheDocument()
        expect(screen.getByText("27-28 April")).toBeInTheDocument()
        expect(screen.getByText("2023")).toBeInTheDocument()
        expect(screen.getByText("Spielberg, Austria")).toBeInTheDocument()
        expect(
            screen.getByText("Free Practice 1 Countdown:")
        ).toBeInTheDocument()
    })
})
