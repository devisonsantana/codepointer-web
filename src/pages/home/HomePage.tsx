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

      <section className="space-y-12 px-4 py-8 md:px-12">
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

        <div className="grid place-content-center gap-6 sm:grid-cols-3">
          <div className="min-h-65 w-full max-w-lg space-y-1 rounded-2xl border border-[#6366F1] bg-[#0F152481] p-4 shadow-xl">
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

          <div className="min-h-65 w-full max-w-lg space-y-1 rounded-2xl border border-[#6366F1] bg-[#0F152481] p-4 shadow-xl">
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

          <div className="min-h-65 w-full max-w-lg space-y-1 rounded-2xl border border-[#6366F1] bg-[#0F152481] p-4 shadow-xl">
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

      <section className="my-16 grid gap-12 bg-[#0F1524] px-4 py-16 sm:grid-cols-2 md:px-12">
        <div className="space-y-8 py-4">
          <div className="space-y-3">
            <div className="text-2xl font-bold">
              <h3>Acompanhamento</h3>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium">
                Progresso que mostra onde você está
              </p>
              <p className="text-sm text-[#9CA3AF]">
                Marque o que já consolidou, acompanhe o que está estudando e
                deixe visível o próximo passo da sua trilha.
              </p>
            </div>
          </div>
          <div className="space-y-2 rounded-2xl border border-[#1E293B] bg-[#0d1220] p-4 shadow-xl">
            <p className="text-sm font-medium">Você define o ritmo</p>
            <p className="text-xs text-[#9CA3AF]">
              Uma pausa não apaga sua evolução. Retome de onde parou quando
              fizer sentido para você.
            </p>
          </div>
        </div>
        <div className="max-w-xl space-y-4 rounded-2xl border border-[#1E293B] bg-[#0d1220] p-4 shadow-xl">
          <div className="flex flex-row items-center justify-between border-b border-b-[#1E293B] pb-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#9CA3AF]">
                Painel demonstrativo
              </p>
              <p className="text-lg font-bold">Trilha: JavaScript essencial</p>
            </div>
            <div className="rounded-2xl bg-[#56e2bd1a] px-4 py-1">
              <p className="text-sm font-semibold text-[#56e2bd]">
                48% concluído
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#172033]">
              <div className="h-full w-[48%] bg-[#50dbb6]" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-between rounded-2xl border border-[#1db58f] bg-[#1db58f12] p-4">
                <div className="flex items-center gap-4">
                  <div className="flex w-8 items-center justify-center rounded-full bg-[#1db58f] text-black">
                    <span>ICO</span>
                  </div>
                  <div className="text-sm font-semibold">
                    <p>Variáveis e tipos</p>
                  </div>
                </div>
                <div className="text-sm font-semibold text-[#56e2bd]">
                  <p>Concluído</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between rounded-2xl border border-[#4e8cff] bg-[#4e8cff12] p-4">
                <div className="flex items-center gap-4">
                  <div className="flex w-8 items-center justify-center rounded-full bg-[#4e8cff] text-black">
                    <span>ICO</span>
                  </div>
                  <div className="text-sm font-semibold">
                    <p>Funções e tipos</p>
                  </div>
                </div>
                <div className="text-sm font-semibold text-[#4e8cff]">
                  <p>Em andamento</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between rounded-2xl border border-[#263451] bg-[#26345112] p-4">
                <div className="flex items-center gap-4">
                  <div className="flex w-8 items-center justify-center rounded-full bg-[#263451] text-black">
                    <span>ICO</span>
                  </div>
                  <div className="text-sm font-semibold">
                    <p>Manipulação do DOM</p>
                  </div>
                </div>
                <div className="text-sm font-semibold text-[#9CA3AF]">
                  <p>Próximo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
