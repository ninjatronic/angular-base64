# angular-base64

Encapsulation of Nick Galbreath's base64.js library for AngularJS

For Base64 encoding which supports UTF8 see [angular-utf8-base64](https://github.com/stranger82/angular-utf8-base64).
Allows for base64 url encoding.

## Installation

### Bower

```
bower install angular-base64
```

**NB:** The `ngBase64` bower package is deprecated due to camel casing issues on case-sensitive file systems.

```html
<script src="bower_components/angular-base64/angular-base64.js"></script>
```

## Usage

### Module

```javascript
angular.module('app',
  [
     'base64'
  ]);
```
### Normal
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

### Url Encoding
```javascript
angular
    .module('myApp', ['base64'])
    .controller('myController', [
    
        '$base64', '$scope', 
        function($base64, $scope) {
        
            $scope.encoded = $base64.encodeUrl('a string');
            $scope.decoded = $base64.decodeUrl('YSBzdHJpbmc=');
    }]);
```
