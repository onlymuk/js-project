// do something!
const StarRating = ($container) => {

    const stars = (classname, score) => {
        for(let i = 0; i < $container.children.length; i++) {
            let starContainer = $container.children[i];
            if(score > i) {
                starContainer.firstElementChild.classList.add(classname);
            }else {
                starContainer.firstElementChild.classList.remove(classname);
            }
        }
    }


    for (let i = 0; i < $container.dataset.maxRating; i++) {
        const score = i + 1;
        let starContainerElement = document.createElement('span');
        starContainerElement.className = "star-rating-container";

        let starElement = document.createElement('i');
        starElement.className = "bx bxs-star";
        starContainerElement.appendChild(starElement);

        $container.appendChild(starContainerElement);

        starElement.addEventListener('mouseover', () => {
            stars("hovered", score);
        });

        starElement.addEventListener('mouseleave', () => {
            starElement.classList.remove("hovered");
        });

        starElement.addEventListener('click', () => {
            stars("selected", score);

            const event = new CustomEvent('rating-change', {
                detail: score
            });

            $container.dispatchEvent(event);
        });
    }


    $container.addEventListener('mouseleave', () => {
        for (let i = 0; i < $container.children.length; i++) {
            $container.children[i].firstElementChild.classList.remove('hovered');
        }
    });
}


export default StarRating;