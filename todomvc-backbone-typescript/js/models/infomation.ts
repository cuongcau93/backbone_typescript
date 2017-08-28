module app{
    
    'use strict';

    interface InfomationInterface {
        color: string;
        title: string;
    };

    export class Infomation extends Backbone.Model {
        
        defaults(): InfomationInterface{
            return{
                color:'',
                title: ''
            };
        };

    }

}