import React from "react"
import AddDeal from "./AddDeal"
import { IoCloseCircleSharp, IoBuildSharp} from 'react-icons/io5'



class Deal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
    deal = this.props.deal
    render() {
        return(
            <div className="deal">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.deal.id)} className="delete"/>
                <IoBuildSharp onClick={()=> {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="edit"/>
                <h3>{this.deal.dealName}</h3>
                <p>{this.deal.date}</p>
                <b>{this.deal.isDid ? 'Выполнено' : 'Не выполнено'}</b>

                {this.state.editForm && <AddDeal deal = {this.deal} onAdd={this.props.onEdit}/>}
            </div>
        )
    }
}

export default Deal