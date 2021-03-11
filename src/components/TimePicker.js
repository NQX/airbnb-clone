import React from 'react'
import '../style/TimePicker.css'

function TimePicker() {
    return (
        <div>
            <table className="time-table">
                <tbody>
                    <tr className="time-table-row">
                        <td className="time-tile">1 am</td>
                        <td className="time-tile">2 am</td>
                        <td className="time-tile">3 am</td>
                        <td className="time-tile">4 am</td>
                        <td className="time-tile">5 am</td>
                    </tr>
                    <tr className="time-table-row">
                        <td className="time-tile">6 am</td>
                        <td className="time-tile">7 am</td>
                        <td className="time-tile">8 am</td>
                        <td className="time-tile">9 am</td>
                        <td className="time-tile">10 am</td>
                    </tr>
                    <tr className="time-table-row">
                        <td className="time-tile">11 am</td>
                        <td className="time-tile">12 pm</td>
                        <td className="time-tile">1 pm</td>
                        <td className="time-tile">2 pm</td>
                        <td className="time-tile">3 pm</td>
                    </tr>
                    <tr className="time-table-row">
                        <td className="time-tile">4 pm</td>
                        <td className="time-tile">5 pm</td>
                        <td className="time-tile">6 pm</td>
                        <td className="time-tile">7 pm</td>
                        <td className="time-tile">8 pm</td>
                    </tr>
                    <tr className="time-table-row">
                        <td className="time-tile">9 pm</td>
                        <td className="time-tile">10 pm</td>
                        <td className="time-tile">11 pm</td>
                        <td className="time-tile">12 am</td>
                        <td className=""></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TimePicker
