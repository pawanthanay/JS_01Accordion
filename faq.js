const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

// const accordianBody;
const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq() {
  
  
 
}


function createFaq(i) {
  
  let outdiv = document.createElement("div");
  outdiv.className = "faq";
  accordianBody.append(outdiv);

  let indiv = document.createElement("div");
  indiv.className = "questions";
  outdiv.append(indiv);
  
  
  let h3 = document.createElement("h3");
  let quest  = document.createTextNode(faqData[i].question);
  h3.append(quest);
  indiv.append(h3);

  let para = document.createElement("p");
  para.className = "hidden";
  let ans = document.createTextNode(faqData[i].answer);
  para.append(ans);
  outdiv.append(para);


  let btn = document.createElement("button");
  btn.className = "show_btn";
  let plus = document.createTextNode("+");
  btn.append(plus);
  indiv.append(btn);
  

  btn.addEventListener("click", btnStatusUpdate);
  function btnStatusUpdate() {
    btn.classList.toggle("rotate");
  
   
    setTimeout(() => {
      para.classList.toggle("hidden", !para.classList.contains("hidden"));
    }, 300);
    para.classList.toggle("opacityIn", !para.classList.contains("hidden"));
    para.classList.toggle("opacityOut", para.classList.contains("hidden"));
  }

}


for(j = 0 ; j<3;j++)
{
  createFaq(j);
}






