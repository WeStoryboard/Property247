import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloadfffffff.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



// //************************  GET EVENTS FROM HTML  *********************************** */
// const phoneNo = document.getElementById('phone-no');
// const email = document.getElementById('email');


// //**********************************  VALIDATIONS   *************************** */
// const validation = () => {
//   let phoneVal = /^[0-9]+$/;
//   let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// //                                 for phone number

//   if(!phoneVal.test(phoneNo.value)){
//     alert('Wrong Input OR field is empty');
//     return false;
//   }

// //                                 for email 
//   if(!emailVal.test(email.value)){
//     alert('Wrong Input OR field is empty');
//     return false;
//   }

//   return true;
// }


