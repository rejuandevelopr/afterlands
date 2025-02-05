
// Dropdown JS
document.querySelectorAll('.custom-select').forEach(customSelect => {
    const selectedOption = customSelect.querySelector('.selected-option');
    const optionsContainer = customSelect.querySelector('.options-container');
    const options = customSelect.querySelectorAll('.option');
    const selectedText = selectedOption.querySelector('.selected-text img'); // Get the img element

    // Language-specific content for the entire page
    const content = {
        por: {
            hero: {
                quote: '“Além do horizonte, sua aventura começa...”',
                author: '— AfterLands',
                button: 'JUNTE-SE Ao NOSSO DISCORD'
            },
            nav: {
                home: 'home',
                shop: 'loja',
                map: 'mapa',
                wiki: 'wiki'
            },
            modal: {
                title: 'Ops!',
                message: 'Esta página se encontra em construção ou ainda não está disponível...',
                info: 'Para mais informações acesse:',
                link: 'dc.afterlands.com'
            },
            newWorld: {
                heading: 'Desperte para um Novo Mundo',
                paragraph1: 'Em um <span class="font-weight-700 color-base">futuro distante</span>, você desperta de uma longa hibernação em um <span class="font-weight-700">mundo desconhecido</span>. Sem memórias claras, você é um mero <br><span class="font-weight-800 color-base">Sobrevivente</span> que confia apenas na estranha companhia de <br><span class="font-weight-800 color-base">C.O.R.T.E.X.</span> para guiar você por esse <span class="font-weight-700"><i><span class="font-weight-600">N</span>ovo Mundo</i></span>.',
                paragraph2: 'Sua jornada o levará a <span class="font-weight-800 color-base">Alkaz, <span class="font-weight-500">o</span> "último refúgio da humanidade"</span>. Navegando por uma <span class="font-weight-700">sociedade dividida em classes</span>, desafiando o <br>sistema e desvendando mistérios, você lutará para se tornar a <span class="font-weight-700">peça-<br>chave</span> na sobrevivência de uma cidade que desafia a própria verdade.'
            },
            ownPath: {
                heading: 'Escolha seu próprio caminho',
                paragraph1: 'Em <span class="font-weight-600">Alkaz</span>, no decorrer de sua jornada, haverá <span class="font-weight-800 color-base">Três Grandes</span> <br><span class="font-weight-800 color-base">Organizações</span> que você poderá escolher, e elas determinarão não <br>só seu destino, mas também seu <span class="font-weight-700">estilo de gameplay</span>.',
                paragraph2: 'Existem <span class="font-weight-700 color-base">Três Rotas</span>, cada uma oferece uma experiência única, <br>onde suas decisões serão a chave para sua ascensão, seja para se <br>tornar o <span class="font-weight-800 color-base">Mestre dos Mistérios</span>, o <span class="font-weight-800 color-base">Monarca da Prosperidade</span> ou, <br>até mesmo, o temido <span class="font-weight-800 color-base">Deus da Guerra</span>...',
                buttons: ['Rota Da Fortuna', 'Rota Da Combate', 'Rota Da Exploração']
            },
            slider: [
                {
                    title: 'Sindicato',
                    subtitle: 'Rota da Fortuna',
                    quote: '"No jogo da política, a vitória <br>pertence àqueles que controlam <br>as peças"',
                    description: 'O <span class="font-weight-700">Sindicato</span> é uma organização <br>poderosa que atua nos bastidores de <br>Alkaz, dominando a economia e a <br>política da ilha, muitas vezes usando <br>métodos nem sempre lícitos...',
                    buttonText: 'ver mais'
                },
                {
                    title: 'Sombras',
                    subtitle: 'Rota do Combate',
                    quote: '“Aqui, os fracos caem e os <br>fortes se erguem como lendas”',
                    description: 'Donos do Mercado Negro e mestres <br>do submundo, os <span class="font-weight-700">Sombras</span> são <br>conhecidos por suas lutas <br>clandestinas, comércio de armas e por <br>seu lendário Leilão Central, sendo <br>respeitados e temidos por toda Alkaz.',
                    buttonText: 'ver mais'
                },
                {
                    title: 'Ordem da Verdade',
                    subtitle: 'Rota da Exploração',
                    quote: '“Somos a voz dos oprimidos, a luz na escuridão, a Ordem da Verdade.”',
                    description: 'A <span class="font-weight-700">Ordem da Verdade</span> é um grupo revolucionário dedicado à justiça e liberdade em Alkaz, desafiando o <br>governo e revelando segredos sombrios que os poderosos escondem <br>da população.',
                    buttonText: 'ver mais'
                }
            ],
            modals: [
                {
                    title: 'Ordem da Verdade',
                    subtitle: 'Rota da Exploração',
                    headings: {
                        recommended: 'recomendado para:',
                        motto: 'lema:',
                        favoritePosture: 'postura favorita:',
                        headquarters: 'QUARTEL GENERAL:',
                        history: 'história:'
                    },
                    recommended: 'Aventureiros e Curiosos de plantão.',
                    motto: '"Somos a voz dos oprimidos, a luz na escuridão, a Ordem da Verdade."',
                    favoritePosture: 'Altruísta',
                    headquarters: 'Antiga Capital (rumor)',
                    history: 'Em um tempo em que Alkaz parecia mergulhar nas sombras da corrupção, a Ordem da Verdade surgiu em resposta ao grito silencioso da população. Fundada por visionários e revolucionários, a Ordem assumiu a missão de libertar a ilha dos jogos de poder e manipulação das classes dominantes. Ao longo dos anos, tornou-se um farol para aqueles que buscam esperança e resistência. Movidos por sua visão revolucionária, seus membros se arriscam para desmascarar conspirações e defender a verdade e a liberdade — custe o que custar.'
                },
                {
                    title: 'Sombras',
                    subtitle: 'Rota do Combate',
                    headings: {
                        recommended: 'recomendado para:',
                        motto: 'lema:',
                        favoritePosture: 'postura favorita:',
                        headquarters: 'QUARTEL GENERAL:',
                        history: 'história:'
                    },
                    recommended: 'Jogadores competitivos e interessados em PvP',
                    motto: '"Aqui, os fracos caem e os fortes se erguem como lendas"',
                    favoritePosture: 'Audaciosa',
                    headquarters: 'Mercado Negro',
                    history: 'Nem todos os poderes em Alkaz se movem à luz do dia. Os Sombras, uma aliança dos antigos senhores do submundo, formaram um império oculto, manejando recursos que o governo jamais alcança. Seu famoso Leilão Central é um evento onde mercadorias raras e informações perigosas mudam de mãos. Com um pé no passado e outro no futuro, os Sombras representam a verdadeira face de Alkaz: feroz, ambiciosa e repleta de mistérios. A lealdade é seu preço, e os riscos, imensuráveis.'
                },
                {
                    title: 'Sindicato',
                    subtitle: 'Rota da Fortuna',
                    headings: {
                        recommended: 'recomendado para:',
                        motto: 'lema:',
                        favoritePosture: 'postura favorita:',
                        headquarters: 'QUARTEL GENERAL:',
                        history: 'história:'
                    },
                    recommended: 'Jogadores que gostam de Economia/Dinheiro',
                    motto: '"No jogo da política, a vitória pertence àqueles que controlam as peças"',
                    favoritePosture: 'Oportunista',
                    headquarters: 'Hotel Bellamount',
                    history: 'O Sindicato foi fundado pela ambição visionária dos Bellamount, uma das Cinco Grandes Famílias de Alkaz. Movidos pelo desejo de consolidar seu controle sobre a economia e política da ilha, os Bellamount criaram o Sindicato para estabelecer uma rede de influência e poder nos bastidores. Com o tempo, essa organização se tornou indispensável, atuando em todas as esferas de Alkaz e garantindo que os interesses dos mais poderosos fossem preservados. O Sindicato acredita que tudo pode ser negociado, desde que o preço certo seja pago...'
                }
            ],
            discoverUnknown: {
                heading: 'Desbrave o Desconhecido',
                paragraph1: `Em <span class="font-weight-700">Alkaz</span>, o <span class="font-weight-700">mundo está vivo</span> e repleto de segredos <br>esperando para serem desvendados. Enfrente os perigos da <br><span class="font-weight-700">Zona Vermelha</span>, lute contra <span class="font-weight-800 color-base">criaturas poderosas</span> e <span class="font-weight-800 color-base">desvende <br>histórias ocultas</span> nas <span class="font-weight-800 color-base">ruínas de uma antiga civilização</span>.`,
                paragraph2: `Em <span class="font-weight-700">AfterLands</span>, a exploração é uma jornada por si só, onde a <br>liberdade de escolha o levará a lugares que nem mesmo o <br>mais sábio dos exploradores poderia imaginar.`
            },
            connectSurvivors: {
                heading: 'conecte-se a sobreviventes',
                paragraph: `<span class="color-base">Prepare-se, <span class="font-weight-700">Sobrevivente!</span></span> O mundo de <span class="font-weight-700">AfterLands</span> está <br>esperando por você. Siga nossas <span class="color-base font-weight-700">redes sociais</span> para ficar por <br>dentro das <span class="color-base font-weight-600">últimas novidades e atualizações!</span> E não esqueça de <br>entrar em nosso <span class="color-base font-weight-700">Discord</span>, onde você poderá conhecer outros <br>Sobreviventes e começar a planejar suas futuras alianças e <br>aventuras que irão muito além das fronteiras de Alkaz...`
            },
            faq: {
                heading: 'perguntas frequentes',
                description: `Veja nosso <span class="font-weight-700">FAQ</span> e esclareça suas dúvidas do mundo de <span class="font-weight-700">AfterLands</span>`,
                questions: [
                    {
                        question: 'O que é AfterLands?',
                        answer: `<p><span class="font-weight-700">AfterLands</span> é um servidor de Minecraft que une o mini-game <span class="font-weight-700">RankUP com um RPG de mundo aberto</span>. Seus <span class="font-weight-700"><i>‘ranks’</i></span> refletem seu status social em uma sociedade pós-apocalíptica onde cada escolha molda seu destino.</p>`
                    },
                    {
                        question: 'Quais plataformas e versões suportadas?',
                        answer: `<p>Inicialmente será lançado apenas para <span class="font-weight-700">Minecraft: Java Edition</span> na versão <span class="font-weight-700">1.8.8</span>, mas, com <span class="font-weight-600">suporte</span> até as últimas versões. O principal motivo disso é trazer uma boa experiência para a comunidade de PvP e um bom desempenho para o servidor. Contudo, isso não quer dizer que não podemos mudar no futuro.</p>`
                    },
                    {
                        question: 'Como funciona o sistema de ranks e classes?',
                        answer: `<p>No After, os <span class="font-weight-700"><i>ranks</i></span> representam o seu status social dentro do jogo, indo de <span class="font-weight-700">Sobrevivente</span> até a <span class="font-weight-700">Imperador</span>. Cada classe possui três ranks, e para evoluir, você precisará de dinheiro, completar missões e aumentar sua fama. A fama e o rank são essenciais para ascender na sociedade de Alkaz, abrindo novas áreas, desafios e oportunidades exclusivas conforme eles crescem.</p>`
                    },
                    {
                        question: 'Como eu posso entrar e jogar?',
                        answer: `<p>Quando for lançado, você poderá entrar através do IP mc.afterlands.com utilizando preferencialmente a versão 1.8.8 para melhor experiência. Não será necessário o uso de mods para jogar. Mas lembre-se, o servidor ainda está em desenvolvimento então entre em nosso Discord para acompanhar as novidades.</p>`
                    },
                    {
                        question: 'Quando o servidor será lançado?',
                        answer: `<p>Embora ainda não tenhamos uma data oficial, estamos trabalhando incansavelmente para lançar o servidor o mais breve possível. Nossa previsão e meta atual é ter versões jogáveis (Alpha e Beta) disponíveis no início de 2025, com o lançamento completo previsto para o meio do ano.</p>`
                    }
                ]
            },
            footer: {
                disclaimer: "AfterLands não é um serviço oficial, afiliado ou associado à Microsoft ou Mojang AB.",
                rights: "&copy; 2024 AfterLands | Todos os Direitos Reservados.",
                developedBy: "Desenvolvido por <span>IceGames</span>"
            }

        },
        eng: {
            hero: {
                quote: '“Beyond the horizon, your adventure begins...”',
                author: '— AfterLands',
                button: 'JOIN OUR DISCORD'
            },
            nav: {
                home: 'Home',
                shop: 'Shop',
                map: 'Map',
                wiki: 'Wiki'
            },
            modal: {
                title: 'Oops!',
                message: 'This page is under construction or not available yet...',
                info: 'For more information, visit:',
                link: 'dc.afterlands.com'
            },
            newWorld: {
                heading: 'Awaken to a New World',
                paragraph1: 'In a <span class="font-weight-700 color-base">distant future</span>, you awaken from a long hibernation in an <span class="font-weight-700">unknown world</span>. With no clear memories, you are a mere <span class="font-weight-800 color-base">Survivor</span> relying solely <br>on the strange company of <span class="font-weight-800 color-base">C.O.R.T.E.X.</span> to guide you through this <br><span class="font-weight-700"><i><span class="font-weight-600">N</span>ew World</i></span>.',
                paragraph2: 'Your journey will lead you to <span class="font-weight-800 color-base">Alkaz, <span class="font-weight-500">the</span> "last refuge of humanity"</span>. Navigating through a <span class="font-weight-700">class-divided society</span>, challenging the system, <br>and unraveling mysteries, you will fight to become the <span class="font-weight-700">key-player</span> <br>in the survival of a city defying the very truth.'
            },
            ownPath: {
                heading: 'Choose Your Own Path',
                paragraph1: 'In <span class="font-weight-600">Alkaz</span>, throughout your journey, there will be <span class="font-weight-800 color-base">Three Great</span> <br><span class="font-weight-800 color-base">Organizations</span> you can choose from, and they will determine not <br>only your destiny but also your <span class="font-weight-700">gameplay style</span>.',
                paragraph2: 'There are <span class="font-weight-700 color-base">Three Paths</span>, each offering a unique experience, <br>where your decisions will be the key to your rise, whether to become <br>the <span class="font-weight-800 color-base">Master of Mysteries</span>, the <span class="font-weight-800 color-base">Monarch of Prosperity</span>, or even the feared <span class="font-weight-800 color-base">God of War</span>...',
                buttons: ['Path of Fortune', 'Path of Combat', 'Path of Exploration']
            },
            slider: [
                {
                    title: 'Union',
                    subtitle: 'Path of Fortune',
                    quote: '"In the game of politics, victory <br>belongs to those who control <br>the pieces"',
                    description: 'The <span class="font-weight-700">Union</span> is a powerful organization <br>operating behind the scenes of <br>Alkaz, dominating the economy and <br>politics of the island, often using <br>not-so-licit methods...',
                    buttonText: 'see more'
                },
                {
                    title: 'Shadows',
                    subtitle: 'Path of Combat',
                    quote: '“Here, the weak fall and the <br>strong rise as legends”',
                    description: 'Masters of the Black Market and the underworld, the <span class="font-weight-700">Shadows</span> are <br>renowned for their clandestine <br>fights, arms trade, and their <br>legendary Central Auction, being <br>respected and feared across Alkaz.',
                    buttonText: 'see more'
                },
                {
                    title: 'Order of Truth',
                    subtitle: 'Path of Exploration',
                    quote: '“We are the voice of the oppressed, the light in the darkness, the Order of Truth.”',
                    description: 'The <span class="font-weight-700">Order of Truth</span> is a revolutionary group dedicated to justice and freedom in Alkaz, challenging the <br>government and revealing dark secrets that the powerful hide from <br>the population.',
                    buttonText: 'see more'
                }
            ],
            modals: [
                {
                    title: 'Order of Truth',
                    subtitle: 'Path of Exploration',
                    headings: {
                        recommended: 'recommended for:',
                        motto: 'motto:',
                        favoritePosture: 'favorite posture:',
                        headquarters: 'HEADQUARTERS:',
                        history: 'history:'
                    },
                    recommended: 'Adventurers and Curious Explorers.',
                    motto: '"We are the voice of the oppressed, the light in the darkness, the Order of Truth."',
                    favoritePosture: 'Altruistic',
                    headquarters: 'Ancient Capital (rumor)',
                    history: 'In a time when Alkaz seemed to drown in the shadows of corruption, the Order of Truth emerged in response to the silent cry of the population. Founded by visionaries and revolutionaries, the Order took on the mission of freeing the island from the power plays and manipulations of the ruling classes. Over the years, it has become a beacon for those seeking hope and resistance. Driven by their revolutionary vision, its members risk everything to expose conspiracies and defend truth and freedom — at any cost.'
                },
                {
                    title: 'Shadows',
                    subtitle: 'Path of Combat',
                    headings: {
                        recommended: 'recommended for:',
                        motto: 'motto:',
                        favoritePosture: 'favorite posture:',
                        headquarters: 'HEADQUARTERS:',
                        history: 'history:'
                    },
                    recommended: 'Competitive players and PvP enthusiasts',
                    motto: '"Here, the weak fall and the strong rise as legends"',
                    favoritePosture: 'Bold',
                    headquarters: 'Black Market',
                    history: 'Not all powers in Alkaz operate in daylight. The Shadows, an alliance of former underworld lords, have formed a hidden empire, wielding resources the government can never reach. Their famous Central Auction is an event where rare goods and dangerous information change hands. With one foot in the past and the other in the future, the Shadows represent the true face of Alkaz: fierce, ambitious, and full of mysteries. Loyalty is their price, and the stakes are immeasurable.'
                },
                {
                    title: 'Union',
                    subtitle: 'Path of Fortune',
                    headings: {
                        recommended: 'recommended for:',
                        motto: 'motto:',
                        favoritePosture: 'favorite posture:',
                        headquarters: 'HEADQUARTERS:',
                        history: 'history:'
                    },
                    recommended: 'Players who enjoy Economy/Money mechanics',
                    motto: '"In the game of politics, victory belongs to those who control the pieces"',
                    favoritePosture: 'Opportunistic',
                    headquarters: 'Bellamount Hotel',
                    history: 'The Union was founded by the visionary ambition of the Bellamounts, one of the Five Great Families of Alkaz. Driven by their desire to consolidate control over the island\'s economy and politics, the Bellamounts created the Union to establish a network of influence and power behind the scenes. Over time, this organization became indispensable, operating in all spheres of Alkaz and ensuring that the interests of the most powerful were preserved. The Union believes that everything can be negotiated, as long as the right price is paid...'
                }
            ],
            discoverUnknown: {
                heading: 'Discover the Unknown',
                paragraph1: `In <span class="font-weight-700">Alkaz</span>, the <span class="font-weight-700">world is alive</span> and full of secrets <br>waiting to be unraveled. Face the dangers of the <br><span class="font-weight-700">Red Zone</span>, battle <span class="font-weight-800 color-base">powerful creatures</span>, and <span class="font-weight-800 color-base">uncover <br>hidden stories</span> in the <span class="font-weight-800 color-base">ruins of an ancient civilization</span>.`,
                paragraph2: `In <span class="font-weight-700">AfterLands</span>, exploration is a journey of its own, where <br>the freedom of choice will take you to places even <br>the wisest explorers could not imagine.`
            },
            connectSurvivors: {
                heading: 'connect with survivors',
                paragraph: `<span class="color-base">Get ready, <span class="font-weight-700">Survivor!</span></span> The world of <span class="font-weight-700">AfterLands</span> is waiting for you. <br>Follow our <span class="color-base font-weight-700">social media</span> to stay updated on the <span class="color-base font-weight-600">latest news <br>and updates!</span> And don't forget to join our <span class="color-base font-weight-700">Discord</span>, where <br>you can meet other Survivors and start planning your future <br>alliances and adventures that go far beyond the borders of Alkaz...`
            },
            faq: {
                heading: 'frequently asked questions',
                description: `Check out our <span class="font-weight-700">FAQ</span> to clear up any doubts about the world of <span class="font-weight-700">AfterLands</span>`,
                questions: [
                    {
                        question: 'What is AfterLands?',
                        answer: `<p><span class="font-weight-700">AfterLands</span> is a Minecraft server combining the <span class="font-weight-700">RankUP mini-game with an open-world RPG</span>. Your <span class="font-weight-700"><i>‘ranks’</i></span> reflect your social status in a post-apocalyptic society where every choice shapes your destiny.</p>`
                    },
                    {
                        question: 'What platforms and versions are supported?',
                        answer: `<p>Initially, it will launch exclusively for <span class="font-weight-700">Minecraft: Java Edition</span> version <span class="font-weight-700">1.8.8</span>, with <span class="font-weight-600">support</span> for the latest versions. The main goal is to provide a great experience for the PvP community and optimal server performance. However, this does not mean it can't change in the future.</p>`
                    },
                    {
                        question: 'How does the rank and class system work?',
                        answer: `<p>In AfterLands, <span class="font-weight-700"><i>ranks</i></span> represent your social status in the game, ranging from <span class="font-weight-700">Survivor</span> to <span class="font-weight-700">Emperor</span>. Each class has three ranks, and to progress, you'll need money, complete missions, and increase your fame. Fame and rank are essential to rising in Alkaz society, unlocking new areas, challenges, and exclusive opportunities as they grow.</p>`
                    },
                    {
                        question: 'How can I join and play?',
                        answer: `<p>Once launched, you can join using the IP mc.afterlands.com, preferably on version 1.8.8 for the best experience. No mods will be required to play. Remember, the server is still in development, so join our Discord to stay updated.</p>`
                    },
                    {
                        question: 'When will the server be released?',
                        answer: `<p>Although we don't have an official date yet, we are working tirelessly to launch the server as soon as possible. Our current estimate is to have playable versions (Alpha and Beta) available in early 2025, with a full release planned for mid-year.</p>`
                    }
                ]
            },
            footer: {
                disclaimer: "AfterLands is not an official service, affiliated, or associated with Microsoft or Mojang AB.",
                rights: "&copy; 2024 AfterLands | All Rights Reserved.",
                developedBy: "Developed by <span>IceGames</span>"
            }
        }
    };

    // Toggle the options container on click
    selectedOption.addEventListener('click', () => {
        optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
        customSelect.classList.toggle('active');
    });

    // Add click event for each option
    options.forEach(option => {
        option.addEventListener('click', () => {
            // Update the selected flag image
            const imgSrc = option.querySelector('img')?.getAttribute('src');
            if (imgSrc) {
                selectedText.setAttribute('src', imgSrc);
            }

            // Deselect all options and select the current one
            options.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            optionsContainer.style.display = 'none';
            customSelect.classList.remove('active');

            // Get selected language value
            const selectedValue = option.getAttribute('data-value');

            // Remove previously added classes for styling
            customSelect.classList.remove('selected-por', 'selected-eng');

            // Add class based on the selected value
            if (selectedValue === 'por') {
                customSelect.classList.add('selected-por');
            } else if (selectedValue === 'eng') {
                customSelect.classList.add('selected-eng');
            }

            if (selectedValue in content) {
                // Update hero section content
                const hero = content[selectedValue].hero;
                const quoteElement = document.querySelector('.afterland-quote p:first-child');
                const authorElement = document.querySelector('.afterland-quote p:last-child');
                const buttonElement = document.querySelector('.hero-btns-content');

                quoteElement.textContent = hero.quote;
                authorElement.textContent = hero.author;
                buttonElement.textContent = hero.button;

                // Update navigation links
                const nav = content[selectedValue].nav;
                document.querySelector('.nav-btns.active .nav-btn-font').textContent = nav.home;
                document.querySelector('.loja-btn .nav-btn-font').textContent = nav.shop;
                document.querySelector('.nav-btns[aria-label="Go to Map"] .nav-btn-font').textContent = nav.map;
                document.querySelector('.nav-btns[aria-label="Go to wiki"] .nav-btn-font').textContent = nav.wiki;

                // Update modal content
                const modal = content[selectedValue].modal;
                document.querySelector('.opsModal-content p:nth-child(1)').textContent = modal.title;
                document.querySelector('.opsModal-content p:nth-child(2)').textContent = modal.message;
                document.querySelector('.opsModal-content p:nth-child(3)').innerHTML =
                    `${modal.info} <span class="font-weight-700">${modal.link}</span>`;

                // Update New World section content
                const newWorld = content[selectedValue].newWorld;
                const newWorldHeading = document.querySelector('#newWorld h2');
                const newWorldParagraph1 = document.querySelector('#newWorld p:nth-of-type(1)');
                const newWorldParagraph2 = document.querySelector('#newWorld p:nth-of-type(2)');

                newWorldHeading.textContent = newWorld.heading;
                newWorldParagraph1.innerHTML = newWorld.paragraph1;
                newWorldParagraph2.innerHTML = newWorld.paragraph2;

                // Update Choose Your Own Path section
                const ownPath = content[selectedValue].ownPath;
                const ownPathHeading = document.querySelector('#ownPath h2');
                const ownPathParagraph1 = document.querySelector('#ownPath p:nth-of-type(1)');
                const ownPathParagraph2 = document.querySelector('#ownPath p:nth-of-type(2)');

                ownPathHeading.textContent = ownPath.heading;
                ownPathParagraph1.innerHTML = ownPath.paragraph1;
                ownPathParagraph2.innerHTML = ownPath.paragraph2;

                // Update
                document.querySelectorAll('.ownPath-btns .btn .ownPath-btn-content').forEach((btn, index) => {
                    btn.textContent = content[selectedValue].ownPath.buttons[index];
                });

                // Update
                document.querySelectorAll('.slider .card').forEach((card, index) => {
                    const sliderContent = content[selectedValue].slider[index];
                    card.querySelector('.path-conten-head').textContent = sliderContent.title;
                    card.querySelector('.path-conten-subhead').textContent = sliderContent.subtitle;
                    card.querySelector('.pat-title-1').innerHTML = sliderContent.quote;
                    card.querySelector('.pat-title-2').innerHTML = sliderContent.description;
                    card.querySelector('button[data-bs-toggle="modal"]').textContent = sliderContent.buttonText;
                });


                // Update
                document.querySelectorAll('.own-path-modal').forEach((modal, index) => {
                    const modalContent = content[selectedValue].modals[index];
                    modal.querySelector('.path-conten-head').textContent = modalContent.title;
                    modal.querySelector('span').textContent = modalContent.subtitle;
                    modal.querySelectorAll('.modal-body-left h5').forEach((heading, headingIndex) => {
                        heading.textContent = Object.values(modalContent.headings)[headingIndex];
                        heading.nextElementSibling.textContent = Object.values(modalContent)[headingIndex + 3]; // Start from recommended
                    });
                    modal.querySelector('.modal-body-right_content .mt-2').textContent = modalContent.history;
                });


                // Update
                const discoverUnknown = content[selectedValue].discoverUnknown;
                document.querySelector('.diagonal-section h2').textContent = discoverUnknown.heading;
                document.querySelector('.diagonal-section p:nth-of-type(1)').innerHTML = discoverUnknown.paragraph1;
                document.querySelector('.diagonal-section p:nth-of-type(2)').innerHTML = discoverUnknown.paragraph2;

                // Update
                const connectSurvivors = content[selectedValue].connectSurvivors;
                document.querySelector('#connectSurvivors h2').textContent = connectSurvivors.heading;
                document.querySelector('#connectSurvivors p').innerHTML = connectSurvivors.paragraph;


                // Update
                // Update
                const faq = content[selectedValue].faq;
                document.querySelector('#faq h2').textContent = faq.heading;
                document.querySelector('#faq p').innerHTML = faq.description;

                faq.questions.forEach((item, index) => {
                    const questionElement = document.querySelector(`#faq .accordion-item:nth-of-type(${index + 1}) .accordion-button`);
                    const answerElement = document.querySelector(`#faq .accordion-item:nth-of-type(${index + 1}) .accordion-body`);
                    questionElement.textContent = item.question;
                    answerElement.innerHTML = item.answer;
                });
                // Update
                const footer = content[selectedValue].footer;
                document.querySelector('.footer-content').textContent = footer.disclaimer;
                document.querySelector('.footer-tag').innerHTML = footer.rights;
                document.querySelector('.footer-bottom-content').innerHTML = footer.developedBy;


            }

            // Hide the dropdown
            customSelect.classList.remove('active');
        });
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.custom-select')) {
            optionsContainer.style.display = 'none';
            customSelect.classList.remove('active');
        }
    });
});






// Card Slider Own Path
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const controlButtons = document.querySelectorAll('.ownPath-btns .btn');
const modals = document.querySelectorAll('.modal');
let activeIndex = 0;
let autoplayInterval;

// Function to update the slider
function updateSlider() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'left', 'right');

        if (index === activeIndex) {
            card.classList.add('active');
        } else if (index === (activeIndex - 1 + cards.length) % cards.length) {
            card.classList.add('left');
        } else if (index === (activeIndex + 1) % cards.length) {
            card.classList.add('right');
        }
    });

    controlButtons.forEach((button, index) => {
        button.classList.toggle('active', index === activeIndex);
    });
}

// Start autoplay
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        activeIndex = (activeIndex + 1) % cards.length;
        updateSlider();
    }, 8000); // 5 seconds interval
}

// Stop autoplay
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Reset autoplay timer
function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
}

// Event listeners for manual navigation
prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    updateSlider();
    resetAutoplay();
});

nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % cards.length;
    updateSlider();
    resetAutoplay();
});

controlButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const index = parseInt(button.getAttribute('data-card'));
        activeIndex = index;
        updateSlider();
        resetAutoplay();
    });
});

// Pause autoplay when a modal is shown
modals.forEach((modal) => {
    modal.addEventListener('show.bs.modal', () => {
        stopAutoplay(); // Pause autoplay
    });

    modal.addEventListener('hidden.bs.modal', () => {
        startAutoplay(); // Resume autoplay
    });
});

// Initialize the slider and start autoplay
updateSlider();
startAutoplay();



// Survivors Animation
document.addEventListener('DOMContentLoaded', () => {
    const img1 = document.querySelector('.survivors-img-1');
    const img2 = document.querySelector('.survivors-img-2');

    img1.addEventListener('click', () => {
        // Hide img1
        img1.style.display = 'none';

        // Show img2 with animation
        img2.style.display = 'block';
        img2.style.animation = 'shake 0.4s';

        // Wait for 1 second, then toggle back to img1
        setTimeout(() => {
            img2.style.display = 'none';
            img1.style.display = 'block';
        }, 1000); // Matches the animation duration
    });
});



// Select all Accordion Border buttons and items
const accordionButtons = document.querySelectorAll('.accordion-button');
const accordionItems = document.querySelectorAll('.accordion-item');

// Apply border to the initially expanded accordion item
accordionItems.forEach(item => {
    const collapseElement = item.querySelector('.accordion-collapse');
    if (collapseElement && collapseElement.classList.contains('show')) {
        item.style.borderColor = 'rgba(255, 255, 255, 0.33)'; // Fully opaque border for expanded item
    }
});

// Add event listener to each button
accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Reset border color for all accordion items
        accordionItems.forEach(item => {
            item.style.borderColor = 'rgba(255, 255, 255, 0.0)';
        });

        // Find the closest accordion item
        const accordionItem = button.closest('.accordion-item');

        // Check if the button is not collapsed (expanded)
        if (!button.classList.contains('collapsed')) {
            // Set the border to fully opaque when expanded
            accordionItem.style.borderColor = 'rgba(255, 255, 255, 0.33)';
        }
    });
});


// Accordion Border and Rotation JS
document.querySelectorAll('.accordion-item').forEach((item, index) => {
    const button = item.querySelector('.accordion-button'); // Button within this accordion
    const circle = item.querySelector('.accordion-circle'); // The entire SVG circle
    const circlePoint = item.querySelector('svg path'); // Target the `path` inside the current accordion
    const circleContent = item.querySelector('.accordion-circle-content'); // Target the content inside the current accordion
    const collapseElement = item.querySelector('.accordion-collapse'); // Collapsible content of this accordion

    // Handle the first accordion with the `show` class (initially open)
    if (index === 0 && collapseElement.classList.contains('show')) {
        if (circlePoint && circleContent) {
            // Set initial state for the first accordion
            circlePoint.style.transform = 'rotate(-180deg)'; // Initial rotation for open state
            circlePoint.style.stroke = '#fff'; // Active stroke color
            circleContent.style.fill = '#fff'; // Active fill color
        }
    }

    // Function to handle toggle logic
    const toggleAccordion = () => {
        if (circlePoint && circleContent) {
            // Add smooth transition for rotation and color
            circlePoint.style.transition = 'transform 0.5s ease-in-out, stroke 0.3s ease-in-out';
            circleContent.style.transition = 'fill 0.1s ease-in-out';

            // Check if the button is currently collapsed or expanded
            if (button.classList.contains('collapsed')) {
                // Accordion is being opened
                circlePoint.style.transform = 'rotate(0deg)'; // Rotate to 0 degrees
                circlePoint.style.stroke = '#03FAFE'; // Change stroke to active color
                circleContent.style.fill = '#03FAFE'; // Change fill to active color
            } else {
                // Accordion is being closed
                circlePoint.style.transform = 'rotate(-180deg)'; // Rotate to -180 degrees
                circlePoint.style.stroke = '#fff'; // Reset stroke to default color
                circleContent.style.fill = '#fff'; // Reset fill to default color
            }
        }
        // Trigger the button click programmatically
        button.click();
    };

    // Add click event listener to the button
    button.addEventListener('click', toggleAccordion);

    // Add click event listener to the circle
    circle.addEventListener('click', toggleAccordion);

    // Handle `hide.bs.collapse` to reset rotation and colors when accordion starts closing
    collapseElement.addEventListener('hide.bs.collapse', () => {
        if (circlePoint && circleContent) {
            // Add smooth transition for rotation and color reset
            circlePoint.style.transition = 'transform 0.5s ease-in-out, stroke 0.3s ease-in-out';
            circleContent.style.transition = 'fill 0.1s ease-in-out';

            // Reset rotation and colors when accordion starts closing
            circlePoint.style.transform = 'rotate(0deg)'; // Rotate to 0 degrees
            circlePoint.style.stroke = '#03FAFE'; // Reset stroke to default color
            circleContent.style.fill = '#03FAFE'; // Reset fill to default color
        }
    });

    // Handle `show.bs.collapse` to set rotation and colors when accordion starts opening
    collapseElement.addEventListener('show.bs.collapse', () => {
        if (circlePoint && circleContent) {
            // Add smooth transition for rotation and color
            circlePoint.style.transition = 'transform 0.5s ease-in-out, stroke 0.3s ease-in-out';
            circleContent.style.transition = 'fill 0.1s ease-in-out';

            // Set rotation and colors when the accordion starts opening
            circlePoint.style.transform = 'rotate(-180deg)'; // Rotate to -180 degrees
            circlePoint.style.stroke = '#fff'; // Active stroke color
            circleContent.style.fill = '#fff'; // Active fill color
        }
    });
});










