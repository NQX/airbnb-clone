import React from 'react'
import '../style/MyCalendar.css'
import moment from 'moment'



let monthArray, daysArray;

function init() {
  
    daysArray = []
    monthArray = []
    const firstWeekdayInMonth = moment().add(1, 'months').startOf('month').day();
    const daysInMonth = moment().add(1, 'months').daysInMonth();

    for(let i = 1; i < firstWeekdayInMonth; i++) {
       daysArray.push('')
    }

    for(let u = 1; u <= daysInMonth; u++) {
        daysArray.push(u)
     }

    let counter = 0;
    for(let x = 0; x < 6; x++) {
        monthArray[x] = []
        for(let y= 1; y <= 7; y++) {
            monthArray[x].push(daysArray[counter] ? daysArray[counter] : '')
            counter++
        }
    }


}



// const today = new Date();
// const todayFormatted = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}}`;
// const daysInWeek = [1,2,3,4,5,6,0]
// //const [selectedDate, setSelectedDate] = useState(today);
// //const selectedMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0)
// //const prevMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0)
// const daysInMonth = selectedMonthLastDate.getDate();
// //const firstDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay()
// const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;
// let prevMonthStartingPoint = prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1;
// let currentMonthCounter = 1;
// let nextMonthCounter = 1;
// const rows = 6;
// const cols = 7;
// const calendarRows = {};



const monthNamesArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


function MyCalendar() {
    init();
    return (
        <div>
            <div className="calendar-controls-container">
                <span className="calendar-arrow-left">&#5176;</span>
                <span id="calendar-title">April 2021</span>
                <span className="calendar-arrow-right">&#5171;</span>
            </div>

            <table>
                <thead>
                    <tr className="calendar-head-container">
                        <th className="calendar-head">Mo</th>
                        <th className="calendar-head">Di</th>
                        <th className="calendar-head">Mi</th>
                        <th className="calendar-head">Do</th>
                        <th className="calendar-head">Fr</th>
                        <th className="calendar-head">Sa</th>
                        <th className="calendar-head">So</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        monthArray.map((key, index) => {
                        return(<tr className="calendar-row">
                            {    
                            key.map(da => {
                                if(da != '') {
                                    return (<td className="calendar-date">{da}</td>)
                                } else {
                                    return (<td className="calendar-blank">{da}</td>)
                                }
                            })
                            }
                        </tr>)
                        
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MyCalendar
