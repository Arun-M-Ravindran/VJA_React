  /*
 * Tasks
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Popover from 'react-simple-popover';

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



export default class Tasks3 extends React.Component { // eslint-disable-line react/prefer-stateless-function


 

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  

  render() {

    var tasks = [
          { numer: 1,   client: 'VAS', task: 'Audit',   Partner: 'Sharon',   Manager: 'Anisha',   Date_of_Allocation:'17-06-17', Due_date: '17-06-17', status: 'Work in Progress' },
          { numer: 2,   client: 'XYZ', task: 'Audit',   Partner: 'Chacko',   Manager: 'Anisha',   Date_of_Allocation:'17-06-17', Due_date: '17-06-17', status: 'Overdue' },
          { numer: 3,   client: 'VAS', task: 'Audit',   Partner: 'Sharon',   Manager: 'Anisha',   Date_of_Allocation:'17-06-17', Due_date: '17-06-17', status: 'Overdue' },
          { numer: 4,   client: 'XYZ', task: 'Audit',   Partner: 'Sharon',   Manager: 'Anisha',   Date_of_Allocation:'17-06-17', Due_date: '17-06-17', status: 'Work in Progress' },
          { numer: 5,   client: 'VAS', task: 'Audit',   Partner: 'Sharon',   Manager: 'Anisha',   Date_of_Allocation:'17-06-17', Due_date: '17-06-17', status: 'Work in Progress' },
          { numer: 6,   client: 'XYZ', task: 'Audit',   Partner: 'Chacko',   Manager: 'Anisha',   Date_of_Allocation:'17-06-17', Due_date: '17-06-17', status: 'Work in Progress' },
          { numer: 7,   client: 'VAS', task: 'Audit',   Partner: 'Sharon',   Manager: 'Anisha',   Date_of_Allocation:'17-06-17', Due_date: '17-06-17', status: 'Overdue' },
          { numer: 8,   client: 'XYZ', task: 'Audit',   Partner: 'Sharon',   Manager: 'Anisha',   Date_of_Allocation:'17-06-17', Due_date: '17-06-17', status: 'Freezed' },
          { numer: 9,   client: 'VAS', task: 'Audit',   Partner: 'Sharon',   Manager: 'Anisha',   Date_of_Allocation:'17-06-17', Due_date: '17-06-17', status: 'Freezed' },
          { numer: 10,  client: 'XYZ', task: 'Audit',   Partner: 'Chacko',   Manager: 'Anisha',   Date_of_Allocation:'17-06-17', Due_date: '17-06-17', status: 'Freezed' },
          { numer: 11,  client: 'VAS', task: 'Audit',   Partner: 'Sharon',   Manager: 'Anisha',   Date_of_Allocation:'17-06-17', Due_date: '17-06-17', status: 'Freezed' },
          { numer: 12,  client: 'XYZ', task: 'Audit',   Partner: 'Sharon',   Manager: 'Anisha',   Date_of_Allocation:'17-06-17', Due_date: '17-06-17', status: 'Freezed ' },
    ];


   
    var listItems = tasks.map(function(item) {
      return (
        <tr>
          <td> {item.numer}</td>
          <td> {item.client}</td>
          <td> {item.task}</td>
          <td> {item.Partner}</td>
          <td> {item.Manager}</td>
          <td> {item.Date_of_Allocation}</td>
          <td> {item.Due_date}</td>
          <td> {item.status}</td>
          <td><button className="btn btn-info">Completed</button></td>
          
        </tr>
      );
    });

   


    return (
      <div  style={divStyle}>
      <MainView />
        <div style={aa}>
          <div className="ibox float-e-margins m-t-1">
            <div className="ibox-title">
              <div className="row">
                <div className="col-md-2 text-center"> All Tasks</div>
                <div className="col-md-2"> Work in Progress</div>
                <div className="col-md-2"> Freezed Tasks</div>
                <div className="col-md-2"> Finished Tasks</div>
                <div className="col-md-2"> Archived Tasks</div>
                <div className="col-md-2"> Overdue   Tasks</div>
              </div>
            </div>
          </div>

         


          <div className="ibox float-e-margins m-t-10">
            <div className="ibox-title">
              <div className="row">
              <div className="col-md-2">
                <div className=" form-group"><input type="text" className="form-control" placeholder="Search Partner"/></div>
             </div>
             <div className="col-md-2">
                <div className=" form-group"><input type="text" className="form-control" placeholder="Search Manager"/></div>
             </div>
             
             <div className="col-md-2">
                <div className=" form-group"><input type="text" className="form-control" placeholder="Search Task"/></div>
             </div>
             
            </div>
            </div>
          </div>


          <div className="ibox-content">
                                
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Client Name </th>
                        <th>Tasks </th>
                        <th>Partner </th>
                        <th>Manager </th>
                        <th>Date of Allocation </th>
                        <th>Due Date </th>
                        <th>Status</th>
                        <th>Date of Completion</th>
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
