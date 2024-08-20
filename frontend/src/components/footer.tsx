type FooterProps = {
    onContactClick: () => void;
  };
  
  export const Footer = ({ onContactClick }: FooterProps) => {
    return (
      <footer className="bg-transparent rounded-lg p-0.5">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-transparent">
            <a href="#" className="flex items-center text-lg font-semibold text-[#EEEEEE] sm:mb-0">
              Trex
            </a>
            <ul className="flex flex-col sm:flex-row sm:items-center space-x-0 sm:space-x-3 text-xs font-medium text-[#686D76] mt-2 sm:mt-0">
              <li>
                <a href="#" className="hover:text-[#EEEEEE]">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#EEEEEE]">Privacy</a>
              </li>
              <li>
                <a href="#" onClick={onContactClick} className="hover:text-[#EEEEEE]">Contact</a>
              </li>
            </ul>
            <div className="text-xs text-[#EEEEEE] mt-2 sm:mt-0">
              <span>© 2023 <a href="#" className="hover:text-[#DC5F00]">Trex™</a>. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  