const container = document.querySelector("#grid");

for(let i=0;i<256;i++)
{
    const square = document.createElement("div");
    square.classList.add('grid-element');
    square.addEventListener("pointerover", function() {square.style.backgroundColor = 'red'});
    container.appendChild(square);
}

function squareAmount()
{
    let value;
    do
    {
        value = prompt("How many squares per side ?");
        if(value>100)
        {
            alert("Bro are you trying to crash ur pc ? Type in value lesser than 100 please :)")
        }
    }while(value>100);
    container.remove();
    var lastBody = document.querySelector(".custom-grid")
    if(lastBody)
    {
        lastBody.remove();
    }
    const body = document.querySelector("body")
    const customContainer = document.createElement("div");
    customContainer.classList.add('custom-grid');
    customContainer.style.cssText = `display:grid;width:960px;height:960px;grid-template-columns: repeat(${value},1fr);grid-template-rows: auto;margin:0 auto;border: 4px solid rgba(0, 0, 0, 0.8)`
    for(let i=0;i<value*value;i++)
    {
        const customSquare = document.createElement("div");
        customSquare.addEventListener("pointerover", function() {customSquare.style.backgroundColor = 'red'});
        customContainer.appendChild(customSquare);
    }
    body.appendChild(customContainer);

}