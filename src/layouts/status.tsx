import { TypographyH2, TypographyH4 } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode
}

function StatutCard( { title, children }: Props ) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {children}
      </CardContent>
    </Card>
  );
}

export function Status() {
  return (
    <div className="space-y-4 w-full sm:w-2/3 mx-auto">
      <TypographyH2>Statuts de l’association Français du Monde-Munich</TypographyH2>
      <div className="text-upsdell-red">
        <TypographyH4>du 12 mars 2022</TypographyH4>
      </div>
      <StatutCard title="§ 1 Nom, siège, exercice">
        <p>
          (1) L‘association porte la dénomination » Français du Monde - Munich e. V. » Elle doit être inscrite dans le registre des associations (Vereinsregister) ; selon l’enregistrement la dénomination est « Association des Français à Munich – Bavière e. V. »<br /> <br />
          (2) L’association a son siège à Munich <br /> <br />
          (3) L’exercice de l’association est l’année civile.<br /> <br />
          (4) L‘abréviation est : « FdM Munich »<br /> <br />
        </p>
      </StatutCard>
      <StatutCard title="§ 2 Objet et But, tâches, utilité publique">
        <p>
          (1) L’association est une antenne régionale, juridiquement indépendante de Français du Monde-ADFE, Paris, France ayant pour objet:
          de représenter, de protéger et de promouvoir les intérêts des citoyens français résidant dans la zone d’activité de l’association auprès des pouvoirs publics,
          d’accorder aux Français tous les droits qui leur sont dus de fait de leur nationalité,
          de leur garantir une information la plus complète possible sur la vie culturelle, politique, économique et sociale en France et de leur permettre d’y participer pleinement,
          de promouvoir la compréhension profonde du rôle de la France en Allemagne dans les domaines culturel, politique, scientifique, technique et économique et d’encourager l’échange entre les deux pays.
          De cette manière, le but de l’association est la promotion de la mentalité internationale, de la tolérance dans tous les domaines de la culture et de la compréhension des peuples ainsi que la promotion à l’éducation et à la formation des citoyens.<br /> <br />
          (2) L’association poursuit des buts exclusivement et directement d’utilité publique dans l’esprit de la section  » Steuerbegünstigte Zwecke » (buts bénéficiant d’avantages fiscaux) du Code fiscal Allemand. Le but de l’association est réalisé en particulier par l’organisation de conférences et manifestations, de soirées de discussions, de films et vidéos. <br /> <br />
          (3) L’activité de l’association est désintéressée : elle ne poursuit pas de but prioritairement économique <br /> <br />
          (4) Les moyens de l’association ne peuvent être utilisés que pour poursuivre les buts statutaires. Les membres ne reçoivent pas de donation provenant des moyens de l’association. Une personne ne doit pas être avantagée par des dépenses qui sont étrangères au but de l’association ou par des rémunérations disproportionnées.<br /> <br />
          (5) En cas de dissolution ou de cessation de l’association ou en cas d’abolition de son ancien but les biens de l’association reviennent à la Ville de Munich, qui doit les utiliser immédiatement et uniquement dans un but d’utilité publique.
        </p>
      </StatutCard>
      <StatutCard title="§3 Acquisition de la qualité de membre">
        <p>
          (1) Peut devenir membre de l’association, tout citoyen français âgé d’au moins 16 ans et dont le domicile ou le séjour permanent est l’Etat libre de Bavière. Des citoyens ne possédant pas la nationalité française peuvent également devenir membres de l’association s’ils remplissent les autres conditions ci-dessus nommées et reconnaissent l’objet et le but de l’association.<br /> <br />
          (2) Sur proposition du Bureau, l’Assemblée générale peut nommer des membres d’honneur. <br/>
          (3) La condition pour devenir membre est une demande d’adhésion écrite à adresser au Bureau. Pour les mineurs, la demande doit être signée par le représentant légal. <br /> <br />
          (4) Le Bureau dispose d’un pouvoir discrétionnaire sur la requête en adhésion. S’il oppose son refus à celle-ci, il n’est pas tenu de fournir au demandeur les raisons de son refus.
        </p>
      </StatutCard>
      <StatutCard title="§ 4 Perte de la qualité de membre">
        <p>
          (1) La qualité de membre se perd lorsque le domicile ou le séjour permanent de l’adhérent ne sont plus situés dans l’Etat libre de Bavière, par suite de démission, de radiation de la liste des membres, d’exclusion ou de décès.<br /> <br />
          (2) La démission est adressée par déclaration écrite au Bureau et prend effet à la fin de l’exercice.<br /> <br />
          (3) Un membre peut être radié de la liste des membres par décision du Bureau, si malgré deux réclamations écrites il est en retard de paiement de cotisations ou de contributions. La décision de radiation ne peut être prise qu’un mois après l’envoi de la seconde réclamation et si ce courrier renferme une menace de radiation. La décision du Bureau sur la radiation doit être communiquée au membre.<br /> <br />
          (4) Le Bureau peut, par décision, exclure un membre de l’association si celui-ci lèse les intérêts de l’association. Avant de prendre sa décision, le Bureau donne au membre l’opportunité de prendre position par oral ou par écrit. Le membre peut faire appel de cette décision auprès de l’assemblée générale dans le délai d’un mois après réception de la décision du Bureau. L’assemblée générale doit être convoquée dans le délai d’un mois après le dépôt de l’appel pour décider définitivement sur l’exclusion.
        </p>
      </StatutCard>
      <StatutCard title="§ 5 Cotisations">
        <p>
          (1) Montant et échéance des cotisations et contributions sont fixés pas l’assemblée générale.<br /> <br />
          (2) Les membres d’honneur sont exonérés du paiement des cotisations et contributions.<br /> <br />
          (3) Dans des cas appropriés, le Bureau peut exonérer entièrement ou en partie des cotisations et contributions ou les ajourner.
        </p>
      </StatutCard>
      <StatutCard title="§ 6 Organes de l’association">
        <p>
          Les organes de l’association sont le Bureau, l‘assemblée générale et le conseil consultatif. Le Bureau gère les activités de l’association pour autant qu’elles n’aient pas été confiées par le présent statut à un autre organe de l’association.
        </p>
      </StatutCard>
      <StatutCard title="§ 7 Bureau de l’association">
        <p>
          (1) Le Bureau de l’association comprend le Président, le Vice-président, le Trésorier et le Secrétaire.<br /> <br />(2) L’association est représentée à l’extérieur par deux membres du Bureau. Le Président et le Trésorier sont représentants exclusifs. Dans le cas d’affaires juridiques d’un montant de plus de 1.500 €, le pouvoir de représentation du Bureau est limité, car l’autorisation écrite de tous les membres du Bureau est exigée. Cette dernière clause ne s’applique que dans les rapports internes des membres du bureau<br /> <br />
          (3) Le bureau est élu par l’assemblée générale pour la durée d’un exercice. Il reste cependant en place jusqu’à l’élection d’un nouveau Bureau. Chaque membre du Bureau doit être élu séparément. Seuls des membres de l’association peuvent être élus membre du Bureau. Avec la fin de son adhésion à l’association se termine aussi la fonction d’un membre du Bureau. Si un membre du Bureau démissionne avant la fin de l’exercice, le Bureau peut élire un successeur pour la durée restante du mandat du démissionnaire.<br /> <br />
          (4) Le Bureau prend ses décisions en séances convoquées par le Président ou, en cas d’empêchement, par le Vice-président ; au moins un quart des membres du Bureau peut demander la convocation du Bureau.(5) Le Bureau a réuni le quorum si au moins la majorité de ses membres sont présents. Il décide à la majorité simple de ses membres ; le vote par écrit de membres empêchés est autorisé.
        </p>
      </StatutCard>
      <StatutCard title="§ 8 Assemblée générale">
        <p>
          (1) L’assemblée générale élit le Bureau pour un exercice. Elle adopte le rapport annuel du Bureau, vérifie et approuve les comptes annuels, décide du montant des cotisations et des contributions et donne le quitus au Bureau.<br /> <br />
          (2) L’assemblée générale est réunie au moins une fois par exercice; elle doit toujours être réunie lorsque les intérêts de l’association le requièrent. L’assemblée générale est convoquée par le Président, si celui-ci est empêché par le Vice-président par écrit ou par tout autre moyen technique de communication accepté par le membre, au moins un mois avant la date fixée en informant de l’ordre du jour proposé par le Bureau. Par décision du Bureau ou sur demande d’au moins un quart des membres une assemblée extraordinaire est convoquée.<br /> <br />
          (3) Chaque membre peut demander par écrit au Bureau de compléter l’ordre du jour au plus tard une semaine avant la tenue de l’assemblée générale. Le meneur de l’assemblée doit informer du complément au début de la séance. L’assemblée décide des demandes de modifications de l’ordre du jour qui sont présentées au cours des assemblées générales.<br /> <br />
          (4) A l’assemblée générale, chaque membre possède une voix. Le droit de vote peut être délégué par écrit à un autre membre. Chaque pouvoir doit être délivré séparément pour chaque assemblée ; un membre ne peut représenter plus de deux voix autres que la sienne.<br /> <br />
          (5) Pour que l’assemblée générale puisse valablement délibérer la présence d’un quart au moins de ses membres présents ou représentés est nécessaire. Si cette proportion n’est pas atteinte, une seconde assemblée générale doit être convoquée dans un délai de quatre semaines, elle pourra alors délibérer quelque soit le nombre de membres présents, ceci doit être explicitement mentionné dans la convocation.<br /> <br />
          (6) L’assemblée générale prend les décisions généralement à la majorité simple des suffrages exprimés ; les abstentions sont considérées comme des suffrages non exprimés. Pour la modification des statuts et pour la dissolution de l’association une majorité de deux tiers des votes valides est nécessaire. La modification du but de l’association ne peut être décidée qu’avec l’accord de tous les membres.<br /> <br />
          (7) Pour les élections, la majorité absolue des suffrages exprimés est nécessaire ; si celle-ci n’est pas atteinte un second tour est nécessaire. Si les votes sont égaux lors du second tour, le résultat est tiré au sort par le meneur de la réunion.<br /> <br />
          (8) Un procès-verbal des décisions de l’assemblée générale doit être rédigé et signé par le secrétaire de séance.
        </p>
      </StatutCard>
      <StatutCard title="§ 9 Conseil consultatif">
        <p>
          Sur proposition du Bureau, l‘assemblée générale peut nommer pour la durée de l’exercice un conseil consultatif qui assiste et conseille le Bureau.
        </p>
      </StatutCard>
      <StatutCard title="§ 10 Dissolution de l’association">
        <p>
          (1) La dissolution de l’association ne peut être décidée qu’en assemblée générale à la majorité des deux tiers des suffrages exprimés.<br /> <br />
          (2) Pour le cas où l’assemblée générale n’en déciderait pas autrement, le Président et le Vice-président sont les liquidateurs représentatifs communs.
        </p>
      </StatutCard>
    </div>
  );
}
