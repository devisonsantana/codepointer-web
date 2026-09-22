import { SectionDescription } from "../section/SectionDescription";
import { SectionText } from "../section/SectionText";
import { SectionTitle } from "../section/SectionTitle";

export const LearningPathInfo = () => {
  return (
    <div className="space-y-3">
      <SectionTitle>Como funciona</SectionTitle>
      <SectionText>Aprenda com um mapa, não com uma prisão</SectionText>
      <SectionDescription>
        Cada trilha organiza conhecimentos em módulos, tópicos e recursos. Você
        enxerga uma direção, mas tem liberdade para explorar o que faz sentido
        agora.
      </SectionDescription>
    </div>
  );
};
