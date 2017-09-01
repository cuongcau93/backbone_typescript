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

    export class Vehicle extends Backbone.Model{
            
            summary() {
                return 'Vehicles arefor travelling';
            }
    };
    
    var l = new Vehicle();
    console.log(l.summary());

}