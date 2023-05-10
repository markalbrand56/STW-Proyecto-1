import Calendar from "./Calendar"

export default {
    title: "IS/Calendar",
    component: Calendar,
    argTypes: {},
}

export const Spain = {
    args: {
        calendar: {
            round: "Round 2",
            dates: "4-6 May",
            year: "2023",
            location: "Valencia, Spain",
            flag: "src/assets/spain.png",
            session: "Free Practice 1 Countdown:",
        },
    },
}

export const Austria = {
    args: {
        calendar: {
            round: "Round 1",
            dates: "27-28 April",
            year: "2023",
            location: "Spielberg, Austria",
            flag: "src/assets/Flag_of_Austria.svg.png",
            session: "Free Practice 1 Countdown:",
        },
    },
}
