let add = document.querySelector('.list1');

let del=document.querySelector('.list2');

add.addEventListener('click',addToCart);

del.addEventListener('click',deleteItem);

function addToCart(e){

    if(e.target.hasAttribute('href')){

        console.log(e.target.parentElement.firstChild.textContent.trim());

        let list2=document.querySelector('.list2');

        let li=document.createElement('li');

        let a=document.createElement('a');

        a.setAttribute('href','#');

        a.innerHTML=' Remove';

        li.appendChild(document.createTextNode(e.target.parentElement.firstChild.textContent.trim()));

        li.appendChild(a);

        list2.appendChild(li);

        
    }

    e.preventDefault();
}



function deleteItem(e){

    let list2=document.querySelector('.list2');

    if(e.target.hasAttribute('href')){

       // console.log(e.target.parentElement.firstChild.textContent.trim());


        let ele=e.target.parentElement;
        
        ele.remove();

        console.log(ele);



    }

    e.preventDefault();
}




