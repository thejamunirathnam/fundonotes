import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './components/Signup.scss'
import './App.css'
import Signup from './components/Signup'
import SignInpage from './components/SignInpage'
import Forgotmail from './components/Forgotmail';
import Fnamesignup from './components/Fnamesignup';
import Password from './components/Password';
import Forgotpassword from './components/Forgot_Password';
import Dashboard from './home/Home';
import Archive from './home/Archive';
import Editlabels from './home/Editlabels';
import Remainder from './home/Remainder';
import Trash from './home/Trash';


function App() {  
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Signup} />
          <Route path='/Signin' component={SignInpage} />
          <Route path='/Forgot' component={Forgotmail} />
          <Route path='/namesignup' component={Fnamesignup} />
          <Route path='/password' component={Password} />
          <Route path='/forgotpassword' component={Forgotpassword} />
          <Route path='/Dashboard' component={Dashboard} /> 
          <Route path='/Remainder' component={Remainder} />
          <Route path='/Archive' component={Archive} />
          <Route path='/Editlabels' component={Editlabels} />
          <Route path='/Trash' component={Trash} />
        </Switch>
      </div>
    </Router>

  );
}


export default App;