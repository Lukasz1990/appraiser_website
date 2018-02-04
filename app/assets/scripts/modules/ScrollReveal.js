mport $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class ScrollReveal {
    
constructor (items,offset) {
    
    this.itemsToReveal = items;
    this.offsetReveal = offset;
    this.hideItems();
    this.scrollWaypoints();
}
    hideItems() {
        this.itemsToReveal.addClass('reveal_items')
    }
    
    scrollWaypoints (){
        var that = this;
        
        
        this.itemsToReveal.each(function(){
            
           var myItems = this;
        
            
            new Waypoint ({
                element: myItems,
                handler: function (){
                    $(myItems).addClass('reveal_items-show-items');
                },
                 offset: that.offsetReveal
            });
        });
    }
    
}

export default ScrollReveal;




