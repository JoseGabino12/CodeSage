const Footer = () => {
  const currentYear = new Date().getFullYear();
  return ( 
    <footer className="m-10 p-5 w-full">
      <div className="flex justify-end">
        CodeSage &copy; {currentYear}      
      </div> 
    </footer>
   );
}
 
export default Footer;