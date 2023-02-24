import logo from '../images/coffee-beans.svg'
import styled from 'styled-components';

const Wrapper = styled.header`
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;

    img {
        background: black;
    }

    nav {
        width: 23%;
    }

    nav ul {
        display: flex;
        justify-content: space-evenly;
        padding: 0;
    }

    nav ul li {
        list-style: none;
    }
`

const Header = () => {
    return ( 
        <Wrapper>
        <img src={logo} 
             alt="Coffee beans" 
             width={35}
             height={35}
             />

             <nav>
                <ul>
                    <a href="/">
                        <li>Coffee house</li>
                    </a>
                    <a href="/">
                        <li>Our coffee</li>
                    </a>
                    <a href="/">
                        <li>For your pleasure</li>
                    </a>     
                </ul>
             </nav>
        </Wrapper>
     );
}
 
export default Header;