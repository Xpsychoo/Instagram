const counters = document.querySelectorAll('.counter');
        
counters.forEach((counter) => {
    console.log(counter);
    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        console.log(typeof targetCount);

        const startingNumber = Number(counter.innerHTML); 
        const incr = targetCount / 100 ;

        if(startingNumber < targetCount ){
            counter.innerHTML = `${Math.round(startingNumber + incr)}`;
            setTimeout(updateCounter,100)
        }
    }

    updateCounter();
})