import React from 'react';
import styled from 'styled-components';
import { Segment, Header, Icon, Divider, Image, Grid, Container, List } from 'semantic-ui-react';
import imgA from '../images/stonehengeA.jpg';
import imgB from '../images/mackinac-bridge.jpg';
import imgC from '../images/texas.jpg';
import imgD from '../images/Depaul.png';
import imgT from '../images/utsa.jpg';
import imgP from '../images/proj_manA.jpg';
import imgZ from '../images/binary_header.jpg';
import imgX from '../images/advanced_UI.png';
import imgY from '../images/business_planB.jpg';
import imgH from '../images/gear_icon.png';
import imgJ from '../images/efficiency.jpg';

const AppWrapper = styled.section`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
  margin: 1%;
`
const SectionWrapper = styled.section`
  margin: 2%;
  text-align: center;
  z-index: 2;
`
export const education = (
  <Segment>
    <Header as='h2'>EDUCATION</Header>
    <Segment>
      <List size='huge' as='ul'>
          <List.Item>
            <Image avatar src={imgD} />
            <List.Content>
            <List.Header><a href='https://www.depaul.edu/'>DePaul University</a></List.Header>
              <List.Description><a href='https://business.depaul.edu/academics/graduate/Pages/default.aspx'>Kellstadt Graduate School of Business</a></List.Description>
            </List.Content>
            </List.Item>
          <List.Item></List.Item>
          <List.Item>Master of Business Administration</List.Item>
          <List.Item>December 2012 Graduate</List.Item>
      </List>
    </Segment>
    <Segment>
      <List size='huge' as='ul'>
          <List.Item>
            <Image size='tiny' src={imgT} verticalAlign='bottom' />
            <List.Content>
            <List.Header><a href='https://www.depaul.edu/'>University of Texas at San Antonio</a></List.Header>
            </List.Content>
            </List.Item>
          <List.Item></List.Item>
          <List.Item>Bachelor of Science in Electrical Engineering</List.Item>
          <List.Item>December 1999 Graduate</List.Item>
      </List>
    </Segment>
  </Segment>
);
export const services = (
  <Container>
    <SectionWrapper>
      <Segment basic>
        <Header color='black' as='h1'>
        <Image src={imgH} avatar size='small' verticalAlign='bottom' spaced='right'/>
          PROFESSIONAL SERVICES
        <Image src={imgH} avatar size='small' verticalAlign='bottom' spaced='left' />
        </Header>
      </Segment>
    </SectionWrapper>
    <Grid columns={3} doubling stackable verticalAlign='middle'>
      <Grid.Row stretched>
        <Grid.Column>
          <Segment.Group>
            <Segment>
              <Header as='h3' color='black'>
                <Image src={imgH} avatar size='mini' verticalAlign='bottom'/>
                Web Development
              </Header>
            </Segment>
            <Segment.Group>
              <Segment inverted color='blue'>Responsive Design with React</Segment>
              <Segment inverted color='blue'>Complex Input Using Forms</Segment>
              <Segment inverted color='blue'>AWS Web Deployment</Segment>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column>
          <Image src={imgX} />
        </Grid.Column>
        <Grid.Column>
          <Segment.Group>
            <Segment>
              <Header as='h3' color='black'>
                <Image src={imgH} avatar size='mini' verticalAlign='bottom'/>
                Web/ Mobile Design
              </Header>
            </Segment>
            <Segment.Group>
              <Segment inverted color='blue'>Intelligent Focus for Potential Customers</Segment>
              <Segment inverted color='blue'>Interactive User Experience with Feedback</Segment>
              <Segment inverted color='blue'>Client Design Review and Consult</Segment>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Divider section hidden />
    <Divider section />
    <SectionWrapper>
      <Segment basic>
        <Header color='black' as='h1'>
        <Image src={imgH} avatar size='small' verticalAlign='bottom' spaced='right'/>
          ADJUNCT SERVICES
        <Image src={imgH} avatar size='small' verticalAlign='bottom' spaced='left' />
        </Header>
      </Segment>
    </SectionWrapper>
    <Grid columns={3} doubling stackable verticalAlign='middle'>
      <Grid.Row stretched>
      <Grid.Column>
          <Image src={imgP} />
        </Grid.Column>
        <Grid.Column>
        <Segment.Group>
            <Segment>
              <Header as='h3'>
                <Image src={imgH} avatar size='mini' verticalAlign='bottom' />
                Project Management
              </Header>
            </Segment>
            <Segment.Group>
              <Segment inverted color='blue'>Full Lifecycle Development Projects</Segment>
              <Segment inverted color='blue'>Experience Managing Multi-Million Dollar Projects</Segment>
              <Segment inverted color='blue'>Management Guidelines per Project Management Institute&reg;</Segment>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column>
          <Image src={imgJ} />
        </Grid.Column>
        <Grid.Column>
        <Segment.Group>
            <Segment>
            <Header as='h3' color='black'>
                <Image src={imgH} avatar size='mini' verticalAlign='bottom' />Product Management
              </Header>
            </Segment>
            <Segment.Group>
              <Segment inverted color='blue'>Product Market Strategy and Release</Segment>
              <Segment inverted color='blue'>Experience Managing Large Product Portfolios</Segment>
              <Segment inverted color='blue'>Full Product Direction</Segment>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column>
          <Image src={imgY} />
        </Grid.Column>
        <Grid.Column>
        <Segment.Group>
            <Segment>
            <Header as='h3' color='black'>
                <Image src={imgH} avatar size='mini' verticalAlign='bottom' />Business Consulting
              </Header>
            </Segment>
            <Segment.Group>
              <Segment inverted color='blue'>Market and Strategy Analysis</Segment>
              <Segment inverted color='blue'>Business Strategy and Execution Planning</Segment>
              <Segment inverted color='blue'>Market and Product Implementation</Segment>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <SectionWrapper>
          <Image src={imgZ} />
        </SectionWrapper>
      </Grid.Row>
    </Grid>
  </Container>
)
const square = { width: 275, height: 275 }
const circle = { width: 325, height: 325 }
export const website = (
  <Container fluid>
    <Grid doubling stackable columns={3} >
      <Grid.Column>
        <Segment color='yellow' inverted ><Segment raised color='green' inverted>
          <Header size='medium'>New or Growing Company?</Header>
        </Segment>
        <Segment attached>
          <Header size='small' color='green' >Development Work Built Around Scalability</Header>
          <Header size='small' color='green'>Your Website Can Grow Along with Your Business</Header>
          <Header size='small' color='green'>Pay Only for Today's Needs</Header>
        </Segment></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment raised inverted attached='top'><Segment raised color='teal'>
          <Header color='teal' size='medium'>Design and Focus You Website</Header>
        </Segment>
        <Segment attached>
          <Header size='small'>Design Reviews Always Included</Header>
          <Header size='small'>Logo Design Available</Header>
          <Header size='small'>Custom Web/Mobile Design Theming Available</Header>
        </Segment></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment attached='top'><Segment raised color='black' inverted>
          <Header color='teal' size='medium'>State-Of-The-Art React Development</Header>
        </Segment>
        <Segment attached>
          <Header size='small'>Supported by Facebook, React Continues to Impress</Header>
          <Header size='small'>Used by Top Websites such as Facebook, Uber, Instagram, Tesla, etc</Header>
          <Header size='small'>React Takes User-Interactivity and Experience to the Next Level</Header>
        </Segment></Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top' color='teal' inverted>
          <Header size='medium' >Scalable Cloud Services by AWS</Header>
        </Segment>
        <Segment attached inverted>
          <Header attached='top' size='small' color='teal' >Prefer Using the Amazing AWS Services</Header>
          <Header attached size='small' color='teal'>AWS Focuses on Scalable Solutions</Header>
          <Header attached='bottom' size='small' color='teal'>Service Needs Grow Along with Your Business</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top'><Segment raised>
          <Header size='medium' color='teal' >Honesty and Transparency</Header>
        </Segment>
        <Segment rasied inverted color='teal' >
          <Header attached='top' size='small' color='teal'>Prefer Using the Amazing AWS Services</Header>
          <Header attached size='small' color='teal'>AWS Focuses on Scalable Platforms</Header>
          <Header attached size='small' color='teal'>Service Needs Grow Along with Your Business</Header>
        </Segment></Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top'>
          <Header size='medium' color='teal' >No Added Charge for First Adopter</Header>
        </Segment>
        <Segment attached color='teal' inverted >
          <Header attached='top' size='small' color='teal' >First Adopters to Transferrable Development</Header>
          <Header attached size='small' color='teal'>Applies when Development Content can be Reused</Header>
          <Header attached='bottom' size='small' color='teal'>Any Over Development Charges will be Omitted</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top' inverted>
          <Header size='medium' color='teal' >No Added Charge for First Adopter</Header>
        </Segment>
        <Segment attached color='black' inverted >
          <Header attached='top' size='small' color='black' inverted>First Adopters to Transferrable Development</Header>
          <Header attached size='small' color='black' inverted>Applies when Development Content can be Reused</Header>
          <Header attached='bottom' size='small' color='black' inverted>Any Over Development Charges will be Omitted</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top' inverted>
          <Header size='medium' color='teal' >No Added Charge for First Adopter</Header>
        </Segment>
        <Segment attached color='black' inverted >
          <Header attached='top' size='small' color='teal' inverted>First Adopters to Transferrable Development</Header>
          <Header attached size='small' color='teal' inverted>Applies when Development Content can be Reused</Header>
          <Header attached='bottom' size='small' color='teal' inverted>Any Over Development Charges will be Omitted</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='yellow' inverted circular >
          <Segment raised color='grey' inverted circular>
            <Header size='medium' color='teal'>New or Growing Company?</Header>
            <Header size='small' color='teal' >Development Work Built Around Scalability</Header>
            <Header size='small' color='teal'>Your Website Can Grow Along with Your Business</Header>
            <Header size='small' color='teal'>Pay Only for Today's Needs</Header>
          </Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='yellow' inverted circular>
          <Segment raised circular>
            <Header size='medium'color='green'>New or Growing Company?</Header>
            <Header size='small' color='green' >Development Work Built Around Scalability</Header>
            <Header size='small' color='green'>Your Website Can Grow Along with Your Business</Header>
            <Header size='small' color='green'>Pay Only for Today's Needs</Header>
          </Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='yellow' inverted circular >
          <Segment raised circular>
            <Header size='medium'>New or Growing Company?</Header>
            <Header size='small'>Development Work Built Around Scalability</Header>
            <Header size='small'>Your Website Can Grow Along with Your Business</Header>
            <Header size='small'>Pay Only for Today's Needs</Header>
          </Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='yellow' inverted circular >
          <Segment raised color='black' inverted circular>
            <Header size='medium'>New or Growing Company?</Header>
            <Header size='small'>Development Work Built Around Scalability</Header>
            <Header size='small'>Your Website Can Grow Along with Your Business</Header>
            <Header size='small'>Pay Only for Today's Needs</Header>
          </Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='teal' inverted circular >
          <Segment raised circular>
            <Header size='medium' color='yellow'>New or Growing Company?</Header>
            <Header size='small' color='yellow'>Development Work Built Around Scalability</Header>
            <Header size='small' color='yellow'>Your Website Can Grow Along with Your Business</Header>
            <Header size='small' color='yellow'>Pay Only for Today's Needs</Header>
          </Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='yellow' inverted circular >
          <Segment raised color='black' inverted circular>
            <Header size='medium' color='teal'>New or Growing Company?</Header>
            <Header size='small' color='teal'>Development Work Built Around Scalability</Header>
            <Header size='small' color='teal'>Your Website Can Grow Along with Your Business</Header>
            <Header size='small' color='teal'>Pay Only for Today's Needs</Header>
          </Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='teal' inverted circular >
          <Segment raised circular color='black' inverted>
            <Header size='medium' color='yellow'>New or Growing Company?</Header>
            <Header size='small' color='yellow'>Development Work Built Around Scalability</Header>
            <Header size='small' color='yellow'>Your Website Can Grow Along with Your Business</Header>
            <Header size='small' color='yellow'>Pay Only for Today's Needs</Header>
          </Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted style={square}>
          <Segment color='black' inverted circular style={circle}>
            <Header size='medium'>New or Growing Company?</Header><Segment circular>
            <Header size='small'>Development Work Built Around Scalability</Header>
            <Header size='small'>Your Website Can Grow Along with Your Business</Header>
            <Header size='small'>Pay Only for Today's Needs</Header></Segment>
          </Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted circular>
          <Segment color='teal' inverted circular>
            <Header size='medium' color='yellow' >HELLO ME</Header>
            <Header size='small' color='yellow' >Development Work Built Around Scalability</Header>
            <Header size='small' color='yellow' >Your Website Can Grow Along with Your Business</Header>
            <Header size='small' color='yellow' >Pay Only for Today's Needs</Header>
          </Segment>
        </Segment>
      </Grid.Column>
    </Grid>
  </Container>
)
export const webapps = (
  <Container fluid>
    <Grid doubling stackable columns={4} >
      <Grid.Column>
        <Segment color='yellow' inverted ><Segment raised color='green' inverted>
          <Header size='medium'>New or Growing Company?</Header>
        </Segment>
        <Segment attached>
          <Header size='small' color='green' >Development Work Built Around Scalability</Header>
          <Header size='small' color='green'>Your Website Can Grow Along with Your Business</Header>
          <Header size='small' color='green'>Pay Only for Today's Needs</Header>
        </Segment></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment raised inverted attached='top'><Segment raised color='teal'>
          <Header color='teal' size='medium'>Design and Focus You Website</Header>
        </Segment>
        <Segment attached>
          <Header size='small'>Design Reviews Always Included</Header>
          <Header size='small'>Logo Design Available</Header>
          <Header size='small'>Custom Web/Mobile Design Theming Available</Header>
        </Segment></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment attached='top'><Segment raised color='black' inverted>
          <Header color='teal' size='medium'>State-Of-The-Art React Development</Header>
        </Segment>
        <Segment attached>
          <Header size='small'>Supported by Facebook, React Continues to Impress</Header>
          <Header size='small'>Used by Top Websites such as Facebook, Uber, Instagram, Tesla, etc</Header>
          <Header size='small'>React Takes User-Interactivity and Experience to the Next Level</Header>
        </Segment></Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top' color='teal' inverted>
          <Header size='medium' >Scalable Cloud Services by AWS</Header>
        </Segment>
        <Segment attached inverted>
          <Header attached='top' size='small' color='teal' >Prefer Using the Amazing AWS Services</Header>
          <Header attached size='small' color='teal'>AWS Focuses on Scalable Solutions</Header>
          <Header attached='bottom' size='small' color='teal'>Service Needs Grow Along with Your Business</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top'><Segment raised>
          <Header size='medium' color='teal' >Honesty and Transparency</Header>
        </Segment>
        <Segment rasied inverted color='teal' >
          <Header attached='top' size='small' color='teal'>Prefer Using the Amazing AWS Services</Header>
          <Header attached size='small' color='teal'>AWS Focuses on Scalable Platforms</Header>
          <Header attached size='small' color='teal'>Service Needs Grow Along with Your Business</Header>
        </Segment></Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top'>
          <Header size='medium' color='teal' >No Added Charge for First Adopter</Header>
        </Segment>
        <Segment attached color='teal' inverted >
          <Header attached='top' size='small' color='teal' >First Adopters to Transferrable Development</Header>
          <Header attached size='small' color='teal'>Applies when Development Content can be Reused</Header>
          <Header attached='bottom' size='small' color='teal'>Any Over Development Charges will be Omitted</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top' inverted>
          <Header size='medium' color='teal' >No Added Charge for First Adopter</Header>
        </Segment>
        <Segment attached color='black' inverted >
          <Header attached='top' size='small' color='black' inverted>First Adopters to Transferrable Development</Header>
          <Header attached size='small' color='black' inverted>Applies when Development Content can be Reused</Header>
          <Header attached='bottom' size='small' color='black' inverted>Any Over Development Charges will be Omitted</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top' inverted>
          <Header size='medium' color='teal' >No Added Charge for First Adopter</Header>
        </Segment>
        <Segment attached color='black' inverted >
          <Header attached='top' size='small' color='teal' inverted>First Adopters to Transferrable Development</Header>
          <Header attached size='small' color='teal' inverted>Applies when Development Content can be Reused</Header>
          <Header attached='bottom' size='small' color='teal' inverted>Any Over Development Charges will be Omitted</Header>
        </Segment>
      </Grid.Column>
    </Grid>
  </Container>
)
export const mobileapps = (
  <Container fluid>
    <Grid doubling stackable columns={4} >
      <Grid.Column>
        <Segment color='yellow' inverted ><Segment raised color='green' inverted>
          <Header size='medium'>New or Growing Company?</Header>
        </Segment>
        <Segment attached>
          <Header size='small' color='green' >Development Work Built Around Scalability</Header>
          <Header size='small' color='green'>Your Website Can Grow Along with Your Business</Header>
          <Header size='small' color='green'>Pay Only for Today's Needs</Header>
        </Segment></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment raised inverted attached='top'><Segment raised color='teal'>
          <Header color='teal' size='medium'>Design and Focus You Website</Header>
        </Segment>
        <Segment attached>
          <Header size='small'>Design Reviews Always Included</Header>
          <Header size='small'>Logo Design Available</Header>
          <Header size='small'>Custom Web/Mobile Design Theming Available</Header>
        </Segment></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment attached='top'><Segment raised color='black' inverted>
          <Header color='teal' size='medium'>State-Of-The-Art React Development</Header>
        </Segment>
        <Segment attached>
          <Header size='small'>Supported by Facebook, React Continues to Impress</Header>
          <Header size='small'>Used by Top Websites such as Facebook, Uber, Instagram, Tesla, etc</Header>
          <Header size='small'>React Takes User-Interactivity and Experience to the Next Level</Header>
        </Segment></Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top' color='teal' inverted>
          <Header size='medium' >Scalable Cloud Services by AWS</Header>
        </Segment>
        <Segment attached inverted>
          <Header attached='top' size='small' color='teal' >Prefer Using the Amazing AWS Services</Header>
          <Header attached size='small' color='teal'>AWS Focuses on Scalable Solutions</Header>
          <Header attached='bottom' size='small' color='teal'>Service Needs Grow Along with Your Business</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top'><Segment raised>
          <Header size='medium' color='teal' >Honesty and Transparency</Header>
        </Segment>
        <Segment rasied inverted color='teal' >
          <Header attached='top' size='small' color='teal'>Prefer Using the Amazing AWS Services</Header>
          <Header attached size='small' color='teal'>AWS Focuses on Scalable Platforms</Header>
          <Header attached size='small' color='teal'>Service Needs Grow Along with Your Business</Header>
        </Segment></Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top'>
          <Header size='medium' color='teal' >No Added Charge for First Adopter</Header>
        </Segment>
        <Segment attached color='teal' inverted >
          <Header attached='top' size='small' color='teal' >First Adopters to Transferrable Development</Header>
          <Header attached size='small' color='teal'>Applies when Development Content can be Reused</Header>
          <Header attached='bottom' size='small' color='teal'>Any Over Development Charges will be Omitted</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top' inverted>
          <Header size='medium' color='teal' >No Added Charge for First Adopter</Header>
        </Segment>
        <Segment attached color='black' inverted >
          <Header attached='top' size='small' color='black' inverted>First Adopters to Transferrable Development</Header>
          <Header attached size='small' color='black' inverted>Applies when Development Content can be Reused</Header>
          <Header attached='bottom' size='small' color='black' inverted>Any Over Development Charges will be Omitted</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment attached='top' inverted>
          <Header size='medium' color='teal' >No Added Charge for First Adopter</Header>
        </Segment>
        <Segment attached color='black' inverted >
          <Header attached='top' size='small' color='teal' inverted>First Adopters to Transferrable Development</Header>
          <Header attached size='small' color='teal' inverted>Applies when Development Content can be Reused</Header>
          <Header attached='bottom' size='small' color='teal' inverted>Any Over Development Charges will be Omitted</Header>
        </Segment>
      </Grid.Column>
    </Grid>
  </Container>
)
export const about = (
    <Container fluid>
      <Grid textAlign='center' stackable verticalAlign='top' padded>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Segment basic>
              <Header as='h2' >WELCOME TO MY WEBSITE!</Header>
              <Header as='h4'>Here are a few personal tid-bits about me.</Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3} stretched>
          <Grid.Column>
            <Segment attached>
              <Image src={imgA} floated='right' rounded size='massive' />
              <Header as='h3' >My Theme</Header>
              <Header as='h5'>I chose Stonehenge as my theme. For me, it depicts mans' 
              constant yurn for knowledge. I have always been one that supports the continued, 
              life-long objective of learning and sharing knowledge.
            </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment attached>
              <Image src={imgB} floated='right' rounded size='massive' />
              <Header as='h3' >Where I Live</Header>
              <Header as='h5'>I currently live in Mid-Michigan. Michigan is one of those 
                unique states with vast differences in political, religious and socioeconomical 
                views, however, we all seem to get along. It's not about being able to tolerate, 
                but about caring for one another, regardless. The historical Mackinac Bridge ties 
                the two penninsulas of Michigan together.
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment attached>
              <Image src={imgC} floated='right' rounded size='massive' />
              <Header as='h3' >Where I'm From</Header>
              <Header as='h5' >I was born in Houston, and lived all my early years in the 
              Great State of Texas. Along with the enormouse size of Texas, 
              comes the enormous Heart of Texas. As the only state to be its own country, 
              Texans are very proud to be Texans. It's where everything started for me, and
              where everything will end for me...the open air, ranches, windmills, and the 
              Lone Star.</Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
  export const interests = (
    <div>
      <h3>EDUCATION</h3>
      <p>&nbsp;</p>
      <h4>DePaul University &ndash; Kellstadt Graduate School of Business (December 2012)</h4>
      <h5>Master of Business Administration, Completed March 2013, GPA 3.3</h5>
      <p>&nbsp;</p>
      <h4>University of Texas -San Antonio (December 1999)</h4>
      <h5>Bachelor of Science, Electrical Engineering, Completed December 1999, GPA 3.6 (major)</h5>
      <p>&nbsp;</p>
      <h5>PMP Certification (acquired September 2012) </h5>
    </div>
  );
  export const background = (
    <div>
      <h2>BACKGROUND</h2>
      <h3>General Topics</h3>
  
      <h4>Why I Chose Electrical Engineering</h4>
      <p>I was always interested in how things that we cannot see, basically work.</p>
      <p>&nbsp;</p>
      <h4>Experience Details</h4>
      <p>Talk about all the various responsibilities I have performed</p>
      <p>&nbsp;</p>
      <h4>Computer Interests</h4>
      <p>I have always been very interested in computers and computer programming.</p>
      <p>&nbsp;</p>
    </div>
  );
  export const resume = (
    <div>
      <Header as='h1'>Brian Turner, MBA</Header>
      <Header as='h3'>
        <a href='https://www.bkturner10199@gmail.com' >
          <Icon name='mail' />
          bkturner10199@gmail.com</a>
      </Header>
      <Divider />
      <p>&nbsp;</p>
      <h3>GOAL</h3>
      <p>Earn a Project Management position to utilize my background and drive project success in the Automotive industry</p>
      <p>&nbsp;</p>
      <Divider />
      <h3>KEY PROFESSIONAL MILESTONES</h3>
      <ul>
        <li>Realigned resources to promote lower-risk, high-return products that improved revenue forecasts by more than 30% over the next 5 years</li>
        <li>Created a &ldquo;Customer-First&rdquo; team approach to create value and quality for our customers</li>
        <li>Periodically reported critical project status indicators to upper management and other key project stakeholders</li>
        <li>Lead Project Acceleration workshops to plan work packages, reduce costs, improve timing, identify and plan project risks, increase project transparency, and document all project and project team milestones</li>
        <li>Consistently promoted teambuilding and motivation efforts to strengthen overall working dynamics of the project team</li>
        <li>Integrated measurable efficiency and performance goals into individual project team member reviews to align company goals and project direction to personal career success.</li>
        <li>Drove global development engineering initiatives that lead to significantly pull-ahead technology releases to meet critical business objectives that strategically aligned our products with customer needs</li>
        <li>Lead Project Acceleration workshops to plan work packages, reduce costs, improve timing, identify and plan project risks, increase project transparency, and document all project and project team milestones</li>
        <li>Kept customer satisfaction high by continuously providing on-time deliverables and meeting or exceeding expectations</li>
        <li>Engaged in countless manufacturing process improvement projects to implement higher throughput, create leaner processes, increase safety, and improve overall quality</li>
      </ul>
      <p>&nbsp;</p>
      <Divider />
      <h3>PROFESSIONAL EXPERIENCE</h3>
      <h4>Self-Employed - Business Consultant (February 2018 &ndash; Present) </h4>
      <ul>
        <li>Consult private and governmental entities in the Automotive Technology business field, with emphasis in ADAS</li>
      </ul>
      <p>&nbsp;</p>
      <h3>MeritorWABCO </h3>
      <h4>Product Line Manager (April 2017 &ndash; February 2018) </h4>
      <ul>
        <li>Managed all project managers in the Advanced Safety (ADAS) product portfolio products for North America</li>
        <li>Regularly aligned with ADAS Global Development in Germany to meet the needs of North American customers</li>
        <li>Developed and Maintained an active ADAS Product Portfolio used to communicate to prospective customers</li>
        <li>Updated the yearly strategic and financial portfolio planning for the ADAS group, including sales expectations, CAPEX and OPEX, competition analysis, developmental goals, and marketing needs</li>
        <li>Managed available resources to meet engineering development, project needs, and profit milestones</li>
      </ul>
      <p>&nbsp;</p>
      <h3>Continental Automotive Systems Inc</h3>
      <h4>Project Manager (September 2013 &ndash; April 2017)</h4>
      <ul>
        <li>Managed projects for 4<sup>th</sup>/5<sup>th</sup> Generation ADAS Radar and Biodiesel/Flexfuel sensor products for GM platforms</li>
        <li>Guided the entire project activities from defining customer requirements until production process approval, while continuously monitoring actual project metrics against the expected metrics</li>
        <li>Developed and documented work packages, project scope and schedule, and resource plan for each project.</li>
        <li>Worked with the project team to set clear expectations and goals to manage throughout the project life cycle</li>
      </ul>
      <p>&nbsp;</p>
      <h4>Project Lead Development Engineer (November 2005 &ndash; September 2013) </h4><ul>
        <li>Drove all R&amp;D activity for Daimler UCI2 products that meet all customer hard and soft expectations, including managing DV/PV, customer returns, PCNs and PTNs, and all other significant technical support.</li>
        <li>Interfaced with customers to define requirements and quality expectations for each new project</li>
        <li>Performed Technical Gate Reviews per the Project Life Cycle Process</li>
        <li>Program engineering quote leader for large projects with approximately 0.8 to 1.5 million units lifetime</li>
        <li>Key member of the product base development team for the Infotainment and Connectivity group</li>
        <li>Program Technical Lead for Daimler, GM, and other automotive customer OEM&rsquo;s</li>
      </ul>
      <p>&nbsp;</p>
      <h3>Motorola, Inc</h3>
      <h4> New Product Launch Manager / Manufacturing Engineer (January 2000 &ndash; November 2005)</h4>
      <ul>
        <li>Ensured the operation of existing production processes function as designed and meet required customer needs</li>
        <li>Harnessed ideas into action by learning, proposing, and adding new process technologies, techniques, and systems to make the overall manufacturing process more efficient and increase throughput</li>
        <li>Continuously involved in manufacturing projects using lean principles and statistical techniques, i.e. Six Sigma, etc, to improve safety, quality, and environment</li>
        <li>Worked with development team on launching new product into production by either modifying current processes or creating new processes.</li>
      </ul>
      <p>&nbsp;</p>
      <Divider />
      <h3>EDUCATION</h3>
      <h4>DePaul University &ndash; Kellstadt Graduate School of Business (December 2012)</h4>
      <p>Master of Business Administration</p>
      <p>Completed March 2013</p> 
      <p>GPA 3.3</p>
      <p>&nbsp;</p>
      <h4>University of Texas -San Antonio (December 1999)</h4>
      <p>Bachelor of Science, Electrical Engineering</p>
      <p>Completed December 1999</p> 
      <p>GPA 3.6 (major)</p>
      <p>&nbsp;</p>
      <h5>PMP Certification (acquired September 2012) </h5>
      </div>
  );