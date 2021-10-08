import React from 'react';
import '../stylesheets/App.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header_section">
                <div className="container">
                    <div className="header flex">
                        <section className="header_left">
                            <a className="brand" href="#">Shopping-Cart</a>
                        </section>
                        <section className="header_right">
                            <nav>
                                <ul className="flex">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Cart</a></li>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </div>
            </header>       
        );
    }
}

export default Header;
