//opened gallery grid view with all the photographs of selected restaurant
  // restaurant name on the top, 
  //cross on the top right to close and a scroller bar on the right

import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'react-image-lightbox'
import $ from 'jquery';
import {Button, Icon, Modal} from 'react-materialize';


class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMakeDeposit: false
    }
  }

  
  render() {
    return (
      <div className = "Terms">
      <div className= 'agreement'>Agreement</div>
        <ul>
        <li><i className="material-icons">&#xE87C;</i>Yogis Henna Company contractually agrees to provide entertainment For <span className = 'agreementValues'>{this.props.name}</span>, <span className = 'agreementValues'>{this.props.date}</span>, <span className = 'agreementValues'>{this.props.time}</span>, for the duration of <span className = 'agreementValues'>{this.props.duration}</span> hours at
            Location <span className = 'agreementValues'>{this.props.location}</span></li><br/>
        <li><i className="material-icons">&#xE87C;</i>In exchange <span className = 'agreementValues'>{this.props.name}</span> agrees to pay Yogita Sheth Amount of <span className = 'agreementValues'>{this.props.totalPrice}</span> in check on or before
            the date event</li><br/>
        <li><i className="material-icons">&#xE87C;</i>Breaks: break for each artist of 10 minutes is applicable for 3 hours’ service. For 3 hours to 6 hours
            events, one break of 10 minutes and other of 5 minutes is applicable.</li><br/>
        <li><i className="material-icons">&#xE87C;</i>Setup to be provided by client for each artist at the event: Total 1 Table,2 chairs and a well-lit area for
            our artist. Artists needs to seated close to electrical outlet so that they can plug-in their portable lamps.</li><br/>
        <li><i className="material-icons">&#xE87C;</i>Our entertainment activity involves colors that can cause temporary or permanent stain if goes on
            clothes or other fabrics or materials. Please note that we (Yogis Henna Company, Yogita Sheth or any
            contract artist/artists hired by Yogis Henna) are not liable for any compensation for temporary or
            permanent stain on clients or party guests or other party vendor’s clothes or other materials.</li><br/>

        </ul>
       <input name='terms' type='radio' id='test2' onChange={()=>this.setState({showMakeDeposit:true})} />
       <label htmlFor='test2'>I hereby acknowledge that I have read and understood the above terms and conditions  and I agree to all of the terms and conditions </label>
       { this.state.showMakeDeposit &&
         <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="WL2CSTSP7DNVC"/>
            <div className= "buttonwrap"><Button waves='light' name="submit" alt="PayPal - The safer, easier way to pay online!"> Make Deposit for Final Confirmation </Button></div>
            <div className= "buttonwrap"><input type="image" src="./deposit.jpg" name="submit" alt="PayPal - The safer, easier way to pay online!" onClick = {function(){consol.log("gotoDatabase")}} /></div>
            <img alt=""src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
         </form>  
       }
      
      </div>
    )

  }
}   

class DepositLink extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    

  }
}   




export default Terms;