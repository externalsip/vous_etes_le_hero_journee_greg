let check = 0;

let chaptersObj = {

    introduction: {    
        subtitle: "Introduction",
        text: "Greg est un être humain normal, il vit seul et travail dans un bureau régulier dans lequel il risque de passer le restant de ses jours, L'histoire dont vous allez témoigner de est l'une des journées banales qui composent sa vie.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('matin')"
        }],
        img: "assets/thumbs_up_man2.jpg"},
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
    },
    wow: {
        subtitle: "wow.",
        text: "Greg se rendort, mais ne réveillera pas, apparement les êtres vivants ont besoin de se nourrir pour rester en vie, quelque chose que Greg n'a pas vraiment eu la chance de faire dans les 48 dernières heures comme celui-ci était endormi.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    },
    retard: {
        subtitle: "En retard!!!",
        text: "Greg décide de se faire à déjeuner, il ouvre son frigo et trouve de quoi manger, il décide de faire des oeufs, Greg est connu pour ses très bons oeufs, malheureusement, le temps qu'il fasse son déjeuner, Greg manque son bus, celui-ci passe à l'heure donc il n'a aucune chance d'arriver à temps à son travail.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    },
    depart: {
        subtitle: "En chemin pour le travail",
        text: "Greg décide de sortir de chez lui sans déjeuner, décidant que ce n'est pas nécéssaire. Au moment où il arrive à l'arrêt de son bus, celui-ci arrive. Greg a fait le bon choix quand il n'a pas pris le repas le plus important de la journée.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('bus')"
        }],
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
    },
    accident: {
        subtitle: "Un événement inattendu",
        text: "Greg attend que son bus arrive à son arrêt, mais tout d'un coup, quelque chose éclate dans la tête du chauffeur et celui-ci commence à ce demander ce qu'il se passerait si il faisait tomber le bus du pont, la réponse: Greg n'arrive pas à son travail et son patron n'est pas très content.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    },
    stop: {
        subtitle: "Une décision questionnable",
        text: "Greg décide de sortir du bus un arrêt plus tôt, il est parfaitement conscient qu'il va arriver au travail un peu en retard, mais il l'a fait, il s'est senti comme si quelqu'un voulait vraiment qu'il sorte maintenant, il ignore pourquoi.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('travail')"
        }],
    },
    travail: {
        subtitle: "Arrivé au travail",
        text: "Greg arrive un travail, pour une raison qu'il ignore, il y avait un grand trou dans les rambardes du pont sur lequel il a dù marcher.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('debut_travail')"
        }],
    },
    debut_travail: {
        subtitle: "On repart pour un tour!",      
        text: "Greg arrive au travail, il se rend à son bureau et commence à faire peu importe ce qu'il fait habituellement.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('deshydratation')"
        }],
    },
    deshydratation: {
        subtitle: "Déshydratation",
        text: "Rendu à la moitié de son shift, Greg devient terriblement assoifé, il n'a rien consommé depuis qu'il est debout, et il en paye maintenant les conséquences",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('soif')"
        }],
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
    },
    fracture: {
        subtitle: "Fracture",
        text: "Greg arrive a la machine distributrice, mais celle-ci ne fonctionne pas, Greg la secoue vigoureusement jusqu'à ce que celle-ci tombe sur lui, brisant la majorité de ses os, Au moins, la vitre a brisé et Greg a pu s'hydrater, rien d'autre est important à ses yeux en ce moment.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    },
    cafe: {
        subtitle: "Trop de caféine",
        text: "Greg arrive à la machine à café des employés, mais comme si celle-ci n'attendait que cela, la machine déborde et brûle les mains de Greg au troisième degré. Greg n'a pas pu s'hydrater.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    },
    hydratation: {
        subtitle: "Hydratation",
        text: "Greg s'élance vers la salle des employés, la seule chose qu'il a en tête est le robinet, une fois arrivé il commence a boire verre après verre d'une manière étrangement agressive, ses collègues commencent à être très incomfortable à cause de ses actions, une fois qu'il a fini, Greg se retourne et donne un grand sourire à ses collègues.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('problemes')"
        }],
    },
    problemes: {
        subtitle: "Problème après problème",
        text: "Maintenant rendu à la fin de son shift, l'ordinateur de Greg commence à faire des étincelles, d'après l'opinion de Greg, ce n'est pas quelque chose que les ordinateurs font habituellement",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('reparation')"
        }],
    },
    reparation: {
        subtitle: "Réparation",
        text: "Greg décide d'essayer de réparer le problème, comment va-t-il s'y prendre?",
        options: [explosion = {
            text: "Ouvrir l'ordinateur",
            action: "goToChapter('explosion')"
        }, ignorer = {
            text: "Ignorer le problème",
            action: "goToChapter('depart')",
        }, coup = {
            text: "Donner un coup de pied",
            action: "goToChapter('bris')"
        }],
    },
    explosion: {
        subtitle: "???",
        text: "Dès que Greg commence à s'approcher de l'ordinateur, celui-ci explose. Malheureusement Greg n'avait pas prévu son fameux kit de survie pour explosions à moins de 2 pieds de lui.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    },
    bris: {
        subtitle: "Un autre problème pour les techniciens",
        text: "Greg décide que la meilleur façon de réparer le problème est avec la bonne vielle force brutte, l'ordinateur n'est pas d'accord, en tout cas, c'est ce qu'on peut assumer comme il a cessé de fonctionner. Greg s'en va sans dire un mot.",
        options: [recommencer = {
            text: "Recommencer",
            action: "goToChapter('introduction')"
        }],
    },
    depart: {
        subtitle: "Pas mon problème",
        text: "Le Greg d'aujourd'hui en a eu assez, ce problème va être le problème du Greg de demain, Greg part de son bureau, laissant l'ordinateur là.",
        options: [continuer = {
            text: "Continuer",
            action: "goToChapter('incendie')"
        }],
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
        text: ""

    }



};
function goToChapter(chapterName){

    console.log(chaptersObj[chapterName]["subtitle"]);

    console.log(chaptersObj[chapterName]["text"]);

    console.log(chaptersObj[chapterName]["options"]);

}

