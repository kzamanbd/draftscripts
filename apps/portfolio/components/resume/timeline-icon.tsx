import { classNames } from '@repo/shared/utils';

type TimelineProps = {
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
};

const Timeline = (props: TimelineProps) => {
    const { className = '', children, ...rest } = props;

    return (
        <div className={classNames(className)} {...rest}>
            <div className="timeline-icon bg-white">
                <div className="bg-primary flex h-1.5 w-1.5 rounded-full"></div>
            </div>
            {children}
        </div>
    );
};

export default Timeline;
