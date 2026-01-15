'use client';

import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

export default function DummyUrlHelper({ inputId }: { inputId: string }) {
    const generateDummy = () => {
        const input = document.getElementById(inputId) as HTMLInputElement;
        if (input) {
            const randomId = Math.floor(Math.random() * 1000);
            input.value = `https://i.pravatar.cc/600?u=${randomId}`;
        }
    };

    return (
        <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={generateDummy}
            className="mt-2"
        >
            <User className="mr-2 h-3 w-3" /> Generate Random Dummy Photo
        </Button>
    );
}
