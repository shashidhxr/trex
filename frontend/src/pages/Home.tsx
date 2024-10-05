import { Blogs } from "../components/Blogs"
import { Discussion } from "../components/Discussion"
import { Appbar } from "../components/Appbar"

export const Home = () => {
    return(
        <div className="">
            <Appbar></Appbar>
            <div className="max-w-7xl mx-auto grid grid-cols-7">
                <div className="max-w-3xl col-span-4">
                    <Blogs></Blogs>
                </div>
                <div className="max-w-xl col-span-3 my-10 ml-10 mr-8">
                    <Discussion></Discussion>
                </div>
            </div>
        </div>
    )
}