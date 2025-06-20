console.log(window.location.search)
function getQueryParam(param) {
  const queryString = window.location.search.substring(1);
  const pairs = queryString.split("&");
  for (let pair of pairs) {
    const [key, value] = pair.split("=");
    if (key === param) return decodeURIComponent(value);
  }
  return null;
}
const unitName = getQueryParam("unit");
const subjectName = getQueryParam("subject");
if (unitName == null || subjectName == null) window.history.back();

function loadStylesheet(href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}
if(subjectName == "physics"){
  loadStylesheet("./Physics/mcq/style.css")
} else if (subjectName == "chemistry"){
  loadStylesheet("./Chemistry/style.css")
} else if (subjectName == "biology"){
  loadStylesheet("./Biology/mcq/style.css")
}

const referrer = document.referrer;
if (referrer) {
  document.querySelectorAll('.back-btn:not(#stats)').forEach(link => {
    link.href = referrer;
  });
} else {
  document.querySelectorAll('.back-btn:not(#stats)').forEach(link => {
    link.href = "";
  });
}

(async (unitName) => {
  try {
    let module;
    if(subjectName == "physics"){
      module = await import (`./Physics/mcq/tests/${unitName}.js`);
    } else if (subjectName == "chemistry"){
      module = await import (`./Chemistry/mcq/tests/${unitName}.js`);
    } else if (subjectName == "biology"){
      module = await import (`./Biology/mcq/tests/${unitName}.js`);
    }
    main(module);
  } catch (err) {
    console.error("Failed to load unit:", err);
  }
})(unitName)

function main(module){

  let problems = module.problems;
  let title = module.title;

  const status = {};
  let countCompleted = 0;
  const totalProblems = problems.length;

  document.getElementById('landingProblemCounter').innerHTML = totalProblems;
  document.getElementById('dynamicMainContentTitle').innerHTML = title;
  document.getElementById('pageTitle').innerHTML = title;

  let currentProblemID = -1;

  let dynamicProblemHeader = document.getElementById('dynamicProblemHeader');
  let dynamicProblemText = document.getElementById('dynamicProblemText');
  let dynamicHint = document.getElementById('dynamicHint');
  let dynamicFeedback = document.getElementById('dynamicFeedback');
  let dynamicExplanation = document.getElementById('dynamicExplanation');

  let checkSolutionButton = document.getElementById('checkSolutionButton');
  let hintButton = document.getElementById('hintButton');
  let dynamicSkipButton = document.getElementById('skipButton');

  document.getElementById('result').classList.add('non-active');

  checkSolutionButton.addEventListener('click', 
    ()=>checkMCQ(currentProblemID, problems[currentProblemID].correct)
  );
  hintButton.addEventListener('click',
    ()=>showHint(currentProblemID)
  );
  dynamicSkipButton.addEventListener('click', 
    ()=>nextProblem(currentProblemID+1)
  );

  let bar = document.getElementById('dynamicToggleBar');
  for (let i = 0; i < totalProblems; i++){
    let toggleBarButton = document.createElement('button');
    toggleBarButton.id = "toggle-" + (i);
    toggleBarButton.classList.add('toggle-button');
    let spanElement = document.createElement('span')
    spanElement.innerHTML = (i + 1);
    toggleBarButton.appendChild(spanElement);
    toggleBarButton.addEventListener('click', ()=>goToProblem(i));
    bar.appendChild(toggleBarButton);
  }

  document.getElementById('startPracticeButton').addEventListener('click', startPractice)
  function startPractice() {
    document.getElementById("landing").classList.add('non-active')
    document.getElementById("main-content").classList.remove('non-active')
    document.getElementById('result').classList.add('non-active')
    nextProblem(0);
  }

  function checkMCQ(id, correctAnswer) {
    const radios = document.querySelectorAll(`input[name="q${id}"]`);
    const toggleBtn = document.getElementById(`toggle-${id}`);

    let selected = null;
    radios.forEach(r => { if (r.checked) selected = r.value; });

    if (!selected) {
      dynamicFeedback.classList.remove('non-active')
      dynamicFeedback.textContent = "❗ Please select an option.";
      dynamicFeedback.style.color = "orange";
      return;
    }

    countCompleted += 1;

    if (selected === correctAnswer) {
      dynamicFeedback.classList.remove('non-active')
      dynamicFeedback.textContent = "✅ Correct!";
      dynamicFeedback.style.color = "green";
      hintButton.classList.add('non-active');
      checkSolutionButton.classList.add('non-active');
      dynamicSkipButton.textContent = "Next";
      if (id == totalProblems - 1) {
        dynamicSkipButton.textContent = "Finish";
        dynamicSkipButton.addEventListener('click', showResults);
      }
      dynamicExplanation.classList.remove('non-active');

      if (status[id] === "wrong") {
        toggleBtn.className = "toggle-button green wrong";
      } else if (status[id] === "hint") {
        toggleBtn.className = "toggle-button green hint";
      } else {
        toggleBtn.className = "toggle-button green";
        status[id] = "correct";
      }

    } else {
      dynamicFeedback.classList.remove('non-active')
      dynamicFeedback.textContent = "❌ Wrong. Try again!";
      dynamicFeedback.style.color = "red";
      toggleBtn.className = "toggle-button red";
      status[id] = "wrong";
    }

    MathJax.typeset(); // re-render LaTeX
  }

  function showHint(id) {
    dynamicHint.classList.remove('non-active');
    dynamicHint.innerHTML = problems[id].hint;
    hintButton.classList.add('non-active');
    if (!status[id]) status[id] = "hint";
    MathJax.typeset(); // render hint LaTeX
  }

  function nextProblem(id){
    if (id >= totalProblems){
      if (countCompleted == totalProblems){
        showResults();
        return;
      }
      id = 0;
    }
    currentProblemID = id;
    let problem = problems[id];
    dynamicProblemHeader.innerHTML = "Problem " + (id + 1);
    dynamicProblemText.innerHTML = problem.question;

    dynamicHint.classList.add('non-active');
    dynamicFeedback.classList.add('non-active');
    dynamicExplanation.classList.add('non-active');

    checkSolutionButton.classList.remove('non-active');
    hintButton.classList.remove('non-active');
    dynamicSkipButton.classList.remove('non-active');
    dynamicSkipButton.innerHTML = "Skip"

    document.getElementById("optionSpanA").innerHTML = "A) " + problem.options[0];
    document.getElementById("optionSpanB").innerHTML = "B) " + problem.options[1];
    document.getElementById("optionSpanC").innerHTML = "C) " + problem.options[2];
    document.getElementById("optionSpanD").innerHTML = "D) " + problem.options[3];

    document.getElementById('inputA').name = "q" + id;
    document.getElementById('inputB').name = "q" + id;
    document.getElementById('inputC').name = "q" + id;
    document.getElementById('inputD').name = "q" + id;

    document.getElementById('inputA').checked = false;
    document.getElementById('inputB').checked = false;
    document.getElementById('inputC').checked = false;
    document.getElementById('inputD').checked = false;

    dynamicExplanation.innerHTML = problem.detailed;

    MathJax.typeset(); // render question, options, and explanation LaTeX
  }

  function goToProblem(id) {
    nextProblem(id);
  }

  function showResults() {
    document.getElementById("main-content").classList.add('non-active');
    document.getElementById("result").classList.remove('non-active');

    let correctCount = 0;
    for (let i = 0; i < totalProblems; i++) {
      if (status[i] === "correct") correctCount++;
    }

    const percent = Math.round((correctCount / totalProblems) * 100);
    document.getElementById("score-display").textContent = `You got ${percent}% correct.`;

    const tryAgainBtn = document.getElementById("try-again-btn");
    tryAgainBtn.style.display = percent === 100 ? "none" : "inline-block";

    const event = new CustomEvent("testCompleted", {
      detail: {
        score: percent,
        testTitle: title,
        time: Date.now(),
        subject: subjectName
      }
    });
    window.dispatchEvent(event);
  }

  document.getElementById('try-again-btn').addEventListener('click', resetPractice)
  function resetPractice() {
    location.reload();
  }
}
