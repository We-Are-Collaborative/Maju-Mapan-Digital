'use client';

import { useState } from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Loader2, User, LogOut, Settings, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

export function LoginModal() {
    const router = useRouter();
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const userType = formData.get('userType') as string;

        try {
            const res = await signIn('credentials', {
                email,
                password,
                userType,
                redirect: false,
            });

            if (res?.error) {
                setError('Invalid credentials');
            } else {
                setIsOpen(false);
                router.refresh();

                // Redirect logic
                if (userType === 'candidate') {
                    router.push('/profile'); // Public profile for candidates
                } else {
                    router.push('/admin'); // Admin/Client go to Unified Dashboard
                }
            }
        } catch (err) {
            setError('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }

    if (session?.user) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-emerald-500/30 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/60 transition-all shadow-[0_0_15px_-5px_theme(colors.emerald.500)]">
                        <User className="mr-2 h-4 w-4" />
                        {session.user.name}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-slate-900 border-slate-800 text-slate-200">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-slate-800" />

                    {session.user.role === 'candidate' && (
                        <DropdownMenuItem asChild className="focus:bg-slate-800 focus:text-indigo-400 cursor-pointer">
                            <Link href="/profile">
                                <User className="mr-2 h-4 w-4" />
                                View Profile
                            </Link>
                        </DropdownMenuItem>
                    )}

                    <DropdownMenuItem asChild className="focus:bg-slate-800 focus:text-indigo-400 cursor-pointer">
                        <Link href="/admin">
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            Dashboard
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="focus:bg-slate-800 focus:text-indigo-400 cursor-pointer">
                        {/* Placeholder for security/settings if needed, links to admin settings */}
                        <Link href={session.user.role === 'candidate' ? "/admin/profile/security" : "/admin/settings"}>
                            <Settings className="mr-2 h-4 w-4" />
                            Security
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className="bg-slate-800" />
                    <DropdownMenuItem
                        className="text-rose-400 focus:text-rose-300 focus:bg-rose-500/10 cursor-pointer"
                        onClick={() => signOut({ callbackUrl: '/' })}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-emerald-500 hover:bg-emerald-400 text-black border-none font-bold transition-all shadow-[0_0_20px_-5px_theme(colors.emerald.500)]">
                    Login Access
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-slate-950 text-slate-50 border-slate-800">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center text-white">Welcome Back</DialogTitle>
                    <DialogDescription className="text-center text-slate-400">
                        Select your account type to continue
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="userType">I am a...</Label>
                        <Select name="userType" defaultValue="candidate">
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="candidate">Candidate</SelectItem>
                                <SelectItem value="client">Client</SelectItem>
                                <SelectItem value="employee">Employee</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required placeholder="name@example.com" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" type="password" required />
                    </div>

                    {error && (
                        <div className="text-sm text-rose-600 bg-rose-50 p-2 rounded text-center">
                            {error}
                        </div>
                    )}

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 font-bold" disabled={isLoading}>
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sign In'}
                    </Button>
                </form>

                <div className="mt-4 text-center text-sm text-slate-500">
                    Don't have an account? <Link href="/register" className="text-emerald-600 hover:underline" onClick={() => setIsOpen(false)}>Register here</Link>
                </div>
            </DialogContent>
        </Dialog>
    );
}
