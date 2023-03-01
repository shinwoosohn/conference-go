import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import React from "react"
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendeeForm from './AttendeeForm';


function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        {/* <ConferenceForm /> */}
        {/* <LocationForm /> */}
        <AttendeeForm />
        {/* <AttendeesList attendees={props.attendees} /> */}
      </div>
    </React.Fragment>
  );
}
export default App;
