import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/negar.png"
          alt="profile picture"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Negar</h1>
      <p>I blog about my journey in web development here!</p>
    </section>
  );
};

export default Hero;
