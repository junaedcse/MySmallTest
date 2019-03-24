
//////////////////////31025//////////////
//const { Pool, Client } = require('pg');

    const fs = require('fs');
    const newman = require('newman');


async function get_hits(){
    
    newman.run({
        collection: require('./AllTenantpostman_collection31025.json'),
        environment: require('./EventEnvironment_All_tenant31025.json'), 
        //globals:require('./postman_globalsc.json'),
  //////////////////////////////////////////////////////////////////
        
  
  reporters: 'cli'
});

}
get_hits()