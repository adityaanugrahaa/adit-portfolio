import { PropsWithChildren } from 'react'

type CardProps = {
    jobTitle: string,
    companyName?: string,
    companyLink?: string,
    skills?: string[] | undefined,
    startDate: string,
    endDate: string,
    className?: string,
}

export default function ExperienceCard(props: PropsWithChildren<CardProps>) {
    return (
        <div className={`group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${props.className ? props.className : ''}`}>
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className='z-10 mb-2 text-md font-normal uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label='2022 - Present'>
                {props.startDate} <br />
                {props.endDate}
            </header>
            <div className='z-10 sm:col-span-6'>
                <h3 className='font-medium leading-snug text-slate-200'>
                    <div>
                        <a
                            href={props.companyLink ? props.companyLink : '#about'}
                            className='inline-flex items-baseline font-semibold leading-tight uppercase text-theme-500 hover:text-theme-200 focus-visible:text-teal-300  group/link text-base'>
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>
                                {props.jobTitle} &nbsp;
                                {props.companyName && (
                                    <>
                                        -
                                        <span className='inline-block'>
                                            &nbsp; {props.companyName}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                        </span>
                                    </>
                                )}
                            </span>
                        </a>
                    </div>
                </h3>
                <p className='mt-2 text-sm leading-normal'>
                    {props.children}
                </p>
                <ul className='mt-2 flex flex-wrap'>
                    {props.skills?.length !== undefined && props.skills.map((skill, id) => (
                        <li key={id}>
                            <div className='flex items-center text-md font-light rounded-lg bg-theme-1000/20 border-theme-500 border m-1 px-3 py-1 text-xs tracking-wide text-white '>{skill}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}