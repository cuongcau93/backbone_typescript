module app{
    
    'use strict'

    export class MenuMeetingRequests extends Backbone.Collection<app.MenuMeetingRequest>{
        
        constructor(models?: app.MenuMeetingRequest[] | Object[], options?: any){
            
            super(models, options);
            
        }

    }
}