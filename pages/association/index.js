import { Header } from "./../../components/Header/index";
import { Title } from "./../../components/Title/index";
import { Card, Text } from "./../../components/Card/index";
import Head from "next/head";

export default function Events() {
  return (
    <div>
      <Head>
        <title>.l&#39;association</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center flex-grow overflow-y-scroll font-text">
        <div className="w-full px-8 max-w-7xl">
          <Title>nos objectifs</Title>
          <div className="grid grid-cols-2 gap-10">
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
        <div className="w-full px-8 max-w-7xl">
          <Title>présentation du bureau</Title>
          <div className="grid grid-cols-3 gap-10">
            <Card title="Grégoire Pateyron" subtitle="Président" />
            <div className="w-full col-span-2">
              Je m’appelle Grégoire Pateyron, j’ai 20 ans, je suis originaire de Paris et je me présente à vous en tant que président de cette association qui a commencé à se développer l’année dernière. J’habite proche de l’ECE, ce qui peut être un atout
              pour parler avec les étudiants et développer une association. Actuellement en première année du cycle ingénieur à l’ECE Paris, je n’ai donc pas pu voir de quoi les associations étaient capables et je n’ai pu participer qu’à très peu
              d’événements. Même si j’ai pu rencontrer beaucoup de personnes lors d’un afterwork sur la Seine.
              <br />
              <br />
              Au début de cette année mouvementée j’ai eu la chance d’avoir un parrain sur qui je pouvais m’appuyer pour avoir de nombreux renseignements pour découvrir l’école. Mon parrain est dans le bureau de l’association ECEBorg, ce qui m’a permis de
              découvrir assez rapidement les domaines d’informatique présents au sein de l’école. Au début, c’est ici que j’ai pu découvrir de nombreux langages informatiques que je n’avais pas eu l’occasion de voir en classe préparatoire. J’ai appris que
              l’intelligence artificielle était présente tout autour de nous, ce que je n’imaginais pas avant.
            </div>
            <div className="w-full col-span-2">
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
            <Card title="Benoît Fage" subtitle="Vice-Président" />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
