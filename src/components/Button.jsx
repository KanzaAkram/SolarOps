import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `
    button relative inline-flex items-center justify-center h-11 transition-all duration-300 ease-in-out
    ${px || "px-7"}
    ${white ? "text-n-8" : "text-n-1"} 
    ${className || ""}
    hover:text-black group
  `; // Added hover:text-black to change text color on hover

  const spanClasses = "relative z-20"; // Ensures text stays on top of the background layer

  const hoverBackground = `
    absolute inset-0 bg-orange-500 rounded-lg transition-transform duration-300 ease-in-out transform scale-0
    group-hover:scale-100 z-10
  `; // Scale effect on hover

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={hoverBackground}></span>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={hoverBackground}></span>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
