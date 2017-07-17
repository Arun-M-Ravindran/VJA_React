  /*
 * Tasks
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Modal, {closeStyle} from 'simple-react-modal'
import { Link, Location } from 'react-router';

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

var PieChart = require("react-chartjs").Pie;
var chartData = [
            {color: "#1c84c6", label: "Profit", value: 20},
            {color: "#ed5565", label: "Actuals", value: 50},
            {color: "#1ab394", label: "Budget", value: 30}
        ];

var chartOptions = []



export default class Tasksummary extends React.Component { // eslint-disable-line react/prefer-stateless-function


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
          { number: 1, client: 'Korath and Sons Financiers', task: 'Audit',Budjet:'2000', Actual: '1100', Profit: '900',Time: '1', Partner: 'Anisha', },
          { number: 2, client: 'ESQUIRE FASHIONS PVT LTD', task: 'Audit',Budjet:'1000', Actual: '100', Profit: '123', Time: '11', Partner: 'Anisha',},
          { number: 3, client: 'Esquire Machine & Tools Pvt Ltd', task: 'Audit',Budjet:'1000', Actual: '', Profit: '',Time: '10', Partner: 'Anisha', },
          { number: 4, client: 'Barakath Garments India Private Limited', task: 'Audit',Budjet:'1000', Actual: '11000', Profit: '1000',Time: '2', Partner: 'Anisha',},
          { number: 5, client: 'SysGlob Software Solutions Pvt Ltd.', task: 'Audit',Budjet:'1000', Actual: '', Profit: '',Time: '5', Partner: 'Anisha',},
          { number: 6, client: 'Tablez Properties Pvt.Ltd', task: 'Audit',Budjet:'1000', Actual: '', Profit: '',Time: '6', Partner: 'Anisha', },
          { number: 7, client: 'Maleth Logistics', task: 'Audit',Budjet:'1000', Actual: '1100', Profit: '0',Time: '4', Partner: 'Anisha',},
          { number: 8, client: 'CENTRAL METALEX', task: 'Audit',Budjet:'11000', Actual: '10000', Profit: '1000',Time: '12', Partner: 'Anisha',},
          { number: 9, client: 'ST JOHN S VISITATION EDUCATIONAL TRUST', task: 'Audit', Budjet:'1000', Actual: '500', Profit: '500',Time: '3', Partner: 'Anisha',},
          { number: 10, client: 'Pegasus Event Management', task: 'Audit',Budjet:'1000', Actual: '', Profit: '',Time: '8', Partner: 'Anisha',},
          { number: 11, client: 'KANJAN JUNGA OWNERS ASSOCIATION', task: 'Audit',Budjet:'1000', Actual: '', Profit: '',Time: '0', Partner: 'Anisha',},
          { number: 12, client: 'Brigade Enterprises Ltd', task: 'Audit',Budjet:'1000', Actual: '11000', Profit: '100',Time: '1', Partner: 'Anisha',},
    ];


   
    var listItems = tasks.map(function(item, i) {
      return (
        <tr id={i}>
          <td > {item.number}</td>
          <td className="c-blue">  {item.client}</td>
          <td> {item.task}</td>
          <td> {item.Partner}</td>
          <td> {item.Budjet}</td>
          <td> {item.Actual}</td>
          <td> {item.Profit}</td>
          <td> {item.Time}</td>
        </tr>
      );
    });

   


    return (
      <div  style={divStyle}>
      <MainView />


      <Modal show={this.state.show} onClose={this.close.bind(this)} transitionSpeed={100}>
        
        <div className="row">
            <div className="col-lg-12">
                <div className="ibox-content">
                    <h2>Tasks</h2>
                    <small>This is example of task list</small>
                    <table className="table table-striped">
                    <thead>
                      <tr >
                        <th className="text-center">#</th>
                        <th className="text-center"> Tasks </th>
                        <th className="text-center">Status</th>
                      </tr>
                      <tr>
                        <td className="text-center"> 1</td>
                        <td className="text-center c-blue"x><Link to="/tasks1">Audit</Link></td>
                        <td className="text-center">Work in Progress</td>
                      </tr>
                      <tr>
                        <td className="text-center"> 1</td>
                        <td className="text-center c-blue"x><Link to="/tasks1">Audit</Link></td>
                        <td className="text-center">Work in Progress</td>
                      </tr>
                      <tr>
                        <td className="text-center"> 1</td>
                        <td className="text-center c-blue"x><Link to="/tasks1">Audit</Link></td>
                        <td className="text-center">Work in Progress</td>
                      </tr>
                  </thead>
                  
              </table>
                </div>
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



          <div className="row  m-xs">
                <div className="col-sm-6">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>Overall Task Summary</h5>
                        </div>

                        <div className="ibox-content">
                            <div className="row">
                              <div className="col-sm-4"><PieChart data={chartData} options={{animateRotate: true}} width="100" height="100"/></div>
                              <div className="col-sm-4">
                                <table className="table">
                                  <tbody>
                                  <tr>
                                      <td>
                                          <button type="button" className="btn btn-danger m-r-sm">50</button>
                                          
                                      </td>
                                      <td>
                                          Actual 50%
                                      </td>
                                      <td>
                                          <button type="button" className="btn btn-primary m-r-sm">30</button>
                                          
                                      </td>
                                      <td>
                                          Budget 30%
                                      </td>
                                      
                                  </tr>
                                  <tr>
                                      <td>
                                          <button type="button" className="btn btn-success m-r-sm">20</button>
                                          
                                      </td>
                                      <td>
                                          Profit 20%
                                      </td>
                                      
                                  </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="ibox float-e-margins">
                       <div className="ibox-title">
                            <h5>Overall Task Efficiency</h5>
                        </div>
                        <div className="ibox-content">
                            <div className="row">
                              <div className="col-sm-4"><PieChart data={chartData} options={{animateRotate: true}} width="100" height="100"/></div>
                              <div className="col-sm-4">
                                <table className="table">
                                  <tbody>
                                  <tr>
                                      <td>
                                          <button type="button" className="btn btn-danger m-r-sm">50</button>
                                          
                                      </td>
                                      <td>
                                          Actual 50%
                                      </td>
                                      <td>
                                          <button type="button" className="btn btn-primary m-r-sm">30</button>
                                          
                                      </td>
                                      <td>
                                          Budget 30%
                                      </td>
                                      
                                  </tr>
                                  <tr>
                                      <td>
                                          <button type="button" className="btn btn-success m-r-sm">20</button>
                                          
                                      </td>
                                      <td>
                                          Efficiency   20%
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
                        <th>Client Name </th>
                        <th>Tasks</th>
                        <th>Partner</th>
                        <th>Budjet</th>
                        <th>Actuals</th>
                        <th>Time </th>
                        <th>Profit</th>
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
