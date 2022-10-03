let check = 0;

let chaptersObj = {

    introduction: {    
        subtitle: "Introduction",
        text: "Greg est un être humain normal, il vit seul et travail dans un bureau régulier dans lequel il risque de passer le restant de ses jours, L'histoire dont vous allez être témoin est l'une des journées banales qui composent sa vie.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('matin')"
        }],
        img: "assets/images/introduction.jpg"
    },
    matin: {
        subtitle: "Matin",
        text: "Greg se réveille, il est prêt à affronter sa journée mais n'est pas certain de ce qu'il devrait faire en cet instant. Que devrait-il faire?",
        options: [dejeuner = {
            text: "Déjeuner",
            action: "goToChapter('retard')"
        }, se_recoucher = {
            text: "Se recoucher",
            action: "goToChapter('nouveau_matin')",
        }, partir = {
            text: "Partir",
            action: "goToChapter('depart')"
        }],
        img: "assets/images/matin.jpg",
    },
    nouveau_matin: {
        subtitle: "Prise 2",
        text: "Après s'être rendormi pour une durée de temps indéterminée, Greg se réveil, il est encore une fois prêt à affronter sa journée. Que devrait-il faire?",
        options: [dejeuner = {
            text: "Déjeuner",
            action: "goToChapter('retard')"
        }, se_recoucher = {
            text: "Se recoucher",
            action: "goToChapter('wow')",
        }, partir = {
            text: "Partir",
            action: "goToChapter('depart')"
        }],
        img: "assets/images/nouveau_matin.jpg",
    },
    wow: {
        subtitle: "wow.",
        text: "Greg se rendort, mais ne réveillera pas, apparement les êtres vivants ont besoin de se nourrir pour rester en vie, quelque chose que Greg n'a pas vraiment eu la chance de faire dans les 48 dernières heures comme celui-ci était endormi.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
        img: "assets/images/wow.jpg",
    },
    retard: {
        subtitle: "En retard!!!",
        text: "Greg décide de se faire à déjeuner, il ouvre son frigo et trouve de quoi manger, il décide de faire des oeufs, Greg est connu pour ses très bons oeufs, malheureusement, le temps qu'il fasse son déjeuner, Greg manque son bus, celui-ci passe à l'heure donc il n'a aucune chance d'arriver à temps à son travail. Au moins les oeufs étaient bons.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
        img: "assets/images/retard.jpg",
    },
    depart: {
        subtitle: "En chemin pour le travail",
        text: "Greg décide de sortir de chez lui sans déjeuner, décidant que ce n'est pas nécéssaire. Au moment où il arrive à l'arrêt de son bus, celui-ci arrive. Greg a fait le bon choix quand il n'a pas pris le repas le plus important de la journée.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('bus')"
        }],
        img: "assets/images/depart.jpg",
    },
    bus: {
        subtitle: "Dans le bus",
        text: "Greg est maintenant dans son autobus, comme à son habitude il affronte quelqu'un pour avoir une place assise (classique Greg) et attend patiement que son bus arrive à sa destination, une fois arrivé, qu'est ce que Greg devrait faire?",
        options: [avance = {
            text: "Déscendre un arrêt d'avance",
            action: "goToChapter('stop')"
        }, bon_arret = {
            text: "Déscendre à l'arrêt habituel",
            action: "goToChapter('accident')",
        }],
        img: "assets/images/bus.webp",
    },
    accident: {
        subtitle: "Un événement inattendu",
        text: "Greg attend que son bus arrive à son arrêt, mais tout d'un coup, quelque chose éclate dans la tête du chauffeur et celui-ci commence à ce demander ce qu'il se passerait si il faisait tomber le bus du pont, la réponse: Greg n'arrive pas à son travail et son patron n'est pas très content.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
        img: "assets/images/accident.jpg",
    },
    stop: {
        subtitle: "Une décision questionnable",
        text: "Greg décide de sortir du bus un arrêt plus tôt, il est parfaitement conscient qu'il va arriver au travail un peu en retard, mais il l'a fait, il s'est senti comme si quelqu'un voulait vraiment qu'il sorte maintenant, il ignore pourquoi.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('travail')"
        }],
        img: "assets/images/stop.jpg",
    },
    travail: {
        subtitle: "Arrivé au travail",
        text: "Greg arrive un travail, pour une raison qu'il ignore, il y avait un grand trou dans les rambardes du pont sur lequel il a dù marcher.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('debut_travail')"
        }],
        img: "assets/images/travail.jpg",
    },
    debut_travail: {
        subtitle: "On repart pour un tour!",      
        text: "Greg arrive au travail, il se rend à son bureau et commence à faire peu importe ce qu'il fait habituellement.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('deshydratation')"
        }],
        img: "assets/images/debut_travail.jpg",
    },
    deshydratation: {
        subtitle: "Déshydratation",
        text: "Rendu à la moitié de son shift, Greg devient terriblement assoifé, il n'a rien consommé depuis qu'il est debout, et il en paye maintenant les conséquences",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('soif')"
        }],
        img: "assets/images/deshydratation.jpg",
    },
    soif: {
        subtitle: "La grande soif de Greg",
        text: "Comment Greg va-t-il étancher sa soif?",
        options: [machine_distributrice = {
            text: "Machine distributrice",
            action: "goToChapter('fracture')"
        }, machine_cafe = {
            text: "Machine à café",
            action: "goToChapter('cafe')",
        }, robinet = {
            text: "Robinet de la salle d'employés",
            action: "goToChapter('hydratation')"
        }],
        img: "assets/images/soif.jpg",
    },
    fracture: {
        subtitle: "Fracture",
        text: "Greg arrive a la machine distributrice, mais celle-ci ne fonctionne pas, Greg la secoue vigoureusement jusqu'à ce que celle-ci tombe sur lui, brisant la majorité de ses os, Au moins, la vitre a brisé et Greg a pu s'hydrater, rien d'autre est important à ses yeux en ce moment.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
        img: "assets/images/fracture.jpg",
    },
    cafe: {
        subtitle: "Trop de caféine",
        text: "Greg arrive à la machine à café des employés, mais comme si celle-ci n'attendait que cela, la machine déborde et brûle les mains de Greg au troisième degré. Greg n'a pas pu s'hydrater.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
        img: "assets/images/cafe.jpg",
    },
    hydratation: {
        subtitle: "Hydratation",
        text: "Greg s'élance vers la salle des employés, la seule chose qu'il a en tête est le robinet, une fois arrivé il commence a boire verre après verre d'une manière étrangement agressive, ses collègues commencent à être très incomfortable à cause de ses actions, une fois qu'il a fini, Greg se retourne et donne un grand sourire à ses collègues.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('problemes')"
        }],
        img: "assets/images/hydratation.webp",
    },
    problemes: {
        subtitle: "Problème après problème",
        text: "Maintenant rendu à la fin de son shift, l'ordinateur de Greg commence à faire des étincelles, d'après l'opinion de Greg, ce n'est pas quelque chose que les ordinateurs font habituellement, sur l'écran une suite de lettres s'affichent: 'asdhjsphuabwsdvnoinvnnadbsd' Greg ne se questionne pas, assumant que c'est un comportement normal pour un ordinateur.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('reparation')"
        }],
        img: "assets/images/problemes.jpg",
    },
    reparation: {
        subtitle: "Réparation",
        text: "Greg décide d'essayer de réparer le problème, comment va-t-il s'y prendre?",
        options: [explosion = {
            text: "Ouvrir l'ordinateur",
            action: "goToChapter('explosion')"
        }, ignorer = {
            text: "Ignorer le problème",
            action: "goToChapter('clockout')",
        }, coup = {
            text: "Donner un coup de pied",
            action: "goToChapter('bris')"
        }],
        img: "assets/images/reparation.jpg",
    },
    explosion: {
        subtitle: "???",
        text: "Dès que Greg commence à s'approcher de l'ordinateur, celui-ci explose. Malheureusement Greg n'avait pas prévu son fameux kit de survie pour explosions à moins de 2 pieds de lui.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
        img: "assets/images/explosion.jpg",
    },
    bris: {
        subtitle: "Un autre problème pour les techniciens",
        text: "Greg décide que la meilleur façon de réparer le problème est avec la bonne vielle force brutte, l'ordinateur n'est pas d'accord, en tout cas, c'est ce qu'on peut assumer comme il a cessé de fonctionner. Greg s'en va sans dire un mot.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
        img: "assets/images/bris.jpg",
    },
    clockout: {
        subtitle: "Pas mon problème",
        text: "Le Greg d'aujourd'hui en a eu assez, ce problème va être le problème du Greg de demain, Greg part de son bureau, laissant l'ordinateur là.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('incendie')"
        }],
        img: "assets/images/clockout.jpg",
    },
    incendie: {
        subtitle: "Pas ma faute",
        text: "Greg arrive chez lui et vois à la télévision que son bureau a passé au feu suite à l'explosion d'un ordinateur, Greg se demande qui est l'étourdit qui a laissé cela arrivé.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('repos')"
        }],
    },
    repos: {
        subtitle: "Juste une autre journée",
        text: "Greg s'en va se coucher sur le plancher, tel est sa tradition, il va probablement devoir se trouver un nouvel emploi, mais honnêtement, cela ne le dérange pas tant que cela.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    },
    erreur: {
        subtitle: "Erreur humaine",
        text: "Alors que Greg s'apprête à entrer dans son bureau, il réalise quelque chose, il ne travaille pas aujourd'hui, mais demain. Il a fait tout ce chemin pour rien, Greg sort du bureau.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('conge')"
        }],
    },
    conge: {
        subtitle: "Quoi faire?",
        text: "Maintenant que Greg a réalisé qu'il a congé, il essai de trouver quelque chose à faire de celui-ci.",
        options: [travail = {
            text: "Aller au travail",
            action: "goToChapter('bureau')"
        }, lune = {
            text: "Aller sur la lune",
            action: "goToChapter('coupdetete')",
        }, asphalte = {
            text: "Ne rien faire",
            action: "goToChapter('asphalte')"
        }],
    },
    bureau: {
        subtitle: "On repart pour... un tour?",
        text: "Greg décide que même si il ne travaille pas aujourd'hui, cela ne l'empêche pas d'aller travailler.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('combat')"
        }],
    },
    combat: {
        subtitle: "Le combat pour le bureau de Greg",
        text: "Lorsqu'il entre dans le bureau, tout le monde se tourne vers Greg, il ne travaille pas aujourd'hui, et se présenter alors qu'on ne travaille pas est puni par la mort. Greg observe tout ses collègues lâcher tout ce qu'ils faisaient et lui faire face, et tout à coup, ils se mettent à courir vers lui, Greg sais ce qu'il ce passe et ne les laissera pas l'exécuter ainsi.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('aprescombat')"
        }],
        img: "assets/images/combat.jpg",
    },
    aprescombat: {
        subtitle: "Rien ne se passe",
        text: "Greg triomphe de tout ses collègues, même son patron n'était pas de taille devant l'individu qu'est Greg, après tout il faisait parti de l'équipe de football à l'université, Greg va s'asseoir à son bureau et attend que quelque chose se passe, mais rien n'arrive, ce qui n'est pas surprenant comme il est la seule personne encore debout dans le bureau.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    },
    asphalte: {
        subtitle: "Devient qu'un avec l'asphalte",
        text: "Greg ne trouve rien à faire, il décide que si il ne va rien faire, il va le faire mieux que qui que ce soit, Greg reste immobile assez longtemps pour que ses pieds fusionnent avec le sol.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    },
    coupdetete: {
        subtitle: "La lune ou rien",
        text: "C'est décidé, Greg va passer son congé sur la lune, peu importe ce qu'il doit faire pour y arriver.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('nasa')"
        }],
    },
    nasa: {
        subtitle: "Vers l'espace",
        text: "Greg se déplace d'une manière ou une autre à la NASA, où il demande un voyage en fusée, bien sûr, il est refusé, maintenant en dehors du bâtiment, que devrait faire Greg?",
        options: [vol = {
            text: "Voler jusqu'à la lune",
            action: "goToChapter('preparation')"
        }, lune = {
            text: "S'infiltrer dans une fusée",
            action: "goToChapter('infiltration')",
        }, asphalte = {
            text: "Ne rien faire",
            action: "goToChapter('abandon')"
        }],
    },
    infiltration: {
        subtitle: "Mission échouée",
        text: "Greg réussi à se rendre à bord de la fusée, mais dans un moment d'inatention il commence a avoir une conversation avec un des astronautes, celui-ci se rend compte que Greg n'est pas sensé être là, et c'est comme ça que Greg fini en cours",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    },
    abandon: {
        subtitle: "Rien",
        text: "Greg peut bien penser à une solution aussi fort que possible, rien ne lui viens en tête, il est forcé d'abandonner et retourner chez lui.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    },
    preparation: {
        subtitle: "Préparation au décolage",
        text: "Si Greg ne peut pas aller dans une fusée, il va s'y rendre lui même, il commence à inspirer tout l'oxygène dans un énorme rayon autours de lui, et commence à gonfler, on peut entendre des os briser sous la pression, et tout cette expérience paraît extrêmement douloureuse, mais Greg n'a pas l'air d'être dérangé, il se met éventuellement à flôter, en route vers la lune.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('lune')"
        }],
    },
    lune: {
        subtitle: "Succès",
        text: "Greg est maintenant sur la lune, où il risque de passer le restant de ses jours car retourner sur terre risque d'être très compliqué.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    }

};

let chapterTitle = document.querySelector(".chapter");
let chapterText = document.querySelector(".text");
let chapterImg = document.querySelector(".photo");
let button = document.querySelectorAll(".button");

function goToChapter(chapterName){

    chapterTitle.innerHTML = (chaptersObj[chapterName]["subtitle"]);
    chapterText.innerHTML = (chaptersObj[chapterName]["text"]);
    chapterImg.src = (chaptersObj[chapterName]["img"]);
    for(let i = 0; i <= 2; i++){

        if(chaptersObj[chapterName]["options"][i] != undefined){

            button[i].innerHTML = ((chaptersObj[chapterName]["options"][i].text));
            button[i].setAttribute("onclick", ((chaptersObj[chapterName]["options"][i].action)));
            button[i].classList.remove("none");

        }
        else{

            button[i].classList.add("none");

        }
    }



};

goToChapter("introduction");