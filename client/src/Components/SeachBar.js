
import { Dropdown, Form } from 'react-bootstrap';
import Home from "./Home"; 



const SearchBar = () => {

 return(

<div className="search">
<Dropdown className="d-inline mx-2">
 <Dropdown.Toggle id="dropdown-autoclose-true">
 Show All
</Dropdown.Toggle>

<Dropdown.Menu>
 {/* <Dropdown.Item onClick={}>All Flavors</Dropdown.Item> */}
 <Dropdown.Item onSelect={Home.handleChangeYearRound}>Year-Round Flavors</Dropdown.Item>
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