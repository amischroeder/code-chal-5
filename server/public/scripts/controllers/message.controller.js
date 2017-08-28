myApp.controller('MessageController', ['MessageService', function(MessageService) {
    console.log('Message Controller loaded.');

    var self = this;
    self.newMessage = {};
    MessageService.getMessage();
    self.gottenMessages = MessageService.gottenMessages;

    self.addMessage = function() {
        console.log('clicked to add newmessage');
        MessageService.addMessage(self.newMessage);
    }

}]);