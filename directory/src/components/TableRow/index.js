import React from "react";
import "./style.css";

function TableRow(props) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col"><button id="dropBtn" onClick= {props.onSortChange}><strong>Name</strong><i class="fa fa-caret-down"></i></button></th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {props.employeeInfo.length > 0 ? props.employeeInfo.map((employee) => {
                    <li key={employee.email}>
                        {employee}
                    </li>;
                    return (
                        <tr>
                            <th scope="row"><img src={employee.picture.large} /></th>
                            <td>{employee.name.first + " " + employee.name.last}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }) :
                    <tr>
                        <th scope="row">NA</th>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                    </tr>}
            </tbody>
        </table>
    );
}

export default TableRow;

