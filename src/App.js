// import logo from './logo.svg';
import './App.css';
import Demo from './demo';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Demo />
      <p>hisgdf</p>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Hello World</Button>
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


