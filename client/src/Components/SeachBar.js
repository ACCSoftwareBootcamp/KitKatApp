
import { Dropdown, Form } from 'react-bootstrap';
import axios from 'axios';

const SearchBar = ({setKitKats}) => {
  
  //selecting flavors from dropdown menu
  const handleChangeSelectFlavors = (event) => {
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

 return(

<div className="search">
<Dropdown className="d-inline mx-2" onSelect={handleChangeSelectFlavors}>
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
<Form.Control type="text" size="md" placeholder="Search Kit Kats" />
</Form>
</div>
 )
}

export default SearchBar;