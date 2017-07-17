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



export default class Tasks extends React.Component { // eslint-disable-line react/prefer-stateless-function


  constructor(){
    super()
    this.state = {
      show: false,
      show2: false,
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

  show2(){
    this.setState({show2: true})
    console.log("Arun", this.state);
    this.test()
  }
 
  close2(){
    this.setState({show2: false})
  }

  // Since state and props are static,
  // there's no need to re-render this component
  

  

  render() {

    var tasks = [
          { numer:' 1', client: 'Korath and Sons Financiers', task: 'Audit', Partner: 'Sharon Mathew', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Work in Progress' },
          { numer: 2, client: 'XYZ', task: 'Audit', Partner: 'Chacko', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Freezed' },
          { numer: 3, client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'nidhun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '' ,status: 'Overdue' },
          { numer: 4, client: 'XYZ', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '20-07-17', status: 'Finished' },
          { numer:' 1', client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Work in Progress' },
          { numer: 2, client: 'XYZ', task: 'Audit', Partner: 'Chacko', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Freezed' },
          { numer: 3, client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'nidhun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Overdue' },
          { numer: 4, client: 'XYZ', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '20-07-17', status: 'Finished' },
          { numer:' 1', client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Work in Progress' },
          { numer: 2, client: 'XYZ', task: 'Audit', Partner: 'Chacko', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Freezed' },
          { numer: 3, client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'nidhun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Overdue' },
          { numer: 4, client: 'XYZ', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '20-07-17', status: 'Finished' },
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
          <td v-if="{item.status} != 'Freezed'"><button className="btn btn-info">Freez Task</button></td>
          <td> {item.status}</td>
          <td> <i className="fa fa-pencil" aria-hidden="true" ></i> </td>
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
                    <input type="text" className="form-control" placeholder="Number" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nature" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Estimated Effort in days" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Due Date" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Person Responsile" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Assistance from" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Responsile  Partner" required=""/>
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-control" required=""> <span>Archive Task</span> </input>
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

      <Modal show={this.state.show2} onClose={this.close2.bind(this)} transitionSpeed={100} >
        <div>
            <h3 className="text-center">Update Task Details</h3>
            
            <form role="form">
                <div className="form-group">
                    <label>Client</label>
                    <input type="text" className="form-control" value="Korath and Sons Financiers" placeholder="Client Name" required=""/>
                </div>
                <div className="form-group">
                    <label>Task</label>
                    <input type="text" className="form-control" value="Audit" placeholder="Nature" required=""/>
                </div>
                <div className="form-group">
                    <label>Estimated efforts in days</label>
                    <input type="text" className="form-control" value="1" placeholder="Estimated Effort in days" required=""/>
                </div>
                <div className="form-group">
                    <label>Due Date</label>
                    <input type="text" className="form-control" value="17-07-17" placeholder="Due Date" required=""/>
                </div>
                <div className="form-group">
                    <label>Person Responsile</label>
                    <input type="text" className="form-control" value="Arun" placeholder="Person Responsile" required=""/>
                </div>
                <div className="form-group">
                    <label>Assistance from</label>
                    <input type="text" className="form-control" value="Anisha" placeholder="Assistance from" required=""/>
                </div>
                <div className="form-group">
                    <label>Responsile Partner </label>
                    <input type="text" className="form-control" value="Sharon Mathew" placeholder="Responsile  Partner" required=""/>
                </div>
                <div className="form-group">
                    <label>Budget </label>
                    <input type="text" className="form-control"  placeholder="Enter your Estimated Budjet" required=""/>
                </div>
                <div className="form-group">
                    <label>Actuals </label>
                    <input type="text" className="form-control"  placeholder="Actual Cost" required=""/>
                </div>
                <div className="form-group">
                    <div className="item item-select bg-blue3">
                    <label>Status </label>
                     <select className="select-width btn-default ">
                       <option> Work in Progress </option>
                       <option> Freezed</option>
                       <option> Finished</option>
                       <option> Overdue</option>
                     </select>
                    </div>
                </div>
                <div className="row text-center">
                  <div className="col-lg-6"><button className="btn btn-primary block full-width m-b" >Save</button></div>
                  <div className="col-lg-6"><button className="btn btn-primary block full-width m-b" >Cancel</button></div>
                </div>

               
            </form>
            <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
        </div>
      </Modal>


        <div style={aa}>
          <div className="ibox float-e-margins m-t-1">
            <div className="ibox-title">
              <div className="row">
                <div className="col-md-2 text-center"> 
                  <div className="item item-select bg-blue3">
                   <select className="select-width btn-default text-center">
                     <option>All Tasks</option>
                     <option> My Tasks</option>
                   </select>
                  </div>
                </div>
                <div className="col-md-2 m-t-5px"> Work in Progress</div>
                <div className="col-md-2"> Freezed Tasks</div>
                <div className="col-md-2"> Finished Tasks</div>
                <div className="col-md-2"> Archived Tasks</div>
                <div className="col-md-2"> Overdue Tasks</div>
                  
              </div>
            </div>
          </div>

          <div className="ibox float-e-margins m-t-10">
            <div className="ibox-title">
              <div className="row">
              <div className="col-md-2">
                <div className=" form-group"><input type="text" className="form-control" placeholder="Search Client"/></div>
             </div>
             <div className="col-md-2">
                <div className=" form-group"><input type="text" className="form-control" placeholder="Search Partner"/></div>
             </div>
             <div className="col-md-2">
                <div className=" form-group"><input type="text" className="form-control" placeholder="Search Manager"/></div>
             </div>
             <div className="col-md-2">
                <div className=" form-group"><input type="text" className="form-control" placeholder="Search Article"/></div>
             </div>
             <div className="col-md-2">
                <div className=" form-group"><input type="text" className="form-control" placeholder="Search Article"/></div>
             </div>
             <div className="col-md-2">
                <button className="btn btn-default" onClick={this.show.bind(this)}>Create new Task</button>
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
                        <th>Client Name </th>
                        <th>Tasks </th>
                        <th>Partner </th>
                        <th>Manager </th>
                        <th>Article</th>
                        <th>Time</th>
                        <th>Date of Allocation </th>
                        <th>Due Date </th>
                        <th>Date of completion</th>
                        <th>Status</th>
                      </tr>
                  </thead>
                  <tbody onClick={this.show2.bind(this)}> 
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
