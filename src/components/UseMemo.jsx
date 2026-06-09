import React, { useMemo, useState } from "react";

const initialEmployees = [
  {
    id: 1,
    name: "Rahul Sharma",
    department: "Engineering",
    status: "active",
    salary: 75000,
  },
  {
    id: 2,
    name: "Priya Verma",
    department: "HR",
    status: "inactive",
    salary: 55000,
  },
  {
    id: 3,
    name: "Amit Kumar",
    department: "Engineering",
    status: "active",
    salary: 82000,
  },
  {
    id: 4,
    name: "Neha Singh",
    department: "Marketing",
    status: "active",
    salary: 60000,
  },
  {
    id: 5,
    name: "Rohit Gupta",
    department: "Sales",
    status: "inactive",
    salary: 50000,
  },
  {
    id: 6,
    name: "Anjali Mehta",
    department: "Finance",
    status: "active",
    salary: 70000,
  },
  {
    id: 7,
    name: "Karan Malhotra",
    department: "Engineering",
    status: "active",
    salary: 90000,
  },
  {
    id: 8,
    name: "Sneha Kapoor",
    department: "HR",
    status: "inactive",
    salary: 58000,
  },
  {
    id: 9,
    name: "Vikas Yadav",
    department: "Sales",
    status: "active",
    salary: 65000,
  },
  {
    id: 10,
    name: "Pooja Arora",
    department: "Marketing",
    status: "active",
    salary: 62000,
  },
];
const UseMemo = () => {
  const [theme, setTheme] = useState(false);
  const [employees] = useState(initialEmployees);

  const activeEmployees = useMemo(() => {
    return employees.filter((emp) => emp.status === "active");
  }, [employees]);

  return (
    <div>
      <h1>All active employess right now</h1>
      {activeEmployees?.map((emp) => {
        return (
          <div key={emp?.id}>
            <h3>{emp.name}</h3>
          </div>
        );
      })}
      <button
        onClick={() => {
          setTheme(!theme);
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default UseMemo;
