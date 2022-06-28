import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function Event() {
  const { slug } = useParams<{slug: string}>()
  const [ isMenuActive, setIsMenuActive ] = useState(false)
  
  console.log(isMenuActive)

  return (
    <div className="flex flex-col min-h-screen" >
      <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <main className="flex flex-1" >  
        {slug ? (
            <Video isMenuActive={isMenuActive} lessonSlug={slug} />
          ) : (
            <div className="flex flex-1"></div>
          )}

        <Sidebar isMenuActive={isMenuActive} />
      </main>
    </div>
  );
}
