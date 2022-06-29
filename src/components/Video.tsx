import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug, 
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className="sm:flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="sm:flex-1">
      <div className="bg-black sm:flex justify-center">
        <div className="sm:h-full sm:w-full sm:max-w-[2560px] sm:max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 sm:max-w-[1100px] sm:mx-auto">
        <div className="sm:flex items-start gap-16">
          <div className="sm:flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="sm:flex sm-items-center gap-4 mt-6">
                <img 
                  className="sm:h-16 sm:w-16 rounded-full border-2 border-blue-500 object-contain"
                  src={data.lesson.teacher.avatarURL} 
                  alt=""
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                  <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 mt-2;">
            <a href="" className="p-4 text-sm bg-green-500 sm:flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 sm:flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="sm:gap-8 mt-20 sm:grid sm:grid-cols-2">
          <a href="" className="bg-gray-700 rounded overflow-hidden sm:flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 sm:h-full p-6 sm:flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="sm:h-full sm:p-6 sm:flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a href="" className="bg-gray-700 rounded overflow-hidden sm:flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 sm:h-full p-6 sm:flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="sm:h-full p-6 sm:flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}



