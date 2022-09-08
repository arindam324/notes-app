import {MagnifyingGlassIcon, PlusIcon} from '@heroicons/react/24/outline'

const AppBar = () => {
    return (
        <div className={"max-w-[450px] w-full min-h-screen"}>
            <div className={"flex items-center justify-between"}>
                <h2 className={"text-2xl font-semibold"}>Notes</h2>
                <div className={"flex space-x-4"}>
                    <MagnifyingGlassIcon className={"h-6"}/>
                    <PlusIcon className={"h-6"}/>
                </div>
            </div>
        </div>
    )
}

export default AppBar