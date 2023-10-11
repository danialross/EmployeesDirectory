import React from "react";
import Profile from "./components/Profile";
import { useState } from "react";
import Add from "./components/Add";
import Banner from "./components/Banner";

function App() {
  const people = [
    {
      name: "Alice",
      title: "Software Developer",
      img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
      index: 0,
    },
    {
      name: "Bob",
      title: "Graphic Designer",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      index: 1,
    },
    {
      name: "Frank",
      title: "Data Analyst",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      index: 2,
    },
    {
      name: "Susan",
      title: "Product Manager",
      img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      index: 3,
    },
    {
      name: "Eva",
      title: "Web Developer",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      index: 4,
    },
    {
      name: "Charlie",
      title: "UI/UX Designer",
      img: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg",
      index: 5,
    },
    {
      name: "Grace",
      title: "Marketing Specialist",
      img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg",
      index: 6,
    },
    {
      name: "Henry",
      title: "System Administrator",
      img: "https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg",
      index: 7,
    },
    {
      name: "Irene",
      title: "Content Writer",
      img: "https://images.pexels.com/photos/2083751/pexels-photo-2083751.jpeg",
      index: 8,
    },
    {
      name: "Lynn",
      title: "Data Analyst",
      img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
      index: 9,
    },
    {
      name: "Perry",
      title: "CFO",
      img: "https://images.pexels.com/photos/4120661/pexels-photo-4120661.jpeg",
      index: 10,
    },
    {
      name: "Gerome",
      title: "Technical Support",
      img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg",
      index: 11,
    },
  ];

  const [db, setDb] = useState(people);

  const handleEditName = (id, newName) => {
    const updatedPeople = people.map((person) => {
      if (person.index === id) {
        return { ...person, name: newName };
      }
      return person; // Return unmodified objects
    });

    setDb(updatedPeople);
  };

  const handleEditTitle = (id, newTitle) => {
    const updatedPeople = people.map((person) => {
      if (person.index === id) {
        return { ...person, title: newTitle };
      }
      return person; // Return unmodified objects
    });

    setDb(updatedPeople);
  };

  const handleDelete = (id) => {
    const newDB = db.filter((item) => item.index !== id);
    setDb(newDB);
  };

  const handleAdd = (name, title, img) => {
    const newEmployee = {
      name: name,
      title: title,
      img: img,
      index: db.length,
    };

    setDb([...db, newEmployee]);
  };

  return (
    <>
      <Banner>Employees</Banner>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {db.map((person) => {
          return (
            <Profile
              key={person.index}
              person={person}
              handleDelete={handleDelete}
              handleEditName={handleEditName}
              handleEditTitle={handleEditTitle}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "1rem",
        }}
      >
        <Add handleAdd={handleAdd}></Add>
      </div>
    </>
  );
}

export default App;
