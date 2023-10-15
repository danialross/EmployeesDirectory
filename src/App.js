import React from "react";
import Profile from "./components/Profile";
import Add from "./components/Add";
import Banner from "./components/Banner";
import Search from "./components/Search";
import { useState } from "react";
import styled from "styled-components";

//styling
const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1rem;
`;

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

  //for showing the display
  const [db, setDb] = useState(people);

  //uneffected by searching to allow the changing of db then use originalDb to revert back
  const [originalDb, setOriginalDb] = useState(people);

  const handleEditName = (id, newName) => {
    const updatedPeople = people.map((person) => {
      if (person.index === id) {
        return { ...person, name: newName };
      }
      return person; // Return unmodified objects
    });

    setDb(updatedPeople);
    setOriginalDb(updatedPeople);
  };

  const handleEditTitle = (id, newTitle) => {
    const updatedPeople = people.map((person) => {
      if (person.index === id) {
        return { ...person, title: newTitle };
      }
      return person; // Return unmodified objects
    });

    setDb(updatedPeople);
    setOriginalDb(updatedPeople);
  };

  const handleEditImage = (id, newImage) => {
    const updatedPeople = people.map((person) => {
      if (person.index === id) {
        return { ...person, img: newImage };
      }
      return person; // Return unmodified objects
    });

    setDb(updatedPeople);
    setOriginalDb(updatedPeople);
  };

  const handleDelete = (id) => {
    const updatedPeople = db.filter((item) => item.index !== id);
    setDb(updatedPeople);
    setOriginalDb(updatedPeople);
  };

  const handleAdd = (name, title, img) => {
    const newEmployee = {
      name: name,
      title: title,
      img: img,
      index: db.length,
    };

    setDb([...db, newEmployee]);
    setOriginalDb([...db, newEmployee]);
  };

  return (
    <>
      <Banner>Employees</Banner>
      <Search originalDb={originalDb} setter={setDb} />
      <StyledDiv>
        {db.map((person) => {
          return (
            <Profile
              key={person.index}
              person={person}
              handleDelete={handleDelete}
              handleEditName={handleEditName}
              handleEditTitle={handleEditTitle}
              handleEditImage={handleEditImage}
            />
          );
        })}
      </StyledDiv>
      <StyledDiv>
        <Add handleAdd={handleAdd}></Add>
      </StyledDiv>
    </>
  );
}

export default App;
