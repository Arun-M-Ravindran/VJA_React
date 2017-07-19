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



export default class Client extends React.Component { // eslint-disable-line react/prefer-stateless-function


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
          { numer:' 1', client: 'Korath and Sons Financiers', email: 'abc@gmail.com', Contact: '8562314790', Partner: 'Anisha',status: 'Current' },
          { numer: 2, client: 'ESQUIRE FASHIONS PVT LTD', email: 'abcdef@gmail.com', Contact: '8562314790', Partner: 'Anisha',status: 'Current'},
          { numer: 3, client: 'Esquire Machine & Tools Pvt Ltd', email: 'abhsdc@gmail.com', Contact: '8562314790', Partner: 'Anisha',status: 'Prospective' },
          { numer: 4, client: 'Barakath Garments India Private Limited', email: 'absadfc@gmail.com', Contact: '8562314790', Partner: 'Anisha',status: 'Current'},
          { numer:' 1', client: 'SysGlob Software Solutions Pvt Ltd.', email: 'abcfds@gmail.com', Contact: '8562314790', Partner: 'Anisha',status: 'Prospective'},
          { numer: 2, client: 'Tablez Properties Pvt.Ltd', email: 'abcwecf@gmail.com', Contact: '8562314790', Partner: 'Anisha',status: 'Past' },
          { numer: 3, client: 'Maleth Logistics', email: 'abcvgfdsdfs@gmail.com', Contact: '8562314790', Partner: 'Anisha',status: 'Current'},
          { numer: 4, client: 'CENTRAL METALEX', email: 'abcaefcdfvv@gmail.com', Contact: '8562314790', Partner: 'Anisha',status: 'Current'},
          { numer:' 1', client: 'ST JOHN S VISITATION EDUCATIONAL TRUST', email: 'abcsd@gmail.com', 8562314790: 'Sharon', Partner: 'Anisha',status: 'Current'},
          { numer: 2, client: 'Pegasus Event Management', email: 'abcsadsf@gmail.com', Contact: '8562314790', Partner: 'Anisha',status: 'Past'},
          { numer: 3, client: 'KANJAN JUNGA OWNERS ASSOCIATION', email: 'adsfabc@gmail.com', Contact: '8562314790', Partner: 'Anisha',status: 'Past'},
          { numer: 4, client: 'Brigade Enterprises Ltd', email: 'asdfdsabc@gmail.com', Contact: '8562314790', Partner: 'Anisha',status: 'Current'},
    ];


   
    var listItems = tasks.map(function(item, i) {
      return (
        <tr id={i}>
          <td > {item.numer}</td>
          <td className="c-blue">  {item.client}</td>
          <td> {item.email}</td>
          <td> {item.Contact}</td>
          <td> {item.Partner}</td>
          <td> {item.status}</td>
          <td> <i className="fa fa-pencil" aria-hidden="true" ></i> </td>
          
        </tr>
      );
    });

   


    return (
      <div  style={divStyle}>
      <MainView />


      <Modal show={this.state.show} onClose={this.close.bind(this)} transitionSpeed={100}>
        
        <div className="widget-head-color-box text-center">
          <h3 className="c-blue">Korath and Sons Financiers</h3>
          <h4>
            Door No: 5225 <br />
            Vypana Building, Second Floor <br />
            Palarivattom,
            Cochin, 686774
          </h4>
          <h4 className="c-red">E-mail : samplemail@gmail.com</h4>
          <h4>Contact : 0484 2263894, 9747006060  </h4>
          <br /> 
          <div className="row">
            <div className="col-lg-6"><button className="btn btn-primary full-width"><Link to="/tasks1"><h5>View Tasks</h5></Link></button></div>
            <div className="col-lg-6"><button className="btn btn-primary full-width" onClose={this.close.bind(this)} onClick={this.show2.bind(this)}><h5>Edit</h5></button></div>
          </div>
          
        </div>
      </Modal>




      <Modal show={this.state.show2} onClose={this.close2.bind(this)} transitionSpeed={100}>
        
        <div className="widget-head-color-box text-center">
          <h3 className="c-blue">Add Your New Client</h3>
          <form role="form">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Client Name" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Contact" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="E-mail" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Door Number" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Building Name" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Street Name Effort in days" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Area" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="City" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="State" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Pin Code" required=""/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Country" required=""/>
                </div>
                
                
                <div className="row text-center">
                  <div className="col-lg-6"><button className="btn btn-primary block full-width m-b" >Save</button></div>
                  <div className="col-lg-6"><button className="btn btn-primary block full-width m-b" >Cancel</button></div>
                </div>

               
            </form>
        </div>
      </Modal>


        <div style={aa}>
          <div className="ibox float-e-margins m-t-1">
            <div className="ibox-title">
              <div className="row">
                <div className="col-md-2 text-center"> 
                  <div className="item item-select bg-blue3">
                   <select className="select-width btn-default text-center">
                     <option>All Clients</option>
                     <option> My Clients</option>
                   </select>
                  </div>
                </div>
                <div className="col-md-2 form-group">
                    <input type="text" className="form-control" placeholder="Search Client" required=""/>
                </div>

                <div className="col-md-2 m-t-5px"> Current Clients</div>
                <div className="col-md-2 m-t-5px"> Past Clients</div>
                <div className="col-md-2 m-t-5px"> Prospective</div>
                <div className="col-md-2"> <button className="btn btn-default" onClick={this.show2.bind(this)}>Create Client</button></div>
                
                  
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
                        <th>E-mail</th>
                        <th>Contact </th>
                        <th>Partner</th>
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
