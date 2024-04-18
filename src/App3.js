import './App.css';
import User from './User'


const App3 = ({users}) => {


    return (
        <div>
          <h2>Elementi dell'array:</h2>
          <ul>
            {users.map((element, index) => (
              <li key={index}>{element.lastName + " " +element.firstName}</li>
            ))}
          </ul>
        </div>
      );
}

export default App3;