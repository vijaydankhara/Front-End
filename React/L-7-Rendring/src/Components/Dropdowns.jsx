import Dropdown from 'react-bootstrap/Dropdown';
import Recips from './Recipi';

const Dropdowns = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Items
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><button className='bg-green-700 text-white hover:bg-orange-500'>Tea</button></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><button className='bg-green-700 text-white hover:bg-orange-500'>Coffee</button></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdowns;