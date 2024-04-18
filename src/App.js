import { Link,Route,Routes } from 'react-router-dom';
import {Home,AddAcademy,UpdateAcademy,AcademiesList} from './component'


const App = () => {

 
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/academiesList"} className="nav-link">
            Academies List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addAcademy"} className="nav-link">
              Add Academy
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/academiesList" element={<AcademiesList/>} />
          <Route path="/addAcademy" element={<AddAcademy/>} />
          <Route path="/updateAcademy/:code" element={<UpdateAcademy/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
