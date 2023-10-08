import React from "react"
import { IoCloseCircleSharp} from 'react-icons/io5'


class Deal extends React.Component{
    deal = this.props.deal
    render() {
        return(
            <div className="deal">
                <IoCloseCircleSharp className="delete"/>
                <h3>{this.deal.dealName}</h3>
                <p>{this.deal.date}</p>
                <b>{this.deal.isDid ? 'Выполнено' : 'Не выполнено'}</b>
            </div>
        )
    }
}

export default Deal