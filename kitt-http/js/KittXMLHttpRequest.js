(function () {

    XMLHttpRequest = function () {

        var self = this;

        var listeners = {};

        var url = null;
        var method = null;

        this.onreadystatechange = null;

        this.open = function (_method, _url, async, user, pass) {
            url = _url;
            method = _method;
        };

        this.send = function () {

            var options = {
                showSpinner: false,
                url: url
            };

            var onSuccess = function (response) {
                self.response = response;
                listeners['loadend']()
            };

            var onError = function (message) {
                listeners['error']()
            };
            console.log(method);
            if(method === 'GET') window.KittNative.doGet(options, onSuccess, onError);
            if(method === 'POST') window.KittNative.doPost(options, onSuccess, onError);

        };

        this.addEventListener = function (name, fn) {
            listeners[name] = fn;

        };

        this.setRequestHeader = function (name, fn) {
        };

    }

})();