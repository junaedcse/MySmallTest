
//////////////////////
//const { Pool, Client } = require('pg');

    const fs = require('fs');
    const newman = require('newman');


async function get_hits(event_name){
    
    newman.run({
        collection: require('./perEventsForAllTenants_31030.json'),
        environment: require('./EnvironmentforEventsForAllTenants_31030.json'), 
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
		    }
	                ],
	        "name": "My Workspace Globals",
	        "_postman_variable_scope": "globals",
	        "_postman_exported_at": "2019-03-21T16:36:18.349Z",
	        "_postman_exported_using": "Postman/7.0.6"
        } , 
  /////////////////////////////////////////////////////////////////
  
  reporters: 'cli'
});

}
get_hits("PacketLog");
get_hits("logback.events");
get_hits("AppControlEvent");
get_hits("IntegrityEvent");
get_hits("AgentEvent");
get_hits("SystemEvent");
get_hits("AntiMalwareEvent");
get_hits("WebReputationEvent");
get_hits("SensorIndicatorEvent");