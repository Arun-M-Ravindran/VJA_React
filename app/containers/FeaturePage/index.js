/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
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
            {color: "blue", label: "Profit", value: 20},
            {color: "red", label: "Actuals", value: 50},
            {color: "green", label: "Budget", value: 30}
        ];

var chartOptions = []

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }



  render() {
    return (
      <div  style={divStyle}>
        <MainView />
        <div style={aa}>

        <div className="row">
        <div className="col-lg-12">
        <div className="ibox float-e-margins">
            <div className="ibox-title">
            <div className="row">
        <div className="col-md-2">
            <div className="dropdown m-l-xs p-t-20">
              <div className="item item-select bg-blue3">
             <select className="select-width btn-default ">
               <option> -- Select Partner -- </option>
               <option> Partner 1</option>
               <option> Partner 2</option>
               <option> Partner 3</option>
               <option> Partner 4</option>
             </select>

          </div>
            </div>
            </div>
            <div className="col-md-2">
            <div className=" m-l-xs p-t-20">
              <div className="item item-select bg-blue3">
             <select className="select-width btn-default ">
               <option> -- Select Manager -- </option>
               <option> Manager1</option>
               <option> Manager2</option>
               <option> Manager3</option>
               <option> Manager4</option>
             </select>

          </div>

            </div>
            </div>
            <div className="col-md-2">
            <div className="m-l-xs p-t-20">
              <div className="item item-select bg-blue3">
             <select className="select-width btn-default ">
               <option> -- Select Article -- </option>
               <option> Article 1</option>
               <option> Article 2</option>
               <option> Article 3</option>
               <option> Article 4</option>
             </select>

          </div>
            </div>
            </div>
            <div className="col-md-2 p-t-20 m-l-xs">
              <div className=" form-group"><input type="text" className="form-control" id="usr" placeholder="Search task"/></div>
             </div>
             <div className="col-md-3 p-t-20">
              Email : sample@gmail.com <br />
              Contact : +91 9494006060
             </div>
            </div>
            </div></div></div></div>



            <div className="row m-xs">
                <div className="col-sm-3">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>Company Profitability</h5>
                        </div>
                        <div className="ibox-content">
                            <PieChart data={chartData} options={{animateRotate: true}} width="100" height="100"/>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="ibox float-e-margins">
                      <div className="ibox-title">
                        <h5>Company Efficiency</h5>
                      </div>
                      <div className="ibox-content">
                        <PieChart data={chartData} options={{animateRotate: true}} width="100" height="100"/>
                      </div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="ibox float-e-margins">
                      <div className="ibox-title">
                        <h5>Individual Profitability</h5>
                      </div>
                      <div className="ibox-content">
                        <PieChart data={chartData} options={{animateRotate: true}} width="100" height="100"/>

                      </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="ibox float-e-margins">
                      <div className="ibox-title">
                        <h5>Individual Efficiency</h5>
                      </div>
                      <div className="ibox-content">
                        <PieChart data={chartData} options={{animateRotate: true}} width="100" height="100"/>

                      </div>
                    </div>
                </div>
            </div>


<div className="row m-xs">

                    <div className="col-lg-8">
                        <div className="ibox float-e-margins">
                            <div className="ibox-content">

                                <div className="table-responsive">
                                    <table className="table table-striped fnt-1">
                                        <thead>
                                        <tr>

                                            <th>#</th>
                                            <th>Client Name </th>
                                            <th>Tasks </th>
                                            <th>Manager </th>
                                            <th>Article</th>
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
                                            <td>Chacko</td>
                                            <td>Anisha</td>
                                            <td>0</td>
                                            <td>17-07-2017</td>
                                            <td>17-07-2017</td>
                                            <td className="c-blue">Work in Progress</td>

                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>VAS Agencies</td>
                                            <td>Audit</td>
                                            <td>Arun</td>
                                            <td>Anisha</td>
                                            <td>0</td>
                                            <td>17-07-2017</td>
                                            <td>17-07-2017</td>
                                            <td className="c-blue">Work in Progress</td>

                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>VAS Agencies</td>
                                            <td>Audit</td>
                                            <td>Chacko</td>
                                            <td>Anisha</td>
                                            <td>0</td>
                                            <td>17-07-2017</td>
                                            <td>17-07-2017</td>
                                            <td className="c-red">Overdue</td>

                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>VAS Agencies</td>
                                            <td>Audit</td>
                                            <td>Arun</td>
                                            <td>Anisha</td>
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
                </div><div className="col-lg-4">
                <div className="ibox float-e-margins">
                  <div className="ibox-content">Notifications</div>
                </div>  </div>


            </div>
        </div>


      </div>
    );
  }
}
