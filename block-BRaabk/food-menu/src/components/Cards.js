import React from "react"
import data from "./data.json"

class Card extends React.Component {
    render() {
        return (
          <section>
              <div className="container">
                 <div className="menu_section">
                     <ul className= "flex wrap">
                         {
                             data.map((menu) => {
                                 return(
                                     <li className="flex flex-45 card">
                                         <div>
                                            <img src={menu.img} width="100%" /> 
                                         </div>
                                         <div>
                                             <div className="flex">
                                                <h3>{menu.title}</h3>
                                                <h3>{menu.price}</h3>
                                             </div>
                                             <p className="desc">{menu.desc}</p>
                                         </div>
                                     </li>
                                 )
                             })
                         }
                     </ul>
                 </div>
              </div>
          </section>

        )
    }
}

export default Card;