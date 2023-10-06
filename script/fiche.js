function database(nomPerso) {
    //URLPerso = window.location.hash.substring(1);
    //const idPerso = URLPerso.substring(URLPerso.length-1);
    //const nomPerso = URLPerso.substring(0, URLPerso.length-1);
    var idPerso = 0;

    const prenom = document.getElementsByClassName("prenom")[idPerso];
    const nom = document.getElementsByClassName("nom")[idPerso];
    const age = document.getElementsByClassName("age")[idPerso];
    const genre = document.getElementsByClassName("genre")[idPerso];
    const taille = document.getElementsByClassName("taille")[idPerso];
    const poids = document.getElementsByClassName("poids")[idPerso];
    const race = document.getElementsByClassName("race")[idPerso];
    const classe = document.getElementsByClassName("classe")[idPerso];
    const metier = document.getElementsByClassName("metier")[idPerso];
    const loisir = document.getElementsByClassName("loisir")[idPerso];
    const illustration = document.getElementsByClassName("illustration")[idPerso];

    const pv = document.getElementsByClassName("pv")[idPerso];
    const pe = document.getElementsByClassName("pe")[idPerso];

    const constitution = document.getElementsByClassName("constitution")[idPerso];
    const agilite = document.getElementsByClassName("agilite")[idPerso];
    const mental = document.getElementsByClassName("mental")[idPerso];
    const magie = document.getElementsByClassName("magie")[idPerso];
    const charisme = document.getElementsByClassName("charisme")[idPerso];
    const savoir = document.getElementsByClassName("savoir")[idPerso];

    const corps = document.getElementsByClassName("corps")[idPerso];
    const esprit = document.getElementsByClassName("esprit")[idPerso];
    const social = document.getElementsByClassName("social")[idPerso];
    const resistancePhysique = document.getElementsByClassName("res-physique")[idPerso];
    const bonusPhysique = document.getElementsByClassName("bonus-physique")[idPerso];
    const resistanceMagique = document.getElementsByClassName("res-magique")[idPerso];
    const bonusMagique = document.getElementsByClassName("bonus-magique")[idPerso];

    const pugilat = document.getElementsByClassName("pugilat")[idPerso];
    const armeCaC = document.getElementsByClassName("armeCaC")[idPerso];
    const precision = document.getElementsByClassName("precision")[idPerso];
    const esquive = document.getElementsByClassName("esquive")[idPerso];
    const parade = document.getElementsByClassName("parade")[idPerso];
    const discretion = document.getElementsByClassName("discretion")[idPerso];
    const observation = document.getElementsByClassName("observation")[idPerso];
    const perception = document.getElementsByClassName("perception")[idPerso];
    const psyche = document.getElementsByClassName("psyche")[idPerso];
    const intimidation = document.getElementsByClassName("intimidation")[idPerso];
    const communication = document.getElementsByClassName("communication")[idPerso];
    const autorite = document.getElementsByClassName("autorite")[idPerso];
    const medecine = document.getElementsByClassName("medecine")[idPerso];
    const pilotage = document.getElementsByClassName("pilotage")[idPerso];
    const artisanat = document.getElementsByClassName("artisanat")[idPerso];
    const vitesse  = document.getElementsByClassName("vitesse")[idPerso];
    const instinct = document.getElementsByClassName("instinct")[idPerso];
    const sang_froid = document.getElementsByClassName("sang-froid")[idPerso];
    const regen = document.getElementsByClassName("regen")[idPerso];
    const recup = document.getElementsByClassName("recup")[idPerso];

    const contextePugilat = document.getElementsByClassName("cpugilat")[idPerso];
    const contextePugilat2 = document.getElementsByClassName("cpugilat2")[idPerso];
    const contexteArmeCaC = document.getElementsByClassName("ccac")[idPerso];
    const contexteArmeCaC2 = document.getElementsByClassName("ccac2")[idPerso];
    const contextePrecision = document.getElementsByClassName("cprecision")[idPerso];
    const contextePrecision2 = document.getElementsByClassName("cprecision2")[idPerso];
    const contexteEsquive = document.getElementsByClassName("cesquive")[idPerso];
    const contexteEsquive2 = document.getElementsByClassName("cesquive2")[idPerso];
    const contexteParade = document.getElementsByClassName("cparade")[idPerso];
    const contexteParade2 = document.getElementsByClassName("cparade2")[idPerso];
    const contexteDiscretion = document.getElementsByClassName("cdiscretion")[idPerso];
    const contexteDiscretion2 = document.getElementsByClassName("cdiscretion2")[idPerso];
    const contexteObservation = document.getElementsByClassName("cobservation")[idPerso];
    const contexteObservation2 = document.getElementsByClassName("cobservation2")[idPerso];
    const contextePerception = document.getElementsByClassName("cperception")[idPerso];
    const contextePerception2 = document.getElementsByClassName("cperception2")[idPerso];
    const contextePsyche = document.getElementsByClassName("cpsyche")[idPerso];
    const contextePsyche2 = document.getElementsByClassName("cpsyche2")[idPerso];
    const contexteIntimidation = document.getElementsByClassName("cintimidation")[idPerso];
    const contexteIntimidation2 = document.getElementsByClassName("cintimidation2")[idPerso];
    const contexteCommunication = document.getElementsByClassName("ccommunication")[idPerso];
    const contexteCommunication2 = document.getElementsByClassName("ccommunication2")[idPerso];
    const contexteAutorite = document.getElementsByClassName("cautorite")[idPerso];
    const contexteAutorite2 = document.getElementsByClassName("cautorite2")[idPerso];
    const contexteMedecine = document.getElementsByClassName("cmedecine")[idPerso];
    const contexteMedecine2 = document.getElementsByClassName("cmedecine2")[idPerso];
    const contextePilotage = document.getElementsByClassName("cpilotage")[idPerso];
    const contextePilotage2 = document.getElementsByClassName("cpilotage2")[idPerso];
    const contexteArtisanat = document.getElementsByClassName("cartisanat")[idPerso];
    const contexteArtisanat2 = document.getElementsByClassName("cartisanat2")[idPerso];
    const contexteVitesse = document.getElementsByClassName("cvitesse")[idPerso];
    const contexteVitesse2 = document.getElementsByClassName("cvitesse2")[idPerso];
    const contexteInstinct = document.getElementsByClassName("cinstinct")[idPerso];
    const contexteInstinct2 = document.getElementsByClassName("cinstinct2")[idPerso];
    const contexteSang_froid = document.getElementsByClassName("csang-froid")[idPerso];
    const contexteSang_froid2 = document.getElementsByClassName("csang-froid2")[idPerso];
    const contexteRegen = document.getElementsByClassName("cregen")[idPerso];
    const contexteRegen2 = document.getElementsByClassName("cregen")[idPerso];
    const contexteRecup = document.getElementsByClassName("crecup")[idPerso];
    const contexteRecup2 = document.getElementsByClassName("crecup2")[idPerso];


    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../data/persofantaisie.json");
    xhr.onload = () => {
        if (xhr.status === 200) {
            const personnageTableau = JSON.parse(xhr.responseText);
            for(let i = 0; i < personnageTableau.length; ++i){
                if(nomPerso === personnageTableau[i].info.prenom){
                    //console.log(personnageTableau[i].info.prenom)
                    const personnage = personnageTableau[i];       

                    prenom.textContent = personnage.info.prenom;
                    nom.textContent = personnage.info.nom;
                    age.textContent = personnage.info.age;
                    genre.textContent = personnage.info.sexe;
                    taille.textContent = personnage.info.taille;
                    poids.textContent = personnage.info.poids;
                    race.textContent = personnage.info.race;
                    classe.textContent = personnage.info.classe;
                    metier.textContent = personnage.info.metier;
                    loisir.textContent = personnage.info.loisir;
                    illustration.src = personnage.illustration;
                    pv.textContent = personnage.pv;
                    pe.textContent = personnage.pe

                    const constitutionValue = personnage.gds_stats[0].value;
                    const agiliteValue= personnage.gds_stats[1].value;
                    const mentalValue = personnage.gds_stats[2].value;
                    const magieValue = personnage.gds_stats[3].value;
                    const charismeValue = personnage.gds_stats[4].value;
                    const savoirValue  = personnage.gds_stats[5].value;

                    constitution.textContent = constitutionValue;
                    agilite.textContent = agiliteValue;
                    mental.textContent = mentalValue;
                    magie.textContent = magieValue;
                    charisme.textContent = charismeValue;
                    savoir.textContent = savoirValue;
                    
                    const corpsValue = Math.floor((2 * personnage.gds_stats[0].value + 2 * personnage.gds_stats[1].value + personnage.gds_stats[5].value )/5) + personnage.maitrise_bonus[0].value;
                    const espritValue = Math.floor((2 * personnage.gds_stats[2].value + 2 * personnage.gds_stats[3].value + personnage.gds_stats[5].value)/5)  + personnage.maitrise_bonus[1].value;
                    const socialValue = Math.floor(( 4 * personnage.gds_stats[4].value + personnage.gds_stats[5].value)/5)  + personnage.maitrise_bonus[2].value;

                    corps.textContent = corpsValue;
                    esprit.textContent = espritValue;
                    social.textContent = socialValue;

                    resistanceBonus(resistancePhysique, constitutionValue, personnage.resistance_bonus[0].value)
                    resistanceBonus(bonusPhysique, constitutionValue, personnage.resistance_bonus[1].value)
                    resistanceBonus(resistanceMagique, magieValue, personnage.resistance_bonus[2].value)
                    resistanceBonus(bonusMagique, magieValue, personnage.resistance_bonus[3].value)

                    const pugilatValue = Math.floor((2*constitutionValue + corpsValue )/3) + personnage.ss_stats_bonus[0].value + personnage.ss_stats_traits[0].value;
                    const armeCaCValue = Math.floor((constitutionValue + 2*corpsValue)/3) + personnage.ss_stats_bonus[1].value + personnage.ss_stats_traits[1].value;
                    const precisionValue = Math.floor((3*corpsValue + espritValue)/4) + personnage.ss_stats_bonus[2].value + personnage.ss_stats_traits[2].value;
                    const esquiveValue = Math.floor((2*agiliteValue + corpsValue)/3) + personnage.ss_stats_bonus[3].value + personnage.ss_stats_traits[3].value;
                    const paradeValue = corpsValue + personnage.ss_stats_bonus[4].value + personnage.ss_stats_traits[4].value;
                    const discretionValue = Math.floor((2*agiliteValue + socialValue)/3) + personnage.ss_stats_bonus[5].value + personnage.ss_stats_traits[5].value;
                    const observationValue =  Math.floor((socialValue + 3*mentalValue)/4) + personnage.ss_stats_bonus[6].value + personnage.ss_stats_traits[6].value;
                    const perceptionValue = Math.floor((3*magieValue + espritValue)/4) + personnage.ss_stats_bonus[7].value + personnage.ss_stats_traits[7].value;
                    const psycheValue = Math.floor((magieValue + 2*espritValue + mentalValue)/4) + personnage.ss_stats_bonus[8].value + personnage.ss_stats_traits[8].value;
                    const intimidationValue = Math.floor((constitutionValue + 2*socialValue)/3) + personnage.ss_stats_bonus[9].value + personnage.ss_stats_traits[9].value;
                    const communicationValue = socialValue + personnage.ss_stats_bonus[10].value + personnage.ss_stats_traits[10].value;
                    const autoriteValue = Math.floor((charismeValue + socialValue)/2) + personnage.ss_stats_bonus[11].value + personnage.ss_stats_traits[11].value;
                    const medecineValue = Math.floor((espritValue + savoirValue)/2) + personnage.ss_stats_bonus[12].value + personnage.ss_stats_traits[12].value;
                    const pilotageValue = Math.floor((socialValue + espritValue)/2) + personnage.ss_stats_bonus[13].value + personnage.ss_stats_traits[13].value;
                    const artisanatValue = Math.floor((socialValue + espritValue)/2) + personnage.ss_stats_bonus[14].value + personnage.ss_stats_traits[14].value;
                    const vitesseValue = Math.floor((agiliteValue + corpsValue)/2) + personnage.ss_stats_bonus[15].value + personnage.ss_stats_traits[15].value;
                    const instinctValue = Math.floor((mentalValue + espritValue)/2) + personnage.ss_stats_bonus[16].value + personnage.ss_stats_traits[16].value;
                    const sang_froidValue = Math.floor((savoirValue + espritValue)/2) + personnage.ss_stats_bonus[17].value + personnage.ss_stats_traits[17].value;
                    const regenValue = Math.floor((constitutionValue + espritValue)/2) + personnage.ss_stats_bonus[18].value + personnage.ss_stats_traits[18].value;
                    const recupValue = Math.floor((magieValue + espritValue)/2) + personnage.ss_stats_bonus[19].value + personnage.ss_stats_traits[19].value;
                    

                    pugilat.textContent = pugilatValue;
                    armeCaC.textContent = armeCaCValue;
                    precision.textContent = precisionValue;
                    esquive.textContent = esquiveValue;
                    parade.textContent = paradeValue;
                    discretion.textContent = discretionValue;
                    observation.textContent = observationValue;
                    perception.textContent = perceptionValue;
                    psyche.textContent = psycheValue;
                    intimidation.textContent = intimidationValue;
                    communication.textContent = communicationValue;
                    autorite.textContent = autoriteValue;
                    medecine.textContent = medecineValue;
                    pilotage.textContent = pilotageValue;
                    artisanat.textContent = artisanatValue;
                    vitesse.textContent = vitesseValue;
                    instinct.textContent = instinctValue;
                    sang_froid.textContent = sang_froidValue;
                    regen.textContent = regenValue;
                    recup.textContent = recupValue;

                    contexte(personnage, 0, contextePugilat, pugilatValue)
                    contexte(personnage, 1, contextePugilat2, pugilatValue)
                    contexte(personnage, 2, contexteArmeCaC, armeCaCValue)
                    contexte(personnage, 3, contexteArmeCaC2, armeCaCValue)
                    contexte(personnage, 4, contextePrecision, precisionValue)
                    contexte(personnage, 5, contextePrecision2, precisionValue)
                    contexte(personnage, 6, contexteEsquive, esquiveValue)
                    contexte(personnage, 7, contexteEsquive2, esquiveValue)
                    contexte(personnage, 8, contexteParade, paradeValue)
                    contexte(personnage, 9, contexteParade2, paradeValue)
                    contexte(personnage, 10, contexteDiscretion, discretionValue)
                    contexte(personnage, 11, contexteDiscretion2, discretionValue)
                    contexte(personnage, 12, contexteObservation, observationValue)
                    contexte(personnage, 13, contexteObservation2, observationValue)
                    contexte(personnage, 14, contextePerception, perceptionValue)
                    contexte(personnage, 15, contextePerception2, perceptionValue)
                    contexte(personnage, 16, contextePsyche, psycheValue)
                    contexte(personnage, 17, contextePsyche2, psycheValue)
                    contexte(personnage, 18, contexteIntimidation, intimidationValue)
                    contexte(personnage, 19, contexteIntimidation2, intimidationValue)
                    contexte(personnage, 20, contexteCommunication, communicationValue)
                    contexte(personnage, 21, contexteCommunication2, communicationValue)
                    contexte(personnage, 22, contexteAutorite, autoriteValue)
                    contexte(personnage, 23, contexteAutorite2, autoriteValue)
                    contexte(personnage, 24, contexteMedecine, medecineValue)
                    contexte(personnage, 25, contexteMedecine2, medecineValue)
                    contexte(personnage, 26, contextePilotage, pilotageValue)
                    contexte(personnage, 27, contextePilotage2, pilotageValue)
                    contexte(personnage, 28, contexteArtisanat, artisanatValue)
                    contexte(personnage, 29, contexteArtisanat2, artisanatValue)
                    contexte(personnage, 30, contexteVitesse, vitesseValue)
                    contexte(personnage, 31, contexteVitesse2, vitesseValue)
                    contexte(personnage, 32, contexteInstinct, instinctValue)
                    contexte(personnage, 33, contexteInstinct2, instinctValue)
                    contexte(personnage, 34, contexteSang_froid, sang_froidValue)
                    contexte(personnage, 35, contexteSang_froid2, sang_froidValue)
                    contexte(personnage, 36, contexteRegen, regenValue)
                    contexte(personnage, 37, contexteRegen2, regenValue)
                    contexte(personnage, 38, contexteRecup, recupValue)
                    contexte(personnage, 39, contexteRecup2, recupValue)

                    tableauTraitCompetenceBagage("tableau-trait", idPerso, personnage.trait);
                    tableauTraitCompetenceBagage("tableau-competence", idPerso, personnage.competence);
                    tableauArmeArmure("arme", "tableau-arme", idPerso, personnage.armes);
                    tableauArmeArmure("armure", "tableau-armure", idPerso, personnage.vetements);
                    tableauTraitCompetenceBagage("tableau-objet", idPerso, personnage.bagages)
                    tableauArgent("tableau-argent", idPerso, personnage.argent);
                }
            };
        }
    }         
    xhr.send();
};

// Fonction pour créer une modal avec des données variables
function createModal(nomPerso, idPerso) {
    var modalHTML = `
    <div class="modal_fiche" id="${nomPerso+idPerso}">
    <div class="fiche_content">
        <div class="fiche_content_header">
            <div id="close_modal" class="modal_close">&times;</div>
            <div class="btn_haut"><a href="" target="popup" onclick="window.open(document.URL + '','name','width=800,height=600')"><i class="fa fa-window-restore"></i></a></div>
            <div class="header_container">
                <p><span class="prenom"></span><span class="nom"></span></p>
            </div>
            <div class="btn_container">
            <div id="fiche_save" class="btn_bas"><i class="fa fa-floppy-o"></i></div>
            <div id="fiche_edit" class="btn_bas"><i class="fa fa-pencil-square-o"></i></div>
            </div>
        </div>
        <section class="scroll_page">
            <div class="rouleau_competence">
                <a href="#Compétence${nomPerso}" class="chapitres_competence">Compétences</a>
                <img src="../images/fantaisie/assets/rouleau_bleu.png" class="rouleau"/>
            </div>
            <div class="rouleau_competence">
                <a href="#Bagages${nomPerso}" class="chapitres_bagage">Bagages</a>
                <img src="../images/fantaisie/assets/rouleau_rouge.png" class="rouleau"/>
            </div>
        </section>

        <div class="fiche_body">
        <div class="info_container">
            <div class="info_left">
                <p>Age : <span class="age"></span><span> ans</span></p>
                <p>Genre : <span class="genre"></span></p>
                <p>Taille : <span class="taille"></span></p>
                <p>Poids : <span class="poids"></span><span> kg</span></p>
                <div class="info_tel">
                    <p>Race : <span class="race"></span></p>
                    <p>Classe : <span class="classe"></span></p>
                    <p>Métier : <span class="metier"></span></p>
                    <p>Loisir : <span class="loisir"></span></p>
                </div>
            </div>

            <div class="vita">
                <p>Vitalité</p>
                <p class="pv">15</p>
                <img class="bordure_pv" src="../images/fantaisie/assets/pvpe.png"/>
            </div>

            <div class="illu_info">
                <img class="illustration" />
            </div>

            <div class="ene">
                <p>Energie</p>
                <p class="pe">15</p>
                <img class="bordure_pe" src="../images/fantaisie/assets/pvpe.png"/>
            </div>

            <div class="info_right">
                <p>Race : <span class="race"></span></p>
                <p>Classe : <span class="classe"></span></p>
                <p>Métier : <span class="metier"></span></p>
                <p>Loisir : <span class="loisir"></span></p>
            </div>
        </div>

        <div class="evaluation">
            <p class="police">Evaluation <p>95</p></p>
        </div>

        <section class="stats">

            <table class="gds_stats">
                <tbody>
                    <tr>
                        <td class="police">Constitution</td>
                        <td class="police">Agilité</td>
                        <td class="police">Mental</td>
                        <td class="police">Magie</td>
                        <td class="police">Charisme</td>
                        <td class="police">Savoir</td>
                    </tr>
                    <tr>
                        <td class="constitution"></td>
                        <td class="agilite"></td>
                        <td class="mental"></td>
                        <td class="magie"></td>
                        <td class="charisme"></td>
                        <td class="savoir"></td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="Ouais">
            <table class="res">
                <tr>
                    <td class="police">Res. Physique</td>
                    <td class="police">Bonus Physique</td>
                </tr>
                <tr>
                    <td class="res-physique"></td>
                    <td class="bonus-physique"></td>
                </tr>
            </table>
        
            <table class="maitrise">
                <tbody>
                    <tr>
                        <td class="police">Corps</td>
                        <td class="police">Esprit</td>
                        <td class="police">Social</td>
                    </tr>
                    <tr>
                        <td class="corps"></td>
                        <td class="esprit"></td>
                        <td class="social"></td>
                    </tr>
                </tbody>
            </table>

            <table class="res">
                <tr>
                    <td class="police">Res. Magique</td>
                    <td class="police">Bonus Magique</td>
                </tr>
                <tr>
                    <td class="res-magique"></td>
                    <td class="bonus-magique"></td>
                </tr>
            </table>
        </section>
    
        <section class="ss_stats">
            <table class="ss_stats_left">
                <tr>
                    <td class="police">Pugilat</td>
                    <td class="pugilat"></td>
                    <td class="contexte">
                        <span class="cpugilat"></span>
                        <span class="cpugilat2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Arme de Corps a Corps</td>
                    <td class="armeCaC"></td>
                    <td class="contexte">
                        <span class="ccac"></span>
                        <span class="ccac2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Précision</td>
                    <td class="precision"></td>
                    <td class="contexte">
                        <span class="cprecision"></span>
                        <span class="cprecision2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Esquive</td>
                    <td class="esquive"></td>
                    <td class="contexte">
                        <span class="cesquive"></span>
                        <span class="cesquive2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Parade</td>
                    <td class="parade"></td>
                    <td class="contexte">
                        <span class="cparade"></span>
                        <span class="cparade2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Discrétion</td>
                    <td class="discretion"></td>
                    <td class="contexte">
                        <span class="cdiscretion"></span>
                        <span class="cdiscretion2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Observation</td>
                    <td class="observation"></td>
                    <td class="contexte">
                        <span class="cobservation"></span>
                        <span class="cobservation2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Perception</td>
                    <td class="perception"></td>
                    <td class="contexte">
                        <span class="cperception"></span>
                        <span class="cperception2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Psyché</td>
                    <td class="psyche"></td>
                    <td class="contexte">
                        <span class="cpsyche"></span>
                        <span class="cpsyche2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Intimidation</td>
                    <td class="intimidation"></td>
                    <td class="contexte">
                        <span class="cintimidation"></span>
                        <span class="cintimidation2"></span>
                    </td>
                </tr>
            </table>

            <table class="ss_stats_right">
                <tr>
                    <td class="police">Communication</td>
                    <td class="communication"></td>
                    <td class="contexte">
                        <span class="ccommunication"></span>
                        <span class="ccommunication2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Autorité</td>
                    <td class="autorite"></td>
                    <td class="contexte">
                        <span class="cautorite"></span>
                        <span class="cautorite2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Médecine</td>
                    <td class="medecine"></td>
                    <td class="contexte">
                        <span class="cmedecine"></span>
                        <span class="cmedecine2"></span>
                    </td>
                <tr>
                    <td class="police">Pilotage</td>
                    <td class="pilotage"></td>
                    <td class="contexte">
                        <span class="cpilotage"></span>
                        <span class="cpilotage2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Artisanat</td>
                    <td class="artisanat"></td>
                    <td class="contexte">
                        <span class="cartisanat"></span>
                        <span class="cartisanat2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Vitesse</td>
                    <td class="vitesse"></td>
                    <td class="contexte">
                        <span class="cvitesse"></span>
                        <span class="cvitesse2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Instinct</td>
                    <td class="instinct"></td>
                    <td class="contexte">
                        <span class="cinstinct"></span>
                        <span class="cinstinct2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Sang-froid</td>
                    <td class="sang-froid"></td>
                    <td class="contexte">
                        <span class="csang-froid"></span>
                        <span class="csang-froid2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Régénération de PV</td>
                    <td class="regen"></td>
                    <td class="contexte">
                        <span class="cregen"></span>
                        <span class="cregen2"></span>
                    </td>
                </tr>
                <tr>
                    <td class="police">Récupération de PE</td>
                    <td class="recup"></td>
                    <td class="contexte">
                        <span class="crecup"></span>
                        <span class="crecup2"></span>
                    </td>
                </tr>
            </table>
        </section>
        </div>
    </div>
</div>
<div class="modal_fiche" id="Compétence${nomPerso}">
    <section class="scroll_page_competence">
        <div class="rouleau_competence">
            <a href="#${nomPerso+idPerso}" class="chapitres_competence">Personnage</a>
            <img src="../images/fantaisie/assets/rouleau_bleu.png" class="rouleau"/>
        </div>
        <div class="rouleau_competence">
            <a href="#Bagages${nomPerso}" class="chapitres_bagage">Bagages</a>
            <img src="../images/fantaisie/assets/rouleau_rouge.png" class="rouleau"/>
        </div>
    </section>
    <div class="fiche_content">
        <div class="fiche_content_header">
            <div id="close_modal" class="modal_close">&times;</div>
            <div class="header_container">
                <p><span class="prenom"></span><span class="nom"></span></p>
            </div>
        </div>
        <div class="fiche_body">
        <h2 class="Catégorie_Tableau">Traits</h2>
        <div class="tableau-trait"></div>
        <h2 class="Catégorie_Tableau">Compétences</h2>
        <div class="tableau-competence"></div>
        </div>
    </div>
</div>
<div class="modal_fiche" id="Bagages${nomPerso}">
    <section class="scroll_page_bagage">
        <div class="rouleau_competence">
            <a href="#${nomPerso+idPerso}" class="chapitres_competence">Personnage</a>
            <img src="../images/fantaisie/assets/rouleau_bleu.png" class="rouleau"/>
        </div>
        <div class="rouleau_competence">
            <a href="#Compétence${nomPerso}" class="chapitres_bagage">Compétence</a>
            <img src="../images/fantaisie/assets/rouleau_rouge.png" class="rouleau"/>
        </div>
    </section>
    <div class="fiche_content">
        <div class="fiche_content_header">
            <div id="close_modal" class="modal_close">&times;</div>
            <div class="header_container">
                <p><span class="prenom"></span><span class="nom"></span></p>
            </div>
        </div>
        <div class="fiche_body">
        <h2 class="Catégorie_Tableau">Armes</h2>
        <div class="tableau-arme"></div>
        <h2 class="Catégorie_Tableau">Armures</h2>
        <div class="tableau-armure"></div>
        <div class="conteneur_objet_argent">
            <div>
                <h2 class="Catégorie_Tableau">Bagages</h2>
                <div class="tableau-objet"></div>
            </div>
            <div>
                <h2 class="Catégorie_Tableau">Devise</h2>
                <div class="tableau-argent"></div>
            </div>
        </div>
    </div>
    </div>
</div>
    `;
  
    // Ajouter la modal à la fin du corps du document
    document.body.insertAdjacentHTML("beforebegin", modalHTML);
  
    // Lier l'événement de clic au bouton de fermeture
    var close = document.getElementsByClassName("modal_close");
    for (var i = close.length - 1; i >= 0; --i) {
        close[i].addEventListener("click", function() {
            closeModal();
        });
    }
    window.onclick = function(event) {
        var modal = document.getElementById(nomPerso+idPerso);
        var modalCompetence = document.getElementById("Compétence"+nomPerso);
        var modalBagages = document.getElementById("Bagages"+nomPerso);
        if (event.target == modal) {
          closeModal()
        }
    }
  }
  
  // Données pour les modals
  /*var blancData = {
    prenom: "John",
    nom: "Doe",
    age: 30,
    genre: "Homme",
    // Ajoutez d'autres données ici
  };
  
  var competenceData = {
    // Ajoutez des données pour la modal de compétence ici
  };
  
  var bagagesData = {
    // Ajoutez des données pour la modal de bagages ici
  };
  
  // Créer les modals en utilisant les données
  createModal("Blanc5", blancData);
  createModal("CompétenceBlanc", competenceData);
  createModal("BagagesBlanc", bagagesData);*/
  function modal(id){
    const idPerso = id.substring(id.length-1);
    const nomPerso = id.substring(0, id.length-1);
    createModal(nomPerso, idPerso);
    openModal(id);
    database(nomPerso, idPerso);
  }
  /*function modal(nomPerso, idPerso){
    var modal = document.getElementsByClassName('modal_fiche')[0];
    modal.id = nomPerso+idPerso;
    console.log(modal.id)
  }*/
  //var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
/*btn.onclick = function() {
    URLPerso = document.getElementById("myBtn");
    const id = URLPerso.dataset.id;
    const idPerso = id.substring(id.length-1);
    const nomPerso = id.substring(0, id.length-1);
    createModal(nomPerso, idPerso);
    openModal(id);
}*/
  // Fonction pour ouvrir la modal
  function openModal(id) {
    console.log(id)
    var modal = document.getElementById(id);
    modal.style.display = "flex";
  }
  
  // Fonction pour fermer la modal
  function closeModal() {
    var modal = document.getElementsByClassName('modal_fiche');
    for (var i = modal.length - 1; i >= 0; --i) {
        modal[i].remove();
    }
  }
  
  // Lier les événements de clic aux éléments pour ouvrir les modals
  /*document.getElementById("openBlancModal").addEventListener("click", function() {
    openModal("Blanc5");
  });
  
  document.getElementById("openCompetenceModal").addEventListener("click", function() {
    openModal("CompétenceBlanc");
  });
  
  document.getElementById("openBagagesModal").addEventListener("click", function() {
    openModal("BagagesBlanc");
  });*/

  function resistanceBonus(resbonus, comparatif, personnage){
    if(comparatif >= 70){
        resbonus.innerHTML = 1 + personnage;
    } else if(comparatif <=30){
        resbonus.innerHTML = -1 + personnage;
    } else{
        resbonus.innerHTML = 0 + personnage;
    }

}

function tableauTraitCompetenceBagage(classDiv, idPerso, tableau){
    document.getElementsByClassName(classDiv)[idPerso].innerHTML = "";
    let nouveauTableau = document.getElementsByClassName(classDiv)[idPerso]
    let table = document.createElement("table");
    let tableHead = table.createTHead();
    let headerRow = tableHead.insertRow();
    let headerCell1 = headerRow.insertCell();
    let headerCell2 = headerRow.insertCell();
    let headerCell3 = headerRow.insertCell();
    if(classDiv === "tableau-competence"){
        let headerCell4 = headerRow.insertCell();
        headerCell4.innerHTML = "<b>Coût</b>";
    }
    headerCell1.innerHTML = "<b>Nom</b>";
    headerCell2.innerHTML = "<b>Description</b>";
    if(classDiv !== "tableau-objet"){
        headerCell3.innerHTML = "<b>Effet</b>";
    } else{
        headerCell3.innerHTML = "<b>Qualité</b>"
    }

    for(let i = 0; i < tableau.length; i++){
        let traitCompetence = tableau[i];
        let row = table.insertRow();
        let cell1= row.insertCell();
        let cell2= row.insertCell();
        let cell3= row.insertCell();
        if(classDiv ==="tableau-competence"){
            let cell4 = row.insertCell();
            cell4.innerHTML = traitCompetence.cost;
        }
        cell1.innerHTML = traitCompetence.name;
        cell2.innerHTML = traitCompetence.description;
        if(classDiv !== "tableau-objet"){
            cell3.innerHTML = traitCompetence.effect;
        } else{
            cell3.innerHTML = traitCompetence.quality;
        }

    }

    nouveauTableau.appendChild(table);
}

function tableauArmeArmure(quoi, classDiv, idPerso, tableau){
    document.getElementsByClassName(classDiv)[idPerso].innerHTML = "";
    let nouveauTableau = document.getElementsByClassName(classDiv)[idPerso]
    let table = document.createElement("table");
    let tableHead = table.createTHead();
    let headerRow = tableHead.insertRow();
    let headerCell1 = headerRow.insertCell();
    let headerCell2 = headerRow.insertCell();
    let headerCell3 = headerRow.insertCell();
    let headerCell4 = headerRow.insertCell();
    headerCell1.innerHTML = "<b>Nom</b>";
    headerCell2.innerHTML = "<b>Description</b>";
    headerCell4.innerHTML = "<b>Effet</b>";
    if(quoi === "arme"){
        headerCell3.innerHTML = "<b>Polyvalence</b>";
    } else{
        headerCell3.innerHTML ="<b>Poids</b>";
    }

    for(let i = 0; i < tableau.length; i++){
        let armeArmure = tableau[i];
        let row = table.insertRow();
        let cell1= row.insertCell();
        let cell2= row.insertCell();
        let cell3= row.insertCell();
        let cell4 = row.insertCell();
        cell1.innerHTML = armeArmure.name;
        cell2.innerHTML = armeArmure.description;
        cell4.innerHTML = armeArmure.effect;
        if(quoi === "arme"){
            cell3.innerHTML = armeArmure.polyvalence;
        } else{
            cell3.innerHTML = armeArmure.poids;
        }
    }
    nouveauTableau.appendChild(table);
}

function tableauArgent(classDiv, idPerso, tableau){
    document.getElementsByClassName(classDiv)[idPerso].innerHTML = "";
    let nouveauTableau = document.getElementsByClassName(classDiv)[idPerso]
    let table = document.createElement("table");
    let tableHead = table.createTHead();
    let headerRow = tableHead.insertRow();
    let headerCell1 = headerRow.insertCell();
    let headerCell2 = headerRow.insertCell();
    headerCell1.innerHTML = "<b>Nom</b>";
    headerCell2.innerHTML = "<b>Quantité</b>";

    for(let i = 0; i < tableau.length; i++){
        let monnaie = tableau[i];
        let row = table.insertRow();
        let cell1= row.insertCell();
        let cell2= row.insertCell();
        cell1.innerHTML = monnaie.name;
        cell2.innerHTML = monnaie.quantity;
    }

    nouveauTableau.appendChild(table);
}

function contexte(personnage,i, contexte, stat){
    if(personnage.contexte[i].value === 0){
        const rine = " - ";
        contexte.textContent = rine;
        return contexte.textContent;
    } else {
        const nouvelleValeur = stat + personnage.contexte[i].value;
        const si = personnage.contexte[i].si;
        contexte.textContent = nouvelleValeur + " si " + si;
        return (contexte.textContent);
    }
}