const card = document.getElementById('card')
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')

const pictures = [
    'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    "https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ];

  let index = 0;
  card.style.backgroundImage = `url(${pictures[0]})`

  const leftFn = () => {
    index -= 1
    if(index < 0){
      index = pictures.length -1
    }
    card.style.backgroundImage = `url(${pictures[index]})`
  }
  function rightFn(){
    index += 1
    if(index > pictures.length - 1){
      index = 0
    }
    card.style.backgroundImage = `url(${pictures[index]})`
  }