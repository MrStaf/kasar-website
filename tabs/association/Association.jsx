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
          <p className="flex gap-2">Tous droits de reproduction réservés - © KASARAI</p>
          <p className="flex gap-2">
            Fait avec 💜 par{" "}
            <a href="https://benoit.fage.fr" rel="noreferrer" target="_blank" className="text-primary">
              Benoît Fage
            </a>
          </p>
        </div>
        <div className="w-full max-w-5xl px-8">
          <Title>nos objectifs</Title>
          <div className="grid grid-cols-1 gap-10 text-justify sm:grid-cols-2">
            <div>
              L’association <span className="font-bold text-primary">Kasar</span> est avant tout un défi que nous avons décidé de relever. Pour nous, réussir c’est respecter plusieurs points cruciaux autant vis-à-vis de nos membres que de tous ceux qui
              côtoient l’association. Nous avons conscience d’avoir une grande responsabilité : aider les élèves à s’épanouir. Ainsi nous devons être à la hauteur de nos évènements, car Kasar est avant tout une association d’évènementiel. Ce sera donc à
              nous de faire notre maximum pour attirer, instruire, innover et surprendre.
              <br />
              <br /> Au cours de l’année prochaine, nous voulons organiser des hackathons interne à l’ECE mais aussi les ouvrir à d’autres écoles pour avoir un enjeu plus important lors des compétitions. Ces derniers seraient plus attractifs et
              permettraient de véritables challenges. Les hackathons débuteront par une petite introduction aux outils mis en place par le bureau, puis nous laisseront les compétiteurs user de leurs moyens et de leurs imaginations pour créer les meilleurs
              résultats. Les participants devront se mettre en équipe pour tenter de répondre au problème.
            </div>
            <div>
              Suite à ces hackathons, nous voulons aussi organiser des conférences et podcasts sur des thèmes variés de l’IA (computer vision, machine learning…). Ces évènements pourront venir compléter les connaissances acquises lors de ces derniers et
              renforcer les bases des étudiants. Elles pourront être théoriques ou bien pratiques avec quelques commandes. En plus d’être une source d’apprentissage, ces évènements pourront être une zone de rencontre en différents étudiants ayant les
              mêmes sources d’intérêt. Cela favoriserait la création de groupes de travail qui pourraient ensuite constituer des projets. Elles pourront se faire avec l’aide d’intervenants externes comme des chercheurs, ou bien à l’aide de nos recherches
              et connaissances sur différents sujets. Ces rencontres pourront être destinées à de nombreux élèves ou bien elles seront plus spécialisées pour aider des étudiants à avancer dans leurs projets par exemple. Elles seront ainsi une occasion
              supplémentaire de poser des questions et d’enlever des zones d’ombres sur certains sujets.
            </div>
          </div>
        </div>
        <div className="w-full max-w-5xl px-8">
          <Title>présentation du bureau</Title>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Card passHref={true} title="Grégoire Pateyron" subtitle="Président" img="b1f1da7f-fc7b-4047-8bc9-e53e03da266c.jpeg" />
            <div className="w-full text-justify">
              Je m’appelle Grégoire Pateyron, j’ai 20 ans, je suis originaire de Paris et je me présente à vous en tant que président de cette association qui a commencé à se développer l’année dernière. J’habite proche de l’ECE, ce qui peut être un atout
              pour parler avec les étudiants et développer une association. Actuellement en première année du cycle ingénieur à l’ECE Paris, je n’ai donc pas pu voir de quoi les associations étaient capables et je n’ai pu participer qu’à très peu
              d’événements. Même si j’ai pu rencontrer beaucoup de personnes lors d’un afterwork sur la Seine.
              <br />
              <br />
              Au début de cette année mouvementée j’ai eu la chance d’avoir un parrain sur qui je pouvais m’appuyer pour avoir de nombreux renseignements pour découvrir l’école. Mon parrain est dans le bureau de l’association ECEBorg, ce qui m’a permis de
              découvrir assez rapidement les domaines d’informatique présents au sein de l’école. Au début, c’est ici que j’ai pu découvrir de nombreux langages informatiques que je n’avais pas eu l’occasion de voir en classe préparatoire. J’ai appris que
              l’intelligence artificielle était présente tout autour de nous, ce que je n’imaginais pas avant.
            </div>

            <Card passHref={true} title="Benoît Fage" subtitle="Vice-Président" className="flex w-full sm:hidden" img="e5fc9b8c-85fc-490f-8b47-fc54dd147204.jpeg" />
            <div className="w-full text-justify">
              Je m’appelle Benoît Fage, j’ai 21 ans et suis actuellement en ING3 nouveaux. J’aime créer toute sorte de projet, autant virtuel (applications, sites web, scripts etc.) que matériel (bricolage, objets connectés etc.). Cette soif de curiosité
              envers le fonctionnement des objets technologiques et virtuels me permet de comprendre la manière dont ils sont créés, et pourquoi.
              <br />
              <br />
              J’ai eu la chance de vivre avec des enseignants chercheurs en IA durant le premier semestre à l’ECE, ce qui était pour le moins enrichissant. J’ai passé tout le premier semestre à vouloir faire partie de la vie associative de l’école, c’est
              pourquoi je cherche aujourd’hui à combler ce manque en reprenant avec Grégoire et les autres membres du bureau, l’association Kasar.
              <br />
              <br />
              En tant que Secrétaire Général, mon rôle sera d’épauler Grégoire dans l’entretien de Kasar. Je m’assurerai des tâches techniques pour préparer les différents hackathons, et aussi de faire grandir l’association avec des idées qui vont vous
              être présentées par la suite.
            </div>
            <div className="flex items-start justify-center">
              <Card passHref={true} title="Benoît Fage" subtitle="Vice-Président" className="hidden sm:flex" img="e5fc9b8c-85fc-490f-8b47-fc54dd147204.jpeg" />
            </div>
            <Card passHref={true} title="Raphaël Grobon" subtitle="VP Trésorier" img="ffa50ae5-676c-4977-a753-b6e551e3350c.jpeg" />
            <div className="w-full text-justify">
              Je m’appelle Grégoire Pateyron, j’ai 20 ans, je suis originaire de Paris et je me présente à vous en tant que président de cette association qui a commencé à se développer l’année dernière. J’habite proche de l’ECE, ce qui peut être un atout
              pour parler avec les étudiants et développer une association. Actuellement en première année du cycle ingénieur à l’ECE Paris, je n’ai donc pas pu voir de quoi les associations étaient capables et je n’ai pu participer qu’à très peu
              d’événements. Même si j’ai pu rencontrer beaucoup de personnes lors d’un afterwork sur la Seine.
              <br />
              <br />
              Au début de cette année mouvementée j’ai eu la chance d’avoir un parrain sur qui je pouvais m’appuyer pour avoir de nombreux renseignements pour découvrir l’école. Mon parrain est dans le bureau de l’association ECEBorg, ce qui m’a permis de
              découvrir assez rapidement les domaines d’informatique présents au sein de l’école. Au début, c’est ici que j’ai pu découvrir de nombreux langages informatiques que je n’avais pas eu l’occasion de voir en classe préparatoire. J’ai appris que
              l’intelligence artificielle était présente tout autour de nous, ce que je n’imaginais pas avant.
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
              <Card passHref={true} title="Côme Chappuis" subtitle="VP Hack" img="b1f3e616-4509-4474-acff-d01c1f507135.jpeg" />
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
