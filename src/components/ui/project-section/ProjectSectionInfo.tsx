import { SectionDescription } from "../section/SectionDescription";
import { SectionText } from "../section/SectionText";
import { SectionTitle } from "../section/SectionTitle";

export const ProjectSectionInfo = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-3">
        <SectionTitle>Projetos práticos</SectionTitle>
        <SectionText>
          Pratique para transformar conhecimento em confiança
        </SectionText>
      </div>
      <SectionDescription>
        Ideias para aplicar o que você aprende — sugestões, nunca uma obrigação.
      </SectionDescription>
    </div>
  );
};
