const CATEGORY_PREFIX = 'category-';
const TYPE_PREFIX = 'type-';
const CHOICE_PREFIX = 'choice-';

const strToClass = (str: string) => {
    return str.toLowerCase().replace(/[^a-z]+/g, '-');
}

const kinks = {
    'Bodies': {
        'fields': ['General'],
        'kinks': [
            'Skinny',
            'Chubby',
            'Small breasts',
            'Large breasts',
            'Small cock',
            'Large cock',
            'Small ass',
            'Large ass',
            'Piercings',
            'Tattoos',
            'Pubic hair',
            'Shaved pubic hair',
            'Facial hair',
            'Body hair',
            'Legs / Feet',
        ]
    },
    'Outfit': {
        'fields': ['Self', 'Partner'],
        'kinks': [
            'Lingerie',
            'Pantyhouse / Stockings',
            'Heels',
            'Leather',
            'Latex',
            'Cross-dressing',
            'Cosplay',
            'Business suits',
            'Goth',
            'School Uniform',
            'Maid Uniforms',
            'Cheerleading Uniforms',
            'Knee High Socks',
        ]
    },
    'General': {
        'fields': ['Giving', 'Receiving'],
        'kinks': [
            'Handjob / fingering',
            'Blowjob',
            'Deep throat',
            'Swallowing',
            'Facials',
            'Cunnilingus',
            'Face sitting / fucking',
            'Rough sex',
            'Sleepy Sex',
            'JOI, SI',
            'Multiple orgasms',
            'Creampie',
            'Tit fucking',
        ]
    },
    'Ass play': {
        'fields': ['Giving', 'Receiving'],
        'kinks': [
            'Anal toys',
            'Anal sex, pegging',
            'Rimming',
            'Double penetration',
            'Anal Fingering',
            'Anal fisting',
            'Anal Creampie',
        ]
    },
    'Restrictive': {
        'fields': ['Self', 'Partner'],
        'kinks': [
            'Gag',
            'Collar',
            'Leash',
            'Chastity',
            'Bondage',
            'Encasement',
            'Blindfold',
            'Shibari',
        ]
    },
    'Toys': {
        'fields': ['Self', 'Partner'],
        'kinks': [
            'Dildos',
            'Plugs',
            'Vibrators',
            'Strap-on',
            'Remote controlled',
            'Glass Dildos',
        ]
    },
    'Domination': {
        'fields': ['Dominant', 'Submissive'],
        'kinks': [
            'Dominant / Submissive',
            'Domestic servitude',
            'Pet play',
            'DD/lg, MD/lb',
            'Obedience training',
            'Forced orgasm',
            'Orgasm control',
            'Power exchange',
            'Mind control',
        ]
    },
    'No consent': {
        'fields': ['Aggressor', 'Target'],
        'kinks': [
            'Non-con / rape',
            'Blackmail / coercion',
            'Kidnapping',
            'Drugs / alcohol',
        ]
    },
    'Taboo': {
        'fields': ['General'],
        'kinks': [
            'Incest',
            'Ageplay',
            'Interracial / Raceplay',
            'Bestiality',
            'Necrophilia',
            'Exhibitionism',
            'Voyeurism',
        ]
    },
    'Fluids': {
        'fields': ['General'],
        'kinks': [
            'Blood',
            'Watersports',
            'Scat',
            'Lactation',
            'Diapers',
            'Cum play',
        ]
    },
    'Degradation': {
        'fields': ['Giving', 'Receiving'],
        'kinks': [
            'Name calling',
            'Humiliation',
            'Cuckold',
        ]
    },
    'Touch & Stimulation': {
        'fields': ['Actor', 'Subject'],
        'kinks': [
            'Cock/Pussy worship',
            'Ass worship',
            'Foot play',
            'Tickling',
            'Sensation play',
            'Sensory deprivation',
        ]
    },
    'Roleplay': {
        'fields': ['General'],
        'kinks': [
            'Daddy/babygirl',
            'Mommy/babyboy',
            'Sister/Brother',
            'Master/Slave',
        ]
    },
    'Situations': {
        'fields': ['Self / partner', 'Partner / self'],
        'kinks': [
            'Doctor/nurse',
            'Mistress/slave',
            'Teacher/student',
            'Nun/priest',
            'Boss/Secretary',
        ]
    },
    'Surrealism': {
        'fields': ['Self', 'Partner'],
        'kinks': [
            'Futanari',
            'Furry',
            'Vore',
            'Tentacles',
            'Monster or Alien',
        ]
    },
    'Misc. Fetish': {
        'fields': ['Giving', 'Receiving'],
        'kinks': [
            'Fisting',
            'Gangbang',
            'Breath play',
            'Feminization',
            'Age play',
            'Choking play',
            'Squirting',
            'Shower Sex',
        ]
    },
    'Exposure': {
        'fields': ['Self', 'Partner'],
        'kinks': [
            'Erotic Photos/Videos',
            'Exhibitionism',
            'Outdoor sex',
            'Flashing',
            'Butt plugs in public',
            'Remote controlled toys',
        ]
    },
    'Pain': {
        'fields': ['Giving', 'Receiving'],
        'kinks': [
            'Hair Pulling',
            'Nipple clamps',
            'Whips / Flogging',
            'Spanking / paddling',
            'Cock/Pussy torture',
            'Hot Wax',
            'Scratching',
            'Biting',
            'Cutting',
        ]
    },
};
const levels = {
    'Irrelevant': {
        'colour': '#FFFFFF',
        'class': 'irrelevant',
    },
    'Favourite': {
        'colour': '#6DB5FE',
        'class': 'favourite',
    },
    'Like': {
        'colour': '#88FC79',
        'class': 'like',
    },
    'Curious': {
        'colour': '#F9BDF1',
        'class': 'curious',
    },
    'Okay': {
        'colour': '#FDFD6B',
        'class': 'okay',
    },
    'Indifferent': {
        'colour': '#DB6C00',
        'class': 'indifferent',
    },
    'Turn Off': {
        'colour': '#920000',
        'class': 'turn-off',
    },
};

const updateOwner = (target: HTMLInputElement) => {
    // Update title
    if (target.value.length > 0) {
        document.title = `${target.value}'s Kink List`;
        localStorage.owner = target.value;
    } else {
        document.title = 'Kink List';
        localStorage.removeItem('owner');
    }

    // Update input size
    const content = target.value || target.placeholder;
    const span = document.createElement("span");
    span.innerHTML = content
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    target.parentElement.appendChild(span);
    const theWidth = span.getBoundingClientRect().width;
    target.parentElement.removeChild(span);
    target.style.width = `${theWidth}px`;
}

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    if (localStorage.owner !== undefined) {
        nameInput.value = localStorage.owner;
    }
    updateOwner(nameInput);
    nameInput.addEventListener('input', (event: InputEvent) => updateOwner(event.target as HTMLInputElement));
});

const setupDOM = () => {
    const inputList = $('#InputList');
    inputList.empty();

    for (const catName of Object.keys(kinks)) {
        const category = kinks[catName];

        const $category = $('<div class="kink-category">')
            .addClass(CATEGORY_PREFIX + strToClass(catName))
            .data('category', catName)
            .append($('<h2>')
                .text(catName));

        const $table = $('<table>').data('fields', category.fields);
        const $thead = $('<thead>').appendTo($table);
        for (const field of category.fields) {
            $('<th>').addClass('choicesCol').text(field).appendTo($thead);
        }
        $('<th>').appendTo($thead);
        $('<tbody>').appendTo($table);
        $category.append($table);

        const $tbody = $category.find('tbody');
        for (const name of category.kinks) {
            const $row = document.createElement('tr');
            $row.classList.add('kink-type', TYPE_PREFIX + strToClass(name));
            $row.dataset['kink'] = name;
            for (const fieldName of category.fields) {
                const $td = document.createElement('td');
                const $choices = document.createElement('div');
                $choices.classList.add('kink-choices', CHOICE_PREFIX + strToClass(fieldName));
                $choices.dataset['field'] = fieldName;
                for (const levelName of Object.keys(levels)) {
                    const $button = document.createElement('button');
                    $button.classList.add('choice', levels[levelName].class);
                    $button.dataset['level'] = levelName;
                    $button.addEventListener('click', (e) => {
                        const target = e.target as HTMLElement;
                        for (const selected of target.parentElement.getElementsByClassName('selected')) {
                            selected.classList.remove('selected');
                        }
                        target.classList.add('selected');
                        const path = `${strToClass(catName)}/${strToClass(name)}/${strToClass(fieldName)}`;
                        const value = strToClass(levelName);
                        console.log('Setting', path, 'to', value);
                        localStorage[path] = value;
                    });
                    $choices.append($button);
                }
                $td.append($choices);
                $row.append($td);
            }
            const $td = document.createElement('td');
            $td.textContent = name;
            $row.append($td);
            $tbody.append($row);
        }
        inputList.append($category);
    }
};

const restoreState = () => {
    for (const path in localStorage) {
        if (localStorage.hasOwnProperty(path) && path.indexOf('/') >= 0) {
            const bits = path.split('/');
            try {
                document.querySelector(`.${CATEGORY_PREFIX}${bits[0]} .${TYPE_PREFIX}${bits[1]} .${CHOICE_PREFIX}${bits[2]} .${localStorage[path]}`).classList.add('selected');
            } catch (e) {
                console.warn('Error restoring', bits);
                localStorage.removeItem(path);
            }
        }
    }
};

const exportFns = {
    drawLegend: (context) => {
        context.font = "bold 13px Arial";
        context.fillStyle = '#000000';

        let levelsToRename = Object.keys(levels);
        let x = context.canvas.width - 15 - (120 * levelsToRename.length);
        for (let i = 0; i < levelsToRename.length; i++) {
            context.beginPath();
            context.arc(x + (120 * i), 17, 8, 0, 2 * Math.PI, false);
            context.fillStyle = levels[levelsToRename[i]].colour;
            context.fill();
            context.strokeStyle = 'rgba(0, 0, 0, 0.5)'
            context.lineWidth = 1;
            context.stroke();

            context.fillStyle = '#000000';
            context.fillText(levelsToRename[i], x + 15 + (i * 120), 22);
        }
    },
    setupCanvas: (width: number, height: number, username: string) => {
        $('canvas').remove();
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        let $canvas = $(canvas);
        $canvas.css({
            width: width,
            height: height
        });

        let context = canvas.getContext('2d');
        context.fillStyle = '#FFFFFF';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.font = "bold 24px Arial";
        context.fillStyle = '#000000';
        if (username.length > 0) {
            context.fillText(`${username}'s Kink List`, 5, 25);
        } else {
            context.fillText('Kink List', 5, 25);
        }

        exportFns.drawLegend(context);
        return {context: context, canvas: canvas};
    },
    drawCallHandlers: {
        simpleTitle: (context, drawCall) => {
            context.fillStyle = '#000000';
            context.font = "bold 18px Arial";
            context.fillText(drawCall.data, drawCall.x, drawCall.y + 5);
        },
        titleSubtitle: (context, drawCall) => {
            context.fillStyle = '#000000';
            context.font = "bold 18px Arial";
            context.fillText(drawCall.data.category, drawCall.x, drawCall.y + 5);

            let fieldsStr = drawCall.data.fields.join(', ');
            context.font = "italic 12px Arial";
            context.fillText(fieldsStr, drawCall.x, drawCall.y + 20);
        },
        'kink-type': (context, drawCall) => {
            context.fillStyle = '#000000';
            context.font = "12px Arial";

            let x = drawCall.x + 5 + (drawCall.data.choices.length * 20);
            let y = drawCall.y - 6;
            context.fillText(drawCall.data.text, x, y);

            // Circles
            for (let i = 0; i < drawCall.data.choices.length; i++) {
                let choice = drawCall.data.choices[i];
                let color = levels[choice].colour;

                let x = 10 + drawCall.x + (i * 20);
                let y = drawCall.y - 10;

                context.beginPath();
                context.arc(x, y, 8, 0, 2 * Math.PI, false);
                context.fillStyle = color;
                context.fill();
                context.strokeStyle = 'rgba(0, 0, 0, 0.5)'
                context.lineWidth = 1;
                context.stroke();
            }
        }
    },
    export: () => {
        const kinkCategory = $('.kink-category');

        // Constants
        let numCols = 6;
        let columnWidth = 250;
        let simpleTitleHeight = 35;
        let titleSubtitleHeight = 50;
        let rowHeight = 25;
        let offsets = {
            left: 10,
            right: 10,
            top: 50,
            bottom: 10
        };

        // Find out how many we have of everything
        let numCats = kinkCategory.length;
        let dualCats = $('.kink-category th + th + th').length;
        let simpleCats = numCats - dualCats;
        let numKinks = $('.kink-type').length;

        // Determine the height required for all categories and kinks
        let totalHeight = (
            (numKinks * rowHeight) +
            (dualCats * titleSubtitleHeight) +
            (simpleCats * simpleTitleHeight)
        );

        // Initialize columns and drawStacks
        let columns = [];
        for (let i = 0; i < numCols; i++) {
            columns.push({height: 0, drawStack: []});
        }

        // Create drawcalls and place them in the drawStack
        // for the appropriate column
        let avgColHeight = totalHeight / numCols;
        let columnIndex = 0;
        kinkCategory.each((_, e) => {
            let $cat = $(e);
            let catName = $cat.data('category');
            let category = kinks[catName];
            let fields = category.fields;
            let catKinks = category.kinks;

            let catHeight = 0;
            catHeight += (fields.length === 1) ? simpleTitleHeight : titleSubtitleHeight;
            catHeight += (catKinks.length * rowHeight);

            // Determine which column to place this category in
            if ((columns[columnIndex].height + (catHeight / 2)) > avgColHeight) columnIndex++;
            while (columnIndex >= numCols) columnIndex--;
            let column = columns[columnIndex];

            // Drawcall for title
            const drawCall = {
                y: column.height,
                type: undefined,
                data: undefined
            };
            column.drawStack.push(drawCall);
            if (fields.length < 2) {
                column.height += simpleTitleHeight;
                drawCall.type = 'simpleTitle';
                drawCall.data = catName;
            } else {
                column.height += titleSubtitleHeight;
                drawCall.type = 'titleSubtitle';
                drawCall.data = {
                    category: catName,
                    fields: fields
                };
            }

            // Drawcalls for kinks
            $cat.find('.kink-type').each(function () {
                const $kinkRow = $(this);
                const drawCall = {
                    y: column.height, type: 'kink-type', data: {
                        choices: [],
                        text: $kinkRow.data('kink')
                    }
                };
                column.drawStack.push(drawCall);
                column.height += rowHeight;

                // Add choices
                $kinkRow.find('.kink-choices').each(() => {
                    let $selection = $(this).find('.choice.selected');
                    let selection = ($selection.length > 0)
                        ? $selection.data('level')
                        : Object.keys(levels)[0];

                    drawCall.data.choices.push(selection);
                });
            });
        });

        let tallestColumnHeight = 0;
        for (let i = 0; i < columns.length; i++) {
            if (tallestColumnHeight < columns[i].height) {
                tallestColumnHeight = columns[i].height;
            }
        }

        let canvasWidth = offsets.left + offsets.right + (columnWidth * numCols);
        let canvasHeight = offsets.top + offsets.bottom + tallestColumnHeight;
        const owner = (document.getElementById('name') as HTMLInputElement).value;
        let setup = exportFns.setupCanvas(canvasWidth, canvasHeight, owner);
        let context = setup.context;
        let canvas = setup.canvas;

        for (let i = 0; i < columns.length; i++) {
            let column = columns[i];
            let drawStack = column.drawStack;

            let drawX = offsets.left + (columnWidth * i);
            for (let j = 0; j < drawStack.length; j++) {
                let drawCall = drawStack[j];
                drawCall.x = drawX;
                drawCall.y += offsets.top;
                exportFns.drawCallHandlers[drawCall.type](context, drawCall);
            }
        }

        // Save image
        let pom = document.createElement('a');
        pom.setAttribute('href', canvas.toDataURL());
        const filename = owner.length ? owner.replace(/[^a-zA-Z]+/g, '_') : 'kink_list';
        pom.setAttribute('download', filename + '.png');
        pom.click();
    }
};

$('#Clear').on('click', () => {
    localStorage.clear();
    setupDOM();
});

setupDOM();
restoreState();
$('#export').on('click', exportFns.export);


// Add level styles
const style = document.createElement('style');
const legend = document.getElementById('legend');
document.head.appendChild(style);
for (let levelsKey in levels) {
    const level = levels[levelsKey];
    style.sheet.insertRule(`.choice.${level.class} { background-color: ${level.colour}; }`, 0);
    legend.innerHTML += `<li><div class="choice ${level.class}"></div> <span class="legend-text">${levelsKey}</span></li>`;
}
