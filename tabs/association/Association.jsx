// Libraries
import Head from "next/head";

// Components
import { Title } from "../../components/Title/";
import { Card } from "../../components/Card/";

export default function Association() {
  return (
    <>
      <Head>
        <title>.l&#39;association</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center flex-grow overflow-y-scroll font-text">
        <div className="w-full max-w-5xl px-8">
          <Title>
            <span className="text-primary font-logo">Kasar</span>
          </Title>
          <p className="flex gap-2">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path
                  d="M21.6521 10.7008C21.6521 17.7008 12.6521 23.7008 12.6521 23.7008C12.6521 23.7008 3.6521 17.7008 3.6521 10.7008C3.6521 8.31383 4.60031 6.02464 6.28814 4.33681C7.97597 2.64899 10.2652 1.70078 12.6521 1.70078C15.039 1.70078 17.3282 2.64899 19.0161 4.33681C20.7039 6.02464 21.6521 8.31383 21.6521 10.7008Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6521 13.7008C14.309 13.7008 15.6521 12.3576 15.6521 10.7008C15.6521 9.04392 14.309 7.70078 12.6521 7.70078C10.9952 7.70078 9.6521 9.04392 9.6521 10.7008C9.6521 12.3576 10.9952 13.7008 12.6521 13.7008Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" transform="translate(0.6521 0.700775)" />
                </clipPath>
              </defs>
            </svg>
            37 Quai de Grenelle, Immeuble Pollux,
            <br /> 75015 Paris
          </p>
          <p className="flex gap-2">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.6521 4.70078H20.6521C21.7521 4.70078 22.6521 5.60078 22.6521 6.70078V18.7008C22.6521 19.8008 21.7521 20.7008 20.6521 20.7008H4.6521C3.5521 20.7008 2.6521 19.8008 2.6521 18.7008V6.70078C2.6521 5.60078 3.5521 4.70078 4.6521 4.70078Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M22.6521 6.70078L12.6521 13.7008L2.6521 6.70078" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            contact@kasar.app
          </p>
          <br />
          <p className="flex gap-2">Tous droits de reproduction r??serv??s - ?? KASARAI</p>
          <p className="flex gap-2">
            Fait avec ???? par{" "}
            <a href="https://benoit.fage.fr" rel="noreferrer" target="_blank" className="text-primary">
              Beno??t Fage
            </a>
          </p>
        </div>
        <div className="w-full max-w-5xl px-8">
          <Title>nos objectifs</Title>
          <div className="grid grid-cols-1 gap-10 text-justify sm:grid-cols-2">
            <div>
              L???association <span className="font-bold text-primary">Kasar</span> est avant tout un d??fi que nous avons d??cid?? de relever. Pour nous, r??ussir c???est respecter plusieurs points cruciaux autant vis-??-vis de nos membres que de tous ceux qui
              c??toient l???association. Nous avons conscience d???avoir une grande responsabilit?? : aider les ??l??ves ?? s?????panouir. Ainsi nous devons ??tre ?? la hauteur de nos ??v??nements, car Kasar est avant tout une association d?????v??nementiel. Ce sera donc ??
              nous de faire notre maximum pour attirer, instruire, innover et surprendre.
              <br />
              <br /> Au cours de l???ann??e prochaine, nous voulons organiser des hackathons interne ?? l???ECE mais aussi les ouvrir ?? d???autres ??coles pour avoir un enjeu plus important lors des comp??titions. Ces derniers seraient plus attractifs et
              permettraient de v??ritables challenges. Les hackathons d??buteront par une petite introduction aux outils mis en place par le bureau, puis nous laisseront les comp??titeurs user de leurs moyens et de leurs imaginations pour cr??er les meilleurs
              r??sultats. Les participants devront se mettre en ??quipe pour tenter de r??pondre au probl??me.
            </div>
            <div>
              Suite ?? ces hackathons, nous voulons aussi organiser des conf??rences et podcasts sur des th??mes vari??s de l???IA (computer vision, machine learning???). Ces ??v??nements pourront venir compl??ter les connaissances acquises lors de ces derniers et
              renforcer les bases des ??tudiants. Elles pourront ??tre th??oriques ou bien pratiques avec quelques commandes. En plus d?????tre une source d???apprentissage, ces ??v??nements pourront ??tre une zone de rencontre en diff??rents ??tudiants ayant les
              m??mes sources d???int??r??t. Cela favoriserait la cr??ation de groupes de travail qui pourraient ensuite constituer des projets. Elles pourront se faire avec l???aide d???intervenants externes comme des chercheurs, ou bien ?? l???aide de nos recherches
              et connaissances sur diff??rents sujets. Ces rencontres pourront ??tre destin??es ?? de nombreux ??l??ves ou bien elles seront plus sp??cialis??es pour aider des ??tudiants ?? avancer dans leurs projets par exemple. Elles seront ainsi une occasion
              suppl??mentaire de poser des questions et d???enlever des zones d???ombres sur certains sujets.
            </div>
          </div>
        </div>
        <div className="w-full max-w-5xl px-8">
          <Title>pr??sentation du bureau</Title>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Card passHref={true} title="Gr??goire Pateyron" subtitle="Pr??sident" img="b1f1da7f-fc7b-4047-8bc9-e53e03da266c.jpeg" />
            <div className="w-full text-justify">
              Je m???appelle Gr??goire Pateyron, j???ai 20 ans, je suis originaire de Paris et je me pr??sente ?? vous en tant que pr??sident de cette association qui a commenc?? ?? se d??velopper l???ann??e derni??re. J???habite proche de l???ECE, ce qui peut ??tre un atout
              pour parler avec les ??tudiants et d??velopper une association. Actuellement en premi??re ann??e du cycle ing??nieur ?? l???ECE Paris, je n???ai donc pas pu voir de quoi les associations ??taient capables et je n???ai pu participer qu????? tr??s peu
              d?????v??nements. M??me si j???ai pu rencontrer beaucoup de personnes lors d???un afterwork sur la Seine.
              <br />
              <br />
              Au d??but de cette ann??e mouvement??e j???ai eu la chance d???avoir un parrain sur qui je pouvais m???appuyer pour avoir de nombreux renseignements pour d??couvrir l?????cole. Mon parrain est dans le bureau de l???association ECEBorg, ce qui m???a permis de
              d??couvrir assez rapidement les domaines d???informatique pr??sents au sein de l?????cole. Au d??but, c???est ici que j???ai pu d??couvrir de nombreux langages informatiques que je n???avais pas eu l???occasion de voir en classe pr??paratoire. J???ai appris que
              l???intelligence artificielle ??tait pr??sente tout autour de nous, ce que je n???imaginais pas avant.
            </div>

            <Card passHref={true} title="Beno??t Fage" subtitle="Vice-Pr??sident" className="flex w-full sm:hidden" img="e5fc9b8c-85fc-490f-8b47-fc54dd147204.jpeg" />
            <div className="w-full text-justify">
              Je m???appelle Beno??t Fage, j???ai 21 ans et suis actuellement en ING3 nouveaux. J???aime cr??er toute sorte de projet, autant virtuel (applications, sites web, scripts etc.) que mat??riel (bricolage, objets connect??s etc.). Cette soif de curiosit??
              envers le fonctionnement des objets technologiques et virtuels me permet de comprendre la mani??re dont ils sont cr????s, et pourquoi.
              <br />
              <br />
              J???ai eu la chance de vivre avec des enseignants chercheurs en IA durant le premier semestre ?? l???ECE, ce qui ??tait pour le moins enrichissant. J???ai pass?? tout le premier semestre ?? vouloir faire partie de la vie associative de l?????cole, c???est
              pourquoi je cherche aujourd???hui ?? combler ce manque en reprenant avec Gr??goire et les autres membres du bureau, l???association Kasar.
              <br />
              <br />
              En tant que Secr??taire G??n??ral, mon r??le sera d?????pauler Gr??goire dans l???entretien de Kasar. Je m???assurerai des t??ches techniques pour pr??parer les diff??rents hackathons, et aussi de faire grandir l???association avec des id??es qui vont vous
              ??tre pr??sent??es par la suite.
            </div>
            <div className="flex items-start justify-center">
              <Card passHref={true} title="Beno??t Fage" subtitle="Vice-Pr??sident" className="hidden sm:flex" img="e5fc9b8c-85fc-490f-8b47-fc54dd147204.jpeg" />
            </div>
            <Card passHref={true} title="Rapha??l Grobon" subtitle="VP Tr??sorier" img="ffa50ae5-676c-4977-a753-b6e551e3350c.jpeg" />
            <div className="w-full text-justify">
              Je m???appelle Gr??goire Pateyron, j???ai 20 ans, je suis originaire de Paris et je me pr??sente ?? vous en tant que pr??sident de cette association qui a commenc?? ?? se d??velopper l???ann??e derni??re. J???habite proche de l???ECE, ce qui peut ??tre un atout
              pour parler avec les ??tudiants et d??velopper une association. Actuellement en premi??re ann??e du cycle ing??nieur ?? l???ECE Paris, je n???ai donc pas pu voir de quoi les associations ??taient capables et je n???ai pu participer qu????? tr??s peu
              d?????v??nements. M??me si j???ai pu rencontrer beaucoup de personnes lors d???un afterwork sur la Seine.
              <br />
              <br />
              Au d??but de cette ann??e mouvement??e j???ai eu la chance d???avoir un parrain sur qui je pouvais m???appuyer pour avoir de nombreux renseignements pour d??couvrir l?????cole. Mon parrain est dans le bureau de l???association ECEBorg, ce qui m???a permis de
              d??couvrir assez rapidement les domaines d???informatique pr??sents au sein de l?????cole. Au d??but, c???est ici que j???ai pu d??couvrir de nombreux langages informatiques que je n???avais pas eu l???occasion de voir en classe pr??paratoire. J???ai appris que
              l???intelligence artificielle ??tait pr??sente tout autour de nous, ce que je n???imaginais pas avant.
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3">
            <div className="flex items-start justify-center">
              <Card passHref={true} title="Thibault Peeters" subtitle="VP Logistique" img="e5e35bc7-aabc-476d-996e-f85f9e9e14ad.jpeg" pathname="https://instagram.com" />
            </div>
            <div className="flex items-start justify-center">
              <Card passHref={true} title="Paul Feder" subtitle="VP Event" img="bc37fa0d-dde7-4fb1-bf5e-04063b086a0d.jpeg" />
            </div>
            <div className="flex items-start justify-center">
              <Card passHref={true} title="C??me Chappuis" subtitle="VP Hack" img="b1f3e616-4509-4474-acff-d01c1f507135.jpeg" />
            </div>
            <div className="flex items-start justify-center">
              <Card passHref={true} title="Emeric Dussart" subtitle="Relations Communautaires" img="c3b22e0f-9c1c-46a5-9107-96a484462a83.png" />
            </div>
            <div className="flex items-start justify-center">
              <Card passHref={true} title="Thibaut d'Astorg" subtitle="Graphiste" img="7f97a12b-1784-47d6-9a4b-f1d882c09bd5.jpeg" />
            </div>
            <div className="flex items-start justify-center">
              <Card passHref={true} title="Malo Le Berre" subtitle="VP Partenariat" img="bba8c56f-c047-4d82-a5a1-f16eeefe0186.jpeg" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
