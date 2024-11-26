import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorDashboard = () => {
    const [patients, setPatients] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:5000/doctor/appointments')
            .then((res) => setPatients(res.data))
            .catch((err) => console.error(err));
    }, []);

    const formatDateTime = (dateString, timeString) => {
        if (!dateString) return 'Not Set';
        const date = new Date(dateString);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${date.getFullYear()}`;
        const formattedTime = timeString
            ? `${timeString.split(':')[0].padStart(2, '0')}:${timeString.split(':')[1]}`
            : '';
        return `${formattedDate} ${formattedTime}`;
    };

    const handleSetAppointment = (id, date, time) => {
        axios
            .post('http://localhost:5000/doctor/set-appointment', { id, date, time })
            .then(() => alert('Appointment set successfully'))
            .catch((err) => console.error(err));
    };

    const handleAddNextAppointment = (id, date, time) => {
        axios
            .post('http://localhost:5000/doctor/add-next-appointment', { id, date, time })
            .then(() => alert('Next appointment added successfully'))
            .catch((err) => console.error(err));
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    return (
        <div className="flex h-screen">

            {/* Main Content */}
            <main className="flex-1 p-6">
                <section id="patients">
                    <h2 className="text-xl font-semibold mb-4">Patient Appointments</h2>
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Initial Appointment</th>
                                <th className="border p-2">Next Appointment</th>
                                <th className="border p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient.id}>
                                    <td className="border p-2">{patient.name}</td>
                                    <td className="border p-2">
                                        {formatDateTime(patient.appointment_date, patient.appointment_time)}
                                    </td>
                                    <td className="border p-2">
                                        {formatDateTime(patient.next_appointment_date, patient.next_appointment_time)}
                                    </td>
                                    <td className="border p-2 flex flex-col">
                                        <input
                                            type="date"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            className="mb-2 p-2 border"
                                        />
                                        <input
                                            type="time"
                                            value={selectedTime}
                                            onChange={handleTimeChange}
                                            className="mb-2 p-2 border"
                                        />
                                        <button
                                            onClick={() => handleSetAppointment(patient.id, selectedDate, selectedTime)}
                                            className="bg-blue-500 text-white px-2 py-1 rounded mb-2"
                                        >
                                            Set Initial
                                        </button>
                                        <button
                                            onClick={() => handleAddNextAppointment(patient.id, selectedDate, selectedTime)}
                                            className="bg-green-500 text-white px-2 py-1 rounded"
                                        >
                                            Add Next
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default DoctorDashboard;
