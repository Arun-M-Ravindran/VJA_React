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
          { numer:' 1', name: 'arun',   Position: 'Manager', leaves: 50, taken: '30', balance: '20',},
          { numer: 2,   name: 'acd',    Position: 'Article', leaves: 50, taken: '30', balance: '20',  },
          { numer: 3,   name: 'kgjifj', Position: 'Manager', leaves: 50, taken: '20', balance: '30',},
          { numer: 4,   name: 'oohdj',  Position: 'Manager', leaves: 50, taken: '30', balance: '20',},
          { numer:' 1', name: 'kgjifj', Position: 'Article', leaves: 50, taken: '30', balance: '20',},
          { numer: 2,   name: 'oohdj',  Position: 'Manager', leaves: 50, taken: '30', balance: '20',  },
          { numer: 3,   name: 'kgjifj', Position: 'Article', leaves: 50, taken: '20', balance: '30',},
          { numer: 4,   name: 'oohdj',  Position: 'Manager', leaves: 50, taken: '30', balance: '20',},
          { numer:' 1', name: 'kgjifj', Position: 'Article', leaves: 50, taken: '30', balance: '20',},
          { numer: 2,   name: 'oohdj',  Position: 'Article', leaves: 50, taken: '30', balance: '20',  },
          { numer: 3,   name: 'kgjifj', Position: 'Article', leaves: 50, taken: '20', balance: '30',},
          { numer: 4,   name: 'oohdj',  Position: 'Article', leaves: 50, taken: '30', balance: '20',},
    ];


   
    var listItems = tasks.map(function(item, i) {
      return (
        <tr id={i}>
          <td> {item.numer}</td>
          <td> {item.name}</td>
          <td> {item.Position}</td>
          <td> {item.leaves}</td>
          <td> {item.taken}</td>
          <td> {item.balance}</td>
        </tr>
      );
    });



   


    return (
      <div  style={divStyle}>
      <MainView />


        <Modal show={this.state.show} onClose={this.close.bind(this)} transitionSpeed={100} >
            <div className="row">
              <div className="col-md-4">Total Leaves: 30</div>
              <div className="col-md-4">Leaves Taken: 30</div>
              <div className="col-md-4">Balance: 20</div>
            </div>  

            <div className="ibox-content">
                                
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                      <tr >
                        <th>#</th>
                        <th>Start Date </th>
                        <th>End Date </th>
                        <th>Duration </th>
                      </tr>
                  </thead>
                  <tbody > 
                    <tr>
                      <td> 1</td>
                      <td> 10-07-2017</td>
                      <td> 14-07-2017</td>
                      <td> 4</td>
                    </tr>
                  </tbody>
              </table>
           </div>
           </div>
        </Modal>

      

    


        <div style={aa}>
          

          <div className="ibox float-e-margins m-t-1">
            <div className="ibox-title">
              <div className="row">
              <div className="col-md-2">
                <div className=" form-group"><input type="text" className="form-control" placeholder="Search Manager"/></div>
             </div>
             <div className="col-md-2">
                <div className=" form-group"><input type="text" className="form-control" placeholder="Search Article"/></div>
             </div>
            </div>
            </div>
          </div>

         
          <div className="ibox-content">
                                
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                      <tr >
                        <th>#</th>
                        <th>Name </th>
                        <th>Position </th>
                        <th>Total_Leaves </th>
                        <th>Leaves Taken </th>
                        <th>Balance</th>
                      </tr>
                  </thead>
                  <tbody onClick={this.show.bind(this)}> 
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
