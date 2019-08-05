window.onscroll = function () {select();};


function scrollclasse(classe) {
    window.scrollTo({
        top: document.getElementById(classe).offsetTop,
        behavior: 'smooth'
    });
}

page = document.getElementsByClassName('page');
nav = document.getElementsByClassName('nav')[0].children[0].children;

function select() {

    for (var i = 0; i < page.length; i++) {

        if (document.body.scrollTop > page[i].offsetTop-5 || document.documentElement.scrollTop > page[i].offsetTop-5) {
            if (i != 0) {
                nav[i-1].className = "";
            }
            nav[i].className = "actuel";
        }else {
            nav[i].className = "";
        }
    }

}

select();
