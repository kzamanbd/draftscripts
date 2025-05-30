type TimelineIconProps = {
    as?: React.ElementType;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
};

const TimelineIcon = (props: TimelineIconProps) => {
    const { as: Component = 'div', className = '', children, ...rest } = props;

    return (
        <Component className={className} {...rest}>
            <div className="timeline-icon bg-white">
                <div className="bg-primary flex h-1.5 w-1.5 rounded-full"></div>
            </div>
            {children}
        </Component>
    );
};

export default TimelineIcon;
