import React from 'react'
import '../style/MyCalendar.css'
import moment from 'moment'



function init() {
    console.log('days in month', moment().daysInMonth())
    console.log('weekday', moment().day())
    console.log('days in februar', moment().add(11, 'months').daysInMonth())
    console.log('1. n', moment().add(1, 'months').startOf('month').day())
}

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
                <thead className="calendar-head-container">
                        <td className="calendar-head">Mo</td>
                        <td className="calendar-head">Di</td>
                        <td className="calendar-head">Mi</td>
                        <td className="calendar-head">Do</td>
                        <td className="calendar-head">Fr</td>
                        <td className="calendar-head">Sa</td>
                        <td className="calendar-head">So</td>
                </thead>
                <tbody>
                    <tr className="calendar-row">
                        <td id="date-1" className="calendar-date"></td>
                        <td id="date-2" className="calendar-date"></td>
                        <td id="date-3" className="calendar-date"></td>
                        <td id="date-4" className="calendar-date">1</td>
                        <td id="date-5" className="calendar-date date-range">2</td>
                        <td id="date-6" className="calendar-date date-range">3</td>
                        <td id="date-7" className="calendar-date date-active">4</td>
                    </tr>
                    <tr className="calendar-row">
                        <td id="date-8" className="calendar-date">5</td>
                        <td id="date-9" className="calendar-date">6</td>
                        <td id="date-10" className="calendar-date">7</td>
                        <td id="date-11" className="calendar-date">8</td>
                        <td id="date-12" className="calendar-date">9</td>
                        <td id="date-13" className="calendar-date">10</td>
                        <td id="date-14" className="calendar-date">11</td>
                    </tr>
                    <tr className="calendar-row">
                        <td id="date-15" className="calendar-date">12</td>
                        <td id="date-16" className="calendar-date">13</td>
                        <td id="date-17" className="calendar-date">14</td>
                        <td id="date-18" className="calendar-date">15</td>
                        <td id="date-19" className="calendar-date">16</td>
                        <td id="date-20" className="calendar-date">17</td>
                        <td id="date-21" className="calendar-date">18</td>
                    </tr>
                    <tr className="calendar-row">
                        <td id="date-22" className="calendar-date">19</td>
                        <td id="date-23" className="calendar-date">20</td>
                        <td id="date-24" className="calendar-date">21</td>
                        <td id="date-25" className="calendar-date">22</td>
                        <td id="date-26" className="calendar-date">23</td>
                        <td id="date-27" className="calendar-date">24</td>
                        <td id="date-28" className="calendar-date">25</td>
                    </tr>
                    <tr className="calendar-row">
                        <td id="date-29" className="calendar-date">26</td>
                        <td id="date-30" className="calendar-date">27</td>
                        <td id="date-31" className="calendar-date">28</td>
                        <td id="date-32" className="calendar-date">29</td>
                        <td id="date-33" className="calendar-date">30</td>
                        <td id="date-34" className="calendar-date"></td>
                        <td id="date-35" className="calendar-date"></td>
                    </tr>  
                    <tr className="calendar-row">
                        <td id="date-36" className="calendar-date"></td>
                        <td id="date-37" className="calendar-date"></td>
                        <td id="date-38" className="calendar-date"></td>
                        <td id="date-39" className="calendar-date"></td>
                        <td id="date-40" className="calendar-date"></td>
                        <td id="date-41" className="calendar-date"></td>
                        <td id="date-42" className="calendar-date"></td>
                    </tr>
                    
                    
                </tbody>
            </table>
        </div>
    )
}

export default MyCalendar
