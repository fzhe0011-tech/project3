'use client';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  ariaLabel?: string;
};

export default function Button({
  children,
  className = '',
  type = 'button',
  onClick,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={[
        'inline-flex items-center justify-center rounded-lg px-4 py-2',
        'bg-blue-600 text-white',
        'transition-all duration-200 ease-out',
        'hover:bg-blue-700 hover:shadow-md',
        'active:translate-y-[1px] active:scale-[0.98]',
        'focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-400/60',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      ].join(' ')}
    >
      {children}
    </button>
  );
}