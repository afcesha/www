import React from "react"
import Header from "./components/Header"
import Deals from "./components/Deals"
import AddDeal from "./components/AddDeal"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      deals: [
      {
          id: 1,
          dealName: 'Почесать картошку',
          date: 'от 2000-01-24',
          isDid: true
        },
        {
          id: 2,
          dealName: 'Полить лукошко',
          date: 'от 2000-01-24',
          isDid: true
        },
        {
          id: 3,
          dealName: 'Сложить в кошку',
          date: 'от 2000-01-24',
          isDid: false
        }
      ]
    }
    this.addDeal = this.addDeal.bind(this)
   }

  render() {
    return (<div >
      <Header title ="todo list"/>
        <main>
            <Deals deals={this.state.deals}/>
        </main>
        <aside>
          <AddDeal onAdd={this.addDeal}/>
        </aside>
    </div>)
  }

  addDeal(deal){
    const id = this.state.deals.length + 1
    this.setState({deals:[...this.state.deals, {id, ...deal}]})
  }

}
export default App