  /*
 * Leaves2
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



export default class Leaves2 extends React.Component { // eslint-disable-line react/prefer-stateless-function


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
          { number:' 1',Start_Date: '17-08-2017', End_date: '23-08-2017', Days: '5',  description:'Personal', Status: 'Applied',},
          { number: 2,  Start_Date: '15-07-2017', End_date: '18-07-2016', Days: '3',  description:'Personal', Status: 'Approved',  },
          { number: 3,  Start_Date: '15-07-2017', End_date: '18-07-2016', Days: '3',  description:'Personal', Status: 'Approved',},
          { number: 4,  Start_Date: '15-07-2017', End_date: '18-07-2016', Days: '3',  description:'Personal', Status: 'Approved',},
          { number:' 1',Start_Date: '15-07-2017', End_date: '18-07-2016', Days: '3',  description:'Personal', Status: 'Approved',},
          { number: 2,  Start_Date: '15-07-2017', End_date: '18-07-2016', Days: '3',  description:'Personal', Status: 'Rejected',  },
          { number: 3,  Start_Date: '15-07-2017', End_date: '18-07-2016', Days: '3',  description:'Personal', Status: 'Approved',},
          { number: 4,  Start_Date: '15-07-2017', End_date: '18-07-2016', Days: '3',  description:'Personal', Status: 'Approved',},
          { number:' 1',Start_Date: '15-07-2017', End_date: '18-07-2016', Days: '3',  description:'Personal', Status: 'Approved',},
          { number: 2,  Start_Date: '15-07-2017', End_date: '18-07-2016', Days: '3',  description:'Personal', Status: 'Approved',  },
          { number: 3,  Start_Date: '15-07-2017', End_date: '18-07-2016', Days: '3',  description:'Personal', Status: 'Rejected',},
          { number: 4,  Start_Date: '15-07-2017', End_date: '18-07-2016', Days: '3',  description:'Personal', Status: 'Approved',},
    ];


   
    var listItems = tasks.map(function(item, i) {
      return (
        <tr id={i}>
        <td> {item.number}</td>
          <td> {item.Start_Date}</td>
          <td> {item.End_date}</td>
          <td> {item.Days}</td>
          <td> {item.description}</td>
          <td> {item.Status}</td>
          <td> <i className="fa fa-pencil" aria-hidden="true" ></i> </td>
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
                        <th>Status </th>
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
          

          <div className="row m-xs p-t-20">
                

                <div className="col-sm-12">
                    <div className="ibox float-e-margins">
                       <div className="ibox-title">
                           <h3>Leaves</h3>
                        </div>
                        <div className="ibox-content">
                            <div className="row">
                              <div className="col-sm-4">
                                <table className="table">
                                  <tbody>
                                  <tr>
                                      <td>
                                          <button type="button" className="btn btn-success m-r-sm">50</button>
                                          
                                      </td>
                                      <td>
                                          Total Leaves
                                      </td>
                                      <td>
                                          <button type="button" className="btn btn-primary m-r-sm">30</button>
                                          
                                      </td>
                                      <td>
                                          Leaves Taken
                                      </td>
                                      <td>
                                          <button type="button" className="btn btn-warning m-r-sm">20</button>
                                          
                                      </td>
                                      <td>
                                          Balance
                                      </td>
                                      <td>
                                          <button type="button" className="btn btn-default m-r-sm">Apply Leave</button>
                                          
                                      </td>
                                      
                                  </tr>
                                
                                  </tbody>
                                </table>
                              </div>
                            </div>
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
                        <th>Start_Date </th>
                        <th>End_date </th>
                        <th> No.of Days </th>
                        <th>Description </th>
                        <th>Status</th>
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
