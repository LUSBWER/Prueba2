document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DATA STRUCTURE ---
    const courseData = [
        {
            module: 1,
            title: "Conceptos Fundamentales de Red",
            summary: "Cubre las definiciones de Internet, extranet, red de computadoras. Medios de transmisión y redes convergentes.",
            questions: [
                { type: "true_false", text: "¿El cobre, fibra y el acceso inalámbrico son los principales accesos de red?", answer: "Verdadero", justification: "Explicación: Estos son los medios de transmisión más comunes: Cobre: Cableado de par trenzado (ej. Ethernet). Fibra óptica: Mayor velocidad y ancho de banda. Inalámbrico: Wi-Fi, redes móviles (4G/5G)." },
                { type: "multiple_choice", text: "¿Cuál es la descripción de Internet?", answer: "Internet es una colección de redes públicas y privadas interconectadas, con una estructura jerárquica en capas para servicios de direccionamiento, designación y conectividad", options: ["Es una red única y centralizada gestionada por un solo organismo.", "Es un software para compartir archivos entre computadoras.", "Internet es una colección de redes públicas y privadas interconectadas, con una estructura jerárquica en capas para servicios de direccionamiento, designación y conectividad", "Es un tipo de red local que solo funciona en un edificio."], justification: "" },
                { type: "multiple_choice", text: "¿Qué es una extranet?", answer: "Es una red privada que permite acceso seguro a proveedores, clientes o colaboradores externos, utilizando tecnologías como VPNs o autenticación", options: ["Es una red completamente pública y sin seguridad.", "Es otro nombre para la red interna de una empresa (intranet).", "Es una red privada que permite acceso seguro a proveedores, clientes o colaboradores externos, utilizando tecnologías como VPNs o autenticación", "Es una red social para compartir fotos y videos."], justification: "" },
                { type: "multiple_choice", text: "¿Qué es una red de computadores?", answer: "Es un conjunto de computadoras autónomas interconectadas a través de una subred de comunicación", options: ["Es un grupo de computadoras que no pueden compartir información.", "Es una sola computadora muy potente con muchos usuarios.", "Es un conjunto de computadoras autónomas interconectadas a través de una subred de comunicación", "Es el software que permite navegar por internet."], justification: "Complemento: Permiten compartir recursos (datos, impresoras, etc.) y servicios (internet, correo)." },
                { type: "true_false", text: "¿Las redes convergentes eliminan la necesidad de redes separadas para voz, video y datos?", answer: "Verdadero", justification: "Detalle: Usan una misma infraestructura (ej.: VoIP sobre IP)." }
            ]
        },
        {
            module: 2,
            title: "Modelo OSI y Capas",
            summary: "Explora las funciones de las capas de Sesión, Enlace y Aplicación. Encapsulamiento y el rol de los patrones de trama.",
            questions: [
                { type: "true_false", text: "¿La capa de sesión se encarga del control de procesos de usuarios entre capas adyacentes?", answer: "Falso", justification: "Corrección: La capa de sesión (capa 5 del modelo OSI) gestiona la comunicación entre capas correspondientes en diferentes dispositivos (ej. establecimiento, mantenimiento y terminación de sesiones)." },
                { type: "true_false", text: "¿La capa de enlace en el modelo OSI opera con un patrón de trama para delimitar la frecuencia de bits que viajarán por la capa física?", answer: "Verdadero", justification: "Aclaración: La capa de enlace (capa 2) delimita tramas (no \"frecuencia de bits\") agregando encabezados y trailers (como direcciones MAC y FCS para detección de errores)." },
                { type: "short_answer", text: "¿Qué capa del modelo OSI se preocupa por el significado de los datos?", answer: "Capa de aplicación (capa 7)", justification: "Ejemplo: HTTP, FTP o SMTP interpretan datos para el usuario." },
                { type: "short_answer", text: "¿La capa de sesión sirve a la capa de...?", answer: "Presentación", justification: "" }
            ]
        },
        {
            module: 3,
            title: "Direccionamiento y Subnetting",
            summary: "Cubre el cálculo de máscaras, direcciones de red, número de subredes y IPs válidas. Direcciones MAC y rangos de IPs privadas.",
            questions: [
                { type: "short_answer", text: "Determine la máscara en forma decimal para una dirección IP que tiene 13 bits para la parte de red.", answer: "255.248.0.0", justification: "" },
                { type: "short_answer", text: "¿A cuántas subredes pertenece 20.20.0.0/16?", answer: "256", justification: "" },
                { type: "short_answer", text: "¿Cuántas IPs válidas tiene una subred con máscara /19?", answer: "8190", justification: "" },
                { type: "short_answer", text: "¿Dirección de red de 50.80.31.32/18?", answer: "50.80.0.0", justification: "Método: Los primeros 18 bits definen la red." },
                { type: "true_false", text: "¿La MAC tiene 48 bits (6 hex. para fabricante + 3 octetos para tarjeta)?", answer: "Verdadero", justification: "Estructura: 24 bits (OUI) + 24 bits (NIC). Ejemplo: 00:1A:2B:3C:4D:5E." },
                { type: "short_answer", text: "¿Subredes posibles en clase B con máscara 255.255.248.0?", answer: "32", justification: "Cálculo: 2^(21-16)=32 (bits prestados para subred)." },
                { type: "short_answer", text: "¿Rango de direcciones válidas en la primera red privada clase C?", answer: "192.168.0.1;192.168.255.254", justification: "" },
                { type: "short_answer", text: "Para Obtener 7 subredes de una IP dada cuantos bits se necesitan?", answer: "3", justification: "" },
                { type: "true_false", text: "¿La MAC destino cambia en el trayecto?", answer: "Falso", justification: "Excepción: En NAT o routers, pero generalmente la MAC cambia en cada salto (solo la IP destino se mantiene si no hay NAT)." }
            ]
        },
        {
            module: 4,
            title: "Topologías y Tecnologías de Red",
            summary: "Cubre las redes punto a punto, topología en anillo, conmutación de paquetes y circuitos, y mecanismos de confiabilidad.",
            questions: [
                { type: "true_false", text: "¿En las redes punto a punto la información siempre va directamente del origen al destino sin pasar por máquinas intermedias?", answer: "Falso", justification: "Razón: Aunque el concepto sugiere conexión directa, en la práctica suelen intervenir dispositivos como routers o switches para enrutar los datos." },
                { type: "true_false", text: "¿Las redes con topología física en anillo y lógica en anillo utilizan un acceso controlado al medio?", answer: "Verdadero", justification: "Detalle: Usan métodos como Token Passing para controlar el acceso al medio y evitar colisiones (ej. redes Token Ring)." },
                { type: "multiple_choice", text: "¿Cuál NO es una opción de conexión a internet para usuarios remotos?", answer: "Líneas arrendadas dedicadas", options: ["DSL", "Wi-Fi Móvil", "Líneas arrendadas dedicadas", "Acceso Dial-up"], justification: "Razón: Son para empresas con tráfico constante, no para usuarios remotos ocasionales (ellos usan DSL, móvil, Wi-Fi)." },
                { type: "short_answer", text: "Switch y puntos de acceso inalámbrico son dispositivos de...", answer: "Acceso", justification: "Explicación: Conectan dispositivos finales a la red (ej.: PCs a un switch, celulares a un AP Wi-Fi)." },
                { type: "true_false", text: "¿El cable UTP es más sensible a interferencias electromagnéticas que otros medios?", answer: "Falso", justification: "Comparación: El STP o la fibra óptica son más resistentes a interferencias." },
                { type: "true_false", text: "¿Las redes tolerantes a fallos usan enlaces redundantes?", answer: "Verdadero", justification: "Objetivo: Evitan interrupciones (ej.: múltiples rutas entre routers)." },
                { type: "multiple_choice", text: "¿Característica clave de la conmutación de paquetes?", answer: "No hay una ruta fija; los paquetes se enrutan dinámicamente", options: ["Se establece un circuito dedicado antes de enviar.", "Todos los paquetes siguen la misma ruta siempre.", "No hay una ruta fija; los paquetes se enrutan dinámicamente", "La red garantiza la entrega ordenada de los paquetes."], justification: "" },
                { type: "multiple_choice", text: "¿Característica distintiva de una MAN?", answer: "Soporta voz, datos y se integra con redes de TV por cable", options: ["Cubre un área geográfica pequeña como una casa.", "Es exclusivamente para comunicación militar.", "Soporta voz, datos y se integra con redes de TV por cable", "Utiliza solo tecnología inalámbrica."], justification: "" },
                { type: "true_false", text: "¿Las WAN son siempre punto a punto?", answer: "falso", justification: "Ejemplo: Las WAN también usan tecnologías como MPLS o Frame Relay." },
                { type: "true_false", text: "¿Las LAN inalámbricas no necesitan cumplir requisitos de LAN cableadas?", answer: "Falso", justification: "Razón: Deben garantizar seguridad, ancho de banda y baja latencia, al igual que las cableadas." },
                { type: "multiple_select", text: "¿Tipos principales de tecnologías de transmisión ( seleccione 2)?", answers: ["Redes de difusión (ej.: Ethernet, Wi-Fi).", "Redes punto a punto (ej.: PPP, Frame Relay)."], options: ["Redes de difusión (ej.: Ethernet, Wi-Fi).", "Redes punto a punto (ej.: PPP, Frame Relay).", "Redes de conmutación de circuitos.", "Redes jerárquicas."], select_count: 2, justification: "" },
                { type: "true_false", text: "¿En conmutación por circuitos se dedica un circuito incluso sin comunicación?", answer: "Verdadero", justification: "Ejemplo: Llamadas telefónicas tradicionales." },
                { type: "true_false", text: "¿En P2P todos los dispositivos tienen igual capacidad?", answer: "Verdadero", justification: "Concepto: No hay clientes/servidores fijos (ej.: BitTorrent)." },
                { type: "true_false", text: "¿Una intranet es solo para proveedores/clientes?", answer: "Falso", justification: "Aclaración: Las intranets son para uso interno (empleados); las extranets incluyen externos." },
                { type: "multiple_choice", text: "¿En redes de difusión, ¿hacia dónde va la información?", answer: "Hacia una sola máquina (unicast), un grupo (multicast) o todas (broadcast)", options: ["Siempre a un servidor central.", "Únicamente a la siguiente máquina en el anillo.", "Hacia una sola máquina (unicast), un grupo (multicast) o todas (broadcast)", "Solo a dispositivos fuera de la red local."], justification: "" },
                { type: "true_false", text: "¿La interfaz RJ45 es un protocolo?", answer: "Falso", justification: "Aclaración: Es un conector físico (capa 1 del OSI)." },
                { type: "true_false", text: "¿Un cable UTP cruzado conecta dos hosts?", answer: "Verdadero.", justification: "Uso: Para conectar PCs directamente sin switch." },
                { type: "multiple_select", text: "¿Mecanismos para confiabilidad en redes? (seleccione 2)", answers: ["Detección de errores: CRC, checksum.", "Enrutamiento: Protocolos como OSPF, BGP."], options: ["Detección de errores: CRC, checksum.", "Enrutamiento: Protocolos como OSPF, BGP.", "Asignación de direcciones IP estáticas.", "Control de flujo por hardware."], select_count: 2, justification: "" }
            ]
        }
    ];

    // --- 2. STATE MANAGEMENT ---
    let currentUserState = {
        moduleScores: {},
        currentModuleId: null,
        currentQuizAnswers: []
    };

    // --- 3. DOM ELEMENTS ---
    const globalProgress = document.getElementById('global-progress');
    const moduleSelectionContainer = document.getElementById('module-selection-container');
    const moduleViewContainer = document.getElementById('module-view-container');
    const moduleTitle = document.getElementById('module-title');
    const moduleProgress = document.getElementById('module-progress');
    const moduleSummary = document.getElementById('module-summary');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const reviewModuleBtn = document.getElementById('review-module-btn');
    const moduleIntroContainer = document.getElementById('module-intro-container');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const resultScore = document.getElementById('result-score');
    const resultMessage = document.getElementById('result-message');
    const correctAnswersContainer = document.getElementById('correct-answers-container');
    const retryModuleBtn = document.getElementById('retry-module-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');

    // --- 4. CORE LOGIC ---

    function saveState() {
        localStorage.setItem('interactiveCourseState_Prueba2', JSON.stringify(currentUserState));
    }

    function loadState() {
        const savedState = localStorage.getItem('interactiveCourseState_Prueba2');
        if (savedState) {
            currentUserState = JSON.parse(savedState);
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function normalizeAnswer(answer) {
        if (typeof answer !== 'string') return '';
        // Converts to lower case, removes leading/trailing whitespace, removes accents, and finally removes any trailing punctuation (.,;).
        return answer.toLowerCase().trim().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[.,;]$/, "");
    }

    function renderModuleMenu() {
        moduleSelectionContainer.innerHTML = '<h2>Selecciona un Módulo</h2>';
        courseData.forEach(module => {
            const score = currentUserState.moduleScores[module.module];
            const button = document.createElement('button');
            button.innerText = `Módulo ${module.module}: ${module.title} ${score !== undefined ? `(Última nota: ${score}%)` : ''}`;
            button.dataset.moduleId = module.module;
            
            if (score !== undefined) {
                button.classList.add(score >= 70 ? 'completed-passed' : 'completed-failed');
            }

            moduleSelectionContainer.appendChild(button);
        });
        moduleSelectionContainer.classList.remove('hidden');
        moduleViewContainer.classList.add('hidden');
        updateGlobalProgress();
    }

    function updateGlobalProgress() {
        const completedModules = Object.keys(currentUserState.moduleScores).length;
        const totalModules = courseData.length;
        globalProgress.value = (completedModules / totalModules) * 100;
    }

    function selectModule(moduleId) {
        currentUserState.currentModuleId = moduleId;
        const moduleData = courseData.find(m => m.module === moduleId);

        moduleTitle.innerText = `Módulo ${moduleData.module}: ${moduleData.title}`;
        moduleSummary.innerText = moduleData.summary;

        moduleSelectionContainer.classList.add('hidden');
        moduleViewContainer.classList.remove('hidden');
        moduleIntroContainer.classList.remove('hidden');
        quizContainer.classList.add('hidden');
        resultsContainer.classList.add('hidden');
    }

    function startQuiz() {
        moduleIntroContainer.classList.add('hidden');
        quizContainer.innerHTML = '';
        quizContainer.classList.remove('hidden');
        
        const moduleData = courseData.find(m => m.module === currentUserState.currentModuleId);
        moduleData.questions.forEach((q, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'quiz-question';
            let inputHtml = '';

            if (q.type === 'multiple_select') {
                const shuffledOptions = shuffleArray([...q.options]);
                 inputHtml = shuffledOptions.map(opt => `
                    <div class="radio-option">
                         <input type="checkbox" id="q${index}_${normalizeAnswer(opt).replace(/[^a-zA-Z0-9]/g, '_')}" name="q${index}" value="${opt}">
                         <label for="q${index}_${normalizeAnswer(opt).replace(/[^a-zA-Z0-9]/g, '_')}">${opt}</label>
                    </div>
                `).join('');
            } else if (q.type === 'multiple_choice') {
                const shuffledOptions = shuffleArray([...q.options]);
                inputHtml = shuffledOptions.map(opt => `
                    <div class="radio-option">
                         <input type="radio" id="q${index}_${normalizeAnswer(opt).replace(/[^a-zA-Z0-9]/g, '_')}" name="q${index}" value="${opt}">
                         <label for="q${index}_${normalizeAnswer(opt).replace(/[^a-zA-Z0-9]/g, '_')}">${opt}</label>
                    </div>
                `).join('');
            } else if (q.type === 'true_false') {
                inputHtml = `
                    <div class="radio-option">
                        <input type="radio" id="q${index}_true" name="q${index}" value="Verdadero">
                        <label for="q${index}_true">Verdadero</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="q${index}_false" name="q${index}" value="Falso">
                        <label for="q${index}_false">Falso</label>
                    </div>`;
            } else { // short_answer
                inputHtml = `<input type="text" id="q${index}" name="q${index}" placeholder="Escribe tu respuesta aquí">`;
            }

            questionElement.innerHTML = `<p><b>${index + 1}.</b> ${q.text}</p>${inputHtml}`;
            quizContainer.appendChild(questionElement);
        });

        const submitButton = document.createElement('button');
        submitButton.innerText = 'Evaluar Respuestas';
        submitButton.id = 'submit-quiz-btn';
        quizContainer.appendChild(submitButton);
    }

    function submitQuiz() {
        const moduleData = courseData.find(m => m.module === currentUserState.currentModuleId);
        let correctCount = 0;
        currentUserState.currentQuizAnswers = [];

        moduleData.questions.forEach((q, index) => {
            let userAnswer, isCorrect = false;

            if (q.type === 'multiple_select') {
                const checkedInputs = Array.from(document.querySelectorAll(`[name="q${index}"]:checked`));
                const userAnswers = checkedInputs.map(input => input.value).sort();
                const correctAnswers = [...q.answers].sort();
                isCorrect = JSON.stringify(userAnswers) === JSON.stringify(correctAnswers) && userAnswers.length === q.select_count;
                userAnswer = userAnswers.join('; ');
            } else {
                const input = document.querySelector(`[name="q${index}"]:checked`) || document.getElementById(`q${index}`);
                userAnswer = input ? input.value : "";
                isCorrect = normalizeAnswer(userAnswer).toLowerCase() === normalizeAnswer(q.answer).toLowerCase();
            }

            if (isCorrect) {
                correctCount++;
            }
            currentUserState.currentQuizAnswers.push({ userAnswer: userAnswer, isCorrect });
        });

        const score = Math.round((correctCount / moduleData.questions.length) * 100);
        showResults(score);
    }

    function showResults(score) {
        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');

        const moduleId = currentUserState.currentModuleId;
        currentUserState.moduleScores[moduleId] = score;
        
        resultScore.innerText = `Tu Puntuación: ${score}%`;
        resultScore.className = score >= 70 ? 'correct' : 'incorrect';
        resultScore.classList.remove('hidden');

        correctAnswersContainer.innerHTML = '<h4>Respuestas Detalladas</h4>';
        const moduleData = courseData.find(m => m.module === moduleId);
        moduleData.questions.forEach((q, index) => {
            const answerInfo = currentUserState.currentQuizAnswers[index];
            const item = document.createElement('div');
            item.className = 'correct-answer-item';
            const justificationHTML = q.justification ? `<p class="justification">Justificación: ${q.justification}</p>` : '';
            const correctAnswerText = Array.isArray(q.answers) ? q.answers.join('; ') : q.answer;

            item.innerHTML = `
                <p>${index + 1}. ${q.text}</p>
                <p class="user-answer ${answerInfo.isCorrect ? 'correct' : 'incorrect'}">Tu respuesta: ${answerInfo.userAnswer || 'No respondida'}</p>
                <p class="correct">Respuesta correcta: ${correctAnswerText}</p>
                ${justificationHTML}
            `;
            correctAnswersContainer.appendChild(item);
        });

        if (score >= 70) {
            resultMessage.innerText = "¡Felicidades! Has APROBADO el módulo.";
            resultMessage.className = 'correct';
        } else {
            resultMessage.innerText = "REPROBADO. No has alcanzado el 70%. ¡Estudia las respuestas correctas y vuelve a intentarlo!";
            resultMessage.className = 'incorrect';
        }
        resultMessage.classList.remove('hidden');
        retryModuleBtn.classList.remove('hidden');

        saveState();
        updateGlobalProgress();
    }

    function showReview() {
        moduleIntroContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        resultScore.classList.add('hidden');
        resultMessage.classList.add('hidden');
        retryModuleBtn.classList.add('hidden');

        correctAnswersContainer.innerHTML = '<h3>Corrección del Módulo</h3>';
        const moduleId = currentUserState.currentModuleId;
        const moduleData = courseData.find(m => m.module === moduleId);

        moduleData.questions.forEach((q, index) => {
            const item = document.createElement('div');
            item.className = 'correct-answer-item';
            let optionsHtml = '';
            const correctAnswerText = Array.isArray(q.answers) ? q.answers.join('; ') : q.answer;

            if(q.type === 'multiple_choice' || q.type === 'multiple_select'){
                const correctAnswers = Array.isArray(q.answers) ? q.answers : [q.answer];
                optionsHtml = `<ul>${q.options.map(opt => `<li class="${correctAnswers.includes(opt) ? 'correct' : ''}">${opt}</li>`).join('')}</ul>`;
            }
            const justificationHTML = q.justification ? `<p class="justification">Justificación: ${q.justification}</p>` : '';

            item.innerHTML = `
                <p>${index + 1}. ${q.text}</p>
                <p class="correct">Respuesta correcta: ${correctAnswerText}</p>
                ${optionsHtml}
                ${justificationHTML}
            `;
            correctAnswersContainer.appendChild(item);
        });
    }

    // --- 5. EVENT LISTENERS ---
    moduleSelectionContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const moduleId = parseInt(e.target.dataset.moduleId, 10);
            selectModule(moduleId);
        }
    });

    startQuizBtn.addEventListener('click', startQuiz);
    reviewModuleBtn.addEventListener('click', showReview);

    quizContainer.addEventListener('click', (e) => {
        if (e.target.id === 'submit-quiz-btn') {
            submitQuiz();
        }
    });

    retryModuleBtn.addEventListener('click', () => {
        selectModule(currentUserState.currentModuleId);
    });

    backToMenuBtn.addEventListener('click', renderModuleMenu);

    // --- 6. INITIALIZATION ---
    function init() {
        loadState();
        renderModuleMenu();
    }

    init();
});