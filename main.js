// Declaration

let template = document.querySelector("#temp").content;
const container = document.querySelector(".container");

// Main code

window.addEventListener('DOMContentLoaded', () => {

    for(let i = 1; i <= 52; i++) {
        fetch("https://picsum.photos/200/300")
        .then((res) => res.blob())
        .then((data) => {

                if('content' in document.createElement('template')){

                    let url = URL.createObjectURL(data);
                    template.querySelector("img").src = url;
                    template.querySelector('figcaption').innerText = `${i} of 51`;
                    container.append(document.importNode(template, true));

                }else {
                    throw new Error("Browser doesn't support HTML template tag");
                }
            })
        .catch(err => {

            if(err.name == 'TypeError') console.log(`A TypeError ocurred: ${err.message}`);
            else if(err.name == 'SyntaxError') console.log('A SyntaxError ocurred, check your code');
            else console.log(`Oops!!! ${err.name}`);

        })
    }
    
})

