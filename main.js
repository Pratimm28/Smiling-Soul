const header = document.querySelector("header");
const hambugerMenu = document.querySelector(".hamburger-menu");

hambugerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
});

const links = document.querySelectorAll(".menu-list>ul>*");

links.forEach((link) =>
  link.addEventListener("click", () => header.classList.remove("active"))
);

let swiper = new Swiper(".swipo", {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 600,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
});

const solutions = [
  `Exams are just a part of life and life is much more than exams. As it is said a piece of paper cannot decide your future. Exams can have a large impact in everyone’s life but it should not be a reason to end one’s life. There are ample of opportunity in life. One might fail in one exam but at the same time one must realize that it is not the end of life. Finding motivation can be hard during this time. Everyone should have an aim in life and start working steadily towards it. 

Today there are lot of competitive exams that students are preparing and take a lot of stress about it. Many students think they have less time for preparation and get depressed. They think about the results and think whether or not they will be able to crack the examination, but we should not think about the results rather should work or focus on the thing that is in our hand that is preparation. We should honestly prepare and leave the rest in the hand of god. Why think about something that is not in our hand. 

Education is not always about taking stress; it is for the upliftment of our mindset so that we will be a better human being and contribute positively to our society. `,
  `Contact your creditors: If you are unable to make your payments, it is important to contact your creditors as soon as possible. Explain your situation and see if they can work out a payment plan or offer some form of assistance.
Consider debt consolidation: If you have multiple debts, consider consolidating them into one loan with a lower interest rate. This can make your monthly payments more manageable.
Consider bankruptcy: If your debts are overwhelming and you have no way of repaying them, bankruptcy may be an option. However, this should only be considered as a last resort as it can have serious long-term consequences.
 Try to face this problem as soon as possible and don’t let this spiral into your life like a deadly python.`,
  ` family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation

 family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation

 family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation family father-mother relation `,
  ` Identify the problem: Try to identify the specific issue that's causing the problem in your career. Is it a lack of opportunities, a difficult boss, a mismatch between your skills and your job, or something else entirely? Once you've identified the problem, you can start to work on a solution.
Seek advice: Talk to friends, family, or colleagues who may have gone through a similar experience. Alternatively, seek the advice of a professional career counselor or coach. They can help you identify your strengths and weaknesses, set goals, and create a plan of action.
Look for new opportunities: If you're unhappy with your current job or industry, consider exploring new opportunities. This could mean looking for a new job, switching industries, or even starting your own business.`,
  `We are talking about something that is hard to understand but is necessary for most of us. We are in this world and must have some string attached so that our life won’t become monotonous, so it is a necessary evil.
We think you must have a lot of emotions running through you currently. You might be confused, sad or angry. Allow these emotions to breathe and do not supress them.
We suggest you the most important thing that any person in this situation must do that is to reach out to their support system that is close friends and parents. They are the most important person who really are concerned about you and your life.  We also suggest you to take some time off and not take any major decision of your life in this tense phase of your life.

And last but not the least this is just a phase of life, and this too shall pass……. `,
  ` Bullying or ragging can be a serious issue if not dealt properly. The first thing that should be done is to stay calm and not react in an impulsive manner. If you feel unsafe then try to remove yourself from that situation as soon as possible. We know it is easier said than done but in this situation we feel it is better to have someone who can stay by your side in crunch situation like this.
If the situation is going out of control than try Report the incident: If you are being bullied or ragged in school or college, report it to the authorities immediately. Most schools and colleges have a zero-tolerance policy towards bullying and ragging.
Document the incidents: Keep a record of all the incidents of bullying or ragging, including the date, time, location, and the names of the people involved. This will help you to provide evidence if you need to report the incident.
Most the time we are timid to talk to our seniors. We think that reaching out the seniors that bullying or ragging is really getting into your head and you are way too much affected by it which will surely make them understand the graveness of the situation.`,
  ` Get emotional support: Dealing with domestic violence can be emotionally exhausting. It's important for the victim to have a support system of friends, family, or a therapist to help cope with the trauma.
Reach out to support services: There are many organizations and hotlines that provide support to victims of domestic violence. They can help with safety planning, counselling, and other services. Some examples include the National Domestic Violence Hotline, RAINN, and local domestic violence shelters.

This thing can cause a lot of physical and mental trauma to the victim so before following any thing we should ensure the safety of the victim. The stress and depression that comes after it can be avoided by following certain steps and preocedures. We should be surrounded by positive minds after such a traumatic experience of life and not think repetetaively about that which would cause mor stress and depression to kick in. `,
  `Write your problem specifically`,
];

const userInput = document.querySelector("#user-input");
const submit_btn = document.querySelector("#submit-btn");
const help_section = document.querySelector(".popUp");
const userProblem_dom = document.querySelector(".user-problem");
const Our_solutions = document.querySelector(".solutions");
const close_btn = document.querySelector(".close-btn");

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let userProblem = userInput.value;

  const paste_content = (i) => {
    userProblem_dom.textContent = userProblem;
    Our_solutions.innerText = solutions[i];
    help_section.style.display = "block";
  };

  if (
    userProblem.match(/exam/gi) ||
    userProblem.match(/study/gi) ||
    userProblem.match(/education/gi)
  ) {
    paste_content(0);
  } else if (
    userProblem.match(/money/gi) ||
    userProblem.match(/debt/gi) ||
    userProblem.match(/loan/gi)
  ) {
    paste_content(1);
  } else if (
    userProblem.match(/family/gi) ||
    userProblem.match(/family relation/gi) ||
    userProblem.match(/family issues/gi)
  ) {
    paste_content(2);
  } else if (
    userProblem.match(/aim/gi) ||
    userProblem.match(/life goal/gi) ||
    userProblem.match(/ambition/gi) ||
    userProblem.match(/career/gi)
  ) {
    paste_content(3);
  } else if (
    userProblem.match(/relationship/gi) ||
    userProblem.match(/gf/gi) ||
    userProblem.match(/bf/gi) ||
    userProblem.match(/boyfriend/gi) ||
    userProblem.match(/girlfriend/)
  ) {
    paste_content(4);
  } else if (
    userProblem.match(/bullying/gi) ||
    userProblem.match(/ragging/gi) ||
    userProblem.match(/discrimination/gi) ||
    userProblem.match(/rascism/gi)
  ) {
    paste_content(5);
  } else if (
    userProblem.match(/domestic violence/gi) ||
    userProblem.match(/sexual abuse/gi) ||
    userProblem.match(/harrashment/gi) ||
    userProblem.match(/rape/gi)
  ) {
    paste_content(6);
  } else {
    paste_content(7);
  }
});

close_btn.addEventListener("click", () => {
  help_section.style.display = "none";
});
