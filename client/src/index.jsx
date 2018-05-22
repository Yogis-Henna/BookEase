import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon, Row, Input} from 'react-materialize';
import Modal from 'react-modal';
import Terms from './termsConditions.jsx';
import '../dist/style.css';
import axios from 'axios';


class FormDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photoIndex:0,
      isOpen:false,
      images: [],
      restaurantName:"",
      fullGalleryGrid :false,
      place_id: "ChIJFUBxSY6AhYARwOaLV7TsLjw",
      name:"",
      email:"",
      loaction:"",
      time:"",
      date: "",
      travelFee: 10, HourlyRate: 100, totalPrice:200,duration:2, name: "", emailid: "", phone: "", type: "", date: "",
      time: "", endtime: "", location: "", theme: "", parking: "", package: "", artistscount: "",
      
      openTermsPage: false,
      openDetailsPage: true,
      opendepositPage: false,
      showtotalPrice: false
    };
    
    this.clickView = this.clickView.bind(this);
    this.putinDatabase = this.putinDatabase.bind(this);
    this.changeHourlyRate = this.changeHourlyRate.bind(this);
    this.changeTravelFee = this.changeTravelFee.bind(this);
    
  }

  putinDatabase(){
    axios({
      method: 'post',
      url: '/',
      data: {
       name: this.state.name,
  emailid: this.state.email,
  event: this.state.type,
  package: this.state.package,
  duration: this.state.duration
      }
    });
  }

  changeHourlyRate(selection){

    if(selection==1){
      this.setState({HourlyRate: 100, totalPrice:this.state.duration*this.state.HourlyRate+this.state.travelFee, package: "Henna"});
      
    }
    if(selection==2){
      this.setState({HourlyRate: 125, totalPrice:this.state.duration*this.state.HourlyRate+this.state.travelFee , package: "Face Painting"});
      
    }
    if(selection==3){
      this.setState({HourlyRate: 150, totalPrice:this.state.duration*this.state.HourlyRate+this.state.travelFee , package: "Henna and Face Painting Combo"});
      
    }
    
  }
  changeTravelFee(selection){
    if(selection==1){
      this.setState({travelFee: 10, totalPrice:this.state.duration*this.state.HourlyRate+this.state.travelFee});
    }
    if(selection==2){
      this.setState({travelFee: 20, totalPrice:this.state.duration*this.state.HourlyRate+this.state.travelFee});
      
    }
    if(selection==3){
      this.setState({travelFee: 40, totalPrice:this.state.duration*this.state.HourlyRate+this.state.travelFee});
      
    }
  }
  clickView(){
    this.setState({openTermsPage: !this.state.openTermsPage, openDetailsPage: false});
  }
  render(){
    
     const { photoIndex, isOpen, images, restaurantName } = this.state;
         return (
         

      <div>
         {this.state.openTermsPage && <Terms name={this.state.name} date={this.state.date} time={this.state.time} 
         location={this.state.location} totalPrice = {this.state.totalPrice} duration = {this.state.duration}/>}
         {this.state.openDetailsPage && 
          <div>
          <div className= 'agreement'>Easy Booking</div>
          <Row className = 'inputDetails'>
              <Input s={6} label="Full Name" onChange={(event)=>{this.setState({name: event.target.value}) }}/>
              <Input s={6} label="Email" onChange={(event)=>{this.setState({email: event.target.value})}}/>
              <Input s={6} label="Phone Number" onChange={(event)=>{this.setState({phone: event.target.value})}}/>
              <Input s={6} label="Type of Event" onChange={(event)=>{this.setState({type: event.target.value})}}/>
       
              <Input s={6} type='select' defaultValue='1' onChange ={(event)=> this.changeTravelFee(event.target.value)}>
                <option value='0'>City Of Event </option>
                <option value='1' onClick={()=>{e.preventDefault();this.setState({travelFee: 10}); } }>Fremont </option>
                <option value='2' onClick={()=>this.setState({travelFee: 20})}>San Jose</option>
                <option value='3' onClick={()=>this.setState({travelFee: 40})}>San Francisco</option>
              </Input>
              <Input onChange ={(event)=> this.changeHourlyRate(event.target.value)} s={6} type='select' defaultValue='1'>
                <option value='0'>Package Request </option>
                <option value='1'>Henna </option>
                <option value='2'>Face Painting</option>
                <option value='3'>Henna & Face Painting</option>
              </Input >
    

              <Input s={6} label="Date of Event" name='on' type='date' onChange={(e) => this.setState({date: e.target.value})} />

              <Input s={6} label="Start Time of Service required" onChange={(e)=>  this.setState({time: e.target.value})}/>
              <Input s={6} label="Duration required: Minimum 2 hours of service" onChange={(event)=>this.setState({duration: event.target.value})}/> <br/>
              <Input s={6} label="Location of Event: Full Address" />
              <Input s={6} label="Parking Details"/>
              <Input s={6} label="Alternate Phone Number reachable on event day"/>

              <div><br/></div>
              <div className = 'buttonwrap'>
              <Button onClick = {()=> this.setState({showtotalPrice: true, totalPrice:this.state.duration*this.state.HourlyRate+this.state.travelFee })}>Show Total Price</Button> </div>{
                this.state.showtotalPrice && 
                <div className = 'buttonwrap'>Total Price = {this.state.totalPrice} (Hourly Rate: {this.state.HourlyRate} * duration: {this.state.duration} + Travel Fee: {this.state.travelFee})</div>
              }
              
              <div className = 'buttonwrap'>
                <br/>
                <Button waves='light' onClick= {()=>{this.clickView(); this.putinDatabase();}}> Continue to Terms and Conditions </Button>
              </div>
          </Row>
        </div>}
      </div>
    );
  }
} 
  
ReactDOM.render(< FormDetails/>, document.getElementById('app'));
