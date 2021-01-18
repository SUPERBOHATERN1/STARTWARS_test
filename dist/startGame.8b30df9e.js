// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/components/playerHuman/playerHuman.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playerUpdate = playerUpdate;
exports.playerHuman = exports.PlayerHuman = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PlayerHuman = /*#__PURE__*/function () {
  function PlayerHuman() {
    _classCallCheck(this, PlayerHuman);

    this.allAnswer = 0;
    this.rightAnswer = 0;
    this.playerAnswer = '';
    this.allPlayerAnswers = [];
  }

  _createClass(PlayerHuman, [{
    key: "playerChose",
    value: function playerChose(click) {
      this.playerAnswer = click;
      this.allPlayerAnswers.push(this.playerAnswer);
    }
  }, {
    key: "answerCounter",
    value: function answerCounter(calFn) {
      var correctAns = calFn;

      if (correctAns) {
        this.rightAnswer++;
        this.allAnswer++;
      } else {
        this.allAnswer++;
      }
    }
  }, {
    key: "restoreDefault",
    value: function restoreDefault() {
      this.allAnswer = 0;
      this.rightAnswer = 0;
      this.playerAnswer = '';
      this.allPlayerAnswers = [];
    }
  }]);

  return PlayerHuman;
}();

exports.PlayerHuman = PlayerHuman;
var playerHuman = new PlayerHuman();
exports.playerHuman = playerHuman;

function playerUpdate(e, callFn) {
  playerHuman.playerChose(e.target.innerHTML);
  playerHuman.answerCounter(callFn);
  console.log(playerHuman);
  return playerHuman;
}
},{}],"src/components/playerCPU/playerCPU.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cpu = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PlayerCPU = /*#__PURE__*/function () {
  function PlayerCPU() {
    _classCallCheck(this, PlayerCPU);

    this.noOfAnswers = 0;
    this.correctAnswers = 0;
    this.answer = '';
    this.allImageArr = [];
    this.allCpuAnswers = [];
    this.allCorrectAnswers = [];
  }

  _createClass(PlayerCPU, [{
    key: "answerQuestion",
    value: function answerQuestion(arrWithAns) {
      var question = _toConsumableArray(arrWithAns);

      var cpuRandomPicked = Math.floor(Math.random() * 4);
      var cpuAnswer = question[cpuRandomPicked];
      ;
      this.answer = cpuAnswer;
      return this.answer;
    }
  }, {
    key: "addDataToArrays",
    value: function addDataToArrays(image, correctAnswers) {
      this.allImageArr.push(image);
      this.allCpuAnswers.push(this.answer);
      this.allCorrectAnswers.push(correctAnswers);
    }
  }, {
    key: "restoreDefault",
    value: function restoreDefault() {
      this.noOfAnswers = 0;
      this.correctAnswers = 0;
      this.answer = '';
    }
  }]);

  return PlayerCPU;
}();

var cpu = new PlayerCPU();
exports.cpu = cpu;
},{}],"src/components/questionToAnswer/getRightSelector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRightSelector = void 0;

var getRightSelector = function getRightSelector() {
  var rulesSelector = document.querySelector('.rules');
  var HoFameSelector = document.querySelector('.fame-container');

  if (rulesSelector) {
    return rulesSelector;
  }

  return HoFameSelector;
};

exports.getRightSelector = getRightSelector;
},{}],"src/components/questionToAnswer/questionToAnswer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _generateQuestion = _interopRequireDefault(require("../generateQuestion/generateQuestion"));

var _playerHuman = require("../playerHuman/playerHuman");

var _playerCPU = require("../playerCPU/playerCPU");

var _getRightSelector = require("./getRightSelector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import generadeRandomQuestions from '../generateQuestion/LocalGenerateQuestion';
var questionToAnswer = function questionToAnswer(answersObj) {
  var allAnswers = answersObj.answers;
  var rightAnswer = answersObj.rightAnswer;
  var img = answersObj.image;
  var checkedAnswer = false;

  var checkAnswer = function checkAnswer(answer) {
    if (rightAnswer === answer.innerHTML) {
      checkedAnswer = true;
      answer.className += ' corectAnswer';
    } else {
      answer.className += ' wrongAnswer';
    }

    return checkedAnswer;
  };

  var checkCPUAnswer = function checkCPUAnswer(cpuAns) {
    if (rightAnswer === cpuAns) {
      _playerCPU.cpu.correctAnswers += 1;
      _playerCPU.cpu.noOfAnswers += 1;
    } else {
      _playerCPU.cpu.noOfAnswers += 1;
    }

    _playerCPU.cpu.addDataToArrays(img, rightAnswer);

    console.log(_playerCPU.cpu);
    return;
  };

  (0, _getRightSelector.getRightSelector)().innerHTML = "\n    <style>\n      .questions{\n          width: 90%;\n          height: 50%;\n          display:grid;\n          grid-template-columns: 1fr 1fr;\n          justify-items: center;\n          grid-gap:10%;\n      }\n      .questions_item{\n          color: white;\n          font-size: 1.5em;\n          display:flex;\n          padding:10px 20px;\n          border:1px solid white;\n          border-radius:10px;\n          justify-self: stretch;\n          justify-content: center;\n          text-align:center;\n          align-items: center;\n          align-self: center;\n      }\n    </style>\n\n    <div class=\"questions\">\n      <div class=\"questions_item\">".concat(allAnswers[0], "</div>\n      <div class=\"questions_item\">").concat(allAnswers[1], "</div>\n      <div class=\"questions_item\">").concat(allAnswers[2], "</div>\n      <div class=\"questions_item\">").concat(allAnswers[3], "</div>\n    </div>\n    <br>\n\n    ");
  var imga = document.querySelector(".img-container > img");
  imga.setAttribute('src', "../../../static/assets/img/modes/".concat(img)); //   <div>
  //   <img src="../../../static/assets/img/modes/${img}">
  // </div>
  //podmień img dla wersji lokalnej

  {
    /* <img src="../../../static/assets/img/modes/all/${img}"></img> */
  }
  var divsWithAnswers = document.querySelectorAll('.questions_item');

  for (var i = 0; i < divsWithAnswers.length; i++) {
    divsWithAnswers[i].addEventListener('click', function (e) {
      var choicedAnswer = e.target;
      checkAnswer(choicedAnswer);
      checkCPUAnswer(_playerCPU.cpu.answer); //tutaj Update dla gracza player

      (0, _playerHuman.playerUpdate)(e, checkAnswer(choicedAnswer));
      setTimeout(function () {
        (0, _generateQuestion.default)();
      }, 100);
    });
  }
};

var _default = questionToAnswer;
exports.default = _default;
},{"../generateQuestion/generateQuestion":"src/components/generateQuestion/generateQuestion.js","../playerHuman/playerHuman":"src/components/playerHuman/playerHuman.js","../playerCPU/playerCPU":"src/components/playerCPU/playerCPU.js","./getRightSelector":"src/components/questionToAnswer/getRightSelector.js"}],"src/components/starshipsAndVehicles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.starshipArrayImg = exports.vehiclesArrayImg = void 0;
var vehiclesArrayImg = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42];
exports.vehiclesArrayImg = vehiclesArrayImg;
var starshipArrayImg = [5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48];
exports.starshipArrayImg = starshipArrayImg;
},{}],"src/components/modalWindow/dummyModalWindowResults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playerHuman = exports.playerCPU = void 0;
var playerCPU = {
  allCorrectAnswers: ["Ratts Tyerel", "Wat Tambor", "Wedge Antilles"],
  allImageArr: ["people/47.jpg", "people/76.jpg", "people/18.jpg"],
  allCpuAnswers: ["Owen Lars", "Luminara Unduli", "Wedge Antilles"],
  correctAnswers: 2,
  noOfAnswers: 7
};
exports.playerCPU = playerCPU;
var playerHuman = {
  allPlayerAnswers: ["C-3PO", "Dud Bolt", "Wedge Antilles"],
  allAnswer: 5,
  rightAnswer: 2
};
exports.playerHuman = playerHuman;
},{}],"src/components/localStorage/localStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifyStorage = modifyStorage;
exports.default = void 0;

function getDefaultRanking() {
  return {
    people: [{
      nick: 'Ania',
      correctAnswers: 19,
      answers: 20
    }, {
      nick: 'Mateusz',
      correctAnswers: 14,
      answers: 30
    }, {
      nick: 'Leia Organa',
      correctAnswers: 1,
      answers: 23
    }],
    vehicles: [{
      nick: 'Adam',
      correctAnswers: 16,
      answers: 19
    }, {
      nick: 'Ania',
      correctAnswers: 15,
      answers: 20
    }, {
      nick: 'Krystian',
      correctAnswers: 5,
      answers: 20
    }],
    starships: [{
      nick: 'Ania',
      correctAnswers: 17,
      answers: 17
    }, {
      nick: 'Jakub',
      correctAnswers: 14,
      answers: 20
    }, {
      nick: 'Mateusz',
      correctAnswers: 11,
      answers: 20
    }]
  };
}

function modifyStorage(mode, pNick, pCorrectAnswers, pAnswers) {
  var rankingValues = JSON.parse(localStorage.getItem('ranking')) || getDefaultRanking();
  rankingValues[mode.toLowerCase()].push({
    nick: pNick,
    correctAnswers: pCorrectAnswers,
    answers: pAnswers
  });
  console.log(rankingValues[mode.toLowerCase()]);
  rankingValues[mode.toLowerCase()].sort(function (a, b) {
    if (a.correctAnswers < b.correctAnswers) return 1;
    if (a.correctAnswers > b.correctAnswers) return -1;

    if (a.correctAnswers == b.correctAnswers) {
      if (a.answers < b.answers) return -1;
      if (a.answers > b.answers) return 1;
    }

    return 0;
  });
  rankingValues[mode.toLowerCase()].splice(3, 1);
  localStorage.setItem('ranking', JSON.stringify(rankingValues));
} // modifyStorage('people', 'Jan', 100, 100)


var _default = getDefaultRanking;
exports.default = _default;
},{}],"src/components/modalWindow/importResultsFuntion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function resultsWindow(playerCPU, playerHuman) {
  var allAnswers = playerCPU.allCorrectAnswers;
  var allImages = playerCPU.allImageArr;
  var allHumanAnswers = playerHuman.allPlayerAnswers;
  var allCPUAnswers = playerCPU.allCpuAnswers;
  var fullDiv = document.createElement("div");

  for (var i = 0; i < allAnswers.length; i++) {
    var summaryDiv = document.createElement("div");
    var correctAnswerImage = document.createElement("img");
    correctAnswerImage.src = "../../../static/assets/img/modes/".concat(allImages[i]);
    var correctAnswerElement = document.createElement("p");
    correctAnswerElement.innerText = allAnswers[i];
    correctAnswerElement.className = "answers-correct-right";
    var humanAnswerElement = document.createElement("p");
    humanAnswerElement.innerText = allHumanAnswers[i];
    humanAnswerElement.className = allHumanAnswers[i] === allAnswers[i] ? "answers-table-correct" : "answers-table-incorrect";
    var computerAnswerNameElement = document.createElement("p");
    computerAnswerNameElement.innerText = allCPUAnswers[i];
    computerAnswerNameElement.className = allCPUAnswers[i] === allAnswers[i] ? "answers-table-correct" : "answers-table-incorrect";
    summaryDiv.appendChild(correctAnswerImage);
    summaryDiv.appendChild(correctAnswerElement);
    summaryDiv.appendChild(humanAnswerElement);
    summaryDiv.appendChild(computerAnswerNameElement);
    fullDiv.appendChild(summaryDiv);
  }

  return fullDiv;
}

var _default = resultsWindow;
exports.default = _default;
},{}],"src/components/modalWindow/modalWindowContent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _localStorage = _interopRequireWildcard(require("../localStorage/localStorage.js"));

var _importResultsFuntion = _interopRequireDefault(require("./importResultsFuntion.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function modalWindowContent(playerCPU, playerHuman) {
  //GAME OVER DIV
  var gameOver = document.createElement("div");
  gameOver.className = "game-over";
  var title = document.createElement("h1");
  title.className = "game-over";
  title.innerHTML = "GAME OVER";
  gameOver.appendChild(title);
  var text = document.createElement("p");
  text.className = "game-over";
  text.innerHTML = "The force is strong in you young Padawan! During 1 minute you have answered ".concat(playerHuman.rightAnswer, " / ").concat(playerHuman.allAnswer, " questions. And AI quessed ").concat(playerCPU.correctAnswers, " / ").concat(playerCPU.noOfAnswers, ".");
  gameOver.appendChild(text); //RESULTS TABLE DIV

  var results = document.createElement("div");
  results.className = "results";
  var resultTitle = document.createElement("h2");
  resultTitle.innerHTML = "Detailed answers";
  results.appendChild(resultTitle);
  var superAnswer = document.createElement("div");
  superAnswer.className = "super-answer";
  superAnswer.style.color = "white";
  results.appendChild(superAnswer);
  var superAnswerHeader = document.createElement("div");
  superAnswerHeader.className = "super-answer-header";
  superAnswer.appendChild(superAnswerHeader);
  superAnswerHeader.innerHTML = "\n    <p></p>\n    <p>Correct</p>\n    <p>You</p>\n    <p>Computer</p>\n    ";
  var superAnswerBody = document.createElement("div");
  superAnswerBody.className = "super-answer-body";
  superAnswer.appendChild(superAnswerBody); //function initialized with dummy

  var resultsxd = (0, _importResultsFuntion.default)(playerCPU, playerHuman);
  superAnswerBody.appendChild(resultsxd); //YODA PICTURE DIV

  var yoda = document.createElement("img");
  yoda.className = "yoda";
  var src = "../../../static/assets/ui/MasterYodaLeft.png";
  yoda.setAttribute('src', src); // STUPID NOT WORKING DIV WITH FORM INPUT AND A BUTTON // ok it works now, we're cool
  //FORM

  var inputTry = document.createElement("form");
  inputTry.id = "inputTry";
  var labelTry = document.createElement("label");
  var player = document.createElement("input");
  player.type = "text";
  player.minLength = "2";
  player.maxLength = "20";
  player.id = "player-input";
  player.required = "required";
  labelTry.appendChild(player);
  labelTry.htmlFor = "player-input";
  var fillName = document.createElement("div");
  fillName.className = "fill-name";
  fillName.innerHTML = "Please fill your name in order to receive eternal glory in the whole Galaxy!";
  labelTry.appendChild(fillName);
  inputTry.appendChild(labelTry); //BUTTON

  var btn = document.createElement("input");
  btn.value = "MAY THE FORCE BE WITH YOU";
  btn.type = "submit";
  btn.className = "force-button";
  inputTry.appendChild(btn); //FUNCTIONALITY WITH FORM & LOCAL STORAGE

  var objReturn = function objReturn() {
    var yourInput = document.getElementById('player-input');
    var input = yourInput.value;
    var obj = new Object();

    if (input.length >= 2) {
      obj.nick = input;
      obj.playerCorrect = playerHuman.rightAnswer;
      obj.playerAll = playerHuman.allAnswer;
    } else {
      throw "Please enter a correct value!";
    }

    console.log(obj);
    return obj;
  };

  var returnToMainPage = function returnToMainPage() {
    location.replace("../../../index.html");
  };

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var playerObject = objReturn();
    var mode = document.body.querySelector("mode-change").shadowRoot.querySelector(".dark").innerHTML;
    returnToMainPage(); // HALLOFFAME LOCALSTORAGE

    var pNick = playerObject.nick;
    var pCorrectAnswers = playerObject.playerCorrect;
    var pAnswers = playerObject.playerAll;
    (0, _localStorage.modifyStorage)(mode, pNick, pCorrectAnswers, pAnswers);
  }); //BRINGING IT ALL TOGETHER

  var superDiv = document.createElement("div");
  superDiv.className = "superDiv";
  superDiv.appendChild(gameOver);
  superDiv.appendChild(results);
  superDiv.appendChild(yoda);
  superDiv.appendChild(inputTry);
  return superDiv;
}

var _default = modalWindowContent;
exports.default = _default;
},{"../localStorage/localStorage.js":"src/components/localStorage/localStorage.js","./importResultsFuntion.js":"src/components/modalWindow/importResultsFuntion.js"}],"src/components/modalWindow/modalWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalWindow = modalWindow;

var _dummyModalWindowResults = require("./dummyModalWindowResults.js");

var _modalWindowContent = _interopRequireDefault(require("./modalWindowContent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playerHuman1 = _dummyModalWindowResults.playerHuman;
var playerCPU1 = _dummyModalWindowResults.playerCPU;

function modalWindow(playerCPU, playerHuman) {
  var modalWindow = document.createElement("div");
  modalWindow.className = "modal-window";
  modalWindow.appendChild((0, _modalWindowContent.default)(playerCPU, playerHuman));
  return modalWindow;
} // const window = document.body.appendChild(modalWindow(playerCPU1, playerHuman1));
// export default modalWinodow;
},{"./dummyModalWindowResults.js":"src/components/modalWindow/dummyModalWindowResults.js","./modalWindowContent.js":"src/components/modalWindow/modalWindowContent.js"}],"src/components/loader/loader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timerComponent = void 0;

var _playerCPU = require("../playerCPU/playerCPU");

var _playerHuman = require("../playerHuman/playerHuman");

var _modalWindow = require("../modalWindow/modalWindow");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var timerComponent = function timerComponent() {
  var template = document.createElement('template');
  template.innerHTML = "\n  <style>\n  .hider {\n   display: block;\n   width: 100%;\n   height: 20px;\n   background-color: white;\n   border-radius: 20px;\n   box-shadow: 0px 0px 10px 10px #fa250e;\n   animation: slider 60s linear;\n   animation-play-state: running;\n   animation-fill-mode: forwards;\n}\n\n@keyframes slider {\n   0% {\n      width: 100%\n   }\n\n   100% {\n      width: 0;\n   }\n}\n  </style>\n  <div part=\"loader\">\n      <div part='lightsaber'>\n\n         <img part='lighstaberHandler' class = 'lighstaberHandler' src=\"../../../static/assets/ui/LightsaberHandle.png\">\n\n         <div part='lightsaberColor' class = 'lightsaberColor'>\n            <span part='hider' class = 'hider'></span>\n         </div>\n      </div>\n      <div part='counter'>\n         <p part='countdown-text' class = 'countdown-text'></p>\n         <span part= 'timer' class = 'timer'>: 1m 00s</span>\n      </div>\n  ";

  var StarWarsTimer = /*#__PURE__*/function (_HTMLElement) {
    _inherits(StarWarsTimer, _HTMLElement);

    var _super = _createSuper(StarWarsTimer);

    function StarWarsTimer() {
      var _this;

      _classCallCheck(this, StarWarsTimer);

      _this = _super.call(this);

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(template.content.cloneNode(true));

      _this.shadowRoot.querySelector('.lighstaberHandler').src = '../../../static/assets/ui/LightsaberHandle.png';

      _this.shadowRoot.querySelector('.lightsaberColor');

      _this.shadowRoot.querySelector('.countdown-text').innerText = "Time Left ";
      return _this;
    }

    _createClass(StarWarsTimer, [{
      key: "timer",
      value: function timer() {
        var time = 60;
        var sec = time;
        var min = 1;
        var count = this.shadowRoot.querySelector('.timer');
        var countdown = setInterval(function () {
          sec--;

          if (sec === time) {
            count.innerText = ": ".concat(min, "m 00s");
          } else if (sec !== time) {
            min = 0;
            count.innerText = ": ".concat(min, "m ").concat(sec, "s");
          } //trzeba naprawić skaczący tekst oraz dodać minuty


          if (sec < 0) {
            count.innerText = ": ".concat(min, "m 0s");
            clearInterval(countdown);
            count.innerText = ": your time is up, young Padawan!";

            var _window = document.body.appendChild((0, _modalWindow.modalWindow)(_playerCPU.cpu, _playerHuman.playerHuman)); //zaimportowane obiekty playerHuman i cpu - z nich wzięlismy
            // properties zwracające wszystkie poprawne odpowiedzi (dla człowieka
            //rightAnswer, dla cpu - correctAnswer) oraz wszystkie odpowiedzi (człowiek allAnswer, cpu - noOfAnswers)
            // alert(`Twój wynik to: ${playerHuman.rightAnswer}/${playerHuman.allAnswer}, a komputera: ${cpu.correctAnswers}/${cpu.noOfAnswers}`);

          }
        }, 1000);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        window.addEventListener('load', this.timer());
      }
    }]);

    return StarWarsTimer;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  window.customElements.define('star-wars-loader', StarWarsTimer);
};

exports.timerComponent = timerComponent;
},{"../playerCPU/playerCPU":"src/components/playerCPU/playerCPU.js","../playerHuman/playerHuman":"src/components/playerHuman/playerHuman.js","../modalWindow/modalWindow":"src/components/modalWindow/modalWindow.js"}],"src/components/generateQuestion/generateQuestion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkMode = checkMode;
exports.default = exports.getImg = exports.rndArrayOfIds = exports.randomId = exports.arrayIds = void 0;

var _questionToAnswer = _interopRequireDefault(require("../questionToAnswer/questionToAnswer"));

var _playerCPU = require("../playerCPU/playerCPU");

var _starshipsAndVehicles = require("../starshipsAndVehicles");

var _loader = require("../loader/loader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var urlPeopleRequest = 'https://swapi.dev/api/people/';
var urlVehiclesRequest = 'https://swapi.dev/api/vehicles/';
var urlStarshipsRequest = 'https://swapi.dev/api/starships/';

var arrayIds = function arrayIds(num) {
  var idArray = [];

  for (var i = 1; idArray.length < num; i++) {
    if (i !== 17) {
      idArray.push(i);
    } else {
      continue;
    }
  }

  return idArray;
};

exports.arrayIds = arrayIds;

var randomId = function randomId(data) {
  var randomizator = Math.floor(Math.random() * (data.length - 1) + 1);
  return randomizator;
};

exports.randomId = randomId;

var rndArrayOfIds = function rndArrayOfIds(arr, arr2) {
  while (arr.length < 4) {
    var id = arr2[randomId(arr2)];

    if (!arr.includes(id)) {
      arr.push(id);
    }
  }

  return arr;
};

exports.rndArrayOfIds = rndArrayOfIds;

var getImg = function getImg(mode, id) {
  var imgQuestion = "".concat(mode, "/").concat(id, ".jpg");
  return imgQuestion;
};

exports.getImg = getImg;

function getNames(_x, _x2) {
  return _getNames.apply(this, arguments);
}

function _getNames() {
  _getNames = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(arr, basicUrl) {
    var names;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Promise.all(arr.map( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(num) {
                var response, fullObject;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fetch(basicUrl + num + '/');

                      case 2:
                        response = _context.sent;
                        _context.next = 5;
                        return response.json();

                      case 5:
                        fullObject = _context.sent;
                        return _context.abrupt("return", fullObject.name);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x6) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 2:
            names = _context2.sent;
            return _context2.abrupt("return", names);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getNames.apply(this, arguments);
}

function createPeopleObject(_x3) {
  return _createPeopleObject.apply(this, arguments);
}

function _createPeopleObject() {
  _createPeopleObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url) {
    var mode, questions, data, numOfRes, fourAnswers, responsePeople, apiIds, rndIds, correctAns, namesArr;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            mode = 'people';
            questions = {
              image: '',
              answers: [],
              rightAnswer: ''
            };
            fourAnswers = [];
            _context3.prev = 3;
            _context3.next = 6;
            return fetch(url);

          case 6:
            responsePeople = _context3.sent;
            _context3.next = 9;
            return responsePeople.json();

          case 9:
            data = _context3.sent;
            numOfRes = data.count;
            apiIds = arrayIds(numOfRes);
            rndIds = rndArrayOfIds(fourAnswers, apiIds);
            correctAns = rndIds[Math.floor(Math.random() * rndIds.length)];
            _context3.next = 16;
            return getNames(rndIds, url);

          case 16:
            namesArr = _context3.sent;
            questions.answers = namesArr;
            questions.rightAnswer = namesArr[rndIds.indexOf(correctAns)];
            questions.image = getImg(mode, correctAns);
            console.log(questions);
            return _context3.abrupt("return", questions);

          case 24:
            _context3.prev = 24;
            _context3.t0 = _context3["catch"](3);
            console.log(_context3.t0);

          case 27:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 24]]);
  }));
  return _createPeopleObject.apply(this, arguments);
}

function createStarshipsObject(_x4) {
  return _createStarshipsObject.apply(this, arguments);
}

function _createStarshipsObject() {
  _createStarshipsObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url) {
    var mode, questions, fourAnswers, apiIds, rndIds, correctAns, namesArr;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            mode = 'starships';
            questions = {
              image: '',
              answers: [],
              rightAnswer: ''
            };
            fourAnswers = [];
            _context4.prev = 3;
            apiIds = _starshipsAndVehicles.starshipArrayImg;
            rndIds = rndArrayOfIds(fourAnswers, apiIds);
            correctAns = rndIds[Math.floor(Math.random() * rndIds.length)];
            _context4.next = 9;
            return getNames(rndIds, url);

          case 9:
            namesArr = _context4.sent;
            questions.answers = namesArr;
            questions.rightAnswer = namesArr[rndIds.indexOf(correctAns)];
            questions.image = getImg(mode, correctAns);
            console.log(questions);
            return _context4.abrupt("return", questions);

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](3);
            console.log(_context4.t0);

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 17]]);
  }));
  return _createStarshipsObject.apply(this, arguments);
}

function createVehiclesObject(_x5) {
  return _createVehiclesObject.apply(this, arguments);
}

function _createVehiclesObject() {
  _createVehiclesObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(url) {
    var mode, questions, fourAnswers, apiIds, rndIds, correctAns, namesArr;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            mode = 'vehicles';
            questions = {
              image: '',
              answers: [],
              rightAnswer: ''
            };
            fourAnswers = [];
            _context5.prev = 3;
            apiIds = _starshipsAndVehicles.vehiclesArrayImg;
            rndIds = rndArrayOfIds(fourAnswers, apiIds);
            correctAns = rndIds[Math.floor(Math.random() * rndIds.length)];
            _context5.next = 9;
            return getNames(rndIds, url);

          case 9:
            namesArr = _context5.sent;
            questions.answers = namesArr;
            questions.rightAnswer = namesArr[rndIds.indexOf(correctAns)];
            questions.image = getImg(mode, correctAns);
            console.log(questions);
            return _context5.abrupt("return", questions);

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](3);
            console.log(_context5.t0);

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 17]]);
  }));
  return _createVehiclesObject.apply(this, arguments);
}

function checkMode(mode) {
  switch (mode.toLowerCase()) {
    case 'people':
      return createPeopleObject(urlPeopleRequest);

    case 'vehicles':
      return createVehiclesObject(urlVehiclesRequest);

    case 'starships':
      return createStarshipsObject(urlStarshipsRequest);
  }
}

var getGameMode = function getGameMode() {
  var mode = document.querySelector("mode-change");
  console.log(mode.currentMode);
  return mode.currentMode;
};

function generadeRandomQuestions(trigger) {
  // startuje funkcję z wybranego 'mode' wraz z wylosowanymi pytaniami. Obiekt przekazywany w argumencie.
  checkMode(getGameMode()).then(function (e) {
    _playerCPU.cpu.answerQuestion(e.answers); // funkcja wyswietla odpowiedzi na stronie


    (0, _questionToAnswer.default)(e);

    if (trigger) {
      (0, _loader.timerComponent)();
    }
  });
}

var _default = generadeRandomQuestions;
exports.default = _default;
},{"../questionToAnswer/questionToAnswer":"src/components/questionToAnswer/questionToAnswer.js","../playerCPU/playerCPU":"src/components/playerCPU/playerCPU.js","../starshipsAndVehicles":"src/components/starshipsAndVehicles.js","../loader/loader":"src/components/loader/loader.js"}],"src/components/startGame/startGame.js":[function(require,module,exports) {
"use strict";

var _generateQuestion = _interopRequireDefault(require("../generateQuestion/generateQuestion"));

var _playerCPU = require("../playerCPU/playerCPU");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playGameButton = document.querySelector('.red-button');
var yellowButton = document.querySelector('.yellow-button');
var hallOfGame = document.querySelector('.hall-of-fame-btn');
playGameButton.addEventListener('click', function () {
  playGameButton.classList.add('display-none');
  yellowButton.classList.add('display-none');
  hallOfGame.classList.add('display-none');

  _playerCPU.cpu.restoreDefault();

  (0, _generateQuestion.default)(true);
});
},{"../generateQuestion/generateQuestion":"src/components/generateQuestion/generateQuestion.js","../playerCPU/playerCPU":"src/components/playerCPU/playerCPU.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58885" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/components/startGame/startGame.js"], null)
//# sourceMappingURL=/startGame.8b30df9e.js.map