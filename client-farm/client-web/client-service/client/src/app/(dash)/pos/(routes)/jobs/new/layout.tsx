
const NewJobCardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="pb-8 scrollbar-hide">{children}</div>
        </div>
    );
};

export default NewJobCardLayout
