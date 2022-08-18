const ideas = [
    "actividad para niños",
    "idea para una cena especial",
    "idea de atuendos de verano",
    "proyecto de bricolaje"
]

function ideaRotator(){
    const el = document.getElementById("ideas");
    ideas.forEach(() => {
        el.innerHtml(ideas)
    
    });
}