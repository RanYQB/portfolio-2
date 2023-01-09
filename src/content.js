const content = {
    presentation: {
        title: 'Présentation',
        description: ['Bonjour, je suis Rania Yaqoubi et j\'ai 27 ans. Je suis développeuse web junior.','Après de nombreuses années d\'expérience en entreprise et un dernier poste occupé dans une agence immobilière, j\'ai décidé de me reconvertir et d\'entamer une nouvelle carrière professionnelle dans le développement web.',' C\'est en 2021 que j\'ai entamé une formation chez Studi. J\'ai eu l\'opportunité d\'apprendre et de pratiquer les langages JavaScript et PHP, en utilisant les frameworks Symfony, Express et React. Sans oublier l\'utilisation régulière de Bootstrap et du SASS. Chaque jour, je m\'attelle à approfondir mes connaissances et à m\'améliorer.']
    
    },
    skills: {
        title: 'Compétences', 
        description: 'Dans cette rubrique, je vous présente un aperçu de mes compétences.',
        elements: [
            { name: 'Backend', top: {title: 'langage', content: 'PHP 8.1'}, middle: { title: 'Framework', content :'Symfony 6.1'}, bottom: { title: 'Base de données', content :'MySQL'} }, 
            { name: 'Frontend', top: {title: 'langages', content: 'JavaScript - HTML/CSS - Sass'}, middle: { title: 'Framework', content :'React JS - Express JS'}, bottom: { title: 'Librairies', content :'Bootstrap - Material UI'}},
            { name: 'Autres', top: {title: 'gestionnaire de versions', content: 'Git - Github'}, middle: { title: 'Langues', content :'Français - Anglais - Arabe'}, bottom: { title: 'Logiciels', content :'Adobe XD - Illustrator - Office'}},
        ]
    },
    projects: {
        title: 'Réalisations', 
        description: 'Voici  quelques réalisations que j\'ai effectuées durant ma formation.',
        elements: [
            {
                image: '', 
                name: 'Fitness Club',
                description: 'Création d\'un outil de gestion des franchisés d\'une marque de salles de sport "Fitness Club"',
                technos: [ 'Php', 'Symfony', 'MySQL', 'JavaScript', 'Html', 'CSS'],
                githubLink: 'https://github.com/RanYQB/ecf-private',
                externalLink: 'https://ecf-fitnessclub.fr/'
            }, 
            {
                image: '', 
                type: 'Projet personnel',
                name: 'RH Conseil',
                description: 'Création d\'un site de recrutement',
                technos: [ 'Php', 'Symfony', 'MySQL', 'JavaScript', 'API REST', 'React', 'Html', 'CSS'],
                githubLink: 'https://github.com/RanYQB/rh-conseil',
                externalLink: ''
            },
            {
                image: '', 
                type: 'Projet personnel',
                name: 'React Colors',
                description: 'Création d\'un site clone de Flat UI Colors dans le cadre du bootcamp React sur Udemy du formateur Colt Steele',
                technos: [ 'React', 'Express', 'Html', 'CSS'],
                githubLink: 'https://github.com/RanYQB/react-color-project',
                externalLink: ''
            },
            {
                image: '', 
                type: 'Projet personnel',
                name: 'Premier portfolio',
                description: 'Création de mon premier portfolio',
                technos: [ 'Express JS', 'JavaScript', 'Html', 'CSS'],
                githubLink: 'https://github.com/RanYQB/portfolio',
                externalLink: ''
            },
            {
                image: '', 
                type: 'Projet personnel',
                name: 'CV en ligne',
                description: 'Mon premier site internet, un CV en ligne',
                technos: [ 'Express JS', 'JavaScript', 'Html', 'CSS'],
                githubLink: '',
                externalLink: ''
            },

        ]
    }
}
export default content;

