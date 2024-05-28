'use client'
import Image from 'next/image'
import {BsFillMoonStarsFill, BsFillSunFill,BsEnvelopeFill, BsGithub, BsMessenger, BsLinkedin} from 'react-icons/bs'
import deved from "../../public/dev-ed-wave.png"
import design from "../../public/design.png"
import code from "../../public/code.png"
import consulting from "../../public/consulting.png"
import web1 from "../../public/web1.png"
import web2 from "../../public/web2.png"
import web3 from "../../public/web3.png"
import { useState } from "react"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18next.use(initReactI18next)
  .use(Backend)
  .init({
    backend: {
      loadPath: '/translations/{{ lng }}/translations.json'
    },
    lng: 'fr',
    fallbackLng: 'fr'
  });



export default function Home() {

  const {t, i18n} = useTranslation('fr');

  function handleLangChange(event) {
    i18n.changeLanguage(event.target.value)
  }

  function formatDescription(description) {
    return description.split('**').map((part, index) => {
      return index % 2 === 0 ? part : <span className="text-teal-500" key={index}>{part}</span>;
    });
  }
  

  const notify = () => toast("Wow so easy !");

  const [darkMode, setDarkMode] = useState(false);

  const handleMoonClick = () => {
    setDarkMode(!darkMode);
  };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ok34pd9', 'template_yr9yz4q', form.current, 'pGbqVmTvTEyeeMMts')
        .then((result) => {
          toast.success('Email sent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkMode ? "dark" : "light",
            });
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
      };

  
  return (
    <div className={darkMode ? "dark" : ""}>
      <ToastContainer />
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='pt-10 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white dark:hover:text-teal-500 hover:text-teal-500 hover:scale-110 transition duration-500'><a href="#contact">{ t('contact')}</a></h1>
            <ul className='flex items-center'>
              <li>
              {darkMode ? (
              <BsFillSunFill onClick={handleMoonClick} className='cursor-pointer text-2xl hover:rotate-90 transition duration-1000 dark:text-white'/>
            ) : (
              <BsFillMoonStarsFill onClick={handleMoonClick} className='cursor-pointer text-2xl hover:-rotate-90 transition duration-1000 dark:text-white'/>
            )}
              </li>
              <li className='ml-1'>
                <select className='dark:bg-gray-900 dark:text-white' onChange={handleLangChange}>
                <option value="fr">FR</option>
                <option value="en">EN</option>
                </select>
              </li>
            </ul>
          </nav>
          <div className='text-center pt-10'>
            <h2 className='text-4xl lg:text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Melvyn Hoarau</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
            { t('job.title')}
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200'>
            { t('job.description')}
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-400'>
            <a href="https://github.com/0xMelvyn" target='#blank'><BsGithub className='hover:text-black dark:hover:text-white transition duration-500' /></a>
            <a href="https://www.linkedin.com/in/melvyn-hoarau" target='#blank'><BsLinkedin className='hover:text-black dark:hover:text-white transition duration-500' /></a>
            <a href="https://www.messenger.com/t/210061615523190/" target='#blank'><BsMessenger className='hover:text-black dark:hover:text-white transition duration-500' /></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden my-10 md:h-96 md:w-96'>
            <Image className='hover:scale-110 transition duration-500' src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section id="services">
          <div>
            <h3 className='text-3xl py-1 mt- dark:text-white'>{ t('services.title')}</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            {formatDescription(t('services.description1'))}
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            { t('services.description2')}
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg dark:shadow-black p-10 rounded-xl my-10 flex-1 hover:scale-110 transition dark:shadow-2xl'>
              <Image className='mx-auto' src={design} width={100} height={100} flex-1/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>{ t('services.cards.design.title')}</h3>
              <p className='py-2 dark:text-white'>
              { t('services.cards.design.description')}
              </p>
              <h4 className='py-4 text-teal-600'>{ t('services.cards.design.subtitle')}</h4>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Gimp</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Canva</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>AI</p>
            </div>
            <div className='text-center shadow-lg dark:shadow-black p-10 rounded-xl my-10 flex-1 hover:scale-110 transition dark:shadow-2xl'>
              <Image className='mx-auto' src={code} width={100} height={100} flex-1/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>{ t('services.cards.dev.title')}</h3>
              <p className='py-2 dark:text-white'>
              { t('services.cards.dev.description')}
              </p>
              <h4 className='py-4 text-teal-600'>{ t('services.cards.dev.subtitle')}</h4>
              <p className='text-gray-800 py-1 dark:text-gray-200'>HTML/CSS/JS</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Tailwind/React/Next</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>PHP/MySQL</p>
            </div>
            <div className='text-center shadow-lg dark:shadow-black p-10 rounded-xl my-10 flex-1 hover:scale-110 transition dark:shadow-2xl'>
              <Image className='mx-auto' src={consulting} width={100} height={100} flex-1/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>{ t('services.cards.contact.title')}</h3>
              <p className='py-2 dark:text-white'>
              { t('services.cards.contact.description')}
              </p>
              <h4 className='py-4 text-teal-600'>{ t('services.cards.contact.subtitle')}</h4>
              <p className='text-gray-800 py-1 dark:text-gray-200'>LinkedIn</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Messenger</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Email</p>
            </div>
          </div>
        </section>
        <section className='min-h-screen' id="portfolio">
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>{ t('portfolio.title')}</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            {formatDescription(t('portfolio.description1'))}
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            { t('portfolio.description2')}
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 shadow-lg dark:shadow-black">
                <a href="https://estate-exemple-by-melvyn.vercel.app/" target='#blank'><Image className="rounded-lg object-cover hover:scale-110 transition duration-500" width={"100%"} height={"100%"} layout="responsive" src={web3}/></a>
              </div>
              <div className="basis-1/3 flex-1 shadow-lg dark:shadow-black">
                <a href="https://0xmelvyn.github.io/ecommerce/" target='#blank'><Image className="rounded-lg object-cover hover:scale-110 transition duration-500" width={"100%"} height={"100%"} layout="responsive" src={web1}/></a>
              </div>
              <div className="basis-1/3 flex-1 shadow-lg dark:shadow-black">
                <a href="https://0xmelvyn.github.io/ecommerce/" target='#blank'><Image className="rounded-lg object-cover hover:scale-110 transition duration-500" width={"100%"} height={"100%"} layout="responsive" src={web2}/></a>
              </div>
            </div>
            </section>
            <section id="contact">
              <div>
              <h3 className='text-3xl py-1 mt- dark:text-white'>{ t('form.title')}</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              {formatDescription(t('form.description1'))}
              </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            { t('form.description2')}
            </p>
            <div className="flex flex-col gap-10 py-5 lg:flex-row lg:flex-wrap">
              <div className='flex flex-col text-center dark:text-white basis-1/8 flex-1 gap-10 leading-7'>
                    <article className="flex flex-col shadow-lg rounded-lg py-5 hover:scale-110 transition duration-500 dark:shadow-2xl">
                        <BsEnvelopeFill className='mx-auto text-3xl text-red-600'/>
                        <h4>Email</h4>
                        <h5 className='text-sm text-teal-500'>melvynhoarau@icloud.com</h5>
                        <a href="mailto:melvynhoarau@icloud.com" target='_blank'>{ t('social')}</a>
                    </article>
                    <article className="flex flex-col shadow-lg rounded-lg py-5 hover:scale-110 transition duration-500 dark:shadow-2xl">
                        <BsMessenger className='mx-auto text-3xl text-purple-600'/>
                        <h4>Messenger</h4>
                        <h5 className='text-sm text-teal-500'>Melvyn Hoarau</h5>
                        <a href="https://www.messenger.com/t/210061615523190/" target='_blank'>{ t('social')}</a>
                    </article>
                    <article className="flex flex-col shadow-lg rounded-lg py-5 hover:scale-110 transition duration-500 dark:shadow-2xl">
                        <BsLinkedin className='mx-auto text-3xl text-blue-400'/>
                        <h4>LinkedIn</h4>
                        <h5 className='text-sm text-teal-500'>Melvyn Hoarau</h5>
                        <a href="https://www.linkedin.com/in/melvyn-hoarau" target='_blank'>{ t('social')}</a>
                    </article>
              </div>
              <div className='flex flex-col text-center basis-1/3 flex-1'>
                  <form className='flex flex-col gap-5 py-5' ref={form} onSubmit={sendEmail}>
                      <input className='shadow-lg border-2 border-solid border-gray-200 bg-transparent rounded-lg p-5 dark:text-white' type="text" name='name' placeholder={ t('form.name')} required/>
                      <input className='shadow-lg border-2 border-solid border-gray-200 bg-transparent rounded-lg p-5 dark:text-white' type="email" name='email' placeholder={ t('form.email')} required/>
                      <textarea className='shadow-lg border-2 border-solid border-gray-200 bg-transparent rounded-lg p-5 dark:text-white' name="message" rows="7" placeholder={ t('form.message')} required></textarea>
                      <button className='shadow-lg bg-teal-500 rounded-lg p-5 hover:bg-teal-400 dark:text-white transition duration-500' type='submit'>{ t('send')}</button>
                  </form>
              </div>
              </div>
            </div>
            </section>
        <footer className='absolute left-0 bg-white dark:bg-gray-900 text-center text-gray-700 w-full'>
          <hr />
          <div className='my-5'>
            <a className='text-2xl hover:text-black dark:text-gray-400 dark:hover:text-white transition duration-500' href="#">MELVYN</a>

            <ul className='flex justify-center my-5 gap-5'>
                <li><a className='hover:text-black dark:text-gray-400 dark:hover:text-white transition duration-500' href="#">{ t('home')}</a></li>
                <li><a className='hover:text-black dark:text-gray-400 dark:hover:text-white transition duration-500' href="#services">Services</a></li>
                <li><a className='hover:text-black dark:text-gray-400 dark:hover:text-white transition duration-500' href="#portfolio">{ t('portefolio')}</a></li>
                <li><a className='hover:text-black dark:text-gray-400 dark:hover:text-white transition duration-500' href="#contact">Contact</a></li>
            </ul>

            <div className='flex justify-center text-2xl my-5 gap-5'>
                <a className='hover:text-black dark:text-gray-400 dark:hover:text-white transition duration-500' href="https://www.messenger.com/t/210061615523190/" target='_blank'><BsMessenger/></a>
                <a className='hover:text-black dark:text-gray-400 dark:hover:text-white transition duration-500' href="https://www.linkedin.com/in/melvyn-hoarau" target='_blank'><BsLinkedin/></a>
                <a className='hover:text-black dark:text-gray-400 dark:hover:text-white transition duration-500' href="mailto:melvynhoarau@icloud.com" target='_blank'><BsEnvelopeFill/></a>
            </div>

            <div>
                <small className='dark:text-gray-600'>&copy; { t('right')}</small>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}