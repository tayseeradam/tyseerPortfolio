
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex md:flex-col  gap-2 md:items-center
     bg-gray-300 p-10 md:rounded-tl-[30%] md:rounded-tr-[30%]">
      <p className="font-bold md:text-xl">Tayseer Suliman Ishag</p>
      <p>&copy; All rights reserved,{currentYear} </p>
    </footer>
  );
};

export default Footer;
