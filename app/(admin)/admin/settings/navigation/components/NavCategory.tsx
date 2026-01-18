'use client';

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { AdminNavCategoryWithItems } from '@/app/actions/navigation';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { NavItem } from './NavItem';
import { GripVertical, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavCategoryProps {
    category: AdminNavCategoryWithItems;
    onAddItem: () => void;
    onEditItem: (item: any) => void;
    onEditCategory: () => void;
}

export function NavCategory({ category, onAddItem, onEditItem, onEditCategory }: NavCategoryProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: category.id, data: { type: 'category', category } });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden ${isDragging ? 'opacity-50 ring-2 ring-indigo-500' : ''}`}>
            {/* Category Header */}
            <div className="bg-slate-50 border-b border-slate-100 p-3 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                    <button {...attributes} {...listeners} className="p-1 hover:bg-slate-200 rounded cursor-grab active:cursor-grabbing text-slate-400">
                        <GripVertical size={16} />
                    </button>
                    <h3 className="font-bold text-slate-700 uppercase tracking-wide text-xs">{category.title}</h3>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" className="h-7 w-7" onClick={onEditCategory}>
                        <Pencil size={14} />
                    </Button>
                    <Button size="sm" variant="outline" className="h-7 text-xs" onClick={onAddItem}>
                        + Add Item
                    </Button>
                </div>
            </div>

            {/* Items List */}
            <div className="p-2 space-y-2 min-h-[50px]">
                <SortableContext items={category.items.map((i: any) => i.id)} strategy={verticalListSortingStrategy}>
                    {category.items.map((item: any) => (
                        <NavItem key={item.id} item={item} onEdit={() => onEditItem(item)} />
                    ))}
                    {category.items.length === 0 && (
                        <div className="text-center py-4 text-xs text-slate-400 italic border-2 border-dashed border-slate-100 rounded-lg">
                            Drop items here or add new
                        </div>
                    )}
                </SortableContext>
            </div>
        </div>
    );
}
