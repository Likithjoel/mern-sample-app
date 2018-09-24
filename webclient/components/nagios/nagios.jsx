import React from 'react';
const {hashHistory} = require('react-router');
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import {Icon, Button} from 'semantic-ui-react';
const ReactToastr = require('react-toastr');
const {ToastContainer} = ReactToastr;
const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);
class ChangePassword extends React.Component {
  constructor () {
    super();
    this.state={
       
    }
  };

  getServerInfo(){
      $.ajax({
        url:'/users/getServerInfo',
        type:'GET',
        // data:{
        //     ip:'52.226.18.'
        // },
        success:function(data){
            console.log("ddddddddddddd",data)
         },
         error: function(err){
           console.log("error",err);
}
      })
  }


  render() {
    return(
      <div>
          <Button onClick={this.getServerInfo.bind(this)}>check</Button>
      </div>
      );
    }
  }

module.exports = ChangePassword;
