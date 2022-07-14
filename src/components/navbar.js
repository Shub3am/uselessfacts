import react from 'react';


function NavBar (props) {
    return(<div className="flex justify-between items-center bg-navy red">
        <h1 className="ttc">Random Facts</h1>
        <h2 className='tc ttc' >{props.url}</h2>
        </div>)
}

export default NavBar