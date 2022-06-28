import { Logo } from './Logo';

export function Header() {
    return (
        <header className="sm:w-full py-5 sm:flex items-center justify-center bg-gray-700 border-b border-gray-600">
            <Logo />
        </header>
    );
}
