const Footer = () => {
  const currentYear = new Date().getFullYear();
  return ( 
    <footer className="m-5 p-3 w-full">
      <div className="flex justify-end">
        CodeSage &copy; {currentYear}      
      </div> 
    </footer>
   );
}
 
export default Footer;