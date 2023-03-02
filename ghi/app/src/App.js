import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import React from "react"
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendeeForm from './AttendeeForm';
import PresentationForm from './PresentationForm';
import MainPage from './MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="conferences">
            <Route path="new" element={<ConferenceForm />} />
          </Route>
          <Route path="locations">
            <Route path="new" element={<LocationForm />} />
          </Route>
          <Route path="presentations">
            <Route path="new" element={<PresentationForm />} />
          </Route>
          <Route path="attendees">
            <Route path="new" element={<AttendeeForm />} />
            <Route path="" element={<AttendeesList attendees={props.attendees} />} />
          </Route>
          <Route index element={<MainPage />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
