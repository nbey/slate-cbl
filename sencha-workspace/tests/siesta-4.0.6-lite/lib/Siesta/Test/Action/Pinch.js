/*

Siesta 4.0.6
Copyright(c) 2009-2016 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**

@class Siesta.Test.Action.Pinch
@extends Siesta.Test.Action
@mixin Siesta.Test.Action.Role.HasTarget

This action can be included in the `t.chain` call with "swipe" shortcut:

    t.chain(
        {
            action      : 'swipe',
            target      : someDOMElement
        },
        // or
        {
            swipe       : someDOMElement
        }
    )

This action will perform a {@link Siesta.Test.SenchaTouch#swipe swipe} on the provided {@link #target}. 

*/
Class('Siesta.Test.Action.Pinch', {
    
    isa         : Siesta.Test.Action,
    
    does        : Siesta.Test.Action.Role.HasTarget,
        
    has : {
        requiredTestMethod          : 'pinch',
         
        /**
         * @cfg {String} scale The scale for the pinch operation
         */
        scale                       : 2,
        
        target2                     : null,
        offset2                     : null,
        
        cachedTarget2               : null
    },

    
    methods : {
        
        process : function () {
            this.test.pinch(this.getTarget(), this.getTarget2(), this.scale, this.next, null, this.options, this.offset, this.offset2)
        },
        
        
        getTarget2 : function () {
            if (this.cachedTarget2) return this.cachedTarget2
            
            var test        = this.test;
            var target2     = this.target2

            if (test.typeOf(target2) === 'Function') target2 = target2.call(test, this);
            
            return this.cachedTarget2   = target2
        }
    }
});


Siesta.Test.ActionRegistry().registerAction('pinch', Siesta.Test.Action.Pinch)
