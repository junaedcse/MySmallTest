
//////////////////////
//const { Pool, Client } = require('pg');

    const fs = require('fs');
    const newman = require('newman');


async function get_hits(tenant_number,host_number){
    
    newman.run({
        collection: require('./pertenantperhost31032.json'),
        environment: require('./EventEnvironment_pertenantperhost31032.json'), 
  //globals:require('./postman_globalsc.json'),
  //////////////////////////////////////////////////////////////////
        globals:
        {
            "id": "6c817370-1522-4128-8245-ca52a488b803",
            "values": [
                {
                    "key": "HostNumber",
                    "value": host_number,
                    "description": "",
                    "enabled": true
                },
                {
                    "key": "TenantNumber",
                    "value": tenant_number,
                    "description": "",
                    "enabled": true
                }
            ],
            "name": "My Workspace Globals",
            "_postman_variable_scope": "globals",
            "_postman_exported_at": "2019-03-22T07:45:55.974Z",
            "_postman_exported_using": "Postman/7.0.6"
        },
  /////////////////////////////////////////////////////////////////
  
  reporters: 'cli'
});

}

get_hits(1,1);
get_hits(1,2);
get_hits(1,3);
get_hits(2,1);
get_hits(2,2);
get_hits(2,3);
get_hits(3,1);
get_hits(3,2);
get_hits(3,3);
