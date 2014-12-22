# angular-base64

Encapsulation of Nick Galbreath's base64.js library for AngularJS

For Base64 encoding whch supports UTF8 see [angular-utf8-base64](https://github.com/stranger82/angular-utf8-base64)

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

## *URL Safe* Base64 Encoding

Base 64 encoded strings can be made "URL Safe" with `encodeURIComponent`...

```javascript
var base64EncodedString = $base64.encode('whatever');
var urlSafeBase64EncodedString = encodeURIComponent(base64EncodedString);
```

To decode a "URL Safe" base 64 encoded string use `decodeURIComponent` *before* `$base64.decode`...

```javascript
var base64EncodedString = decodeURIComponent('d2hhdGV2ZXI');
var decodedString = $base64.decode(base64EncodedString);
```
