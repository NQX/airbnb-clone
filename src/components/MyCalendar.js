import React, { useState, useEffect } from 'react'
import '../style/MyCalendar.css'
import moment from 'moment'




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
        init();

        let tmp = document.getElementById('26')
        console.log('hello', tmp)
    }, [])

    const [currentMonth, setCurrentMonth] = useState(0);
    const [currentYear, setCurrentYear] = useState(0);

    const [monthArray, setMonthArray] = useState([]);
    const [daysArray, setDaysArray] = useState([]);

    const [offset, setOffset] = useState(1);


    const createMonth = (offset) => {
         setCurrentMonth(moment().month() + offset);
         setDaysArray([]);


         const firstWeekdayInMonth = moment().add(offset, 'months').startOf('month').day();
         const daysInMonth = moment().add(offset, 'months').daysInMonth();


         console.log('first weekda', firstWeekdayInMonth)
         console.log('days in mongth', daysInMonth)
    
         for(let i = 1; i < firstWeekdayInMonth; i++) {
         daysArray.push('')
         }
    
        for(let u = 1; u <= daysInMonth; u++) {
            daysArray.push(u)
        }
    
        let monthArray2 = []
        let counter = 0;
        for(let x = 0; x < 6; x++) {
            monthArray2[x] = []
            for(let y= 1; y <= 7; y++) {
                monthArray2[x].push(daysArray[counter] ? daysArray[counter] : '')
                counter++
            }
        }   

        console.log('www', monthArray2)
        setMonthArray(monthArray2)
    }

    const init = () => {
        console.log('init')
        setCurrentYear( moment().year())
        setCurrentMonth(moment().month())
    
        
        createMonth(0);
        
    }



    const nextMonth = () => {
        console.log('click next - offset', offset)
        setOffset(offset + 1);
        setMonthArray([]);
        setDaysArray([])
        createMonth(offset)
    }
    
    const prevMonth = () => {
        console.log('click prev')
        setOffset(offset - 1);
        setMonthArray([]);
        setDaysArray([])
        createMonth(offset)
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
                                    return (<td id={da} key={index} className="calendar-date">{da}</td>)
                                } else {
                                    return (<td key={index} className="calendar-blank">{da}</td>)
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
