function fetch(url, success, error) {

  if (typeof success !== 'function' || typeof error !== 'function') {
    throw new Error('to nie są funkcje');
  }

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = (function() {

        if (xhr.status == 200) {
            success(xhr.responseText);
        } else {
            error(new Error('wystąpił błąd podczas ładowania danych'));
        }

    });

    xhr.onerror = function(e) {
        error(new Error('wystąpił błąd'));
    }
;
    xhr.send();

}


(function() {

    'use strict';

    var button = document.querySelector('#button');
    var dataContainer = document.querySelector('#data-container');

    button.addEventListener('click', function() {

        fetch("https://jsonplaceholder.typicode.com/users", function(data) {
          var parse = JSON.parse(data);
            console.log("Sukces", parse);
            dataContainer.textContent = parse;
        }, function(err) {
            console.log("Wystąpił błąd!");
            console.log(err);
        });

    }, false);

})();
