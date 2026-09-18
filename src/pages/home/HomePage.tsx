import { Footer, Header, NavBar } from "@/components/ui";

export const HomePage = () => {
  return (
    <div>
      <NavBar />

      <Header />

      <section className="mb-8 flex flex-col items-start justify-between gap-8 border-y border-y-[#1E293B] bg-[#0F152481] px-4 py-6 sm:flex-row sm:items-center md:px-20">
        <div className="flex w-full flex-row items-center gap-4 sm:w-auto">
          <div className="rounded-lg bg-[#6365f11a] p-2 text-[#6365f1]">
            ICO
          </div>

          <div className="space-y-1">
            <p className="text-lg font-semibold">Direção clara</p>

            <p className="text-sm text-[#9CA3AF]">Saiba por onde começar.</p>
          </div>
        </div>
        <div className="flex w-full flex-row items-center gap-4 sm:w-auto">
          <div className="rounded-lg bg-[#63f1951a] p-2 text-[#63f195]">
            ICO
          </div>

          <div className="space-y-1">
            <p className="text-lg font-semibold">Aprendizado flexível</p>

            <p className="text-sm text-[#9CA3AF]">
              Adapte a trilha ao seu objetivo.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-row items-center gap-4 sm:w-auto">
          <div className="rounded-lg bg-[#f19e631a] p-2 text-[#f19e63]">
            ICO
          </div>

          <div className="space-y-1">
            <p className="text-lg font-semibold">Progresso visível</p>

            <p className="text-sm text-[#9CA3AF]">
              Veja sua evolução acontecer.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8 px-4 py-8 md:px-12">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Como funciona</h3>

          <p className="text-lg font-medium">
            Aprenda com um mapa, não com uma prisão
          </p>

          <p className="text-sm text-[#9CA3AF]">
            Cada trilha organiza conhecimentos em módulos, tópicos e recursos.
            Você enxerga uma direção, mas tem liberdade para explorar o que faz
            sentido agora.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="h-full min-h-60 w-full max-w-sm space-y-1 rounded-2xl border border-[#6366F1] bg-[#0F152481] p-4 shadow-xl">
            <div className="flex flex-row items-center justify-between">
              <div className="rounded-xl bg-[#56e2bd1a] px-4 py-1">
                <p className="text-sm font-semibold text-[#56e2bd]">
                  Iniciante
                </p>
              </div>
              <div>
                <p>ICO</p>
              </div>
            </div>

            <div className="space-y-1.5 py-4">
              <h3 className="text-base font-bold">Construa a base</h3>
              <p className="text-sm text-[#9CA3AF]">
                Entenda os conceitos que dão segurança para começar.
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#9CA3AF]">
              <div className="rounded-xl bg-[#172033] px-4 py-2">
                <p>Lógica de programação</p>
              </div>
              <div className="rounded-xl bg-[#172033] px-4 py-2">
                <p>HTML e CSS</p>
              </div>
            </div>
          </div>

          <div className="h-full min-h-60 w-full max-w-sm space-y-1 rounded-2xl border border-[#6366F1] bg-[#0F152481] p-4 shadow-xl">
            <div className="flex flex-row items-center justify-between">
              <div className="rounded-xl bg-[#75a7ff1a] px-4 py-1">
                <p className="text-sm font-semibold text-[#75a7ff]">
                  Intermediário
                </p>
              </div>
              <div>
                <p>ICO</p>
              </div>
            </div>

            <div className="space-y-1.5 py-4">
              <h3 className="text-base font-bold">Conecte as peças</h3>
              <p className="text-sm text-[#9CA3AF]">
                Transforme fundamentos em aplicações úteis.
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#9CA3AF]">
              <div className="rounded-xl bg-[#172033] px-4 py-2">
                <p>JavaScript moderno</p>
              </div>
              <div className="rounded-xl bg-[#172033] px-4 py-2">
                <p>Consumo de APIs</p>
              </div>
            </div>
          </div>

          <div className="h-full min-h-60 w-full max-w-sm space-y-1 rounded-2xl border border-[#6366F1] bg-[#0F152481] p-4 shadow-xl">
            <div className="flex flex-row items-center justify-between">
              <div className="rounded-xl bg-[#ff9b8c1a] px-4 py-1">
                <p className="text-sm font-semibold text-[#ff9b8c]">Avançado</p>
              </div>
              <div>
                <p>ICO</p>
              </div>
            </div>

            <div className="space-y-1.5 py-4">
              <h3 className="text-base font-bold">Amplie seu repertório</h3>
              <p className="text-sm text-[#9CA3AF]">
                Aprofunde decisões técnicas e visão de produto.
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#9CA3AF]">
              <div className="rounded-xl bg-[#172033] px-4 py-2">
                <p>Arquitetura de software</p>
              </div>
              <div className="rounded-xl bg-[#172033] px-4 py-2">
                <p>Deploy e observabilidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
