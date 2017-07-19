  /*
 * Leaves
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Modal, {closeStyle} from 'simple-react-modal'

import H1 from 'components/H1';
import messages from './messages';
import MainView from '../../components/Maincomponent/Maincomponent';

var divStyle = {
  // backgroundImage: 'url(' + img + ')',
  
  
  minHeight: "681px",
  opacity: 1,
};

var aa = {
  marginLeft:'220px',
  marginTop: '-20px',
  background: "#e7eaec",
  minHeight: "681px",
}



export default class Leaves extends React.Component { // eslint-disable-line react/prefer-stateless-function


  constructor(){
    super()
    this.state = {
      show: false,
    }
  }

  show(){
    this.setState({show: true})
  }
 
  close(){
    this.setState({show: false})
  }
 
  

  // Since state and props are static,
  // there's no need to re-render this component
  

  

  render() {

    var tasks = [
          { numer: 1,  name: 'arun',   Position: 'Manager', start: '18-07-2017', end: '21-07-2017', balance: '20', days: 3, description: 'personal'},
          { numer: 2,  name: 'acd',    Position: 'Article', start: '18-07-2017', end: '21-07-2017', balance: '20', days: 3, description: 'personal'  },
          { numer: 3,  name: 'kgjifj', Position: 'Manager', start: '18-07-2017', end: '21-07-2017', balance: '30', days: 3, description: 'personal'},
          { numer: 4,  name: 'oohdj',  Position: 'Manager', start: '18-07-2017', end: '21-07-2017', balance: '20', days: 3, description: 'personal'},
          { numer: 5,  name: 'kgjifj', Position: 'Article', start: '18-07-2017', end: '21-07-2017', balance: '20', days: 3, description: 'personal'},
          { numer: 6,  name: 'oohdj',  Position: 'Manager', start: '18-07-2017', end: '21-07-2017', balance: '20', days: 3, description: 'personal'  },
          { numer: 7,  name: 'kgjifj', Position: 'Article', start: '18-07-2017', end: '21-07-2017', balance: '30', days: 3, description: 'personal'},
          { numer: 8,  name: 'oohdj',  Position: 'Manager', start: '18-07-2017', end: '21-07-2017', balance: '20', days: 3, description: 'personal'},
          { numer: 9,  name: 'kgjifj', Position: 'Article', start: '18-07-2017', end: '21-07-2017', balance: '20', days: 3, description: 'personal'},
          { numer: 10, name: 'oohdj',  Position: 'Article', start: '18-07-2017', end: '21-07-2017', balance: '20', days: 3, description: 'personal'  },
          { numer: 11, name: 'kgjifj', Position: 'Article', start: '18-07-2017', end: '21-07-2017', balance: '30', days: 3, description: 'personal'},
          { numer: 12, name: 'oohdj',  Position: 'Article', start: '18-07-2017', end: '21-07-2017', balance: '20', days: 3, description: 'personal'},
    ];


   
    var listItems = tasks.map(function(item, i) {
      return (
        <tr id={i}>
          <td> {item.numer}</td>
          <td> {item.name}</td>
          <td> {item.Position}</td>
          <td> {item.start}</td>
          <td> {item.end}</td>
          <td> {item.balance}</td>
          <td> {item.days}</td>
          <td> {item.description}</td>
          <td> <button className="btn btn-success">Accept</button>  <button className="btn btn-success">Reject</button> <button className="btn btn-danger">History</button></td>
        </tr>
      );
    });



   


    return (
      <div  style={divStyle}>
      <MainView />

        <div style={aa}>
          

            

         
          <div className="ibox-content m-t-1">
                                
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                      <tr >
                        <th>#</th>
                        <th>Name </th>
                        <th>Position </th>
                        <th>Start Date </th>
                        <th>End Date </th>
                        <th>Balance</th>
                        <th>No.of Days</th>
                        <th>Description</th>

                      </tr>
                  </thead>
                  <tbody> 
                    {listItems}
                  </tbody>
              </table>
          </div>
        </div>
      </div>
      </div>
    );
  }


  
}
