import { JobsHeader } from 'components/JobsHeader';
import { jsx, Flex } from 'theme-ui';
import React, {useState} from 'react';

import { Tab } from '@headlessui/react';
import Footer from 'components/footer/footer';
import { Divider } from '@mui/material';
import UserNavbar from 'components/userNavbar';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function JobTab({ data }){

    return(
        <div className='p-4' style={{width: '85%'}} >
            <h1>
                
            </h1>
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl  p-2 ">
                    {/* {Object.keys(data).map((category) => (
                        <Tab
                        key={category}
                        className={({ selected }) =>
                            classNames(
                            'w-full py-2.5 text-sm font-medium leading-5 border-b-2',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:none',
                            selected
                                ? 'border-blue-600 text-blue-500'
                                : 'text-slate-400 hover:text-blue-400 border-slate-400 hover:border-slate-500 hover:transition-all duration-800 ease-linear'
                            )
                        }
                        >
                        {category}
                        </Tab>
                    ))} */}
                    <Tab className={({ selected }) =>
                            classNames(
                            'w-full py-2.5 text-sm font-medium leading-5 border-b-2',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:none',
                            selected
                                ? 'border-blue-600 text-blue-500'
                                : 'text-slate-400 hover:text-blue-400 border-slate-400 hover:border-slate-500 hover:transition-all duration-800 ease-linear'
                            )
                        }>
                            Description
                    </Tab>
                    <Tab className={({ selected }) =>
                            classNames(
                            'w-full py-2.5 text-sm font-medium leading-5 border-b-2',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:none',
                            selected
                                ? 'border-blue-600 text-blue-500'
                                : 'text-slate-400 hover:text-blue-400 border-slate-400 hover:border-slate-500 hover:transition-all duration-800 ease-linear'
                            )
                        }>
                            Requirements
                    </Tab>
                    <Tab className={({ selected }) =>
                            classNames(
                            'w-full py-2.5 text-sm font-medium leading-5 border-b-2',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:none',
                            selected
                                ? 'border-blue-600 text-blue-500'
                                : 'text-slate-400 hover:text-blue-400 border-slate-400 hover:border-slate-500 hover:transition-all duration-800 ease-linear'
                            )
                        }>
                            Challenges
                    </Tab>
                </Tab.List>
                {/* <Divider className='w-full' /> */}
                <Tab.Panels className="mt-2">
                {/* { Object.values(data).map((posts, idx) => (
                    <Tab.Panel
                    key={idx}
                    className={classNames(
                        'rounded-xl bg-white p-3',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                    )}
                    >
                    <ul>
                        {posts.map((post) => (
                        <li
                            key={post.id}
                            className="relative rounded-md p-3 hover:bg-gray-100"
                        >
                            <h3 className="text-sm font-medium leading-5">
                            {post.title}
                            </h3>

                            <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                <li>{post.date}</li>
                                <li>&middot;</li>
                                <li>{post.commentCount} comments</li>
                                <li>&middot;</li>
                                <li>{post.shareCount} shares</li>
                            </ul>

                            <a
                            href="#"
                            className={classNames(
                                'absolute inset-0 rounded-md',
                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                            )}
                            />
                        </li>
                        ))}
                    </ul>
                    </Tab.Panel>
                ))} */}
                    <Tab.Panel>
                        Inserir aqui Description Tab
                    </Tab.Panel>
                    <Tab.Panel>
                        Inserir aqui Requirements Tab
                    </Tab.Panel>
                    <Tab.Panel>
                        Inserir aqui Challenges Tab
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export function JobsTemplate() {

    let [categories] = useState({
        Description: [
          {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
          },
          {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
        ],
        Requirements: [
          {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            date: 'Jan 7',
            commentCount: 29,
            shareCount: 16,
          },
          {
            id: 2,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
          },
        ],
        Challenges: [
          {
            id: 1,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            date: '2d ago',
            commentCount: 9,
            shareCount: 5,
          },
          {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: '4d ago',
            commentCount: 1,
            shareCount: 2,
          },
        ],
      })

    const headerData = {
        time: "Part-time",
        type: 'Remote',
        company: '',
        title: 'Front-end Developer',
        location: 'São Paulo, Brazil',
        // description: 'We are looking for a Front-end Developer to join our team.',
        // requirements: 'We are looking for a Front-end Developer to join our team.',
        // challenges: 'We are looking for a Front-end Developer to join our team.',
        salary: '$100k - $150k',
        datePost: 'Posted 1 day ago',
        dateClose: 'in 7 days',

    }

  return (
    <>
        {/* navbar do usuário */}
        <UserNavbar />
        <JobsHeader headerData={headerData} />
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <Divider className='w-full h-1' />
            <JobTab data={categories} />
        </div>
    </>
  );
}
