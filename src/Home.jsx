import { useState } from "react";
import Navbar from "./Navbar";
import User from "./User";
import Admin from "./Admin";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState([...mockEmployees]);

  const handleUserClick = () => {
    setSector("Home - User Sector");
  };

  const handleAdminClick = () => {
    setSector("Home - Admin Sector");
  };

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  let changeSector;
  if (sector === "Home - User Sector") {
    changeSector = <User employees={employees} />;
  } else if (sector === "Home - Admin Sector") {
    changeSector = (
      <Admin
        addEmployee={addEmployee}
        employees={employees}
        mockEmployees={mockEmployees}
        setEmployees={setEmployees}
      />
    );
  }

  return (
    <div>
      <Navbar />
      <div className="home-page">
        <h1>Generation Thailand</h1>
        <h2>React - Assessment</h2>
        <h1>{sector}</h1>
        <div>
          <button className="home-button" onClick={handleUserClick}>
            User Home Sector
          </button>
          <button className="home-button" onClick={handleAdminClick}>
            Admin Home Sector
          </button>
        </div>
        {changeSector}
      </div>
    </div>
  );
};

export default Home;
