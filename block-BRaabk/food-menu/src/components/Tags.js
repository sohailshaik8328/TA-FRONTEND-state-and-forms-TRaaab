import React from "react"
import data from "./data.json"
import Card from "./Cards";

class Tags extends React.Component {
    render() {
        return (
        <>
          <section>
              <div className="container">
                  <center>

                      {
                          data.map(menu => <button>{menu.category}</button>)
                      }
                  </center>
              </div>
          </section>
          <section>
              <div className="container">
                  <Card />
              </div>
          </section>

         </>

        )
    }
}

export default Tags;