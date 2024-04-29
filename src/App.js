import './App.css';
//components
import Footer from "./Footer";
//assets
import Zero from './assets/emergencyCall.jpg';
import One from './assets/tooBad.jpg';
import Two from './assets/lottery.jpg';
import Three from './assets/goodNewsBadNews.jpg';
import Four from './assets/404.jpg';
import Five from './assets/notMe.jpg';

function App() {
   // get the random Integer number 0 -> 5
const rand1 = Math.floor(Math.random() * 6);

function loadComponent(number) {
  switch (number) {
    case 0:
      return <Message text={"I will be D.D.D. from 13/10 - 17/10. If it's an emergency call 3-3-1-2"} image={Zero}/>;
      case 1:
        return <Message text={"If you need me ... too bad!"} image={One}/>;
        case 2:
          return <Message text={"On vacation. Hoping to win the lottery and never return."} image={Two}/>;
          case 3:
            return <Message text={"The bad news is that I'm out of office, the good news is that I'm out of office."} image={Three}/>;
            case 4:
              return <Message text={"ERROR 404: Employee not found"} image={Four}/>;
              case 5:
                return <Message text={"Contact someone other than me."} image={Five}/>;
            
      default:
          return "default"
  }
}

const Message =({text,image})=>{
  return<div>
  <p>{text}</p>
  <img src={image} height={'300px'} loading="lazy"/>
  </div>
};
  return (
    <div className="App">
       <div className="Body">
        <h1>Oops!</h1>
        {loadComponent(rand1)}
      </div>
 <Footer/>
    </div>
  );
}

export default App;
