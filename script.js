
const $ = id => document.getElementById(id);

const eras = [
{
name:"Cave Painting",date:"40,000–10,000 BCE",origin:"Prehistoric World",
description:"One of humanity's earliest artistic expressions. Early humans created paintings and drawings on cave walls, often showing animals, hunting scenes, and symbols. These artworks reveal their environment, beliefs, and communication.",
features:["Animal drawings","Natural pigments","Cave walls","Early storytelling"],
artists:["Prehistoric artists"],works:["Hall of the Bulls","Swimming Reindeer","Altamira Cave Paintings"],
narration:"Welcome to the prehistoric world. Before writing systems and modern civilization, humans were already creating art. Using natural pigments, they painted animals, handprints, and symbols on cave walls. These images provide clues about early human life, beliefs, and communication."
},
{
name:"Renaissance",date:"14th–17th Century",origin:"Italy and Europe",
description:"The Renaissance marked a renewed interest in classical Greek and Roman culture. Artists explored realism, human anatomy, perspective, science, and human experience.",
features:["Perspective","Human anatomy","Realism","Classical inspiration"],
artists:["Leonardo da Vinci","Michelangelo","Raphael"],works:["Mona Lisa","The Creation of Adam","The School of Athens"],
narration:"Our next destination is the Renaissance, a period of extraordinary cultural and artistic change. Artists studied the human body, nature, mathematics, and classical knowledge. Perspective and realistic representation transformed painting and sculpture. This era includes legendary artists such as Leonardo da Vinci and Michelangelo."
},
{
name:"Baroque",date:"17th–18th Century",origin:"Europe",
description:"Baroque art emphasized drama, movement, rich detail, emotion, and powerful contrasts between light and darkness.",
features:["Dramatic lighting","Movement","Emotion","Rich details"],
artists:["Caravaggio","Rembrandt","Peter Paul Rubens"],works:["The Night Watch","The Calling of Saint Matthew","The Elevation of the Cross"],
narration:"Welcome to the Baroque period. Art became dramatic, emotional, and full of movement. Artists used intense lighting and shadow to create powerful scenes. Religious themes, grand compositions, and theatrical effects became important characteristics of this movement."
},
{
name:"Rococo",date:"18th Century",origin:"France and Europe",
description:"Rococo developed as a decorative and elegant artistic style. It featured pastel colors, playful subjects, curved forms, romance, and luxurious settings.",
features:["Pastel colors","Elegance","Decorative details","Playful themes"],
artists:["Jean-Honoré Fragonard","Antoine Watteau","François Boucher"],works:["The Swing","Pilgrimage to Cythera","Madame de Pompadour"],
narration:"We have arrived in the Rococo period. Compared with the dramatic Baroque style, Rococo art became lighter, more decorative, and playful. Artists portrayed gardens, romance, leisure, and elegant aristocratic life."
},
{
name:"Neoclassicism",date:"18th–19th Century",origin:"Europe",
description:"Neoclassicism revived ancient Greek and Roman artistic ideals. It valued order, balance, simplicity, discipline, and heroic subjects.",
features:["Classical ideals","Balance","Order","Ancient inspiration"],
artists:["Jacques-Louis David","Antonio Canova","Angelica Kauffman"],works:["Oath of the Horatii","The Death of Socrates","Psyche Revived by Cupid's Kiss"],
narration:"Our journey continues into Neoclassicism. Artists returned to the ideals of ancient Greece and Rome. They emphasized order, symmetry, discipline, and moral lessons. Classical architecture, historical events, and heroic figures became major subjects."
},
{
name:"Romanticism",date:"Late 18th–19th Century",origin:"Europe",
description:"Romanticism emphasized emotion, imagination, individual experience, nature, freedom, and the power of dramatic events.",
features:["Emotion","Nature","Imagination","Freedom"],
artists:["Eugène Delacroix","Caspar David Friedrich","Théodore Géricault"],works:["Liberty Leading the People","Wanderer above the Sea of Fog","The Raft of the Medusa"],
narration:"Welcome to Romanticism. Artists began to emphasize emotion, imagination, and individual experience. Nature became powerful and dramatic, while historical events and struggles for freedom inspired many works."
},
{
name:"Realism",date:"19th Century",origin:"France and Europe",
description:"Realism focused on ordinary people and everyday experiences. Artists portrayed workers, rural life, social conditions, and contemporary society.",
features:["Everyday life","Ordinary people","Social issues","Realistic subjects"],
artists:["Gustave Courbet","Jean-François Millet","Honoré Daumier"],works:["The Gleaners","A Burial at Ornans","The Stone Breakers"],
narration:"We have reached Realism. Instead of idealized heroes and imaginary scenes, artists turned their attention to ordinary people and everyday life. Workers, farmers, and social conditions became important subjects."
},
{
name:"Impressionism",date:"Late 19th Century",origin:"France",
description:"Impressionism explored changing light, color, and atmosphere. Artists often painted outdoors and used visible brushstrokes to capture brief moments.",
features:["Visible brushstrokes","Light","Color","Outdoor painting"],
artists:["Claude Monet","Pierre-Auguste Renoir","Edgar Degas"],works:["Impression, Sunrise","Water Lilies","Dance at Le Moulin de la Galette"],
narration:"Welcome to Impressionism. Artists wanted to capture the changing effects of light and atmosphere. Rather than carefully outlining every detail, they used visible brushstrokes and colors to record the feeling of a particular moment."
},
{
name:"Post-Impressionism",date:"Late 19th–Early 20th Century",origin:"Europe",
description:"Post-Impressionist artists expanded on Impressionism through stronger structure, symbolism, emotional color, and more personal artistic expression.",
features:["Expressive colors","Symbolism","Personal expression","Structured forms"],
artists:["Vincent van Gogh","Paul Cézanne","Paul Gauguin"],works:["The Starry Night","Where Do We Come From?","Mont Sainte-Victoire"],
narration:"Our next stop is Post-Impressionism. Artists moved beyond simply capturing light and moments. They explored personal emotion, symbolism, bold colors, and more structured compositions. Their experiments helped influence modern art."
},
{
name:"Fauvism",date:"Early 20th Century",origin:"France",
description:"Fauvism became known for its bold, unnatural colors, expressive brushwork, and simplified forms.",
features:["Bold colors","Expressive brushwork","Simplified forms","Color freedom"],
artists:["Henri Matisse","André Derain","Maurice de Vlaminck"],works:["Woman with a Hat","The Joy of Life","The Turning Road"],
narration:"Welcome to Fauvism. The Fauves, or wild beasts, shocked audiences with their intense and unconventional colors. They used color for emotional expression rather than simply representing nature accurately."
},
{
name:"Cubism",date:"Early 20th Century",origin:"France",
description:"Cubism broke objects into geometric shapes and presented multiple viewpoints within a single composition.",
features:["Geometric shapes","Fragmented forms","Multiple viewpoints","Abstract composition"],
artists:["Pablo Picasso","Georges Braque","Juan Gris"],works:["Les Demoiselles d'Avignon","Violin and Candlestick","Girl with a Mandolin"],
narration:"We have arrived at Cubism. Artists began breaking objects and figures into geometric shapes. Instead of showing a subject from one viewpoint, they explored several perspectives at once. This movement changed how people understood visual representation."
},
{
name:"Futurism",date:"Early 20th Century",origin:"Italy",
description:"Futurism celebrated modern technology, speed, machines, movement, and the energy of modern cities.",
features:["Speed","Technology","Movement","Modern life"],
artists:["Umberto Boccioni","Giacomo Balla","Carlo Carrà"],works:["Unique Forms of Continuity in Space","Dynamism of a Dog on a Leash","The City Rises"],
narration:"Welcome to Futurism. This movement celebrated the energy of modern life, including machines, transportation, speed, and technology. Artists attempted to represent movement and the rapidly changing modern world."
},
{
name:"Dadaism",date:"1916–1920s",origin:"Europe",
description:"Dada emerged during World War I and challenged traditional artistic standards through absurdity, experimentation, collage, and unconventional objects.",
features:["Anti-tradition","Collage","Experimentation","Readymades"],
artists:["Marcel Duchamp","Hannah Höch","Jean Arp"],works:["Fountain","L.H.O.O.Q.","Cut with the Kitchen Knife"],
narration:"Our destination is Dadaism. Emerging during the First World War, Dada artists questioned established ideas about art, logic, and society. They experimented with collage, unusual objects, and surprising artistic approaches."
},
{
name:"Surrealism",date:"1920s–1950s",origin:"Europe",
description:"Surrealism explored dreams, imagination, the unconscious mind, and unexpected combinations of familiar objects.",
features:["Dream imagery","Imagination","Unusual combinations","Symbolism"],
artists:["Salvador Dalí","René Magritte","Max Ernst"],works:["The Persistence of Memory","The Son of Man","The Treachery of Images"],
narration:"Welcome to Surrealism. Artists explored dreams, imagination, and the unconscious mind. Familiar objects appeared in strange environments, creating scenes that seemed impossible but encouraged viewers to question reality."
},
{
name:"Abstract Expressionism",date:"1940s–1950s",origin:"United States",
description:"Abstract Expressionism emphasized spontaneous gestures, large-scale paintings, emotion, and non-representational forms.",
features:["Abstraction","Spontaneous gestures","Emotion","Large canvases"],
artists:["Jackson Pollock","Mark Rothko","Willem de Kooning"],works:["No. 5, 1948","Woman I","Vir Heroicus Sublimis"],
narration:"We have reached Abstract Expressionism. Artists emphasized personal expression through large canvases, energetic gestures, and abstract forms. The movement became an important part of postwar American art."
},
{
name:"Pop Art",date:"1950s–1970s",origin:"United Kingdom and United States",
description:"Pop Art drew inspiration from advertisements, celebrities, comic books, consumer products, and popular culture.",
features:["Popular culture","Advertising","Mass media","Bright colors"],
artists:["Andy Warhol","Roy Lichtenstein","Richard Hamilton"],works:["Marilyn Diptych","Whaam!","Campbell's Soup Cans"],
narration:"Welcome to Pop Art. Artists began using images from advertisements, comic books, celebrities, and everyday products. Popular culture became a major subject of fine art, challenging the boundaries between commercial imagery and artistic expression."
},
{
name:"Op Art",date:"1960s",origin:"Europe and United States",
description:"Op Art uses geometric patterns, contrast, and optical illusions to create the impression of movement and depth.",
features:["Optical illusions","Geometric patterns","Contrast","Visual movement"],
artists:["Bridget Riley","Victor Vasarely","Richard Anuszkiewicz"],works:["Movement in Squares","Zebra","Current"],
narration:"Our final destination is Op Art. Artists used carefully arranged geometric patterns, contrasting colors, and optical illusions to make flat surfaces appear to move or change. The movement explores how the human eye interprets visual information."
}
];

// ARTWORK DATABASE

const artifactDatabase = {
"Cave Painting":[
["Hall of the Bulls","Prehistoric artists","c. 17,000 BCE","Cave painting in Lascaux, France, featuring large animal figures.","Lascaux Hall of the Bulls"],
["Swimming Reindeer","Prehistoric artist","c. 13,000 BCE","A prehistoric carving depicting two swimming reindeer.","Swimming Reindeer prehistoric carving"],
["Altamira Cave Paintings","Prehistoric artists","c. 36,000–13,000 BCE","Cave paintings famous for their painted bison.","Altamira cave paintings bison"]
],
"Renaissance":[
["Mona Lisa","Leonardo da Vinci","c. 1503–1519","A celebrated portrait known for its realistic details and mysterious expression.","Leonardo da Vinci Mona Lisa"],
["The Creation of Adam","Michelangelo","c. 1512","A famous Sistine Chapel ceiling painting depicting the creation of Adam.","Michelangelo Creation of Adam"],
["The School of Athens","Raphael","1509–1511","A painting celebrating classical philosophy and knowledge.","Raphael School of Athens"]
],
"Baroque":[
["The Calling of Saint Matthew","Caravaggio","1599–1600","A religious painting known for dramatic light and shadow.","Caravaggio Calling of Saint Matthew"],
["The Night Watch","Rembrandt","1642","A group portrait famous for its dramatic composition and movement.","Rembrandt Night Watch"],
["The Elevation of the Cross","Peter Paul Rubens","1610–1611","A dramatic composition showing powerful movement.","Rubens Elevation of the Cross"]
],
"Rococo":[
["The Swing","Jean-Honoré Fragonard","1767","A playful painting featuring elegant figures in a garden.","Fragonard The Swing painting"],
["Pilgrimage to Cythera","Antoine Watteau","1717","An elegant romantic landscape with figures in decorative clothing.","Watteau Pilgrimage to Cythera"],
["Madame de Pompadour","François Boucher","1756","A portrait representing Rococo elegance.","Boucher Madame de Pompadour"]
],
"Neoclassicism":[
["Oath of the Horatii","Jacques-Louis David","1784","A painting inspired by ancient Roman duty and sacrifice.","David Oath of the Horatii"],
["The Death of Socrates","Jacques-Louis David","1787","A historical painting showing the final moments of Socrates.","David Death of Socrates"],
["Psyche Revived by Cupid's Kiss","Antonio Canova","1787–1793","A marble sculpture celebrated for its graceful composition.","Canova Psyche Revived by Cupid"]
],
"Romanticism":[
["The Raft of the Medusa","Théodore Géricault","1818–1819","A dramatic painting exploring survival and human emotion.","Gericault Raft of the Medusa"],
["Liberty Leading the People","Eugène Delacroix","1830","A symbolic painting representing freedom and revolution.","Delacroix Liberty Leading the People"],
["Wanderer above the Sea of Fog","Caspar David Friedrich","c. 1818","A solitary figure overlooks a misty landscape.","Friedrich Wanderer above the Sea of Fog"]
],
"Realism":[
["The Gleaners","Jean-François Millet","1857","A painting showing rural workers gathering leftover grain.","Millet The Gleaners"],
["A Burial at Ornans","Gustave Courbet","1849–1850","An everyday funeral scene portrayed on a monumental scale.","Courbet Burial at Ornans"],
["The Stone Breakers","Gustave Courbet","1849","A painting portraying ordinary working people.","Courbet Stone Breakers"]
],
"Impressionism":[
["Impression, Sunrise","Claude Monet","1872","A harbor scene that helped give Impressionism its name.","Monet Impression Sunrise"],
["Water Lilies","Claude Monet","1896–1926","A series exploring reflections, water, light, and color.","Claude Monet Water Lilies"],
["Dance at Le Moulin de la Galette","Pierre-Auguste Renoir","1876","A lively scene of people enjoying an outdoor dance.","Renoir Dance at Le Moulin de la Galette"]
],
"Post-Impressionism":[
["The Starry Night","Vincent van Gogh","1889","An expressive night sky painted with swirling brushstrokes.","Van Gogh Starry Night"],
["Where Do We Come From?","Paul Gauguin","1897–1898","A symbolic painting exploring human existence.","Gauguin Where Do We Come From"],
["Mont Sainte-Victoire","Paul Cézanne","c. 1904–1906","A landscape exploring structure, shape, and color.","Cezanne Mont Sainte Victoire"]
],
"Fauvism":[
["Woman with a Hat","Henri Matisse","1905","A portrait famous for bold and expressive colors.","Matisse Woman with a Hat"],
["The Joy of Life","Henri Matisse","1905–1906","A colorful scene with simplified forms and vibrant colors.","Matisse Joy of Life"],
["The Turning Road","André Derain","1906","A landscape featuring intense colors and expressive brushwork.","Andre Derain Turning Road"]
],
"Cubism":[
["Les Demoiselles d'Avignon","Pablo Picasso","1907","A groundbreaking painting challenging traditional perspective.","Picasso Les Demoiselles d Avignon"],
["Violin and Candlestick","Georges Braque","1910","An example of analytical Cubism and fragmented forms.","Braque Violin and Candlestick"],
["Girl with a Mandolin","Pablo Picasso","1910","A figure represented through geometric shapes and viewpoints.","Picasso Girl with a Mandolin"]
],
"Futurism":[
["Unique Forms of Continuity in Space","Umberto Boccioni","1913","A sculpture representing movement and modern technology.","Boccioni Unique Forms of Continuity in Space"],
["Dynamism of a Dog on a Leash","Giacomo Balla","1912","A painting using repeated forms to suggest movement.","Balla Dynamism of a Dog on a Leash"],
["The City Rises","Umberto Boccioni","1910","A dynamic painting celebrating modern urban life.","Boccioni The City Rises"]
],
"Dadaism":[
["Fountain","Marcel Duchamp","1917","A readymade artwork challenging traditional definitions of art.","Duchamp Fountain 1917"],
["Cut with the Kitchen Knife","Hannah Höch","1919–1920","A photomontage exploring society and politics.","Hannah Hoch Cut with the Kitchen Knife"],
["L.H.O.O.Q.","Marcel Duchamp","1919","An altered reproduction questioning artistic traditions.","Marcel Duchamp LHOOQ"]
],
"Surrealism":[
["The Persistence of Memory","Salvador Dalí","1931","A dreamlike painting featuring melting clocks.","Dali Persistence of Memory"],
["The Son of Man","René Magritte","1964","A portrait with an apple floating in front of the subject.","Magritte Son of Man"],
["The Treachery of Images","René Magritte","1929","An artwork exploring the relationship between images and reality.","Magritte Treachery of Images"]
],
"Abstract Expressionism":[
["No. 5, 1948","Jackson Pollock","1948","An expressive painting created through energetic paint application.","Jackson Pollock Number 5 1948"],
["Woman I","Willem de Kooning","1950–1952","An expressive figure painting combining abstraction and recognizable forms.","de Kooning Woman I"],
["Vir Heroicus Sublimis","Barnett Newman","1950–1951","A large abstract painting exploring color and scale.","Barnett Newman Vir Heroicus Sublimis"]
],
"Pop Art":[
["Marilyn Diptych","Andy Warhol","1962","Repeated celebrity portraits exploring mass media and popular culture.","Warhol Marilyn Diptych"],
["Whaam!","Roy Lichtenstein","1963","A comic-inspired painting using bold outlines and Ben-Day dots.","Lichtenstein Whaam"],
["Campbell's Soup Cans","Andy Warhol","1962","A series turning everyday consumer products into art.","Warhol Campbells Soup Cans"]
],
"Op Art":[
["Movement in Squares","Bridget Riley","1961","A geometric composition creating an illusion of movement.","Bridget Riley Movement in Squares"],
["Zebra","Victor Vasarely","1937","An optical composition using contrasting shapes.","Victor Vasarely Zebra"],
["Current","Bridget Riley","1964","A pattern creating a strong visual illusion of movement.","Bridget Riley Current"]
]
};

// STATE

let currentEra = 0;
let soundEnabled = true;
let sceneFrame;
let audioContext = null;
let activeOscillators = [];
let currentNarration = null;
let artifactRequest = 0;

const imageCache = {};

// TIMELINE

function buildTimeline(filter = "") {
    const timeline = $("timeline");
    timeline.innerHTML = "";

    const filtered = eras
        .map((era, index) => ({...era, index}))
        .filter(era =>
            `${era.name} ${era.date} ${era.origin} ${era.artists.join(" ")}`
                .toLowerCase().includes(filter.toLowerCase())
        );

    $("eraCount").textContent = filtered.length;

    filtered.forEach(era => {
        const card = document.createElement("article");
        card.className = "era-card";

        const number = String(era.index + 1).padStart(2, "0");

        card.innerHTML = `
            <span class="era-number">DESTINATION ${number}</span>
            <h3>${era.name}</h3>
            <p>${era.description.slice(0, 125)}...</p>
            <small>${era.date} • ${era.origin}</small>
        `;

        card.addEventListener("click", () => travelTo(era.index));
        timeline.appendChild(card);
    });

    if (!filtered.length) {
        timeline.innerHTML = `<p class="loading-text">No matching art movements found.</p>`;
    }
}

$("searchInput").addEventListener("input", event => {
    buildTimeline(event.target.value);
});

// NAVIGATION

$("launchBtn").addEventListener("click", () => {
    $("homeScreen").classList.add("hidden");
    $("timelineSection").classList.remove("hidden");
    buildTimeline();
});

function travelTo(index) {
    currentEra = index;
    const era = eras[index];

    stopNarration();
    stopAmbient();
    cancelAnimationFrame(sceneFrame);

    $("travelTitle").textContent = era.name;
    $("travelSubtitle").textContent = era.date + " • " + era.origin;
    $("travelProgress").style.width = "0%";
    $("flightStatus").textContent = "CALIBRATING TEMPORAL COORDINATES";

    $("travelOverlay").classList.add("active");
    $("timelineSection").classList.add("hidden");
    $("experience").classList.add("hidden");

    const statuses = [
        "CALIBRATING TEMPORAL COORDINATES",
        "ACTIVATING TIME ENGINE",
        "ENTERING TEMPORAL TUNNEL",
        "DESTINATION APPROACHING",
        "TEMPORAL CONNECTION ESTABLISHED"
    ];

    let progress = 0;

    const interval = setInterval(() => {
        progress += 2;
        $("travelProgress").style.width = progress + "%";

        if (progress < 25) $("flightStatus").textContent = statuses[0];
        else if (progress < 50) $("flightStatus").textContent = statuses[1];
        else if (progress < 75) $("flightStatus").textContent = statuses[2];
        else if (progress < 95) $("flightStatus").textContent = statuses[3];
        else $("flightStatus").textContent = statuses[4];

        if (progress >= 100) {
            clearInterval(interval);
            showEra(index);
        }
    }, 35);
}

function showEra(index) {
    const era = eras[index];

    $("travelOverlay").classList.remove("active");
    $("experience").classList.remove("hidden");

    $("eraIndex").textContent =
        `DESTINATION ${String(index + 1).padStart(2, "0")} / ${eras.length}`;

    $("eraTitle").textContent = era.name;
    $("eraDate").textContent = era.date;
    $("eraOrigin").textContent = era.origin;
    $("eraDescription").textContent = era.description;

    $("eraFeatures").innerHTML = "";
    era.features.forEach(feature => {
        const tag = document.createElement("span");
        tag.textContent = feature;
        $("eraFeatures").appendChild(tag);
    });

    $("eraArtists").innerHTML = "";
    era.artists.forEach(name => {
        const item = document.createElement("span");
        item.textContent = name;
        $("eraArtists").appendChild(item);
    });

    $("eraWorks").innerHTML = "";
    era.works.forEach(name => {
        const item = document.createElement("span");
        item.textContent = name;
        $("eraWorks").appendChild(item);
    });

    $("sceneLabel").textContent = `SCENE ${String(index + 1).padStart(2, "0")}`;

    displayArtifacts(era.name);
    startScene();
    startAmbient();
}

$("backBtn").addEventListener("click", () => {
    stopNarration();
    stopAmbient();
    cancelAnimationFrame(sceneFrame);
    $("experience").classList.add("hidden");
    $("timelineSection").classList.remove("hidden");
});

$("prevEra").addEventListener("click", () => {
    if (currentEra > 0) travelTo(currentEra - 1);
});

$("nextEra").addEventListener("click", () => {
    if (currentEra < eras.length - 1) travelTo(currentEra + 1);
});

$("replayBtn").addEventListener("click", () => {
    startScene();
});

// ARTIFACT IMAGE SEARCH

async function getArtifactImage(searchTerm) {
    if (imageCache[searchTerm]) return imageCache[searchTerm];

    const fallback =
        "https://placehold.co/700x450/071729/00e5ff?text=Artwork+Unavailable";

    try {
        const params = new URLSearchParams({
            action: "query",
            generator: "search",
            gsrsearch: searchTerm,
            gsrnamespace: "6",
            gsrlimit: "1",
            prop: "imageinfo",
            iiprop: "url",
            iiurlwidth: "800",
            format: "json",
            origin: "*"
        });

        const response = await fetch(
            "https://commons.wikimedia.org/w/api.php?" + params
        );

        if (!response.ok) throw new Error("Image service unavailable");

        const data = await response.json();
        const pages = data.query?.pages;

        if (pages) {
            const page = Object.values(pages)[0];
            const result =
                page.imageinfo?.[0]?.thumburl ||
                page.imageinfo?.[0]?.url;

            if (result) {
                imageCache[searchTerm] = result;
                return result;
            }
        }
    } catch (error) {
        console.warn("Could not retrieve artwork:", searchTerm, error);
    }

    return fallback;
}

async function displayArtifacts(eraName) {
    const gallery = $("artifactGallery");
    const request = ++artifactRequest;

    gallery.innerHTML = `<p class="loading-text">Accessing historical database...</p>`;

    const artifacts = artifactDatabase[eraName] || [];

    if (!artifacts.length) {
        gallery.innerHTML = `<p class="loading-text">No artifacts available.</p>`;
        return;
    }

    gallery.innerHTML = "";

    artifacts.forEach((art, index) => {
        const [title, artist, year, description, search] = art;

        const card = document.createElement("article");
        card.className = "artifact-card";

        const image = document.createElement("img");
        image.alt = title;
        image.src =
            "https://placehold.co/700x450/071729/00e5ff?text=Loading+Artwork";

        const info = document.createElement("div");
        info.className = "artifact-info";

        const heading = document.createElement("h3");
        heading.textContent = title;

        const artistText = document.createElement("p");
        artistText.textContent = artist;

        const yearText = document.createElement("p");
        yearText.textContent = year;

        const view = document.createElement("span");
        view.className = "view-label";
        view.textContent = "ACCESS ARTWORK →";

        info.append(heading, artistText, yearText, view);
        card.append(image, info);

        card.addEventListener("click", () => {
            openArtifact({
                title, artist, year, description
            }, image.src);
        });

        gallery.appendChild(card);

        getArtifactImage(search).then(url => {
            if (request === artifactRequest && card.isConnected) {
                image.src = url;
            }
        });
    });
}

function openArtifact(art, imageUrl) {
    $("viewerImage").src = imageUrl;
    $("viewerTitle").textContent = art.title;
    $("viewerArtist").textContent = "Artist: " + art.artist;
    $("viewerYear").textContent = "Year: " + art.year;
    $("viewerDescription").textContent = art.description;

    $("artifactViewer").classList.add("active");
}

$("closeArtifact").addEventListener("click", () => {
    $("artifactViewer").classList.remove("active");
});

$("artifactViewer").addEventListener("click", event => {
    if (event.target.id === "artifactViewer") {
        $("artifactViewer").classList.remove("active");
    }
});

// AI-STYLE NARRATOR: BROWSER TEXT-TO-SPEECH

function stopNarration() {
    if ("speechSynthesis" in window) {
        speechSynthesis.cancel();
    }

    currentNarration = null;
    $("narratorStatus").textContent = "Narrator standing by...";
    document.querySelector(".voice-wave").classList.remove("playing");
}

function narrateEra() {
    if (!("speechSynthesis" in window)) {
        $("narratorStatus").textContent =
            "Speech synthesis is not supported by this browser.";
        return;
    }

    stopNarration();

    const era = eras[currentEra];
    const speech = new SpeechSynthesisUtterance(era.narration);

    speech.rate = 0.92;
    speech.pitch = 1;
    speech.volume = 1;

    const voices = speechSynthesis.getVoices();
    const englishVoice = voices.find(voice =>
        voice.lang.toLowerCase().startsWith("en")
    );

    if (englishVoice) speech.voice = englishVoice;

    currentNarration = speech;

    speech.onstart = () => {
        $("narratorStatus").textContent = "Narrator speaking...";
        document.querySelector(".voice-wave").classList.add("playing");
    };

    speech.onend = () => {
        $("narratorStatus").textContent = "Narration completed.";
        document.querySelector(".voice-wave").classList.remove("playing");
    };

    speech.onerror = () => {
        $("narratorStatus").textContent = "Narration unavailable.";
        document.querySelector(".voice-wave").classList.remove("playing");
    };

    speechSynthesis.speak(speech);
}

$("narrateBtn").addEventListener("click", narrateEra);

// AMBIENT SOUND

function startAmbient() {
    if (!soundEnabled) return;

    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        stopAmbient();

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const master = audioContext.createGain();
        master.gain.value = 0.025;
        master.connect(audioContext.destination);

        [55, 82, 110].forEach((frequency, index) => {
            const oscillator = audioContext.createOscillator();
            const gain = audioContext.createGain();

            oscillator.type = "sine";
            oscillator.frequency.value = frequency;
            gain.gain.value = 0.25 / (index + 1);

            oscillator.connect(gain);
            gain.connect(master);
            oscillator.start();

            activeOscillators.push(oscillator);
        });

        activeOscillators.push(master);
    } catch (error) {
        console.warn("Ambient sound unavailable:", error);
    }
}

function stopAmbient() {
    activeOscillators.forEach(node => {
        try {
            if (node.stop) node.stop();
            if (node.disconnect) node.disconnect();
        } catch (error) {}
    });

    activeOscillators = [];
}

function toggleSound() {
    soundEnabled = !soundEnabled;

    $("soundIcon").textContent = soundEnabled ? "♫" : "×";
    $("soundLabel").textContent = soundEnabled ? "SOUND ON" : "SOUND OFF";
    $("soundToggle2").textContent = soundEnabled ? "♫ SOUND" : "× MUTED";

    if (soundEnabled) startAmbient();
    else stopAmbient();
}

$("soundToggle").addEventListener("click", toggleSound);
$("soundToggle2").addEventListener("click", toggleSound);

// CANVAS HISTORICAL SCENES

const canvas = $("eraCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;

    canvas.width = Math.max(1, Math.floor(rect.width * ratio));
    canvas.height = Math.max(1, Math.floor(rect.height * ratio));

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function drawScene(time) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const era = eras[currentEra];
    const name = era.name;

    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createLinearGradient(0, 0, 0, height);

    const palettes = {
        "Cave Painting":["#1a0c09","#6e301b"],
        "Renaissance":["#071c35","#234f70"],
        "Baroque":["#07080e","#633b24"],
        "Rococo":["#281c36","#a16e89"],
        "Neoclassicism":["#202b3b","#786f63"],
        "Romanticism":["#12233e","#b45c34"],
        "Realism":["#20201a","#766044"],
        "Impressionism":["#163f5b","#8bb7a1"],
        "Post-Impressionism":["#132d46","#9a713f"],
        "Fauvism":["#3c1635","#d16b4c"],
        "Cubism":["#1b2631","#6c6959"],
        "Futurism":["#172a3b","#9c4d28"],
        "Dadaism":["#1c2030","#626d80"],
        "Surrealism":["#101e37","#6c668d"],
        "Abstract Expressionism":["#121b2b","#7e3b32"],
        "Pop Art":["#321637","#e39b31"],
        "Op Art":["#101010","#555555"]
    };

    const colors = palettes[name] || ["#08172b","#29445c"];

    const background = ctx.createLinearGradient(0,0,width,height);
    background.addColorStop(0,colors[0]);
    background.addColorStop(1,colors[1]);

    ctx.fillStyle = background;
    ctx.fillRect(0,0,width,height);

    if (name === "Cave Painting") {
        for (let i=0;i<100;i++) {
            ctx.fillStyle = `rgba(20,8,4,${Math.random()*.3})`;
            ctx.beginPath();
            ctx.arc(randomBetween(0,width),randomBetween(0,height),randomBetween(2,8),0,Math.PI*2);
            ctx.fill();
        }

        ctx.strokeStyle = "#d58b4b";
        ctx.lineWidth = 5;

        for (let i=0;i<4;i++) {
            const x=80+i*width/5;
            ctx.beginPath();
            ctx.arc(x,height*.55,25,0,Math.PI*2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x-25,height*.55);
            ctx.lineTo(x+25,height*.55);
            ctx.moveTo(x,height*.55-25);
            ctx.lineTo(x,height*.55+25);
            ctx.stroke();
        }

        for(let i=0;i<10;i++){
            ctx.fillStyle="#d58b4b";
            ctx.fillRect(randomBetween(0,width),randomBetween(0,height),randomBetween(2,5),randomBetween(2,5));
        }
    } else if(name==="Renaissance" || name==="Neoclassicism") {
        ctx.strokeStyle="rgba(240,210,160,.65)";
        ctx.lineWidth=3;
        ctx.strokeRect(width*.15,height*.12,width*.7,height*.76);

        for(let i=0;i<5;i++){
            const x=width*.2+i*width*.15;
            ctx.beginPath();
            ctx.moveTo(x,height*.12);
            ctx.lineTo(x,height*.88);
            ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(width*.5,height*.42,75,Math.PI,0);
        ctx.stroke();

        ctx.fillStyle="rgba(240,210,160,.5)";
        ctx.beginPath();
        ctx.arc(width*.5,height*.42,45,0,Math.PI*2);
        ctx.fill();
    } else if(name==="Baroque" || name==="Romanticism") {
        for(let i=0;i<12;i++){
            const x=randomBetween(0,width);
            const y=randomBetween(0,height);
            const r=randomBetween(20,80);
            const glow=ctx.createRadialGradient(x,y,0,x,y,r);
            glow.addColorStop(0,"rgba(255,190,80,.45)");
            glow.addColorStop(1,"rgba(255,100,20,0)");
            ctx.fillStyle=glow;
            ctx.fillRect(x-r,y-r,r*2,r*2);
        }

        ctx.fillStyle="rgba(0,0,0,.5)";
        ctx.fillRect(0,height*.8,width,height*.2);
    } else if(name==="Rococo" || name==="Fauvism" || name==="Impressionism") {
        const palette=name==="Rococo"
            ? ["#f3b7ce","#ffe2a8","#a7d4d8","#d5b2e6"]
            : name==="Fauvism"
            ? ["#fa4b36","#f5c542","#25a6ad","#8d48b5"]
            : ["#e5d4a0","#9bcbce","#77a6a2","#e9a6a0"];

        for(let i=0;i<45;i++){
            ctx.fillStyle=palette[i%palette.length];
            ctx.globalAlpha=.35;
            ctx.beginPath();
            ctx.ellipse(randomBetween(0,width),randomBetween(0,height),randomBetween(10,40),randomBetween(4,16),randomBetween(0,Math.PI),0,Math.PI*2);
            ctx.fill();
        }

        ctx.globalAlpha=1;
    } else if(name==="Cubism") {
        const colors=["#d9a65b","#41677a","#a7a28a","#8c4c3d"];
        for(let i=0;i<28;i++){
            ctx.fillStyle=colors[i%colors.length];
            ctx.globalAlpha=.5;
            ctx.save();
            ctx.translate(randomBetween(0,width),randomBetween(0,height));
            ctx.rotate(randomBetween(0,Math.PI));
            ctx.fillRect(-randomBetween(20,60),-randomBetween(20,50),randomBetween(40,100),randomBetween(40,90));
            ctx.restore();
        }
        ctx.globalAlpha=1;
    } else if(name==="Futurism") {
        ctx.strokeStyle="rgba(0,229,255,.5)";
        ctx.lineWidth=2;
        for(let i=0;i<35;i++){
            ctx.beginPath();
            ctx.moveTo(width*.5,height*.5);
            ctx.lineTo(randomBetween(0,width),randomBetween(0,height));
            ctx.stroke();
        }
    } else if(name==="Dadaism" || name==="Abstract Expressionism") {
        const colors=["#e4d6be","#d55b42","#436c82","#c9aa49"];
        for(let i=0;i<80;i++){
            ctx.strokeStyle=colors[i%colors.length];
            ctx.lineWidth=randomBetween(2,12);
            ctx.beginPath();
            ctx.moveTo(randomBetween(0,width),randomBetween(0,height));
            ctx.lineTo(randomBetween(0,width),randomBetween(0,height));
            ctx.stroke();
        }
    } else if(name==="Surrealism") {
        ctx.fillStyle="rgba(220,220,255,.7)";
        ctx.beginPath();
        ctx.arc(width*.5,height*.4,65,0,Math.PI*2);
        ctx.fill();

        ctx.fillStyle="#0b172a";
        ctx.fillRect(0,height*.7,width,height*.3);

        ctx.fillStyle="rgba(255,255,255,.5)";
        for(let i=0;i<25;i++){
            ctx.fillRect(randomBetween(0,width),randomBetween(0,height*.7),2,2);
        }
    } else if(name==="Pop Art") {
        const colors=["#ff4141","#ffcb36","#35b5d2","#a950bd"];
        for(let i=0;i<16;i++){
            ctx.fillStyle=colors[i%colors.length];
            ctx.fillRect((i%4)*width/4,Math.floor(i/4)*height/4,width/4+1,height/4+1);
        }

        ctx.fillStyle="rgba(0,0,0,.3)";
        for(let x=0;x<width;x+=12){
            for(let y=0;y<height;y+=12){
                ctx.beginPath();
                ctx.arc(x,y,1.5,0,Math.PI*2);
                ctx.fill();
            }
        }
    } else if(name==="Op Art") {
        ctx.strokeStyle="#fff";
        ctx.lineWidth=2;
        const offset=(time/25)%30;

        for(let i=0;i<25;i++){
            ctx.beginPath();
            ctx.arc(width/2,height/2,i*18+offset,0,Math.PI*2);
            ctx.stroke();
        }
    } else {
        ctx.fillStyle="rgba(255,255,255,.3)";
        for(let i=0;i<60;i++){
            ctx.fillRect(randomBetween(0,width),randomBetween(0,height),2,2);
        }
    }

    // SCENE TITLE
    ctx.fillStyle="rgba(0,0,0,.3)";
    ctx.fillRect(0,height-48,width,48);

    ctx.fillStyle="#ffffff";
    ctx.font="bold 12px Orbitron, sans-serif";
    ctx.fillText(name.toUpperCase()+" • HISTORICAL VISUALIZATION",20,height-19);
}

function animateScene(time) {
    drawScene(time);
    sceneFrame=requestAnimationFrame(animateScene);
}

function startScene() {
    cancelAnimationFrame(sceneFrame);
    resizeCanvas();
    sceneFrame=requestAnimationFrame(animateScene);
}

window.addEventListener("resize", () => {
    if (!$("experience").classList.contains("hidden")) {
        resizeCanvas();
    }
});

// INITIALIZE

buildTimeline();

if ("speechSynthesis" in window) {
    speechSynthesis.getVoices();
}
