
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});


const hiddenEle= document.querySelectorAll('.hidden');

hiddenEle.forEach((el)=>observer.observe(el))