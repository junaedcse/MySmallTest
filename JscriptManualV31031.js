
//////////////////////
//const { Pool, Client } = require('pg');

    const fs = require('fs');
    const newman = require('newman');


async function get_hits(tenant_number,event_name){
    
    newman.run({
        collection: require('./pertenant_per_eventpostman_collection_31031.json'),
        environment: require('./EventEnvironment_per_tenant_per_event_31031.json'), 
  //globals:require('./postman_globalsc.json'),
  //////////////////////////////////////////////////////////////////
        globals:
        {
            "id": "6c817370-1522-4128-8245-ca52a488b803",
            "values": [
                {
                    "key": "EventName",
                    "value": event_name,
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

get_hits(1,"PacketLog");
get_hits(1,"logback.events");
get_hits(1,"AppControlEvent");
get_hits(1,"IntegrityEvent");
get_hits(1,"AgentEvent");
get_hits(1,"SystemEvent");
get_hits(1,"AntiMalwareEvent");
get_hits(1,"WebReputationEvent");
get_hits(1,"SensorIndicatorEvent");
///////////////////////////////////////////

get_hits(2,"PacketLog");
get_hits(2,"logback.events");
get_hits(2,"AppControlEvent");
get_hits(2,"IntegrityEvent");
get_hits(2,"AgentEvent");
get_hits(2,"SystemEvent");
get_hits(2,"AntiMalwareEvent");
get_hits(2,"WebReputationEvent");
get_hits(2,"SensorIndicatorEvent");
/////////////////////////////////////////

get_hits(3,"PacketLog");
get_hits(3,"logback.events");
get_hits(3,"AppControlEvent");
get_hits(3,"IntegrityEvent");
get_hits(3,"AgentEvent");
get_hits(3,"SystemEvent");
get_hits(3,"AntiMalwareEvent");
get_hits(3,"WebReputationEvent");
get_hits(3,"SensorIndicatorEvent");
