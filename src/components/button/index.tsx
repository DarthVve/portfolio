import './button.scss';

interface ButtonProps {
    width: string;
    blue?: boolean;
    type?: 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    children: string | JSX.Element | JSX.Element[];
    onClick?: () => void;
}


const Button = ({ blue, width, className='', children, type, disabled, onClick }: ButtonProps) => {
    return (
        <button className={blue ? 'blue' : className}
            style={{ maxWidth: width }}
            type={type ? type : 'button'}
            disabled={disabled ? disabled : false}
            onClick={onClick ? onClick : undefined}
        >
            {children}
        </button>
    )
};

export default Button;