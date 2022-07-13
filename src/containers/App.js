import react, {Component} from "react";
import Factsgen from '../components/factsgenerator';
import NavBar from '../components/navbar';
import '../App.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {facts:{dailyfacts: "", randomfacts: ""}}
  }
  async componentDidMount(){
    try {
    const raw_daily_facts = await fetch("https://uselessfacts.jsph.pl/today.json?language=en")
    const raw_random_facts = await fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    const daily_fact = await raw_daily_facts.json()
    const random_fact = await raw_random_facts.json()
    this.setState({facts:{dailyfacts: daily_fact.text, randomfacts: random_fact.text}}) }
    catch (e) {
      this.setState({facts:{dailyfacts: "Attempted Too Many Times", randomfacts: "Attempted Too Many Times"}})
    }
  }
  render() {
  const {dailyfacts, randomfacts} = this.state.facts
  return(<div><NavBar url={dailyfacts}/><Factsgen randomfacts={randomfacts}/></div>)}
}


export default App;