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
    this.deleteDeal = this.deleteDeal.bind(this)
    this.editDeal = this.editDeal.bind(this)
   }

  render() {
    return (<div >
      <Header title = "todo list"/>
        <main>
            <Deals deals={this.state.deals} onEdit={this.editDeal} onDelete={this.deleteDeal}/>
        </main>
        <aside>
          <AddDeal onAdd={this.addDeal}/>
        </aside>
    </div>)
  }


  deleteDeal(id){
    this.setState({
      deals: this.state.deals.filter((el)=> el.id !== id)
    })
  }

  editDeal(deal){
    let allDeals = this.state.deals
    allDeals[deal.id - 1] = deal
    this.setState({deals: []}, () => {
      this.setState({deals: [...allDeals]})
    })
  }

  addDeal(deal){
    const id = this.state.deals.length + 1
    this.setState({deals:[...this.state.deals, {id, ...deal}]})
  }

}
export default App