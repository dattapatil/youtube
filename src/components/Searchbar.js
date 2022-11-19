import {useState} from 'react';
function Searchbar(props){
   const [searchkeys, setSearchkeys] = useState("");
    const onSearch = (event)=>{
        event.preventDefault();
        props.setSearchbarKey(searchkeys);
    }
   return(

    <nav className="py-3 mb-3 border-bottom bg-light fixed-top">
    <div className="container-fluid d-grid gap-3 align-items-center" style={{gridTemplateColumns:"1fr 5fr"}}>
      <div className="dropdown">
        <a href="https://cdnlogo.com/logo/youtube_452.html" className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
       <img width={50} src="https://cdn.cdnlogo.com/logos/y/92/youtube.svg"/>
        </a>
        <ul className="dropdown-menu text-small shadow" >
          <li><a className="dropdown-item active" href="#" aria-current="page">Overview</a></li>
          <li><a className="dropdown-item" href="#">Inventory</a></li>
          <li><a className="dropdown-item" href="#">Customers</a></li>
          <li><a className="dropdown-item" href="#">Products</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#">Reports</a></li>
          <li><a className="dropdown-item" href="#">Analytics</a></li>
        </ul>
      </div>

      <div className="d-flex align-items-center">
        
      <form className="w-100 me-3 d-flex" role="search">
          <input onChange={(event)=>{
            var value = event.target.value;
            setSearchkeys(value)
          }}
           type="search" className="form-control" placeholder="Search..." aria-label="Search"/>

          <button className='ms-3 btn btn-danger' onClick={onSearch}>Search</button>
        </form>

        <div className="flex-shrink-0 dropdown">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    
   )
}
export default Searchbar;