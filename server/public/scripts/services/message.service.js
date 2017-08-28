myApp.service('MessageService', ['$http', function($http) {
    console.log('Message service loaded');

    var self = this;
    self.gottenMessages = {list:[]}

    self.getMessage = function() {
        $http.get('/messages').then(function(response) {
            self.gottenMessages.list = response.data;
            console.log('get response', self.gottenMessages);
        });
    };

    self.addMessage = function(newMessage) {
        $http.post('/messages', newMessage).then(function(response){
            console.log('message post response:', response);
            self.getMessage();
        });
    };

    self.getMessage();
    
}]);