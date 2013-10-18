# ngBase64

Encapsulation of Nick Galbreath's base64.js library for AngularJS

## Installation

### Bower

```
bower install ngBase64
```

## Usage

```javascript
angular
    .module('myApp', ['base64'])
    .controller('myController', [
    
        '$base64', '$scope', 
        function($base64, $scope) {
        
            $scope.encoded = $base64.encode('a string');
            $scope.decoded = $base64.decode('YSBzdHJpbmc=');
    }]);
```
