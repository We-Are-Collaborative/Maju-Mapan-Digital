'use client';

import React, { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import { toast } from 'sonner';
import { SectionItem, updateHomeSectionOrder } from '@/app/actions/home-sections';

// Sortable Item Component
function SortableItem({ id, name }: { id: string; name: string }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 10 : 1,
        position: 'relative' as const,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm cursor-grab active:cursor-grabbing hover:border-lime-400 transition-colors ${isDragging ? 'shadow-lg border-lime-500 bg-lime-50' : ''}`}
        >
            <GripVertical className="text-slate-400" size={20} />
            <div className="flex-1">
                <p className="font-bold text-slate-800">{name}</p>
                <p className="text-xs text-slate-400 uppercase font-mono mt-0.5">Homepage Section</p>
            </div>
            <div className="px-3 py-1 bg-slate-100 rounded text-xs font-bold text-slate-500">
                Visible
            </div>
        </div>
    );
}

// Main List Component
export default function SectionReorderList({ initialSections }: { initialSections: SectionItem[] }) {
    const [sections, setSections] = useState(initialSections);
    const [saving, setSaving] = useState(false);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    async function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = sections.findIndex((i) => i.id === active.id);
            const newIndex = sections.findIndex((i) => i.id === over.id);

            const newOrder = arrayMove(sections, oldIndex, newIndex);

            setSections(newOrder);

            // SAVE TO SERVER
            saveOrder(newOrder);
        }
    }

    const saveOrder = async (orderedItems: SectionItem[]) => {
        setSaving(true);
        const payload = orderedItems.map((item, index) => ({
            id: item.id,
            position: index
        }));

        const res = await updateHomeSectionOrder(payload);
        setSaving(false);

        if (res.success) {
            toast.success("Page layout updated");
        } else {
            toast.error("Failed to save layout");
            // Revert? (Optional complexity)
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-slate-900">Page Layout</h3>
                {saving && <span className="text-xs font-bold text-lime-600 animate-pulse">Saving...</span>}
            </div>
            <p className="text-sm text-slate-500 mb-6">Drag and drop sections to rearrange the homepage</p>

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={sections.map(s => s.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <div className="space-y-3">
                        {sections.map((section) => (
                            <SortableItem key={section.id} id={section.id} name={section.name} />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
}
