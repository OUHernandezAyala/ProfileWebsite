import React from 'react';
import Image from 'next/image';
import StackIcon from './StackIcon';

const Stack = () =>{
    const stack = [
        "js", "python", "html", "css", "tailwind", "bootstrap", "react", "node", "flask","next", "vite", "SQL", "SQLManagment", "SQLAlquemy", "git", "github", "powerbi", "prolog", "jest", "jira"
    ]
    return(
        <section className='py-28'>
            <h2 className="text-4xl font-bold my-8 text-transparent text-center bg-clip-text bg-gradient-to-br from-[#0abdc6]  to-[#ea00d9]">
             Stack
            </h2>
            <div className='grid md:grid-cols-10 gap-10 md:gap-5 grid-cols-5 justify-center'>
                {
                    stack.map(
                        (stackItem)=>(<StackIcon key={stackItem} stack={stackItem}/>)
                    )
                }            
            </div>
        </section>
    )
};

export default Stack;