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

    <div style={{display:'flex', justifyContent:'space-between'}}>
        <div>
    <Header as='h2' attached='top' style={{textAlign: 'center'}}>
      Teams
    </Header>
    <Segment attached style={{textAlign: 'center'}}>
      Check out our teams and they players they have for sale, each team also has their Home State and Mascot if you're curious
    </Segment>
    </div>
    <div>
    <Header as='h2' attached='top' style={{textAlign: 'center'}}>
      Jobs
    </Header>
    <Segment attached style={{textAlign: 'center'}}>
      Player trader has many jobs accessible to the public, apply as a Goal Keeper or even an Attacking Midfielder if you think you have the skill.
    </Segment>
    </div>
    </div>
    <div style={{display:'flex', justifyContent:'space-between'}}>
    <div>
    <Header as='h2' attached='top' style={{textAlign: 'center'}}>
      Teams
    </Header>
    <Segment attached style={{textAlign: 'center'}}>
      Check out our teams and they players they have for sale, each team also has their Home State and Mascot if you're curious
    </Segment>
    </div>
    <div>
    <Header as='h2' attached='top' style={{textAlign: 'center'}}>
      Jobs
    </Header>
    <Segment attached style={{textAlign: 'center'}}>
      Player trader has many jobs accessible to the public, apply as a Goal Keeper or even an Attacking Midfielder if you think you have the skill.
    </Segment>
    </div>
    </div>

  </div>

    
    )
    }
    
    export default About