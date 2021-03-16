import React, { useState, useEffect } from 'react'
import '../style/MyCalendar.css'
import moment from 'moment'


let curMonth;



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

    useEffect(() => {
        init()
    }, [])

    const [currentMonth, setCurrentMonth] = useState(0);
    const [currentYear, setCurrentYear] = useState(0);

    const [monthArray, setMonthArray] = useState([]);
    const [daysArray, setDaysArray] = useState([]);


    const createMonth = (offset) => {
         setCurrentMonth(moment().month() + offset);
        // setDaysArray([])
         //setMonthArray([])
         const firstWeekdayInMonth = moment().add(offset, 'months').startOf('month').day();
         const daysInMonth = moment().add(offset, 'months').daysInMonth();
    
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

    const init = () => {
        console.log('init')
        setCurrentYear( moment().year())
        setCurrentMonth(moment().month())
    
        //console.log(currentYear, currentMonth)
        
        createMonth(0);
        console.log(monthArray)
        //console.log('aaa',moment().add(-1, 'months').month())
        
    }



    const nextMonth = () => {
        console.log('click next')
        //clearCalendar();
         createMonth(1)
    }
    
    const prevMonth = () => {
        console.log('click prev')
    }
    
    


    return (
        <div>
            <div className="calendar-controls-container">
                <span className="calendar-arrow-left" onClick={() => prevMonth()}>&#5176;</span>
                <span id="calendar-title">{monthNamesArr[currentMonth]} {currentYear}</span>
                <span className="calendar-arrow-right" onClick={() => nextMonth()}>&#5171;</span>
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
                        monthArray && monthArray.map((key, index) => {
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
