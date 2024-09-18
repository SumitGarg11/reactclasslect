import Age from "./components/Age";
import Employe from "./components/Employe";
import Items from "./components/Items";
import Multilple from "./components/Multilple";
import Name from "./components/Name";
import Parent from "./components/Parent";
import ReactCreate from "./components/ReactCreate";
import Sum from "./components/Sum";
import Teacher from "./components/Teacher";
import UserProfile from "./components/UserProfile";
import { email, name, profilePicture } from "./utils/constant";



function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
      <Items />
      <Name />
      <Parent />
      <Age />
      <Sum />
      <Multilple />
      <Teacher />
      <ReactCreate />
      <UserProfile
         name={name}
         email= {email}
         profilePicture = {profilePicture}
       />
       <Employe />
    </div>
  );
}

export default App;
