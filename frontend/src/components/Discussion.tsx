import { Topic } from "./Topic"

export const Discussion = () => {
    return(
        <div>
            <div className="bg-slate-100 h-72 rounded-md shadow-md">
                <div className="font-semibold text-lg m-2">
                    Discussion
                </div>
                <div>
                    <div>
                        <Topic></Topic>
                    </div>
                </div>
            </div>
        </div>
    )
}