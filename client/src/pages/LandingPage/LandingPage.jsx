import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div>
            <section className="relative py-12 sm:py-16 lg:pb-40">
        <div className="absolute bottom-0 right-0 overflow-hidden">
            <img className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png" alt="" />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                    <h1 data-text="TechColab Hub" className="style text-4xl font-bold leading-tight  sm:text-5xl sm:leading-tight lg:text-4xl lg:leading-tight font-pj heading">TechColab Hub</h1>
                    <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">Get Personalized Project Recommendations and Kickstart your Coding Journey</p>

                    <Link to="/auth" >
                        <div title="" className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                            Sign In
                        </div>
                    </Link>

                    <div className="mt-8 sm:mt-16">
                        <div className="flex items-center justify-center lg:justify-start">
                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                
                            </svg>
                        </div>

                        <blockquote className="mt-6">
                            <p className="text-lg font-bold text-gray-900 font-pj">Share Your Thoughts on latest technologies </p>
                            <p className="mt-3 text-base leading-7 text-gray-600 font-inter">Lets you to ask doubts about any specific topic and discuss about the latest technologies and features of a particular Project</p>
                        </blockquote>

                       
                    </div>
                </div>

                <div className="xl:col-span-1">
                    <img className="w-full mx-auto" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default LandingPage