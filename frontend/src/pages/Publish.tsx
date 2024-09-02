import { BlogEditor } from "../components/BlogEditor";
import { Appbar } from "../components/Appbar";

export const Publish = () => {
    return (
        <div className="publish-container">
            <Appbar></Appbar>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 m-5">
                <BlogEditor />
            </div>
        </div>
    );
}
