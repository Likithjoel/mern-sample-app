'use strict';
const logger = require('./../../applogger');
const {user} = require('./userEntity');
const shell = require('shelljs');
const exect = require('child_process').exec;
var exec = require('node-ssh-exec');
var fs = require('fs');

var getServerInfo = (req, res)=>{
  console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiii")
  let ip = '52.191.116.119';
  let userName = 'rig';
  let password  = 'indian@12345';
  let response ;
  let config = {
        host: ip,
        username: userName,
        password: password
    },
  command = 'docker ps -q | xargs -n 1 docker inspect --format \'\{\{range .NetworkSettings.Networks\}\}\{\{.IPAddress\}\}\{\{end\}\} \{\{ .Name \}\}\' | sed \'s\/ \\\/\/ \/\'';
  // command = 'sshpass -p "$indian@12345" scp d:/abc.sh $rig@52.191.116.119:/home/rig/';
  exec(config, command, function (error, responses) {
      if (error) {
        console.log("error",error)
            res.send('failed');
      } else {
            response = responses;
   
        let num=1
        response=response+' ';
        let arr = [];
        var lines = response.split('\n');
        for(var line = 0; line < lines.length; line++){
          console.log(".................",lines[line]);
          let response = lines[line];
          arr.push({
            hostip: response.substr(0,response.indexOf(' ')),
            hostname: response.substr(response.indexOf(' ')+1)
          })
        }
        
        // Iterate to rewrite in file
        arr.map((host,index)=>{
          console.log('host...........',host)
          if(host.hostname.includes("jenkins")){
            var fs = require('fs')
            fs.readFile('d:/abc.sh', 'utf8', function (err,data) {
              if (err) {
                return console.log(err);
              }
              console.log("data",data,host.hostip)
              var result = data.replace(/sed/g, host.hostip);
              console.log(",,,,,,,,,,,,,",result)
            
              fs.writeFile('d:/abc.sh', result, 'utf8', function (err) {
                 if (err) return console.log(err);
              });
            });
            // let fileAsString = 'd:/abc.sh'
            // var result = fileAsString.replace(/sed/g, 'sedss');
            // let content = 'sed -i \'s\/1.0.0.1\/172.3.4.5\/g\' host.cfg\n';
            // fs.appendFileSync("d:/abc.sh",content);
           }else if(host.hostname.includes("jenkinsnrpe_nagios-server_1")){
          //   // let content = 'sed -i \'s\/1.0.0.1\/1.2.2.2\/g\' host.cfg\n';
          //   // fs.appendFileSync("d:/abc.sh",content);
          //   var fs = require('fs')
          //   fs.readFile('d:/abc.sh', 'utf8', function (err,data) {
          //     if (err) {
          //       return console.log(err);
          //     }
          //     var result = data.replace(/sed/g, host.ip);
            
          //     fs.writeFile('d:/abc.sh', result, 'utf8', function (err) {
          //        if (err) return console.log(err);
          //     });
          //   });
            
           }else if(host.hostname.includes("epic_cray")){
          //   // let content = 'sed -i \'s\/1.0.0.1\/1.1.1.1\/g\' host.cfg\n';
          //   // fs.appendFileSync("d:/abc.sh",content);
          //   var fs = require('fs')
          //   fs.readFile('d:/abc.sh', 'utf8', function (err,data) {
          //     if (err) {
          //       return console.log(err);
          //     }
          //     var result = data.replace(/sed/g, host.ip);
            
          //     fs.writeFile('d:/abc.sh', result, 'utf8', function (err) {
          //        if (err) return console.log(err);
          //     });
          //   });
          // }
           }else if(host.hostname.includes("kishan_ldap-service_1")){
          //   // let content = 'sed -i \'s\/1.0.0.1\/1.1.1.1\/g\' host.cfg\n';
          //   // fs.appendFileSync("d:/abc.sh",content);
          //   var fs = require('fs')
          //   fs.readFile('d:/abc.sh', 'utf8', function (err,data) {
          //     if (err) {
          //       return console.log(err);
          //     }
          //     var result = data.replace(/sed/g, host.ip);
            
          //     fs.writeFile('d:/abc.sh', result, 'utf8', function (err) {
          //        if (err) return console.log(err);
          //     });
          //   });
          // }
           }else if(host.hostname.includes("redis")){
          //   // let content = 'sed -i \'s\/1.0.0.1\/1.1.1.1\/g\' host.cfg\n';
          //   // fs.appendFileSync("d:/abc.sh",content);
          //   var fs = require('fs')
          //   fs.readFile('d:/abc.sh', 'utf8', function (err,data) {
          //     if (err) {
          //       return console.log(err);
          //     }
          //     var result = data.replace(/sed/g, host.ip);
            
          //     fs.writeFile('d:/abc.sh', result, 'utf8', function (err) {
          //        if (err) return console.log(err);
          //     });
          //   });
           }
          })
        }
        })
        //End

        //tranfer file from one loation to nagios laocation
        fs.createReadStream('d:/abc.sh').pipe(fs.createWriteStream('e:/abc.sh'));
        // End

        // To execute script to run those files
        const testscript = exect('node -v');
        
        testscript.stdout.on('data', function(data){
            console.log(",,,,,,,,,,,,,,,,",data); 
            // sendBackInfo();
        }); 
        testscript.stderr.on('data', function(data){
              console.log(data);
              // triggerErrorStuff(); 
          });
        // End

};
var writeConfigFile = (req, res)=>{
  console.log("ccccccccccc")
  let ip = '52.191.116.119';
  let userName = 'rig';
  let password  = 'indian@12345';
  let config = {
        host: ip,
        username: userName,
        password: password
    },
  // command = 'docker ps -q | xargs -n 1 docker inspect --format \'\{\{range .NetworkSettings.Networks\}\}\{\{.IPAddress\}\}\{\{end\}\} \{\{ .Name \}\}\' | sed \'s\/ \\\/\/ \/\'';
  command = 'sed -i \'s\/1.0.0.1\/172.3.4.5\/g\' host.cfg';
  exec(config, command, function (error, response) {
      if (error) {
        console.log("error",error)
            res.send('failed');
      } else {
        console.log("success")
          res.send(response);
      }
  });

  // sed -i 's/1.0.0.1/127.0.0.1/g' file.txt

};



var login = (req, res) => {
  let username = req.body.username;
  let passwd = req.body.password;
  user.findOne({Username:username}).then((docs) => {
    if(docs != null){
      if(docs.Password == passwd) {
        res.send(docs);
      }else{
        res.send("password_mismatch");
      }
    }else{res.send("invalid_data");}
  }, (err) => {
    res.send("invalid_data");
  });
};


let addUser = (req, res) => {
  let newUser = new user({
    Username : req.body.username,
    Password : req.body.password,
    Loginid : req.body.loginid,
    Role : req.body.role
  });
  newUser.save().then((docs) => {
    logger.debug(docs);
    res.send(docs);
  }, (err) => {
    res.status(400).send(err);
    logger.debug('error occurred while adding');
  });
};

let viewUser =(req, res) => {
  user.find({Username:req.body.Username}).then((docs) => {
    res.send(docs);
  });
};
let userPasswordChange =(req,res)=>
{
  var Loginid = req.body.PhleboID;
  user.find({Loginid:req.body.Loginid}).then((docs)=>
{
  res.send(docs);
});
};

let ChangePassword=(req,res) => {
  let data = req.body;
  user.update({'Username':data.Username},
    {'$set': {
      'Password': req.body.newPassword
    }},function(err){
      if (err) {
           res.send(err);
         } else {
           res.send('success');
         }
       }
     );
}
module.exports = {
  login,
  addUser,
  viewUser,
  ChangePassword,
  userPasswordChange,
  getServerInfo,
  writeConfigFile
};