import Dropdown from 'react-bootstrap/Dropdown';

const Dropdowns = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Items
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Tea</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Coffee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdowns;