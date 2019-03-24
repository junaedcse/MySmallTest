
//////////////////////
//const { Pool, Client } = require('pg');

    const fs = require('fs');
    const newman = require('newman');


async function get_hits(tenant_number){
    
    newman.run({
        collection: require('./Manual_event_per_tenant31027.json'),
        environment: require('./EventEnvironment_event_per_tenant31027.json'), 
  //globals:require('./postman_globalsc.json'),
  //////////////////////////////////////////////////////////////////
        globals:
        {
            "id": "6c817370-1522-4128-8245-ca52a488b803",
            "values": [                
                {
                    "key": "TenantNumber",
                    "value": tenant_number,
                    "description": "",
                    "enabled": true
                }
            ],
            "name": "My Workspace Globals",
            "_postman_variable_scope": "globals",
            "_postman_exported_at": "2019-03-21T22:28:02.138Z",
            "_postman_exported_using": "Postman/7.0.6"
        } , 
  /////////////////////////////////////////////////////////////////
  
  reporters: 'cli'
});

}

get_hits(1);
get_hits(2);
get_hits(3);
/*.on('request', function (error, args) {
    if (error) {
        console.error(error);
    }
    else {
        fs.writeFile(`response.txt`, args.response.stream, function (error) {
            if (error) { 
                console.error(error); 
            }
        });        
    }
});*/


//pool.query('SELECT some_f(agentevents,3)', (err, res) => {
  //console.log(err, res)
  //pool.end()
//})