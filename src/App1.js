import logo from './logo.svg';
import './App.css';
import User from './User'

const App1 = () => {

    const user1 = new User("Marco","Verdi");
    const user2 = new User("Marco","Verdi");

    const users = [user1,user2];
  
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

export default App1;