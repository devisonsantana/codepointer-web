export const TrackingInfo = () => {
  return (
    <div className="space-y-8 py-4">
      <div className="space-y-3">
        <div className="text-2xl font-semibold">
          <h3>Acompanhamento</h3>
        </div>
        <div className="space-y-2">
          <p className="text-lg font-medium">
            Progresso que mostra onde você está
          </p>
          <p className="text-sm text-[#9CA3AF]">
            Marque o que já consolidou, acompanhe o que está estudando e deixe
            visível o próximo passo da sua trilha.
          </p>
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
