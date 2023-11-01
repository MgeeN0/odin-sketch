const container = document.querySelector("#grid");

for(let i=0;i<256;i++)
{
    const square = document.createElement("div");
    square.classList.add('grid-element');
    square.style.cssText = "border: 1px solid rgba(0, 0, 0, 0.8);width:60px;height:60px";
    container.appendChild(square);
}