const video = {
    title: 'a',
    play(){                     //método (func dentro de um objeto)
        console.log(this);      //a palavra this faz ref ao objeto
    }
};

video.play();

function playVideo(){       //Função normal
    console.log(this);      //A palavra this, em node, faz referencia ao global
}

playVideo();

function Video(title){
    this.title = title;
    console.log(this);
}

const obj = new Video('Yhorm');