export const Footer = () => {
    return (
        <footer className="bg-transparent rounded-lg p-0">
            <div className="w-full max-w-screen-xl mx-auto md:py-1 bg-transparent">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-transparent">
                    <div className="flex items-center space-x-4 text-lg font-semibold text-[#EEEEEE] mb-2 sm:mb-0">
                        <a href="#" className="hover:text-[#DC5F00]">Trex</a>
                        <span className="text-xs text-[#EEEEEE]">© 2023 <a href="#" className="hover:text-[#DC5F00]">Trex™</a>. All Rights Reserved.</span>
                    </div>
                    <ul className="flex space-x-3 text-xs font-medium text-[#686D76]">
                        <li>
                            <a href="#" className="hover:text-[#EEEEEE]">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#EEEEEE]">Privacy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#EEEEEE]">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
