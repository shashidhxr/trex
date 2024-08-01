import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"
// import { Input } from "../components/Input"

export const Signup = () => {
    return <div>
        {/* <Input></Input> */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signup"></Auth>
            </div>
            <div className="none lg:block">
                <Quote></Quote>
            </div>
        </div>
    </div>
}