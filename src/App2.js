import './App.css';
import User from './User'
import App3 from './App3'

const App2 = () => {

    const user1 = new User("Gioele","Marini");
    const user2 = new User("Giovanni","Spina");

    const users = [user1,user2];
  
    return (
        <div>
          
          <App3 users={users} />


        </div>
      );
}

export default App2;