

var body = document.querySelector('body');

var programmingTest = {
   createWrapper() {
       var wrapper = document.createElement('div');
       wrapper.classList.add('wrapper');

       document.body.appendChild(wrapper);
   },

   createHeading() {
       wrapper = body.querySelector('.wrapper');
       var h3 = document.createElement('h3');
       h3.innerHTML = 'Тест по программированию';
       h3.classList.add('title');
       wrapper.appendChild(h3);
   },

   createForm() {
       var form = document.createElement('form');
       wrapper.appendChild(form);
   },

   createFormGroup() {
       var form = wrapper.querySelector('form');

       for (var i = 0; i < 3; i++) {
           var ul = document.createElement('ul');
           ul.classList.add('list-unstyled');

           var h4 = document.createElement('h4');
           h4.classList.add('text-answer');

           form.appendChild(h4);
           h4 = form.querySelectorAll('h4');
           h4[i].appendChild(document.createTextNode((i + 1) + '. ' + 'Вопрос № ' + (i + 1)));

           for (var j = 0; j < 3; j++) {
               var li = document.createElement('li');
               ul.appendChild(li);

               var input = document.createElement('input');
               input.type = 'checkbox';
               input.classList.add('checkbox');
               var label = document.createElement('label');
               label.appendChild(input);
               label.classList.add('variant')
               label.appendChild(document.createTextNode('Вариант ответа № ' + (j + 1)));

               li = ul.querySelectorAll('li');

               li[j].appendChild(label);
           }

           form.appendChild(ul);
       }
   },

   createButton() {
       var form = wrapper.querySelector('form');
       var button = document.createElement('button');
       button.classList.add('btn');
     
       button.appendChild(document.createTextNode('Проверить мои результаты'));
       form.appendChild(button);
   }
};

programmingTest.createWrapper();
programmingTest.createHeading();
programmingTest.createForm();
programmingTest.createFormGroup();
programmingTest.createButton();

