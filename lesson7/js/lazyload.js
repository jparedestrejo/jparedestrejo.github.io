//creates an arrays of images with data-src attribute
let imagesToLoad = document.querySelectorAll('img[data-src]');
//function loadImages that moves the path from data-src to src
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

//optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold:0.3
};
//see if IO is supported
if("IntersectionObserver" in window){
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) =>{
            if(item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
    imagesToLoad.forEach((img) =>{
        imgObserver.observe(img);
    });
} else
//the array imagesToLoad loops through each image and load it if IO is not supported:
imagesToLoad.forEach((img) => {
    loadImages(img);
  });