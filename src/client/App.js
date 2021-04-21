// import {Router, Route, hashHistory} from 'react-route';
import {Button} from 'antd';
import Header from '../components/header';
import 'antd/dist/antd.css';
import './app.css';
import TurtleImage from '../image/turtle.png';

export default class App extends React.Component {
  render() {
    return (
      <div>
          <Header></Header>
        {<h1>{`Slayer`}</h1>}
        <img src={TurtleImage} alt="turtle" width="80%" />
      </div>
    );
  };
}
ReactDOM.render(<App />, document.getElementById('root'));