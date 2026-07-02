import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function NewQuotePage() {
  const session = await auth();

  //if (!session?.user) {
    //redirect("/login");
  //}

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-black dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-16 sm:px-10">
        <section className="rounded-3xl border border-black/[.08] bg-white p-8 shadow-sm dark:border-white/[.08] dark:bg-zinc-950">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Novo orçamento
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
              Criar orçamento de obra
            </h1>
            <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
              Espaço inicial para cadastrar um novo orçamento de obra. Adicione clientes, itens, prazos e detalhes da execução conforme o projeto evolui.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-3xl bg-zinc-100 p-6 dark:bg-white/5">
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50">Passos sugeridos</h2>
              <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400">
                <li>• Escolher cliente e obra</li>
                <li>• Definir tipo de serviço e materiais</li>
                <li>• Inserir prazos, custos e observações</li>
                <li>• Salvar orçamento e compartilhar com a equipe</li>
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-black/[.08] bg-white p-6 dark:border-white/[.08] dark:bg-zinc-950">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50">Cliente</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Selecione o cliente ou cadastre um novo para associar ao orçamento.</p>
              </div>
              <div className="rounded-3xl border border-black/[.08] bg-white p-6 dark:border-white/[.08] dark:bg-zinc-950">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50">Detalhes da obra</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Defina o tipo de obra, local e prazo inicial para o orçamento.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button render={<Link href="/dashboard">Voltar para Dashboard</Link>}>
              Dashboard
            </Button>
            <Button variant="outline">Iniciar criação</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
