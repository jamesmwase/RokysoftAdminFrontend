import {
    ChevronRightIcon,
    HomeIcon,
    ChevronLeftIcon,
} from '@heroicons/react/solid';

export default function Breadcrumbs(props) {
    const breadcrumbs = props.breadcrumbs;
    return (
        <>
            <nav className="sm:hidden" aria-label="Back">
                <a className="
                            flex
                            items-center
                            text-sm
                            font-medium
                            text-gray-500
                            hover:text-gray-700" 
                            href={"/home"}>
                       
                        <ChevronLeftIcon
                            className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        Back
                    </a>
            </nav>
            <nav className="hidden sm:flex" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-1">
                    {breadcrumbs.map((item, index) => (
                        <li key={item.name}>
                            <div className="flex items-center">
                                {index >= 1 &&
                                    <svg
                                        v-show="breadcrumbIndx > 0"
                                        className="flex-shrink-0 h-5 w-5 text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                    </svg>

                                }



                                <a className="
                                            ml-1
                                            text-sm
                                            font-medium
                                            text-gray-500
                                            hover:text-gray-700
                                            capitalize
                                        " href={item.href}>
                                        
                                   {item.name}
                                    </a>
                            </div>
                        </li>))}
                </ol>
            </nav>
        </>
    );
};
