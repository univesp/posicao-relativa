/***************
 * LINKS INDEX *
 ***************/
function linkIndex(classe, endereco) {
    const link1 = document.querySelector(classe);
    link1.addEventListener('click', () => {
    window.location.href = endereco;
    })
}

linkIndex('.link1', "duas-retas-primeiro-caso.html");
linkIndex('.link2', "reta-e-plano-primeiro-caso.html");
linkIndex('.link3', "dois-planos-primeiro-caso.html");
linkIndex('.link4', "para-praticar.html");


function mouseOverOut(linkDiv, img, imgOver) {
    linkDivx = document.querySelector(linkDiv);
    imgx = document.querySelector(img);
    imgOverx = document.querySelector(imgOver);

    linkDivx.addEventListener("mouseover", () => {
        imgx.style = `display: none`;
        imgOverx.style = `display: initial`;
    })
    linkDivx.addEventListener("mouseout", () => {
        imgOverx.style = `display: none`;
        imgx.style = `display: initial`;
    })
}


mouseOverOut('.link2', '.img-link2', '.img-link2-hover');
// mouseOverOut('.link2', '.img-link2', '.img-link2-hover');

link1 = document.querySelector('.link1');
    img = document.querySelector('.img-link1');
    imgOver = document.querySelector('.img-link1-hover');

    link1.addEventListener("mouseover", () => {
        img.style = `display: none`;
        imgOver.style = `display: initial`;
    })
    link1.addEventListener("mouseout", () => {
        imgOver.style = `display: none`;
        img.style = `display: initial`;
    })


    link4 = document.querySelector('.link4');
    img4 = document.querySelector('.img-link4');
    imgOver4 = document.querySelector('.img-link4-hover');

    link4.addEventListener("mouseover", () => {
        img4.style = `display: none`;
        imgOver4.style = `display: initial`;
    })
    link4.addEventListener("mouseout", () => {
        imgOver4.style = `display: none`;
        img4.style = `display: initial`;
    })