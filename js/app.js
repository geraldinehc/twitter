window.addEventListener('load', function() {
  var submit = document.getElementById('submit');
  submit.disabled = true;
  var textarea = document.getElementById('publications');

  textarea.addEventListener('keyup', function() {
    submit.disabled = false;
    var max = 140;
    var rest = '';
    var publications = document.getElementById('publications').value.length;
    rest = max - publications;
    document.getElementById('counter').value = rest;

    counter.innerHTML = rest;
    if (counter.value < 0) {
      submit.disabled = true;
    } else if (counter.value < 10) {
      counter.style.color = '#ff0000';
    } else if (20 > counter.value && counter.value >= 10) {
      counter.style.color = '#ff9900';
    } else {
      counter.style.color = '#325d81';
    }
  });

  submit.addEventListener('click', function() {
    if (textarea.value.length > 0) {
      var creatediv = document.createElement('div');
      var container = document.createElement('p');
      creatediv.classList.add('story');
      var time = moment().format('LT');
      container.innerHTML = time;
      var text = document.getElementById('publications').value;
      creatediv.innerHTML = text;
      creatediv.appendChild(container);
      document.body.appendChild(creatediv);
      textarea.value = '';
      //  validacion si pasa los 140 caracteres deshabilita boton.
      document.getElementById('counter').textContent = '140';
      document.getElementById('counter').style = '#325d81';
      submit.disabled = true;
      textarea.style = 'initial';
    } else {
      submit.disabled = true;
    }
  });


  textarea.addEventListener('keyup', function(event) {
    if (event.keyCode = 13) {
      textarea.style.height = (textarea.scrollHeight) + 'px';
    } else if (textarea.value.length >= 171) {
      textarea.style.height = (textarea.scrollHeight) + 'px';
    } else {
      textarea.style = 'initial';
    }
  });
});
