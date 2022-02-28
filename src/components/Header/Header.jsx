import './Header.css';
import { useSelector } from 'react-redux';

function Header() {
  return (
    <div className='Feedback'>
      <header className='Feedback-header'>
        <h1 className='Feedback-title'>Feedback</h1>
        {/* <h4>Don't forget it!</h4> */}
      </header>
    </div>
  );
}

export default Header;
