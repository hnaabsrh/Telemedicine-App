import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DoctorDashboard from './components/DoctorDashboard';
import PatientDashboard from './components/PatientDashboard';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Header */}
                <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                    <h1 className="text-2xl text-blue-300 font-bold">Telemedicine App</h1>
                </header>

                <div className="flex flex-1">
                    {/* Sidebar */}
                    <aside className="hidden md:block bg-gray-700 text-white w-64 p-4">
                        <nav>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/doctor" className="block py-2 px-4 hover:bg-gray-600 rounded">
                                        Doctor Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/patient" className="block py-2 px-4 hover:bg-gray-600 rounded">
                                        Patient Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="block py-2 px-4 hover:bg-gray-600 rounded">
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 p-4 overflow-y-auto">
                        <Routes>
                            <Route path="/doctor" element={<DoctorDashboard />} />
                            <Route path="/patient" element={<PatientDashboard />} />
                            <Route
                                path="/"
                                element={
                                    <div className="p-6 text-center">
                                        <h2 className="text-2xl font-bold mb-4">
                                            Welcome to Telemedicine App
                                        </h2>
                                    </div>
                                }
                            />
                        </Routes>
                    </main>
                </div>

                {/* Footer */}
                <footer className="bg-gray-800 text-white text-center p-4">
                    <p>© 2024 Telemedicine App. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
