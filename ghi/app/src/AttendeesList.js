import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AttendeesList(props) {
    return (
        <div>

          <Link to="/attendees/new" type="button" className="btn btn-primary btn-md px-4 mt-4 gap-3">Attend a conference</Link>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Conference</th>
              </tr>
            </thead>
            <tbody>
              {props.attendees.map(attendee => (
                  <tr key={attendee.href}>
                    <td>{ attendee.name }</td>
                    <td>{ attendee.conference }</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
    )

}
export default AttendeesList;
