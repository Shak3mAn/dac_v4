import React from 'react'

interface ServiceSelectItemProps {
    name: string;
    category: string;
    id: string;
    description: string;
}

export const ServiceSelectItem: React.FC<ServiceSelectItemProps> = ({
    name,
    category,
    id,
    description
}) => {

    return (
        <>
            <div
                className="flex flex-col items-center px-2 py-1 hover:bg-accent cursor-pointer w-full"
            >
                <div className="flex justify-between w-full">
                    <div className="font-semibold tracking-tight text-sm">
                        {name}
                    </div>
                    {/* <div className="text-xs text-muted-foreground font-medium tracking-tight justify-end items-end flex">
                        {category.replace(" Services", "")}
                    </div> */}
                </div>
                <div className="text-muted-foreground text-xs tracking-tight flex">
                    <span>
                        #{id} -
                    </span>
                    <span className="ml-1 truncate">
                        {description.length > 30 ? description.slice(0, 27) + "..." : description}
                    </span>
                </div>
            </div>
        </>
    )
}