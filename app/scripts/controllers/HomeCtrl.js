(function() {
    function HomeCtrl(Room, Message) {
        this.title = "Bloc Chat"
        this.rooms = Room.all;
        
        this.newRoom = "Create Room";
        
        this.addRoom = Room.addRoom;
        this.displayRoom = Room.displayRoom;
        
        //messages
        this.messages = null;
        
        //this.currentRoom = Room.currentRoom;
        this.currentRoom = "Please select a room";
        
        //console.log(this.currentRoom);
        
        this.displayRoom = function(current){
            // set the current room to the clicked room
            this.currentRoom = current.name;
            // request the messages for the new room's id and show them in the view
            this.messages = Message.getByRoomId(current.$id);
            console.log(current);
        }
        
        //this and $scope are similar
        //$scope won't need "home.rooms" only "rooms"
        //this and $scope make the object public
    }
    
    

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();