import { NavBar } from "../";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import enUS from 'date-fns/locale/en-US'
import { addHours, format, parse, startOfWeek, getDay } from "date-fns";

const locales = {
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})
  

const events = [{
    title: 'Birthday',
    notes: 'Go to the store and get a gift',
    start: new Date(),
    end: addHours( new Date(), 1),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'zElias'
    }
}]

export function CalendarPage(){
    return(
        <>

        <NavBar />

        <Calendar
            localizer={localizer}
            events={ events }
            startAccessor="start"
            endAccessor="end"
            style={{ height: 'calc( 100vh - 80px )' }}/>

        </>
    )
}