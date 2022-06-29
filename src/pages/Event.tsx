import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="sm:flex sm:flex-col sm:min-h-screen">
            <Header />
            <main className="sm:flex sm:flex-1">
                {slug
                    ? <Video lessonSlug={slug} />
                    : <div className="sm:flex-1" />
                }
                <Sidebar />
            </main>
        </div>
    )
}