import React from "react"
import Deal from "./Deal"

class Deals extends React.Component{
    render() {
      if(this.props.deals.length>0)
        return(<div>
            {this.props.deals.map((el) => (<Deal key={el.id} deal={el}/>))}
          </div>
        )
      else
        return (<div className="deal">
          <h3>Пользователей нет</h3>
        </div>)
    }
}

export default Deals