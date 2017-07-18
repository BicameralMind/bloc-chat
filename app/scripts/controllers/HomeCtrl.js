(function() {
    function HomeCtrl(Room, Message, User) {
        this.title = "Bloc Chat"
        this.rooms = Room.all;
        
        this.newRoom = "Create Room";
        this.newUser = "Enter Username";
        this.addUser = User.addUser;
        
        this.addRoom = Room.addRoom;
        this.displayRoom = Room.displayRoom;
        
        this.currentUser = User.currentUser;
        
        //messages
        this.messages = null;
        
        this.currentRoom = "Please select a room";
        
        this.currentRoomId = null;
        
        //console.log(this.currentRoom);
        
        this.displayRoom = function(current){
            // set the current room to the clicked room
            this.currentRoom = current.name;
            // request the messages for the new room's id and show them in the view
            this.messages = Message.getByRoomId(current.$id);
            
            currentRoomId = current.$id;
            console.log(current.name);
            console.log(currentRoomId);
        }
        
        this.send = Message.send;
        this.sendButton = "Send";
        
        //this and $scope are similar
        //$scope won't need "home.rooms" only "rooms"
        //this and $scope make the object public
    }
    
    

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', 'BlocChatCookies', HomeCtrl]);
})();