import React from 'react';
import './App.css';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(   
      <nav class="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
        <a class="navbar-brand text-white">REACT ROUTER DOM</a>
            <Link to="/">Beranda</Link> |
            <Link to="/tentangsaya">Tentang Saya</Link> |
            <Link to="/karya">Karya</Link> |
            <Link to="/kontak">Kontak</Link> <hr />
            <p><Utama /></p>
            </nav>


      // <div>
      //   <h4>hello</h4>
      // </div>
      // <div class="row no-gutters mt-5">
      //   <div class="col-md-2 bg-dark mt-2 pr-3 pt-4">
      //     <ul class="nav flex-column ml-3 mb-5">
      //     </ul> 
      //   </div>
      // </div>
      
        

    );
  }
}

export default App;
