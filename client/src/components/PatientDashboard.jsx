import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientDashboard = () => {
    const [appointmentRequests, setAppointmentRequests] = useState([]);
    const [nextAppointments, setNextAppointments] = useState([]);
    const [newRequest, setNewRequest] = useState('');

    
    useEffect(() => {
        axios.get('http://localhost:5000/patient/appointments/1') 
            .then((res) => {
                setAppointmentRequests(res.data);
                setNextAppointments(res.data); 
            })
            .catch((err) => console.error(err));
    }, []);

    const formatDate = (isoString, timeString) => {
        const date = new Date(isoString);
        const [hours, minutes] = timeString.split(':');
        date.setHours(hours, minutes);
      
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
      
        const formattedTime = `${hours}:${minutes}`;
        return `${day}-${month}-${year} ${formattedTime}`;
      };
      
      const isoDate = "2024-11-29T17:00:00.000Z";
      const time = "14:00:00";
      
      console.log(formatDate(isoDate, time));
      
      

    const handleRequestAppointment = () => {
        axios.post('http://localhost:5000/patient/request-appointment', {
            name: newRequest,
        })
            .then(() => {
                alert('Appointment requested successfully');
                setNewRequest('');
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="flex h-screen">

            {/* Main Content */}
            <main className="flex-1 p-6">
                <section id="request-appointment" className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Request an Appointment</h2>
                    <input
                        type="text"
                        value={newRequest}
                        onChange={(e) => setNewRequest(e.target.value)}
                        placeholder="Enter your name"
                        className="border p-2 w-full mb-4"
                    />
                    <button
                        onClick={handleRequestAppointment}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Submit Request
                    </button>
                </section>

                <section id="appointments">
                </section>
            </main>
        </div>
    );
};

export default PatientDashboard;
