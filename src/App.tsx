import React, { useEffect, useState } from 'react';
import './main.css'
import HeroImage from './assets/images/hero-image.png'
import ExperienceCard from './Components/ExperienceCard/ExperienceCard';
import AboutImage from './assets/images/ABOUT.png'
import ExperienceImage from './assets/images/EXPERIENCE.png'
import WorkImage from './assets/images/WORKS.png'

import AndalinGoImage from './assets/images/andalin-go.svg'
import AndalinDashboardImage from './assets/images/andalin-dashboard.svg'
import DesignSystemImage from './assets/images/design-system.svg'
import WeatherAppImage from './assets/images/weather.svg'

function App() {
	const [workList] = useState<Array<Array<string>>>([
		[AndalinGoImage, 'https://play.google.com/store/apps/details?id=com.andalinlite&hl=id&gl=US&pli=1', 'AndalinGo'],
		[AndalinDashboardImage, 'https://drive.google.com/file/d/1rSNQVOK0bcBh_BIKdanedg4nNPNM0hq4/view', 'Dashboard Andalin'],
		[DesignSystemImage, 'https://drive.google.com/file/d/1rSNQVOK0bcBh_BIKdanedg4nNPNM0hq4/view', 'Design System'],
		[WeatherAppImage, 'https://drive.google.com/file/d/1rSNQVOK0bcBh_BIKdanedg4nNPNM0hq4/view', 'Weather Apps'],
	])

	useEffect(() => {
		const bodyClassList = ["bg-theme-1100", "leading-relaxed", "text-gray-200", "antialiased", "selection:bg-teal-300", "selection:text-teal-900", "overflow-x-hidden"];
		const root = document.getElementsByTagName('html')[0]

		for (const el of bodyClassList) {
			document.body.classList.add(el);
		}
		root.classList.add('scroll-smooth')
	}, []);
	return (
		<div
			id="app"
			className="relative">
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
				<a className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">A</a>
				<div className="lg:flex lg:justify-between lg:gap-4">
					<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:min-h-screen lg:w-1/2 lg:flex-col justify-between lg:py-24">
						<div>
							<h3 className="mt-3 text-xl font-bold tracking-tight leading-6 text-gray-200 md:text-2xl">Hi, I'm</h3>
							<h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl">Aditya Nugraha</h1>
							<h2 className="mt-3 text-3xl font-extrabold tracking-wide text-theme-500">UI/UX Designer</h2>
							<p className="mt-4 max-w-sm leading-6 font-light tracking-normal typewriter">I am an experienced and skilled product designer with a proven track record of conducting user research, building design systems, implementing atomic design principles and having mastery of Auto Layout, which enables me to create design solutions that are intuitive, visually appealing, and functional that meet the end user needs.</p>
							<nav className="nav hidden lg:block">
								<ul className="mt-16 w-max">
									<li>
										<a className="group flex items-center py-3" href="#about">
											<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
											<span className="nav-text text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About Me</span>
										</a>
									</li>
									<li>
										<a className="group flex items-center py-3" href="#experience">
											<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
											<span className="nav-text text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
										</a>
									</li>
									<li>
										<a className="group flex items-center py-3" href="#projects">
											<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
											<span className="nav-text text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
										</a>
									</li>
									<li>
										<a className="group flex items-center py-3" href="#projects">
											<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
											<span className="nav-text text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Get In Touch</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<ul className="ml-1 mt-8 flex items-center">
							<li className='mr-7 text-xs'>
								<a className='block hover:text-slate-100' href='https://www.instagram.com/adityaanugrahaa/' target='_blank'>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1C14.988 1 15.362 1.013 16.534 1.066C17.706 1.119 18.506 1.306 19.206 1.577C19.939 1.854 20.604 2.287 21.154 2.847C21.714 3.396 22.146 4.06 22.422 4.794C22.694 5.494 22.88 6.294 22.934 7.464C22.988 8.639 23 9.013 23 12C23 14.988 22.987 15.362 22.934 16.535C22.881 17.705 22.694 18.505 22.422 19.205C22.146 19.9391 21.7133 20.6042 21.154 21.154C20.604 21.714 19.939 22.146 19.206 22.422C18.506 22.694 17.706 22.88 16.536 22.934C15.362 22.988 14.988 23 12 23C9.012 23 8.638 22.987 7.465 22.934C6.295 22.881 5.495 22.694 4.795 22.422C4.06092 22.146 3.39582 21.7133 2.846 21.154C2.28638 20.6047 1.85331 19.9399 1.577 19.206C1.306 18.506 1.12 17.706 1.066 16.536C1.012 15.361 1 14.987 1 12C1 9.012 1.013 8.638 1.066 7.466C1.119 6.294 1.306 5.494 1.577 4.794C1.85372 4.06008 2.28712 3.39531 2.847 2.846C3.39604 2.2865 4.06047 1.85344 4.794 1.577C5.494 1.306 6.294 1.12 7.464 1.066H7.465ZM16.445 3.046C15.285 2.993 14.937 2.982 12 2.982C9.063 2.982 8.715 2.993 7.555 3.046C6.482 3.095 5.9 3.274 5.512 3.425C4.999 3.625 4.632 3.862 4.247 4.247C3.88205 4.60205 3.60118 5.03428 3.425 5.512C3.274 5.9 3.095 6.482 3.046 7.555C2.993 8.715 2.982 9.063 2.982 12C2.982 14.937 2.993 15.285 3.046 16.445C3.095 17.518 3.274 18.1 3.425 18.488C3.601 18.965 3.882 19.398 4.247 19.753C4.602 20.118 5.035 20.399 5.512 20.575C5.9 20.726 6.482 20.905 7.555 20.954C8.715 21.007 9.062 21.018 12 21.018C14.938 21.018 15.285 21.007 16.445 20.954C17.518 20.905 18.1 20.726 18.488 20.575C19.001 20.375 19.368 20.138 19.753 19.753C20.118 19.398 20.399 18.965 20.575 18.488C20.726 18.1 20.905 17.518 20.954 16.445C21.007 15.285 21.018 14.937 21.018 12C21.018 9.063 21.007 8.715 20.954 7.555C20.905 6.482 20.726 5.9 20.575 5.512C20.375 4.999 20.138 4.632 19.753 4.247C19.3979 3.88207 18.9657 3.60121 18.488 3.425C18.1 3.274 17.518 3.095 16.445 3.046ZM10.595 15.391C11.3797 15.7176 12.2534 15.7617 13.0669 15.5157C13.8805 15.2697 14.5834 14.7489 15.0556 14.0422C15.5278 13.3356 15.7401 12.4869 15.656 11.6411C15.572 10.7953 15.197 10.005 14.595 9.405C14.2112 9.02148 13.7472 8.72781 13.2363 8.54515C12.7255 8.36248 12.1804 8.29536 11.6405 8.34862C11.1006 8.40187 10.5792 8.57418 10.1138 8.85313C9.64845 9.13208 9.25074 9.51074 8.9493 9.96185C8.64786 10.413 8.45019 10.9253 8.37052 11.462C8.29084 11.9986 8.33115 12.5463 8.48854 13.0655C8.64593 13.5847 8.91648 14.0626 9.28072 14.4647C9.64496 14.8668 10.0938 15.1832 10.595 15.391ZM8.002 8.002C8.52702 7.47697 9.15032 7.0605 9.8363 6.77636C10.5223 6.49222 11.2575 6.34597 12 6.34597C12.7425 6.34597 13.4777 6.49222 14.1637 6.77636C14.8497 7.0605 15.473 7.47697 15.998 8.002C16.523 8.52702 16.9395 9.15032 17.2236 9.8363C17.5078 10.5223 17.654 11.2575 17.654 12C17.654 12.7425 17.5078 13.4777 17.2236 14.1637C16.9395 14.8497 16.523 15.473 15.998 15.998C14.9377 17.0583 13.4995 17.654 12 17.654C10.5005 17.654 9.06234 17.0583 8.002 15.998C6.94166 14.9377 6.34597 13.4995 6.34597 12C6.34597 10.5005 6.94166 9.06234 8.002 8.002ZM18.908 7.188C19.0381 7.06527 19.1423 6.91768 19.2143 6.75397C19.2863 6.59027 19.3248 6.41377 19.3274 6.23493C19.33 6.05609 19.2967 5.87855 19.2295 5.71281C19.1622 5.54707 19.0624 5.39651 18.936 5.27004C18.8095 5.14357 18.6589 5.04376 18.4932 4.97652C18.3275 4.90928 18.1499 4.87598 17.9711 4.87858C17.7922 4.88119 17.6157 4.91965 17.452 4.9917C17.2883 5.06374 17.1407 5.1679 17.018 5.298C16.7793 5.55103 16.6486 5.88712 16.6537 6.23493C16.6588 6.58274 16.7992 6.91488 17.0452 7.16084C17.2911 7.40681 17.6233 7.54723 17.9711 7.5523C18.3189 7.55737 18.655 7.42669 18.908 7.188Z" fill="white" fillOpacity="0.5" />
									</svg>
								</a>
							</li>
							<li className="mr-7 text-xs">
								<a className='block hover:text-slate-100' href='https://twitter.com/adityaanugrahaa' target='_blank'>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path d="M23.643 4.93695C22.808 5.30695 21.911 5.55696 20.968 5.66996C21.941 5.08775 22.669 4.17142 23.016 3.09195C22.1019 3.63494 21.1014 4.01715 20.058 4.22196C19.3564 3.47282 18.4271 2.97628 17.4143 2.80943C16.4016 2.64258 15.3621 2.81475 14.4572 3.29921C13.5524 3.78367 12.8328 4.55332 12.4102 5.48866C11.9875 6.424 11.8855 7.4727 12.12 8.47195C10.2677 8.37895 8.45564 7.8975 6.80144 7.05886C5.14723 6.22022 3.68785 5.04312 2.51801 3.60396C2.11801 4.29396 1.88801 5.09396 1.88801 5.94596C1.88757 6.71295 2.07644 7.4682 2.43789 8.14469C2.79934 8.82118 3.32217 9.39799 3.96001 9.82396C3.22029 9.80042 2.49688 9.60054 1.85001 9.24095V9.30095C1.84994 10.3767 2.22204 11.4193 2.90319 12.252C3.58434 13.0846 4.53258 13.6559 5.58701 13.869C4.9008 14.0547 4.18135 14.082 3.48301 13.949C3.78051 14.8746 4.36001 15.684 5.14038 16.2639C5.92075 16.8438 6.86293 17.1651 7.83501 17.183C6.18484 18.4784 4.1469 19.181 2.04901 19.178C1.67739 19.1781 1.30609 19.1564 0.937012 19.113C3.06649 20.4821 5.54535 21.2088 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95195C21.332 7.75196 21.327 7.54995 21.318 7.34995C22.2293 6.69093 23.0159 5.87485 23.641 4.93995L23.643 4.93695Z" fill="white" fillOpacity="0.5" />
									</svg>
								</a>
							</li>
							<li className="mr-7 text-xs">
								<a className='block hover:text-slate-100' href='https://dribbble.com/adityaanugrahaa' target='_blank'>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<g clipPath="url(#clip0_413_895)">
											<path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.375 0 0 5.375 0 12C0 18.625 5.375 24 12 24C18.612 24 24 18.625 24 12C24 5.375 18.612 0 12 0ZM19.926 5.531C21.4035 7.33034 22.2211 9.5809 22.243 11.909C21.905 11.844 18.521 11.154 15.111 11.584C15.032 11.414 14.967 11.232 14.889 11.05C14.6769 10.5494 14.4515 10.0546 14.213 9.566C17.987 8.03 19.705 5.818 19.926 5.531ZM12 1.771C14.603 1.771 16.985 2.746 18.794 4.347C18.612 4.607 17.063 6.677 13.419 8.043C11.739 4.959 9.879 2.433 9.592 2.043C10.3813 1.85869 11.1894 1.76707 12 1.77V1.771ZM7.64 2.733C7.913 3.098 9.735 5.636 11.44 8.655C6.65 9.931 2.42 9.905 1.965 9.905C2.629 6.729 4.777 4.087 7.64 2.733ZM1.744 12.013V11.701C2.187 11.714 7.158 11.779 12.274 10.243C12.573 10.816 12.846 11.401 13.106 11.987C12.976 12.026 12.833 12.065 12.703 12.104C7.419 13.809 4.607 18.468 4.373 18.859C2.68041 16.9805 1.7438 14.5415 1.744 12.013ZM12 22.256C9.631 22.256 7.445 21.449 5.714 20.096C5.896 19.718 7.978 15.709 13.757 13.692C13.783 13.679 13.797 13.679 13.822 13.666C15.267 17.401 15.852 20.538 16.009 21.436C14.772 21.97 13.419 22.256 12 22.256ZM17.714 20.499C17.61 19.874 17.063 16.881 15.722 13.197C18.937 12.69 21.748 13.523 22.1 13.64C21.657 16.49 20.017 18.95 17.714 20.499Z" fill="white" fillOpacity="0.5" />
										</g>
										<defs>
											<clipPath id="clip0_413_895">
												<rect width="24" height="24" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</a>
							</li>
							<li className="mr-7 text-xs">
								<a className='block hover:text-slate-100' href='https://www.behance.net/adityaanugrahaa' target='_blank'>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path d="M14.8594 6.89763H19.5352V8.032H14.8594V6.89763ZM10.1742 11.3859C11.2078 10.8914 11.7492 10.139 11.7492 8.97653C11.7492 6.67732 10.0383 6.11951 8.0625 6.11951H2.625V17.6601H8.21484C10.3102 17.6601 12.2766 16.6523 12.2766 14.3085C12.2766 12.8601 11.5922 11.789 10.1742 11.3859ZM5.16094 8.08825H7.53984C8.45625 8.08825 9.27891 8.34372 9.27891 9.40778C9.27891 10.3875 8.63906 10.7812 7.73203 10.7812H5.16094V8.08825ZM7.86797 15.7007H5.15859V12.5226H7.92188C9.0375 12.5226 9.74297 12.989 9.74297 14.1703C9.74297 15.3328 8.90156 15.7007 7.86797 15.7007ZM21.3633 13.6031C21.3633 11.1304 19.9172 9.07028 17.3016 9.07028C14.7586 9.07028 13.0289 10.9851 13.0289 13.4953C13.0289 16.0968 14.6672 17.8828 17.3016 17.8828C19.2961 17.8828 20.5875 16.9851 21.2086 15.0703H19.1859C18.9656 15.7851 18.0703 16.1601 17.3742 16.1601C16.0289 16.1601 15.3258 15.3726 15.3258 14.0343H21.3469C21.3539 13.896 21.3633 13.7507 21.3633 13.6031ZM15.3258 12.5859C15.3984 11.4867 16.132 10.8 17.2289 10.8C18.382 10.8 18.9586 11.4773 19.0594 12.5859H15.3258Z" fill="white" fillOpacity="0.5" />
									</svg>
								</a>
							</li>
						</ul>
					</header>
					<main id="content" className='pt-24 lg:w-1/2 lg:py-24'>
						<section id="main" className='hidden lg:block'>
							<div className='flex flex-col justify-start content-center items-center w-full h-[100vh] py-20 z-10'>
								<div
									className='rounded-full w-[445px] h-[445px] shadow-[15px_-15px_50px_10px_rgba(33,92,244,0.5)]'
									style={{
										background: `url(${HeroImage})`,
										backgroundColor: '#19181E',
										backgroundRepeat: 'no-repeat',
										backgroundPosition: 'center center',
										backgroundSize: '150%'
									}}></div>
							</div>
						</section>
						<div className='hidden lg:block absolute right-0 w-1/2 h-40 mt-[-100px] lg:mr-[-210px]' style={{
							background: `url(${AboutImage})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'contain',
							backgroundPosition: '100px 0px'
						}}></div>
						<section id="about" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
							<div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
								<h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About Me</h2>
							</div>
							<ExperienceCard
								startDate='01'
								endDate='Story'
								jobTitle={`A story of hardwork and perseverance.`}>
								<p className='mt-4 text-[16px] tracking-wide opacity-[0.8] font-light leading-5 text-slate-400'>My name is Aditya Nugraha can be called adit, I am 26 years old and I live in Bandung. I graduated as a bachelor from the Indonesian University of Education with a concentration in computer science.</p>
								<p className='mt-4 text-[16px] tracking-wide opacity-[0.8] font-light leading-5 text-slate-400'>I have organizational experience, where at that time I was included in the student executive board staff and attended the annual event as chairman of the sponsorship division. and also became vice chairman of the student activity unit (UKM) level 2 in the field of futsal and student nature lovers.</p>
								<p className='mt-4 text-[16px] tracking-wide opacity-[0.8] font-light leading-5 text-slate-400'>I also happened to be one of the winners of the scholarship organized by the Bandung city government in 2016 and 2017.</p>
								<p className='mt-4 text-[16px] tracking-wide opacity-[0.8] font-light leading-5 text-slate-400'>My hobby. I really like traveling because I think with traveling I can develop myself and can see from various points of view, then I also really like sports</p>
							</ExperienceCard>
							<ExperienceCard
								className='mt-12'
								startDate='02'
								endDate='Education'
								jobTitle={`2015 - 2020`}>
								<p className='mt-4 text-[16px] tracking-wide opacity-[0.8] font-light leading-5 text-slate-400'>Bachelor Degree - Computer Science</p>
								<p className='text-[16px] tracking-wide opacity-[0.8] font-light leading-5 text-slate-400'>GPA: 3,32 out of 4</p>
							</ExperienceCard>
							<ExperienceCard
								className='mt-12'
								startDate='03'
								endDate='Tools'
								jobTitle={`What i Used`}
								skills={['Figma Apps', 'Adobe XD', 'Photoshop', 'Illustrator', 'MS Office', 'Trello', 'Miro', 'Marvel', 'InVision', 'Jira', 'Slack', 'Maze']}
							/>
						</section>
						<div className='hidden lg:block absolute right-0 w-1/2 h-40 mr-[-20px] mt-[-100px]' style={{
							background: `url(${ExperienceImage})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'contain',
							backgroundPosition: '100px 0px'
						}}></div>
						<section id="experience" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
							<div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
								<h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Experience</h2>
							</div>

							<div>
								<ol className='group/list'>
									<ExperienceCard
										startDate='Sep 2021 -'
										endDate='Aug 2023'
										jobTitle='Senior UI Designer'
										companyName='Andalin'
										companyLink='https://andalin.com'>
										<ul className='list-disc mt-4 text-slate-400'>
											<li className='leading-6 font-light text-[16px]'>Build various page navigation buttons and pages, presenting alternative design to Lead Designers</li>
											<li className='leading-6 font-light text-[16px]'>Develop UI mockups and prototypes using Figma and Marvel based on design and layout</li>
											<li className='leading-6 font-light text-[16px]'>Prepare and present trough drafts to internal teams and key stakeholders</li>
										</ul>
									</ExperienceCard>
									<ExperienceCard
										className='mt-16'
										startDate='Mar 2021 -'
										endDate='Aug 2021'
										jobTitle='UI/UX Designers'
										companyName='PT Sari Wisata Utama'
										companyLink='https://andalin.com'>
										<p className='leading-6 font-light text-[16px] text-slate-400'>
											Create wireframe, storyboard, user flows, and site maps to make great product. Brainstorming about product with all stakeholders. Contribute in user testing and user research with user. Collaborate with developers, PM, and other designer. Defining the problem & coming out with design solution
										</p>
									</ExperienceCard>
									<ExperienceCard
										className='mt-16'
										startDate='Feb 2021 -'
										endDate='May 2021'
										jobTitle='UI/UX Designers'
										companyName='PT Septagon Telematika Indonesia'
										companyLink='https://andalin.com'>
										<ul className='list-disc mt-4 text-slate-400'>
											<li className='leading-6 font-light text-[16px]'>Rebrand/Redesign the old website saatkerja.comRebrand/Redesign the old website saatkerja.com</li>
											<li className='leading-6 font-light text-[16px]'>Provide a user-friendly experience/layout/website</li>
											<li className='leading-6 font-light text-[16px]'>Make website Anugerah Kebudayaan Indonesia  Kementerian Pendidikan dan Kebudayaan Indonesia</li>
										</ul>
									</ExperienceCard>
									<ExperienceCard
										className='mt-16'
										startDate='Jan 2021 -'
										endDate='May 2021'
										jobTitle='Internship UI/UX Designers Lead'
										companyName='PT Sinergi Ketahanan Pangan (Chick In)'
										companyLink='https://andalin.com'>
										<ul className='list-disc mt-4 text-slate-400'>
											<li className='leading-6 font-light text-[16px]'>Create UI design about ChickIn Apps</li>
											<li className='leading-6 font-light text-[16px]'>Creating for the first UI KIT</li>
											<li className='leading-6 font-light text-[16px]'>Interaction designs</li>
											<li className='leading-6 font-light text-[16px]'>User interface & prototype</li>
										</ul>
									</ExperienceCard>
									<ExperienceCard
										className='mt-16'
										startDate='Dec 2020 -'
										endDate='Mar 2021'
										jobTitle='Internship UI/UX Designers'
										companyName='Create IT'
										companyLink='https://andalin.com'>
										<p className='leading-6 font-light text-[16px] text-slate-400'>
											Colaborate with product management and engineering to define and implement innovative solutions for the visuals and experience
										</p>
									</ExperienceCard>
									<ExperienceCard
										className='mt-16'
										startDate='Sept 2020 -'
										endDate='Oct 2020'
										jobTitle='Front End Developer'
										companyName='PT Bahtera Solusi Nusantara'
										companyLink='https://andalin.com'>
										<p className='leading-6 font-light text-[16px] text-slate-400'>
											After graduating from web programming school, I started working as a Web Designer. I created dozens of website projects for local companies. I used WordPress, photoshop, and CSS libraries to build websites. I learned how to communicate with stakeholders and build my own freelance business.
										</p>
									</ExperienceCard>
									<ExperienceCard
										className='mt-16'
										startDate='Jan 2019 -'
										endDate='Oct 2019'
										jobTitle='Senior Barista'
										companyName='Dewaji Coffee Labs'
										companyLink='https://andalin.com'>
										<p className='leading-6 font-light text-[16px] text-slate-400'>
											Producing all coffee and non-coffee menus for customers based on daily calibration, Become an asistant instructor for coffee courses and maintain relationships between customers and the coffee shop
										</p>
									</ExperienceCard>
								</ol>
							</div>
						</section>
						<div className='hidden lg:block absolute right-0 w-1/2 h-40 mr-[-200px] mt-[-50px]' style={{
							background: `url(${WorkImage})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'contain',
							backgroundPosition: '100px 0px'
						}}></div>
						<section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
							<div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
								<h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>My Works</h2>
							</div>
							<h2 className='hidden lg:block text-md font-semibold uppercase tracking-widest text-theme-500'>My Works</h2>
							<div className='not-prose relative overflow-hidden w-full lg:w-screen'>
								<div className='relative overflow-x-auto'>
									<div id='carousel' className='relative flex w-full gap-4 snap-x overflow-x-auto'>
										{workList.map((el, id) => (
											<React.Fragment key={id}>
												<a className='flex flex-col content-center justify-center items-center' href={el[1]}>
													<div
														style={{
															background: `url(${el[0]})`,
															backgroundPosition: 'center center',
															backgroundRepeat: 'no-repeat',
															backgroundSize: 'cover'
														}}
														className='snap-center drop-shadow-lg bg-slate-200 rounded-md min-h-[250px] min-w-[250px]'></div>
													<h3 className='text-lead text-slate-200'>{el[2]}</h3>
												</a>
											</React.Fragment>
										))}
									</div>
								</div>
							</div>
						</section>
						<a href='https://resume.io/r/yc2rcVEEt'>
							<h3 className='text-lg text-theme-600 tracking-wide uppercase font-semibold'>
								Download Resume
								<span className='inline-block'>
									&nbsp;
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-5 w-5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
								</span>
							</h3>
						</a>
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
