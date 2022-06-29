import { Logo } from './Logo';

export function Header() {
    return (
        <header className="sm:w-full sm:py-5 sm:flex sm:items-center justify-center bg-gray-700 border-b border-gray-600">
            <Logo />
        </header>
    );
}
