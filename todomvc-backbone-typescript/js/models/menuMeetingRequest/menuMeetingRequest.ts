module app{
    
    'use strict';

    interface MenuMeetingRequestInterface {
        id: number  ;
        name: string;
    };

    export class MenuMeetingRequest extends Backbone.Model {
        
        defaults(): MenuMeetingRequestInterface{
            return{
                id : null,
                name:'',
            };
        };

    }

}