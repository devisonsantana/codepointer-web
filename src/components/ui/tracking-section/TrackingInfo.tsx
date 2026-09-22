import { SectionDescription } from "../section/SectionDescription";
import { SectionText } from "../section/SectionText";
import { SectionTitle } from "../section/SectionTitle";

export const TrackingInfo = () => {
  return (
    <div className="space-y-8 py-4">
      <div className="space-y-3">
        <SectionTitle>Acompanhamento</SectionTitle>
        <div className="space-y-2">
          <SectionText>Progresso que mostra onde você está</SectionText>
          <SectionDescription>
            Marque o que já consolidou, acompanhe o que está estudando e deixe
            visível o próximo passo da sua trilha.
          </SectionDescription>
        </div>
      </div>
      <div className="space-y-2 rounded-2xl border border-[#1E293B] bg-[#0d1220] p-4 shadow-xl">
        <p className="text-sm font-medium">Você define o ritmo</p>
        <p className="text-xs text-[#9CA3AF]">
          Uma pausa não apaga sua evolução. Retome de onde parou quando fizer
          sentido para você.
        </p>
      </div>
    </div>
  );
};
