import { Card } from "../components/Card"
import { Quote } from "../components/Quote"

export const Blogs = () => {
    return <div>
        Blogs
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="mt-2">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className="none lg:block">
                <Quote></Quote>
            </div>
        </div>
    </div>
}