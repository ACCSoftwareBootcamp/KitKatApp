
import { Dropdown, Form, Button } from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';

const SearchBar = ({setKitKats}) => {

  const [searchTerm, setSearch] = useState(""); //create state for searchbar values


  //selecting flavors from dropdown menu
  const handleChangeDropDown = (event) => {
       if (event === "All Flavors") {
        //rendering all flavors on dropdown selection
         axios.get("http://localhost:8080/getFlavors")
         .then(response => {
           console.log(response.data)
           setKitKats(response.data.message)
       })
         .catch(error => console.log(`Error: ${error}`))
    } else if (event === "Year-Round Flavors") {
        //rendering year round flavors on dropdown selection
    axios.get("http://localhost:8080/getFlavors/yearRound")
    .then(response => {
      console.log(response.data)
      setKitKats(response.data.message)
  })
    .catch(error => console.log(`Error: ${error}`))
  } else if (event === "Regional Flavors") {
   //rendering regional flavors on dropdown selection
    axios.get("http://localhost:8080/getFlavors/regional")
    .then(response => {
      console.log(response.data)
      setKitKats(response.data.message)
  })
    .catch(error => console.log(`Error: ${error}`))
  } else if (event === "Seasonal Flavors") {
    //rendering seasonal flavors on dropdown selection
     axios.get("http://localhost:8080/getFlavors/seasonal")
     .then(response => {
       console.log(response.data)
       setKitKats(response.data.message)
   })
     .catch(error => console.log(`Error: ${error}`))
   }
 }

 const searchButton = (event) => {
     event.preventDefault(); //prevents a page refresh
    //  console.log(searchTerm);
    axios.get("http://localhost:8080/getFlavors", {
      flavor: searchTerm
    })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.log(`Error: ${error}`))
 }

// 1. take in value entered by user
// 2. send request to database
// 3. find matching ID/partial results
// 4. return results of matching ID

//make /search route on server.js to make a post to obtain data being sent from axios. based on that term, query DB

 return(

<div className="search">
<Dropdown className="d-inline mx-2" onSelect={handleChangeDropDown}>
 <Dropdown.Toggle id="dropdown-autoclose-true" >
 Show All
</Dropdown.Toggle>

<Dropdown.Menu >
 <Dropdown.Item eventKey="All Flavors">All Flavors</Dropdown.Item>
 <Dropdown.Item eventKey="Year-Round Flavors">Year-Round Flavors</Dropdown.Item>
 <Dropdown.Item eventKey="Regional Flavors">Regional Flavors</Dropdown.Item>
 <Dropdown.Item eventKey="Seasonal Flavors">Seasonal Flavors</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>

<Form>
<Form.Control onChange={(event) => {
  event.preventDefault();
  setSearch(event.target.value)
} } type="text" size="md" placeholder="Search Kit Kats" />
<Button onClick={searchButton}>Search</Button>
</Form>

</div>
 )
}

export default SearchBar;