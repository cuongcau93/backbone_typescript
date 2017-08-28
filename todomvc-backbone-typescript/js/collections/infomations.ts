module app{
    
    'use strict'

    export class Infomations extends Backbone.Collection<app.Infomation>{
        
        constructor(models?: app.Infomation[] | Object[], options?: any){
            
            super(models, options);
            //this.model = app.Infomation;
        }

    }
}