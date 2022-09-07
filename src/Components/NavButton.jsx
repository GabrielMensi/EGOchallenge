import '../Stylesheets/NavButton.scss';


function NavButton({ text, style }) {


  return (
    <button 
    className='nav-button-container model'
    style={style} > 
    { text }
    </button>
  )
}

export default NavButton;