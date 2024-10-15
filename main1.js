const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

const textElement = document.getElementById('text');
const nameElement = document.getElementById('name');
const roleElement = document.getElementById('role');
const imageElement = document.getElementById('img');

let arrayIndex = 0;

let sliderData = [
  {
    text: '“ Stand at the edge of your mat, keep your feet together and balance your weight equally on both feet. Expand your chest and relax your shoulders. As you breathe in, lift both arms up from the sides, and as you exhale, bring your palms together in front of the chest in a prayer position.”',
    name: 'Prayer pose:',
    role: 'Pranamasana',
    img: './assets/images/a.png',
    imgAlt:
      'Image',
  },
  {
    text: '“ Breathing in, lift the arms up and back, keeping the biceps close to the ears. In this pose, the effort is to stretch the whole body up from the heels to the tips of the fingers.”',
    name: 'Raised arms pose:',
    role: 'Hasta Uttanasana',
    img: './assets/images/b.png',
    imgAlt:
      'Image',
  },
  {
    text: '“ Breathing out, bend forward from the waist keeping the spine erect. As you exhale completely, bring the hands down to the floor beside the feet.”',
    name: 'Hand to foot pose:',
    role: 'Hasta Padasana',
    img: './assets/images/c.png',
    imgAlt:
      'Image',
  },
  {
    text: '“Breathing in, push your right leg back, as far back as possible. Bring the right knee to the floor and look up.”',
    name: 'Equestrian pose:',
    role: 'Ashwa Sanchalanasana',
    img: './assets/images/d.png',
    imgAlt:
      'Image',
  },
  {
    text: '“As you breathe in, take the left leg back and bring the whole body in a straight line.”',
    name: 'Mountain pose:',
    role: 'Parvatasana',
    img: './assets/images/e.png',
    imgAlt:
      'Image',
  },
  {
    text: '“ Gently bring your knees down to the floor and exhale. Take the hips back slightly, slide forward, rest your chest and chin on the floor. Raise your posterior a little bit. The two hands, two feet, two knees, chest and chin (eight parts of the body) should touch the floor.”',
    name: 'Pose 6:',
    role: 'Ashtanga Namaskara',
    img: './assets/images/f.png',
    imgAlt:
      'Image',
  },
];

function updateContent() {
  // Forces the fadeIn animation we have declared in CSS
  document.body.classList.remove('animate');

  //   For some reason this is needed (web development is weird)??
  void document.body.offsetWidth;

  document.body.classList.add('animate');

  textElement.innerText = sliderData[arrayIndex].text;
  nameElement.innerText = sliderData[arrayIndex].name;
  roleElement.innerText = sliderData[arrayIndex].role;
  imageElement.src = sliderData[arrayIndex].img;
  imageElement.alt = sliderData[arrayIndex].imgAlt;
}

function displayPrevious() {
  if (arrayIndex - 1 === -1) {
    arrayIndex = sliderData.length - 1;
  } else {
    arrayIndex -= 1;
  }

  return updateContent();
}

function displayNext() {
  if (arrayIndex + 1 === sliderData.length) {
    arrayIndex = 0;
  } else {
    arrayIndex += 1;
  }

  return updateContent();
}

// Enable use of slider with keyboard right and left arrows
document.body.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    previousBtn.focus();
    return displayPrevious();
  }

  if (event.key === 'ArrowRight') {
    nextBtn.focus();
    return displayNext();
  }

  return;
});

previousBtn.addEventListener('click', displayPrevious);

nextBtn.addEventListener('click', displayNext);
