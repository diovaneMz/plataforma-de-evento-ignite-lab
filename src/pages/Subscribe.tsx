import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation, useGetLessonsQueryQuery } from "../graphql/generated";


interface githubProps {
  headers: {
    client_id: string;
    redirect_uri: string;
    login: string;
    escopo: string;
  }
}

export function Subscribe() {
  const navigate = useNavigate();
  const { data } = useGetLessonsQueryQuery()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate(`/event/lesson/${data?.lessons[0].slug}`);
  }

  console.log(data?.lessons[0].slug)

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col items-center mt-10 mx-auto lg:flex-row lg:justify-between lg:mt-20">
        <div className="max-w-[640px] text-center lg:text-left">
          <div className="w-full flex justify-center items-center lg:justify-start">
            <Logo />
          </div>

          <h1 className="mt-8 text-[2.5rem] leading-tight lg:mt-4 ">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-8 text-gray-200 leading-relaxed lg:mt-4">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais
            utilizadas e com alta demanda para acessar as melhores oportunidades do
            mercado.
          </p>
        </div>

        <div className="p-8 mt-8 bg-gray-700 border border-gray-500 rounded-none w-full lg:max-w-sm lg:rounded ">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/static/code-mockup.png" className="mt-10" alt="" />
    </div>
  );
}
