
import { Dropdown, Form } from 'react-bootstrap';
import Home from "./Home"; 
import axios from 'axios';


const SearchBar = ({setKitKats}) => {
 
    
  //rendering year round flavors on dropdown selection
  const handleChangeYearRound = (e) => {
    axios.get("http://localhost:8080/getFlavors/yearRound")
    .then(response => {
    
      console.log(response.data)
      setKitKats(response.data.message)
  })
    .catch(error => console.log(`Error: ${error}`))
  }



 return(

<div className="search">
<Dropdown className="d-inline mx-2" onSelect={handleChangeYearRound}>
 <Dropdown.Toggle id="dropdown-autoclose-true" >
 Show All
</Dropdown.Toggle>

<Dropdown.Menu >
 {/* <Dropdown.Item onClick={}>All Flavors</Dropdown.Item> */}
 <Dropdown.Item eventKey="Year-Round Flavors">Year-Round Flavors</Dropdown.Item>
 {/* <Dropdown.Item onClick={}>Regional Flavors</Dropdown.Item> */}
 {/* <Dropdown.Item onClick={}>Seasonal Flavors</Dropdown.Item> */}
</Dropdown.Menu>
</Dropdown>

<Form>
<Form.Control type="text" size="md" placeholder="Search Kit Kats" />
</Form>
</div>
 )
}

export default SearchBar;