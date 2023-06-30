'use client'
import Image from 'next/image'
import {BsFillMoonStarsFill, BsFillSunFill, BsGithub, BsTelegram, BsMessenger} from 'react-icons/bs'
import deved from "../../public/dev-ed-wave.png"
import design from "../../public/design.png"
import code from "../../public/code.png"
import consulting from "../../public/consulting.png"
import web1 from "../../public/web1.png"
import web2 from "../../public/web2.png"
import web3 from "../../public/web3.png"
import web4 from "../../public/web4.png"
import web5 from "../../public/web5.png"
import web6 from "../../public/web6.png"
import { useState } from "react"
import { useRef } from 'react';
import emailjs from 'emailjs-com';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleMoonClick = () => {
    setDarkMode(!darkMode);
  };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ok34pd9', 'template_yr9yz4q', form.current, 'pGbqVmTvTEyeeMMts')
        .then((result) => {
            alert("Email sent !");
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
      };

  
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='pt-10 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white dark:hover:text-teal-500 hover:text-teal-500 hover:scale-110 transition duration-500'><a href="#contact">Contact me</a></h1>
            <ul className='flex items-center'>
              <li>
              {darkMode ? (
              <BsFillSunFill onClick={handleMoonClick} className='cursor-pointer text-2xl hover:rotate-90 transition duration-1000 dark:text-white'/>
            ) : (
              <BsFillMoonStarsFill onClick={handleMoonClick} className='cursor-pointer text-2xl hover:-rotate-90 transition duration-1000 dark:text-white'/>
            )}
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:from-cyan-400 hover:to-teal-400' href="https://0xmelvyn.github.io/CV/static/media/cv.96d1a55b505891aa471d.pdf" target='#blank'>Download CV</a></li>
            </ul>
          </nav>
          <div className='text-center pt-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Melvyn Hoarau</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer and designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200'>
              Freelancer providing services for programming and design content needs. Join me down below and let's get your idea to reality!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-400'>
            <a href="https://github.com/0xMelvyn" target='#blank'><BsGithub className='hover:text-black dark:hover:text-white transition duration-500' /></a>
            <a href="https://t.me/MelvynHoarau" target='#blank'><BsTelegram className='hover:text-black dark:hover:text-white transition duration-500' /></a>
            <a href="https://www.messenger.com/t/100088349492050/"><BsMessenger className='hover:text-black dark:hover:text-white transition duration-500' /></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden my-10 md:h-96 md:w-96'>
            <Image className='hover:scale-110 transition duration-500' src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 mt- dark:text-white'>Services I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Since the beginning of my journey as a freelance designer and developer, I've done remote work for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'>starups </span>
              and collabored with talanted people to create digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              I offer from a wide range of services, including brand design, programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 hover:scale-110 transition'>
              <Image className='mx-auto' src={design} width={100} height={100} flex-1/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Beautiful Designs</h3>
              <p className='py-2 dark:text-white'>
                Creating modern and aesthetic designs suited for you, following your design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Gimp</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Canva</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>A.I</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 hover:scale-110 transition'>
              <Image className='mx-auto' src={code} width={100} height={100} flex-1/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Clean Code</h3>
              <p className='py-2 dark:text-white'>
                Programming multi-device, fast and secure website for a smooth experience and SEO.
              </p>
              <h4 className='py-4 text-teal-600'>Stack I know</h4>
              <p className='text-gray-800 py-1 dark:text-gray-200'>HTML/CSS/JS</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Tailwind/React/Next</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>PHP/SQL</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 hover:scale-110 transition'>
              <Image className='mx-auto' src={consulting} width={100} height={100} flex-1/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Always Available</h3>
              <p className='py-2 dark:text-white'>
                No worries if you need an update, modify your website or start a new project, we keep contact.
              </p>
              <h4 className='py-4 text-teal-600'>Let's Talk</h4>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Telegram</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Messenger</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Email</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Since the beginning of my journey as a freelance designer and developer, I've done remote work for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'>starups </span>
              and collabored with talanted people to create digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              I offer from a wide range of services, including brand design, programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 ">
                <a href="https://0xmelvyn.github.io/ecommerce/" target='#blank'><Image className="rounded-lg object-cover hover:scale-110 transition duration-500" width={"100%"} height={"100%"} layout="responsive" src={web1}/></a>
              </div>
              <div className="basis-1/3 flex-1 ">
                <a href="https://php-blog-portfolio.000webhostapp.com/" target='#blank'><Image className="rounded-lg object-cover hover:scale-110 transition duration-500" width={"100%"} height={"100%"} layout="responsive" src={web2}/></a>
              </div>
            </div>
            <section id="contact">
              <div>
              <h3 className='text-3xl py-1 mt- dark:text-white'>Contact Me</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Feel free to write me a mail with this form, if you have any
              <span className='text-teal-500'> question </span>
              or to <span className='text-teal-500'>contact </span>
              me. I'll answer as fast as I can !
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              You can also add me on my social network.
            </p>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className='flex flex-col text-center dark:text-white basis-1/8 flex-1 gap-10 leading-7'>
                    <article className="flex flex-col bg-teal-600 rounded-lg py-5">
                        <BsGithub className='mx-auto text-3xl text-white'/>
                        <h4 className='text-white'>Email</h4>
                        <h5 className='text-sm text-gray-300'>melvynhoarau@icloud.com</h5>
                        <a href="mailto:melvynhoarau@icloud.com" target='_blank'>Send a message</a>
                    </article>
                    <article className="flex flex-col bg-teal-600 rounded-lg py-5">
                        <BsMessenger className='mx-auto text-3xl text-white'/>
                        <h4 className='text-white'>Messenger</h4>
                        <h5 className='text-sm text-gray-300'>Melvyn Hoarau</h5>
                        <a href="https://www.messenger.com/t/100088349492050/" target='_blank'>Send a message</a>
                    </article>
                    <article className="flex flex-col bg-teal-600 rounded-lg py-5">
                        <BsTelegram className='mx-auto text-3xl text-white'/>
                        <h4 className='text-white'>Telegram</h4>
                        <h5 className='text-sm text-gray-300'>@MelvynHoarau</h5>
                        <a href="https://t.me/MelvynHoarau" target='_blank'>Send a message</a>
                    </article>
              </div>
              <div className='flex flex-col text-center basis-1/3 flex-1'>
                  <form className='flex flex-col gap-5 py-5' ref={form} onSubmit={sendEmail}>
                      <input className='shadow-lg border-2 border-solid border-teal-500 bg-transparent rounded-lg p-5 dark:text-white' type="text" name='name' placeholder='Your full Name' required/>
                      <input className='shadow-lg border-2 border-solid border-teal-500 bg-transparent rounded-lg p-5 dark:text-white' type="email" name='email' placeholder='Your Email' required/>
                      <textarea className='shadow-lg border-2 border-solid border-teal-500 bg-transparent rounded-lg p-5 dark:text-white' name="message" rows="7" placeholder='Your Message' required></textarea>
                      <button className='shadow-lg border-2 border-solid border-teal-500 bg-teal-400 rounded-lg p-5' type='submit'>Send Message</button>
                  </form>
              </div>
              </div>
            </div>
            </section>
        </section>
      </main>
    </div>
  )
}