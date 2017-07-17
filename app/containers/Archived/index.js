  /*
 * Tasks
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



export default class Archived extends React.Component { // eslint-disable-line react/prefer-stateless-function


  constructor(){
    super()
    this.state = {
      show: false,
    }
  }
 
  test(){
    console.log(this.state)
  }
  show(){
    this.setState({show: true})
    console.log("Arun", this.state);
    this.test()
  }
 
  close(){
    this.setState({show: false})
  }

  // Since state and props are static,
  // there's no need to re-render this component
  

  

  render() {

    var tasks = [
          { numer:' 1', client: 'VAS hugdvuohjv uohvajdkv', task: 'Audit vjkxv', Partner: 'Sharon Mathew', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17' },
          { numer: 2, client: 'XYZ', task: 'Audit', Partner: 'Chacko', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17' },
          { numer: 3, client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'nidhun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17' },
          { numer: 4, client: 'XYZ', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17' },
          { numer:' 1', client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',},
          { numer: 2, client: 'XYZ', task: 'Audit', Partner: 'Chacko', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17' },
          { numer: 3, client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'nidhun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17' },
          { numer: 4, client: 'XYZ', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17' },
          { numer:' 1', client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17' },
          { numer: 2, client: 'XYZ', task: 'Audit', Partner: 'Chacko', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17' },
          { numer: 3, client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'nidhun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17' },
          { numer: 4, client: 'XYZ', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17' },
    ];


   
    var listItems = tasks.map(function(item, i) {
      return (
        <tr id={i}>
          <td> {item.numer}</td>
          <td> {item.client}</td>
          <td> {item.task}</td>
          <td> {item.Partner}</td>
          <td> {item.Manager}</td>
          <td> {item.Article}</td>
          <td> {item.Time}</td>
          <td> {item.Date_of_Allocation}</td>
          <td> {item.Due_date}</td>
          <td> <i className="fa fa-pencil" aria-hidden="true"></i> </td>
        </tr>
      );
    });

   


    return (
      <div  style={divStyle}>
      <MainView />


      <Modal show={this.state.show} onClose={this.close.bind(this)} transitionSpeed={100} >
        <div className="middle-box text-center animated fadeInDown modal-width">
        <div>
            <h3>Create Task</h3>
            <p>Create and assign your new task</p>
            <form role="form">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Client Name" required=""/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Number" required=""/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Nature" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Estimated Effort in days" required=""/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Due Date" required=""/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Person Responsile" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Assistance from" required=""/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Responsile  Partner" required=""/>
                </div>
                <div className="row text-center">
                  <div className="col-lg-6"><button className="btn btn-primary block full-width m-b" >Save</button></div>
                  <div className="col-lg-6"><button className="btn btn-primary block full-width m-b" >Cancel</button></div>
                </div>

               
            </form>
            <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
        </div>
    </div>
      </Modal>


        <div style={aa}>
          

          <div className="ibox float-e-margins m-t-1">
            <div className="ibox-title">
              <div className="row">
                <div className="col-md-2 text-center"> 
                   <input type="text" className="form-control" placeholder="Search Partner" required=""/>
                  </div>
                <div className="col-md-2 form-group">
                    <input type="text" className="form-control" placeholder="Search Manager" required=""/>
                </div>
                <div className="col-md-2 form-group">
                    <input type="text" className="form-control" placeholder="Search Article" required=""/>
                </div>
                <div className="col-md-2 form-group">
                    <input type="text" className="form-control" placeholder="Search Client" required=""/>
                </div>
                <div className="col-md-2 form-group">
                    <input type="text" className="form-control" placeholder="Search Task" required=""/>
                </div>
                
                  
              </div>
            </div>
          </div>

         
          <div className="m-t-1 ibox-content">
                                
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                      <tr >
                        <th>#</th>
                        <th>Client Name </th>
                        <th>Tasks </th>
                        <th>Partner </th>
                        <th>Manager </th>
                        <th>Article</th>
                        <th>Time</th>
                        <th>Date of Allocation </th>
                        <th>Due Date </th>
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
