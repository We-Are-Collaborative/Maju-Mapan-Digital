'use client';

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Pencil } from 'lucide-react';
import * as Icons from 'lucide-react';

interface NavItemProps {
    item: any;
    onEdit: () => void;
}

export function NavItem({ item, onEdit }: NavItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: item.id, data: { type: 'item', item } });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const DynamicIcon = ({ name }: { name: string }) => {
        const Icon = (Icons as any)[name];
        return Icon ? <Icon className="mr-3 h-4 w-4 text-slate-500" /> : <div className="mr-3 h-4 w-4 rounded-full bg-slate-200" />;
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`
                flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-white hover:border-indigo-100 group transition-all
                ${isDragging ? 'opacity-30' : 'hover:shadow-sm'}
            `}
        >
            <div className="flex items-center flex-1">
                <button {...attributes} {...listeners} className="mr-3 text-slate-300 hover:text-slate-600 cursor-grab active:cursor-grabbing">
                    <GripVertical size={16} />
                </button>

                <div className="flex items-center flex-1">
                    <DynamicIcon name={item.icon} />
                    <div>
                        <p className="text-sm font-medium text-slate-700">{item.name}</p>
                        <p className="text-[10px] text-slate-400 font-mono">{item.href}</p>
                    </div>
                </div>
            </div>

            <button
                onClick={onEdit}
                className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md opacity-0 group-hover:opacity-100 transition-all"
            >
                <Pencil size={14} />
            </button>
        </div>
    );
}
