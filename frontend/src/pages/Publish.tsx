import { BlogEditor } from "../components/BlogEditor";
import { Appbar } from "../components/Appbar";
import { BlogFooterBar } from "../components/BlogFooter";

export const Publish = () => {
    return (
        <div className="publish-container">
            <Appbar></Appbar>
            <div className="grid grid-cols-1 gap-8 m-5 justify-center items-center max-w-5xl mx-auto">
                <BlogEditor />
                <BlogFooterBar></BlogFooterBar>
            </div>
        </div>
    );
}
