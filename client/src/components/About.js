import { Header, Segment } from "semantic-ui-react"

const About = () => {

    return (
        <div>
    <Header as='h2' attached='top' style={{textAlign: 'center'}}>
      About
    </Header>
    <Segment attached style={{textAlign: 'center'}}>
      Player Trader is a one stop shop for buying and selling your players, from Ronaldo to Messi, you can buy anyone if your pocket is deep enough.
    </Segment>

    <div style={{display:'flex', justifyContent:'space-between', padding:'30px'}}>
        <div style={{width: '600px'}}>
    <Header as='h2' attached='top' style={{textAlign: 'center'}}>
      Teams
    </Header>
    <Segment attached style={{textAlign: 'center'}}>
      Check out our teams and they players they have for sale, each team also has their Home State and Mascot if you're curious
    </Segment>
    </div>
    <div style={{width: '600px'}}>
    <Header as='h2' attached='top' style={{textAlign: 'center'}}>
      Jobs
    </Header>
    <Segment attached style={{textAlign: 'center'}}>
      Player trader has many jobs accessible to the public, apply as a Goal Keeper or even an Attacking Midfielder if you think you have the skill.
    </Segment>
    </div>
    </div>
    <div style={{display:'flex', justifyContent:'space-between', padding:'30px'}}>
    <div style={{width: '600px'}}>
    <Header as='h2' attached='top' style={{textAlign: 'center'}}>
      Articles
    </Header>
    <Segment attached style={{textAlign: 'center'}}>
      Want the latest news? our articles have you covered, written by world renowned journalists: our articles only give you the straight facts.
    </Segment>
    </div>
    <div style={{width: '600px'}}>
    <Header as='h2' attached='top' style={{textAlign: 'center'}}>
      Players
    </Header>
    <Segment attached style={{textAlign: 'center'}}>
      The reason you're here. check out our world famous players up for trade, you can sort by team or see all the players we have available. 
    </Segment>
    </div>
    </div>

  </div>

    
    )
    }
    
    export default About