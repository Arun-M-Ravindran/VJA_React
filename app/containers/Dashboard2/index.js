/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';


import MainView from '../../components/Maincomponent/Maincomponent';

var divStyle = {
  // backgroundImage: 'url(' + img + ')',
  
  
  minHeight: "681px",
  opacity: 1,
};


var aa = {
  marginLeft:'220px',
  // marginTop: '-20px',
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



export default class Dashboard2 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  
  render() {
    return (
      <div  style={divStyle}>
      <MainView className="nav-bar"/>
        <div style={aa}>
            

              <div className="row m-xs p-t-20">
                

                <div className="col-sm-6">
                    <div className="ibox float-e-margins">
                       <div className="ibox-title">
                            <h5>Overall Efficiency</h5>
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

                <div className="col-md-6">
                  <div className="ibox float-e-margins">
                    <div className="ibox-title">
                      <h5>Leaves</h5>
                    </div>
                                                    <div className="ibox float-e-margins">
                      <table className="table">
                          <tbody>
                          <tr>
                              <td>
                                  <button type="button" className="btn btn-danger m-r-sm">50</button>
                                  Total Leaves
                              </td>
                              <td>
                                  <button type="button" className="btn btn-primary m-r-sm">20</button>
                                  Leaves Taken
                              </td>
                              
                          </tr>
                          <tr>
                              <td>
                                  <button type="button" className="btn btn-info m-r-sm">30</button>
                                  Balance
                              </td>
                              
                              
                          </tr>
                          
                          </tbody>
                      </table>
                  </div>
                        
                  </div>
                </div>
              </div>

              <div className="row m-xs">
                                  
              </div>
 
<div className="row m-xs">

                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <div className="ibox-tools">
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up"></i>
                                    </a>
                                    <a className="classNamedropdown-toggle" data-toggle="dropdown" href="#">
                                        <i className="fa fa-wrench"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-user">
                                        <li><a href="#">Config option 1</a>
                                        </li>
                                        <li><a href="#">Config option 2</a>
                                        </li>
                                    </ul>
                                    <a className="close-link">
                                        <i className="fa fa-times"></i>
                                    </a>
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
                                            <th>Article</th>
                                            <th>Reporting Partner</th>
                                            <th>Time</th>

                                            <th>Date of Allocation</th>
                                            <th>Due Date </th>
                                            
                                            <th>Status</th>
                                            
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>VAS Agencies</td>
                                            
                                            <td>Audit</td>
                                            <td>Anisha</td>
                                            <td>Chacko</td>
                                            <td>0</td>
                                            <td>17-07-2017</td>
                                            <td>17-07-2017</td>
                                            <td className="c-blue">Work in Progress</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>VAS Agencies</td>
                                            
                                            <td>Audit</td>
                                            <td>Anisha</td>
                                            <td>Chacko</td>
                                            <td>0</td>
                                            <td>17-07-2017</td>
                                            <td>17-07-2017</td>
                                            <td className="c-blue">Work in Progress</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>VAS Agencies</td>
                                            
                                            <td>Audit</td>
                                            <td>Anisha</td>
                                            <td>Chacko</td>
                                            <td>0</td>
                                            <td>17-07-2017</td>
                                            <td>17-07-2017</td>
                                            <td className="c-red">Overdue</td>
                                            
                                        </tr>
                                        
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                      </div>
                </div>

            </div>
            
        </div>
        
      </div>
    );
  }
}
