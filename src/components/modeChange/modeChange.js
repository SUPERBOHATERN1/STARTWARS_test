import gameRules from '../gameRules/gameRules.js'
import rulesText from '../gameRules/gameRulesText.js'
import gameQuestion from '../question/question.js';
import questionText from '../question/questionText.js';

const modeChange = () => {
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            .menu{
                margin-top: 1rem;
                background-color: white;
                padding: 2.5rem 1rem;
                box-shadow: 2px 2px 15px darkred;
                border-radius: 20px;
            }
            .modes-list{
                list-style-type: none;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            
            .modes-list li{
                font-size: 1.5rem;
                color: darkgrey;
            }
            
            .modes-list li.dark{
                color: black;
            }
            
            .modes-list li:hover{
                cursor: pointer;
                color: black;
            }
        </style>
        <div class="menu">
            <ul class="modes-list">
                <li class="dark">People</li>
                <li>Vehicles</li>
                <li>Starships</li>
            </ul>
        </div>
    `;

    class modeChangeComponent extends HTMLElement {
        constructor(){
            super();

            this.currentMode = 'People';    //domyślnie wybrany jest tryb People

            this.attachShadow({ mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        connectedCallback(){
            const modes = this.shadowRoot.querySelectorAll('li');
            
            modes.forEach(mode => {
                mode.addEventListener('click', (e) => {
                    this.currentMode = e.target.innerText;
                  //  alert('Wybrano tryb: ' + this.currentMode);
                    
                    modes.forEach(mode => mode.classList.remove('dark'));   //usuwamy klasę dark ze wszystkich elementów li
                    e.target.classList.add('dark');   //dodajemy klasę dark do klikniętego elementu li
                   
                    const gameRulesContainer = document.body.querySelector('.rules');
                    const questionContainer = document.body.querySelector('.title');
                    
                    switch (this.currentMode){
                        case 'People':
                          console.log(gameRules(rulesText.people));
                          gameQuestion(questionText.people);
                          document.body.replaceChild(gameRules(rulesText.people), gameRulesContainer);
                          document.body.replaceChild(gameQuestion(questionText.people), questionContainer);
                          break;
                        case 'Vehicles':
                          gameRules(rulesText.vehicles);
                          gameQuestion(questionText.vehivles);
                          document.body.replaceChild(gameRules(rulesText.vehicles), gameRulesContainer);
                          document.body.replaceChild(gameQuestion(questionText.vehicles), questionContainer);
                          break;
                        case 'Starships':
                           gameRules(rulesText.starships);
                           gameQuestion(questionText.starships);
                           document.body.replaceChild(gameRules(rulesText.starships), gameRulesContainer);
                           document.body.replaceChild(gameQuestion(questionText.starships), questionContainer);
                           break;
                    }

                })
            })
        }

        getCurrentMode(){
            return this.currentMode;
        }
    }

    window.customElements.define('mode-change', modeChangeComponent);
}

// modeChange();

export default modeChange;