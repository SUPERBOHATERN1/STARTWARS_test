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
})({"src/components/gameRules/gameRules.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function gameRules(text) {
  var divRulesContainer = document.createElement("div");
  divRulesContainer.className = "rules";
  var divRules = document.createElement("div");
  divRules.id = "gameRules";
  divRules.innerHTML = text;
  var icon = document.createElement("img");
  var src = "../../../static/assets/ui/graduation-cap-solid.svg";
  icon.setAttribute('src', src);
  icon.id = 'iconRules';
  var modeRules = document.createElement("div");
  modeRules.id = "modeRules";
  var modeText = document.createTextNode("Mode Rules");
  modeRules.appendChild(icon);
  modeRules.appendChild(modeText);
  divRulesContainer.appendChild(modeRules);
  divRulesContainer.appendChild(divRules);
  return divRulesContainer;
}

var _default = gameRules;
exports.default = _default;
},{}],"src/components/gameRules/gameRulesText.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var rulesText = {
  people: "You have one minute (1m) to answer as many questions as possible. During the game you need to select what character from Star Wars is showed in the picture (Jar Jar Binks right now).",
  vehicles: "You have one minute (1m) to answer as many questions as possible. During the game you need to select what vehicle from Star Wars is showed in the picture.",
  starships: "You have one minute (1m) to answer as many questions as possible. During the game you need to select what starship from Star Wars is showed in the picture."
};
var _default = rulesText;
exports.default = _default;
},{}],"src/components/question/question.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function gameQuestion(text) {
  var divQuestion = document.createElement("div");
  divQuestion.className = "title";
  var pQuestion = document.createElement("p");
  pQuestion.id = "question";
  pQuestion.innerHTML = text;
  divQuestion.appendChild(pQuestion);
  return divQuestion;
}

;
var _default = gameQuestion;
exports.default = _default;
},{}],"src/components/question/questionText.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var questionText = {
  people: "Who is this character?",
  vehicles: "Do you recognize this vehicle?",
  starships: "Do you recognize this starship?"
};
var _default = questionText;
exports.default = _default;
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
},{}],"src/components/hallOfFame/hallOfFame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _localStorage = _interopRequireDefault(require("../localStorage/localStorage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showHallOfFame(text) {
  var fameContainer = document.createElement('div');
  fameContainer.classList.add('fame-container');
  var pFame = document.createElement('p');
  pFame.classList.add('fame-paragraph');
  pFame.innerText = text;
  fameContainer.appendChild(pFame);
  var ranking = document.createElement('div');
  ranking.classList.add('ranking');
  var mode = document.querySelector('mode-change').getCurrentMode();
  var rankingValues = JSON.parse(localStorage.getItem('ranking')) || (0, _localStorage.default)();
  ranking.innerHTML = "\n        <ul>\n            <li class=\"bold\">Place</li>\n            <li>1st</li>\n            <li>2nd</li>\n            <li>3rd</li>\n        </ul>\n\n        <ul class=\"ranking-people\">\n            <li class=\"bold\">Player</li>\n            <li>".concat(rankingValues[mode.toLowerCase()][0].nick, "</li>\n            <li>").concat(rankingValues[mode.toLowerCase()][1].nick, "</li>\n            <li>").concat(rankingValues[mode.toLowerCase()][2].nick, "</li>\n        </ul>\n\n        <ul class=\"ranking-score\">\n            <li class=\"bold\">Answered</li>\n            <li>").concat(rankingValues[mode.toLowerCase()][0].correctAnswers, "/").concat(rankingValues[mode.toLowerCase()][0].answers, "</li>\n            <li>").concat(rankingValues[mode.toLowerCase()][1].correctAnswers, "/").concat(rankingValues[mode.toLowerCase()][1].answers, "</li>\n            <li>").concat(rankingValues[mode.toLowerCase()][2].correctAnswers, "/").concat(rankingValues[mode.toLowerCase()][2].answers, "</li>\n        </ul>\n    \n    ");
  fameContainer.appendChild(ranking);
  return fameContainer;
}

var _default = showHallOfFame;
exports.default = _default;
},{"../localStorage/localStorage.js":"src/components/localStorage/localStorage.js"}],"src/components/hallOfFame/hallOfFameText.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var fameText = {
  people: "Mode Ranking (People)",
  vehicles: "Mode Ranking (Vehicles)",
  starships: "Mode Ranking (Starships)"
};
var _default = fameText;
exports.default = _default;
},{}],"src/components/imgContainer/img.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.img = img;

function img(src) {
  var divImg = document.createElement("div");
  divImg.className = "img-container";
  var img = document.createElement("img");
  img.setAttribute('src', src);
  divImg.appendChild(img);
  return divImg;
}
},{}],"src/components/imgContainer/imgSrc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var imgSrc = {
  people: '../../../static/assets/img/modes/people/36.jpg',
  vehicles: '../../../static/assets/img/modes/vehicles/14.jpg',
  starships: '../../../static/assets/img/modes/starships/10.jpg'
};
var _default = imgSrc;
exports.default = _default;
},{}],"src/components/modeChange/modeChange.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gameRules = _interopRequireDefault(require("../gameRules/gameRules.js"));

var _gameRulesText = _interopRequireDefault(require("../gameRules/gameRulesText.js"));

var _question = _interopRequireDefault(require("../question/question.js"));

var _questionText = _interopRequireDefault(require("../question/questionText.js"));

var _hallOfFame = _interopRequireDefault(require("../hallOfFame/hallOfFame.js"));

var _hallOfFameText = _interopRequireDefault(require("../hallOfFame/hallOfFameText.js"));

var _img = require("../imgContainer/img.js");

var _imgSrc = _interopRequireDefault(require("../imgContainer/imgSrc.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var modeChange = function modeChange() {
  var template = document.createElement('template');
  template.innerHTML = "\n        <style>\n            .menu{\n                background-color: transparent;\n                grid-area: modes-list;\n            }\n            .modes-list{\n                list-style-type: none;\n                display: flex;\n                justify-content: space-around;\n                align-items: center;\n                padding: 0;\n            }\n            \n            .modes-list li{\n                width: 28%;\n                padding: 0;\n                border-radius: 16px;\n                text-align: center;\n                font-family: Montserrat;\n                font-weight: 600;\n                font-size: 1.5rem;\n                line-height: 51px;\n                color: #FFFFFF;\n                background-color: #050018;\n                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 4px 40px rgba(255, 0, 0, 0.9);\n            }\n            \n            .modes-list li.dark{\n                box-shadow: 6px 6px 6px rgba(255, 0, 0, 0.25), 10px 10px 90px #FF0000;\n            }\n            \n            .modes-list li:hover{\n                cursor: pointer;\n            }\n\n            @media only screen and (max-width: 812px) and (orientation: landscape){\n                \n                .modes-list li{\n                    font-size: 1.15em;\n                    line-height: 1.5em;\n                    padding: 5px;\n                    box-sizing: border-box;\n                }\n            }\n            @media only screen and (min-device-width: 320px) and (max-device-width: 480px){\n                \n                .modes-list{\n                    margin: 5px;\n                }\n                .modes-list li{\n                    font-size: 1em;\n                    line-height: 1em;\n                    padding: 5px;\n                }\n            }\n\n        </style>\n        <div class=\"menu\">\n            <ul class=\"modes-list\">\n                <li class=\"dark\">People</li>\n                <li>Vehicles</li>\n                <li>Starships</li>\n            </ul>\n        </div>\n    ";

  var modeChangeComponent = /*#__PURE__*/function (_HTMLElement) {
    _inherits(modeChangeComponent, _HTMLElement);

    var _super = _createSuper(modeChangeComponent);

    function modeChangeComponent() {
      var _this;

      _classCallCheck(this, modeChangeComponent);

      _this = _super.call(this);
      _this.currentMode = 'People'; //domyślnie wybrany jest tryb People

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(template.content.cloneNode(true));

      return _this;
    }

    _createClass(modeChangeComponent, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        var modes = this.shadowRoot.querySelectorAll('li');
        modes.forEach(function (mode) {
          mode.addEventListener('click', function (e) {
            _this2.currentMode = e.target.innerText; //  alert('Wybrano tryb: ' + this.currentMode);

            modes.forEach(function (mode) {
              return mode.classList.remove('dark');
            }); //usuwamy klasę dark ze wszystkich elementów li

            e.target.classList.add('dark'); //dodajemy klasę dark do klikniętego elementu li

            var gameRulesContainer = document.body.querySelector('.rules');
            var questionContainer = document.body.querySelector('.title');
            var imageContainer = document.body.querySelector('.img-container');
            var hallOfFameContainer = document.body.querySelector('.fame-container');

            if (!document.querySelector('.questions')) {
              if (gameRulesContainer != null) document.body.replaceChild((0, _gameRules.default)(_gameRulesText.default[_this2.currentMode.toLowerCase()]), gameRulesContainer);
              if (hallOfFameContainer != null) document.body.replaceChild((0, _hallOfFame.default)(_hallOfFameText.default[_this2.currentMode.toLowerCase()]), hallOfFameContainer);
              document.body.replaceChild((0, _question.default)(_questionText.default[_this2.currentMode.toLowerCase()]), questionContainer);
              document.body.replaceChild((0, _img.img)(_imgSrc.default[_this2.currentMode.toLowerCase()]), imageContainer);
            } // switch (this.currentMode){
            //     case 'People':
            //       //console.log(gameRules(rulesText.people));
            //       gameQuestion(questionText.people);
            //       if(gameRulesContainer != null && !(document.querySelector('.questions')))
            //         document.body.replaceChild(gameRules(rulesText.people), gameRulesContainer);
            //       if(!(document.querySelector('.questions')))
            //         document.body.replaceChild(gameQuestion(questionText.people), questionContainer);
            //       if(hallOfFameContainer != null && !(document.querySelector('.questions')))
            //         document.body.replaceChild(showHallOfFame(fameText.people), hallOfFameContainer);
            //       if(!(document.querySelector('.questions')))
            //         document.body.replaceChild(img(imgSrc.people), imageContainer);
            //       break;
            //     case 'Vehicles':
            //       gameRules(rulesText.vehicles);
            //       gameQuestion(questionText.vehivles);
            //       if(gameRulesContainer != null && !(document.querySelector('.questions')))
            //         document.body.replaceChild(gameRules(rulesText.vehicles), gameRulesContainer);
            //       if(!(document.querySelector('.questions')))
            //         document.body.replaceChild(gameQuestion(questionText.vehicles), questionContainer);
            //       if(hallOfFameContainer != null && !(document.querySelector('.questions')))
            //         document.body.replaceChild(showHallOfFame(fameText.vehicles), hallOfFameContainer);
            //       if(!(document.querySelector('.questions')))
            //         document.body.replaceChild(img(imgSrc.vehicles), imageContainer);
            //       break;
            //     case 'Starships':
            //        gameRules(rulesText.starships);
            //        gameQuestion(questionText.starships);
            //        if(gameRulesContainer != null && !(document.querySelector('.questions')))
            //         document.body.replaceChild(gameRules(rulesText.starships), gameRulesContainer);
            //        if(!(document.querySelector('.questions')))
            //         document.body.replaceChild(gameQuestion(questionText.starships), questionContainer);
            //        if(hallOfFameContainer != null && !(document.querySelector('.questions')))
            //         document.body.replaceChild(showHallOfFame(fameText.starships), hallOfFameContainer);
            //        if(!(document.querySelector('.questions')))
            //         document.body.replaceChild(img(imgSrc.starships), imageContainer);
            //        break; 
            // }

          });
        });
      }
    }, {
      key: "getCurrentMode",
      value: function getCurrentMode() {
        return this.currentMode;
      }
    }]);

    return modeChangeComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  window.customElements.define('mode-change', modeChangeComponent);
}; // modeChange();


var _default = modeChange;
exports.default = _default;
},{"../gameRules/gameRules.js":"src/components/gameRules/gameRules.js","../gameRules/gameRulesText.js":"src/components/gameRules/gameRulesText.js","../question/question.js":"src/components/question/question.js","../question/questionText.js":"src/components/question/questionText.js","../hallOfFame/hallOfFame.js":"src/components/hallOfFame/hallOfFame.js","../hallOfFame/hallOfFameText.js":"src/components/hallOfFame/hallOfFameText.js","../imgContainer/img.js":"src/components/imgContainer/img.js","../imgContainer/imgSrc.js":"src/components/imgContainer/imgSrc.js"}],"src/components/buttons/rulesBtn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gameRules = _interopRequireDefault(require("../gameRules/gameRules.js"));

var _gameRulesText = _interopRequireDefault(require("../gameRules/gameRulesText.js"));

var _hallOfFameBtn = _interopRequireDefault(require("../buttons/hallOfFameBtn.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rulesButton() {
  var btn = document.createElement('button');
  btn.classList.add('hall-of-fame-btn');
  btn.appendChild(document.createTextNode('Rules'));
  var currentMode = document.querySelector('mode-change').getCurrentMode();
  btn.addEventListener('click', function () {
    document.body.replaceChild((0, _gameRules.default)(_gameRulesText.default[currentMode.toLowerCase()]), document.querySelector('.fame-container'));
    document.body.replaceChild((0, _hallOfFameBtn.default)(), document.querySelector('.yellow-button'));
  });
  return btn;
}

var _default = rulesButton;
exports.default = _default;
},{"../gameRules/gameRules.js":"src/components/gameRules/gameRules.js","../gameRules/gameRulesText.js":"src/components/gameRules/gameRulesText.js","../buttons/hallOfFameBtn.js":"src/components/buttons/hallOfFameBtn.js"}],"src/components/buttons/hallOfFameBtn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hallOfFame = _interopRequireDefault(require("../hallOfFame/hallOfFame.js"));

var _hallOfFameText = _interopRequireDefault(require("../hallOfFame/hallOfFameText.js"));

var _rulesBtn = _interopRequireDefault(require("../buttons/rulesBtn.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hallOfFameButton() {
  var yellowButtonContainer = document.createElement("div");
  yellowButtonContainer.className = "yellow-button";
  var btn = document.createElement('button');
  btn.classList.add('hall-of-fame-btn');
  btn.appendChild(document.createTextNode('Hall of Fame'));
  yellowButtonContainer.appendChild(btn);
  var currentMode = document.querySelector('mode-change').getCurrentMode();
  btn.addEventListener('click', function () {
    document.body.replaceChild((0, _hallOfFame.default)(_hallOfFameText.default[currentMode.toLowerCase()]), document.querySelector('.rules'));
    yellowButtonContainer.replaceChild((0, _rulesBtn.default)(), btn);
  });
  return yellowButtonContainer;
}

var _default = hallOfFameButton;
exports.default = _default;
},{"../hallOfFame/hallOfFame.js":"src/components/hallOfFame/hallOfFame.js","../hallOfFame/hallOfFameText.js":"src/components/hallOfFame/hallOfFameText.js","../buttons/rulesBtn.js":"src/components/buttons/rulesBtn.js"}],"src/components/redButton/redButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function redButton(text) {
  var redButtonContainer = document.createElement("div");
  redButtonContainer.className = "red-button";
  var redButtonText = document.createElement("p");
  redButtonText.innerHTML = text;
  redButtonContainer.appendChild(redButtonText);
  return redButtonContainer;
}

var _default = redButton;
exports.default = _default;
},{}],"src/components/logoStarWars/logo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function logo() {
  var divLogo = document.createElement("div");
  divLogo.className = "logo";
  var imgLogo = document.createElement("img"); // const src = "../../../static/assets/ui/StarWarsLogo.png";

  var src = "../../../../Projekt-2-quiz/static/assets/ui/StarWarsLogo.png";
  imgLogo.setAttribute('src', src); // reload:

  function reload() {
    reload = location.reload();
  }

  imgLogo.addEventListener("click", reload);
  divLogo.appendChild(imgLogo);
  return divLogo;
}

var _default = logo;
exports.default = _default;
},{}],"src/components/mainMenu/mainMenu.js":[function(require,module,exports) {
"use strict";

var _gameRules = _interopRequireDefault(require("../gameRules/gameRules.js"));

var _modeChange = _interopRequireDefault(require("../modeChange/modeChange.js"));

var _question = _interopRequireDefault(require("../question/question.js"));

var _gameRulesText = _interopRequireDefault(require("../gameRules/gameRulesText.js"));

var _questionText = _interopRequireDefault(require("../question/questionText.js"));

var _hallOfFameBtn = _interopRequireDefault(require("../buttons/hallOfFameBtn.js"));

var _img = require("../imgContainer/img.js");

var _redButton = _interopRequireDefault(require("../redButton/redButton.js"));

var _logo = _interopRequireDefault(require("../logoStarWars/logo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainMenu = function mainMenu() {
  (0, _modeChange.default)();
  document.body.appendChild((0, _question.default)(_questionText.default.people));
  document.body.appendChild((0, _gameRules.default)(_gameRulesText.default.people));
  document.body.appendChild((0, _img.img)('../../../static/assets/img/modes/people/36.jpg'));
  document.body.appendChild((0, _redButton.default)("PLAY THE GAME"));
  document.body.appendChild((0, _hallOfFameBtn.default)());
  document.body.appendChild((0, _logo.default)());
};

mainMenu();
},{"../gameRules/gameRules.js":"src/components/gameRules/gameRules.js","../modeChange/modeChange.js":"src/components/modeChange/modeChange.js","../question/question.js":"src/components/question/question.js","../gameRules/gameRulesText.js":"src/components/gameRules/gameRulesText.js","../question/questionText.js":"src/components/question/questionText.js","../buttons/hallOfFameBtn.js":"src/components/buttons/hallOfFameBtn.js","../imgContainer/img.js":"src/components/imgContainer/img.js","../redButton/redButton.js":"src/components/redButton/redButton.js","../logoStarWars/logo.js":"src/components/logoStarWars/logo.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/components/mainMenu/mainMenu.js"], null)
//# sourceMappingURL=/mainMenu.0ca17a04.js.map