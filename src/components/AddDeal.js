import React from "react"


class AddDeal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dealName:"",
      date:"",
      isDid: false
    }
  }
  render() {
    return(
        <form>
            <input placeholder="Дело" onChange={(e) => this.setState({dealName: e.target.value})}/>
            <input type="date" onChange={(e) => this.setState({date: e.target.value})}/>
            <label htmlFor="isDid">Сделано?</label>
            <input type="checkbox" id="isDid" onChange={(e) => this.setState({isDid: e.target.checked})}/>
            <button type="button" onClick={()=> this.props.onAdd({
              dealName: this.state.dealName,
              date: `от ${this.state.date}`,
              isDid: this.state.isDid,
            })}>Добавить</button>
        </form>
    )
  }

  
}

export default AddDeal