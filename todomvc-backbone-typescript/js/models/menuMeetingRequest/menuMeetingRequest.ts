module app{
    
    'use strict';

    interface MenuMeetingRequestInterface {
        id: number  ;
        name: string;
        currentSelected:boolean;
    };

    export class MenuMeetingRequest extends Backbone.Model {
        
        defaults(): MenuMeetingRequestInterface{
            return{
                id : null,
                name:'',
                currentSelected:false
            };
        };

    }

}